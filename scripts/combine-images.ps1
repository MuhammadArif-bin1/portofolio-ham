Add-Type -AssemblyName System.Drawing

$certPath  = "C:\Users\SANTOSO\Downloads\project\portofolio-ham-main\public\it bootcamp.PNG"
$photoPath = "C:\Users\SANTOSO\Downloads\project\portofolio-ham-main\public\juara1-bootcamp.jpg"
$outputPath = "C:\Users\SANTOSO\Downloads\project\portofolio-ham-main\public\bootcamp-showcase.png"

# Load source images
$cert  = [System.Drawing.Image]::FromFile($certPath)
$photo = [System.Drawing.Image]::FromFile($photoPath)

# ─── Layout constants ───
$outerPadding = 48
$gap          = 28
$cornerRadius = 16

# ─── Calculate sizes ───
$targetImgHeight = 520

# Certificate keeps full proportions
$certScaleW = [int]($cert.Width * ($targetImgHeight / $cert.Height))
$certScaleH = $targetImgHeight

# Photo: crop out the bottom chairs/legs to focus on the person, trophy, and certificate.
# The new clean photo is 588x1024.
$cropTop    = [int]($photo.Height * 0.02)   # minimal top crop to keep headroom
$cropBottom = [int]($photo.Height * 0.22)   # crop bottom (legs, chairs) to focus on certificate/trophy
$photoCropX = 0
$photoCropY = $cropTop
$photoCropW = $photo.Width
$photoCropH = $photo.Height - $cropTop - $cropBottom

# Scale cropped photo to match certificate height
$photoAspect = $photoCropW / $photoCropH
$photoScaleH = $targetImgHeight
$photoScaleW = [int]($targetImgHeight * $photoAspect)

# ─── Canvas size ───
$contentW = $certScaleW + $gap + $photoScaleW
$canvasW  = $contentW + $outerPadding * 2
$canvasH  = $targetImgHeight + $outerPadding * 2

# Adjust towards 16:9 ratio
$idealW = [int]($canvasH * (16.0 / 9.0))
if ($idealW -gt $canvasW) {
    $extraPad = [int](($idealW - $canvasW) / 2)
    $outerPaddingL = $outerPadding + $extraPad
    $canvasW = $idealW
} else {
    $outerPaddingL = $outerPadding
}

Write-Output "Canvas: ${canvasW}x${canvasH}"
Write-Output "Certificate: ${certScaleW}x${certScaleH}"
Write-Output "Photo crop region: x=$photoCropX y=$photoCropY w=$photoCropW h=$photoCropH"
Write-Output "Photo scaled: ${photoScaleW}x${photoScaleH}"

# ─── Create composite ───
$composite = New-Object System.Drawing.Bitmap($canvasW, $canvasH)
$composite.SetResolution(144, 144)
$g = [System.Drawing.Graphics]::FromImage($composite)
$g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# ─── White background ───
$g.Clear([System.Drawing.Color]::White)

# ─── Helper: Draw rounded image with soft shadow ───
function Draw-RoundedImage {
    param($graphics, $image, $srcRect, $destX, $destY, $destW, $destH, $radius)

    # Soft shadow layers
    for ($s = 10; $s -ge 1; $s--) {
        $alpha = [int](18 * ($s / 10.0))
        $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 60, 60, 80))
        $sPath = New-Object System.Drawing.Drawing2D.GraphicsPath
        $sx = $destX + 4 + (10 - $s)
        $sy = $destY + 6 + (10 - $s)
        $sw = $destW
        $sh = $destH
        $sr = $radius
        $sPath.AddArc($sx, $sy, $sr * 2, $sr * 2, 180, 90)
        $sPath.AddArc($sx + $sw - $sr * 2, $sy, $sr * 2, $sr * 2, 270, 90)
        $sPath.AddArc($sx + $sw - $sr * 2, $sy + $sh - $sr * 2, $sr * 2, $sr * 2, 0, 90)
        $sPath.AddArc($sx, $sy + $sh - $sr * 2, $sr * 2, $sr * 2, 90, 90)
        $sPath.CloseFigure()
        $graphics.FillPath($shadowBrush, $sPath)
        $shadowBrush.Dispose()
        $sPath.Dispose()
    }

    # Rounded clip path
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $r = $radius
    $path.AddArc($destX, $destY, $r * 2, $r * 2, 180, 90)
    $path.AddArc($destX + $destW - $r * 2, $destY, $r * 2, $r * 2, 270, 90)
    $path.AddArc($destX + $destW - $r * 2, $destY + $destH - $r * 2, $r * 2, $r * 2, 0, 90)
    $path.AddArc($destX, $destY + $destH - $r * 2, $r * 2, $r * 2, 90, 90)
    $path.CloseFigure()

    $oldClip = $graphics.Clip
    $graphics.SetClip($path, [System.Drawing.Drawing2D.CombineMode]::Replace)

    # Draw the image
    if ($srcRect -ne $null) {
        $destRect = New-Object System.Drawing.Rectangle($destX, $destY, $destW, $destH)
        $graphics.DrawImage($image, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    } else {
        $graphics.DrawImage($image, $destX, $destY, $destW, $destH)
    }

    $graphics.Clip = $oldClip

    # Subtle border
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(30, 0, 0, 0), 1.5)
    $graphics.DrawPath($borderPen, $path)
    $borderPen.Dispose()
    $path.Dispose()
}

# ─── Draw certificate (left) ───
$certX = $outerPaddingL
$certY = $outerPadding
Draw-RoundedImage -graphics $g -image $cert -srcRect $null `
    -destX $certX -destY $certY -destW $certScaleW -destH $certScaleH -radius $cornerRadius

# ─── Draw photo (right, cropped — no phone UI) ───
$photoX = $outerPaddingL + $certScaleW + $gap
$photoY = $outerPadding
$srcCropRect = New-Object System.Drawing.Rectangle([int]$photoCropX, [int]$photoCropY, [int]$photoCropW, [int]$photoCropH)
Draw-RoundedImage -graphics $g -image $photo -srcRect $srcCropRect `
    -destX $photoX -destY $photoY -destW $photoScaleW -destH $photoScaleH -radius $cornerRadius

# ─── Save ───
$composite.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$composite.Dispose()
$cert.Dispose()
$photo.Dispose()

Write-Output ""
Write-Output "Composite image saved to: $outputPath"
$finalImg = [System.Drawing.Image]::FromFile($outputPath)
Write-Output "Final size: $($finalImg.Width)x$($finalImg.Height)"
$ratio = [math]::Round($finalImg.Width / $finalImg.Height, 2)
Write-Output "Aspect ratio: ${ratio}:1"
$finalImg.Dispose()
