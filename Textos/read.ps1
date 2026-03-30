Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('c:\Users\Blas_\Documents\Campus Psicoanalisis\Textos\Programa de Psicoanalisis 2026.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()
$xml = $xml -replace '<w:p\b[^>]*>', "`n"
$xml = $xml -replace '<[^>]+>', ''
$xml | Out-File "c:\Users\Blas_\Documents\Campus Psicoanalisis\Textos\prog.txt" -Encoding utf8
