function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku-result", {
    strings: "preparing a haiku, just for you",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);
