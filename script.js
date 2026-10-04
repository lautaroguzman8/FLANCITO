// Cada escena: texto + opciones [{ label, next }]. Sin opciones = final.
const story = {
  inicio: {
    text: "Caminas por un bosque oscuro cuando la lluvia te obliga a buscar refugio. Frente a ti hay una cueva de la que sale un resplandor extraño. Detrás, se oyen aullidos que se acercan.",
    choices: [
      { label: "A: Entrar a la cueva", next: "cueva" },
      { label: "B: Salir corriendo", next: "bosque" },
    ],
  },
  cueva: {
    text: "Dentro, el resplandor viene de un cofre abierto lleno de monedas. Al fondo, un túnel desciende y se escucha una respiración profunda.",
    choices: [
      { label: "A: Llenar tus bolsillos con monedas", next: "tesoro" },
      { label: "B: Seguir el túnel", next: "tunel" },
    ],
  },
  bosque: {
    text: "Corres entre los árboles hasta llegar a un río crecido. Un puente viejo cruza al otro lado y, río abajo, ves una pequeña balsa atada a la orilla.",
    choices: [
      { label: "A: Cruzar el puente", next: "puente" },
      { label: "B: Subir a la balsa", next: "balsa" },
    ],
  },
  tesoro: {
    text: "Llenas tus bolsillos y regresas a la entrada. Los aullidos eran solo del viento: la cueva era el escondite de un viejo pirata. Sales del bosque convertido en millonario.",
    ending: "🏆 Final: El afortunado",
    epilogue:
      "Una noche de tormenta, un viajero cansado se perdió en un bosque oscuro. La lluvia lo obligó a buscar refugio y, tras oír aullidos a su espalda, se decidió a entrar en una cueva de la que salía un resplandor extraño. Dentro encontró un cofre abierto, repleto de monedas de oro, y sin pensarlo llenó sus bolsillos. Al volver a la entrada comprobó que los aullidos eran solo el viento: la cueva había sido el escondite de un viejo pirata. Con aquel tesoro dejó atrás el bosque y compró una casa junto al lago. Al principio gastó sin medida, invitando a todo el pueblo a cenar. Pronto entendió que su verdadera riqueza era la gente que se sentaba a su mesa. Con lo que quedó reparó la escuela y levantó una biblioteca. Y cada vez que llueve, enciende una vela en la ventana, por si otro viajero perdido necesita refugio.",
  },
  tunel: {
    text: "Al final del túnel despierta un dragón dormido. Abre un ojo, te mira... y en lugar de atacar, te pide ayuda: tiene una espina clavada en la pata.",
    choices: [
      { label: "A: Ayudarlo", next: "dragonAmigo" },
      { label: "B: Huir en silencio", next: "dragonHuida" },
    ],
  },
  dragonAmigo: {
    text: "Le quitas la espina y el dragón, agradecido, te lleva volando sobre las montañas hasta tu casa.",
    ending: "🐉 Final: El amigo del dragón",
    epilogue:
      "Una noche de lluvia, un viajero buscó refugio en una cueva, huyendo de unos aullidos en el bosque. Dentro halló un cofre de monedas, pero lo que lo atrajo fue un túnel profundo del que salía una respiración pesada. Al final despertó a un dragón dormido, que en lugar de atacar le pidió ayuda: tenía una espina clavada en la pata. El viajero, con el corazón latiendo fuerte, se acercó y se la quitó con cuidado. El dragón, llamado Ember, agradecido, lo llevó volando sobre las montañas hasta su casa. Desde entonces aterrizaba cada tarde junto a su ventana, y los niños del pueblo le traían manzanas asadas. En una gran tormenta, Ember cubrió las casas con sus alas y salvó al pueblo entero. El viajero fue nombrado guardián de la amistad entre humanos y dragones, y se dice que quien ayuda sin miedo gana un amigo para siempre.",
  },
  dragonHuida: {
    text: "Tropiezas con una piedra y el estruendo despierta al dragón del todo. Escapas, pero ahora es el rumor de todo el pueblo que huiste de un dragón.",
    ending: "😅 Final: El cobarde famoso",
    epilogue:
      "Una noche de lluvia, un viajero se refugió en una cueva para escapar de unos aullidos que lo seguían por el bosque. Encontró un cofre con monedas, pero siguió un túnel misterioso donde despertó a un dragón. La bestia, en lugar de atacar, le pidió ayuda con una espina clavada. Pero el miedo pudo más y el viajero decidió huir en silencio. Tropezó con una piedra, el estruendo despertó del todo al dragón y salió corriendo sin mirar atrás. Llegó al pueblo sin aliento y, para su desgracia, alguien lo había visto. Al día siguiente todos sabían que había escapado de un dragón. Al principio le dolió, pero con el tiempo aprendió a reírse de sí mismo. Terminó contando la historia con más fuego y una persecución épica, y los viajeros llegaban solo para conocer al famoso valiente.",
  },
  puente: {
    text: "El puente cruje y cede a mitad de camino. Caes al agua, pero la corriente te arrastra hasta una aldea de pescadores que te recibe con sopa caliente.",
    ending: "🍲 Final: La sopa salvadora",
    epilogue:
      "Una noche de lluvia, un viajero huyó de unos aullidos y corrió por el bosque hasta llegar a un río crecido. Ante él había un puente viejo y, río abajo, una pequeña balsa. Eligió el puente, que crujía con cada paso. A mitad del cruce, la madera cedió y cayó al agua helada. La corriente lo arrastró durante un buen rato, hasta que logró agarrarse a la orilla de una aldea de pescadores. Una anciana llamada Marta lo envolvió en mantas y le sirvió tres platos de sopa caliente. Los pescadores le contaron que el puente llevaba años a punto de caer. Se quedó unos días ayudando con las redes, y esos días se volvieron semanas. Cuando por fin se fue, llevaba una receta secreta en el bolsillo y la promesa de volver cada invierno.",
  },
  balsa: {
    text: "La balsa se desliza río abajo durante horas. Al amanecer llegas al mar y un barco te recoge: buscaban un navegante con tu suerte.",
    ending: "⛵ Final: El navegante",
    epilogue:
      "Una noche de lluvia, un viajero escapó de unos aullidos y corrió por el bosque hasta un río crecido. Dudó entre el puente viejo y una pequeña balsa atada a la orilla, y eligió la balsa. Desató la cuerda y se dejó llevar por la corriente durante horas. Al amanecer, la balsa llegó al mar, y un barco lo recogió: buscaban un navegante con su suerte. El capitán, de barba blanca, le entregó un mapa gastado y le dijo que solo quien se deja llevar por el río sabe hallar el camino en el mar. Aprendió a leer las estrellas y a no marearse con las olas. Visitó islas de arena rosada y ciudades donde la gente cantaba al despertar. En una tormenta, su decisión de cambiar el rumbo salvó a toda la tripulación. Desde entonces lo llamaron Navegante, y el mapa quedó en sus manos, listo para guiar al próximo.",
  },
};

const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const restartBtn = document.getElementById("restart");
const progressEl = document.getElementById("progress");
let steps = 0;

function show(id) {
  const scene = story[id];
  steps++;
  textEl.textContent = scene.text;
  // reinicia la animación del texto
  textEl.style.animation = "none";
  void textEl.offsetWidth;
  textEl.style.animation = "";
  choicesEl.textContent = "";

  if (scene.ending) {
    const end = document.createElement("p");
    end.className = "ending";
    end.textContent = scene.ending;
    choicesEl.append(end);
    const epi = document.createElement("p");
    epi.className = "epilogue";
    epi.textContent = scene.epilogue;
    choicesEl.append(epi);
    progressEl.textContent = `Terminaste en ${steps} escenas.`;
    restartBtn.hidden = false;
    return;
  }

  progressEl.textContent = `Escena ${steps}`;
  restartBtn.hidden = true;
  scene.choices.forEach((c) => {
    const btn = document.createElement("button");
    btn.textContent = c.label;
    btn.onclick = () => show(c.next);
    choicesEl.append(btn);
  });
}

restartBtn.onclick = () => {
  steps = 0;
  show("inicio");
};

show("inicio");
