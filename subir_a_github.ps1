
# Script para subir el aula virtual a GitHub
Write-Host "🚀 Iniciando proceso de subida..." -ForegroundColor Cyan

# 1. Configurar el nombre del repositorio
$repoName = "campus-psicoanalisis-2026"

# 2. Inicializar Git si no lo está
if (!(Test-Path .git)) {
    git init
    Write-Host "✅ Repositorio Git inicializado."
}

# 3. Añadir archivos y primer commit
git add .
git commit -m "feat: Diseño premium del aula virtual Psicoanálisis UFLO"

# 4. Instrucción para crear el repo
Write-Host "`n⚠️ IMPORTANTE:" -ForegroundColor Yellow
Write-Host "1. Ve a https://github.com/new y crea un repositorio llamado: $repoName"
Write-Host "2. Una vez creado, copia la URL que termina en .git y pégala aquí abajo."

$remoteUrl = Read-Host "Pega la URL del repositorio remoto"

if ($remoteUrl) {
    git remote add origin $remoteUrl
    git branch -M main
    git push -u origin main
    Write-Host "`n🎉 ¡Todo listo! Ahora ve a Settings > Pages en tu repositorio y selecciona la rama main para activar la web." -ForegroundColor Green
}
