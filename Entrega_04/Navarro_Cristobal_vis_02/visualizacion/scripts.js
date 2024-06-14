// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const jugadores = document.querySelectorAll('ul li');
    
    jugadores.forEach(jugador => {
        const partidos = parseInt(jugador.getAttribute('data-partidos'), 10);
        const fontSize = calcularTamañoFuente(partidos);
        jugador.style.fontSize = `${fontSize}px`;
    });
});

function calcularTamañoFuente(partidos) {
    const minPartidos = 1;  // Número mínimo de partidos jugados
    const maxPartidos = 65; // Número máximo de partidos jugados
    const minFontSize = 12;  // Tamaño mínimo de fuente en px
    const maxFontSize = 55;  // Tamaño máximo de fuente en px

    // Asegurarse de que los partidos estén dentro del rango esperado
    const partidosClamped = Math.max(minPartidos, Math.min(maxPartidos, partidos));
    
    // Calcular el tamaño de fuente correspondiente
    const fontSize = minFontSize + (partidosClamped - minPartidos) * (maxFontSize - minFontSize) / (maxPartidos - minPartidos);
    return fontSize;
}