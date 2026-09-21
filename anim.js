// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 15 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 18 },
  { text: "Y el amarillo del sol, iluminaba la esquina", time: 27 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 32 },
  { text: "Ella sabía que él sabía", time: 33 },
  { text: "Que algún día pasaría", time: 41 },
  { text: "Que vendría a buscarla", time: 47 },
  { text: "Con sus flores amarillas", time: 54 },
  { text: "No te apures, no detengas", time: 59 },
  { text: "El instante del encuentro", time: 67 },
  { text: "Está dicho que es un hecho", time: 72 },
  { text: "No la pierdas, no hay derecho", time: 78 },
  { text: "No te olvides que la vida", time: 83 },
  { text: "Casi nunca está dormida", time: 91 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 97 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 104 },
  { text: "Él se acercó de repente la miró tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 144 },
  { text: "Ella sabía que él sabía", time: 148 },
  { text: "Que algún día pasaría", time: 153 },
  { text: "Que vendría a buscarla", time: 158 },
  { text: "Con sus flores amarillas", time: 164 },
  { text: "No te apures, no detengas", time: 169 },
  { text: "El instante del encuentro", time: 176 },
  { text: "Está dicho que es un hecho", time: 183 },
  { text: "No la pierdas, no hay derecho", time: 188 },
  { text: "No te olvides que la vida", time: 140 },
  { text: "Casi nunca está dormida", time: 144 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
