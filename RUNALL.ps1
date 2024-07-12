# Lista de directorios a recorrer
$directorios = @(
    "games\nodejs\chess_nextjs",
    "games\unity\conecta4",
    "kibogames",
    "games\nodejs\snakes-and-ladders-multiplayer"
    # Añade más rutas según sea necesario
)

# Recorre cada directorio y ejecuta el comando en una nueva ventana
foreach ($dir in $directorios) {
    Start-Process powershell -ArgumentList "-NoExit", "-Command pwd ;cd '$dir'; npm run dev"
}