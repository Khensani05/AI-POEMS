function generatepoem(event) {
  event.preventDefault();

  new Typewriter("#thepoem", {
    strings:
      "Dyambu arixa rithlela ripela Tinguva ticica, ku hisa kuthlela ku titimela",
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

let poemForm = document.querySelector("#poemGenerator");
poemForm.addEventListener("submit", generatepoem);
