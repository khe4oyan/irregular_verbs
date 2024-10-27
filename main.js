import irregularVerbs from "./data.js";

for (let i = 0; i < irregularVerbs.length; ++i) {
  const section = irregularVerbs[i];
  createSection(section);
}


function createSection(section) {
  const {title, list} = section;
  const table = document.querySelector(".table");

  const h4 = document.createElement('h4');
  h4.classList.add('title');
  h4.innerText = title;
  table.appendChild(h4);

  for (let i = 0; i < list.length; ++i) {
    table.appendChild(createLine(list[i]));
  }
}

function createLine(verb) {
  // <div class="line">
  //   <div class="cell">Infinitive</div>
  //   <div class="cell">Past Simple</div>
  //   <div class="cell">Past Participle</div>
  //   <div class="cell">Թարգմանություն</div>
  // </div>

  const {
    base,
    pastSimple,
    pastParticiple,
    // translation_ru,
    translation_hy,
  } = verb;

  const line = document.createElement("div");
  line.classList.add("line");

  line.innerHTML = `
    <div class="cell">${base}</div>
    <div class="cell">${pastSimple}</div>
    <div class="cell">${pastParticiple}</div>
    <div class="cell">${translation_hy}</div>
  `;

  return line;
}
