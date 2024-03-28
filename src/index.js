// display generated haiku in browser
function displayHaiku(response) {
  console.log("haiku generated");

  new Typewriter("#haiku-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#topic-input");
  // build API url
  let apiKey = "dbaa90bd0tdaf4424ef37230ff2fcfo8";
  let context =
    "You are an AI assistant named HaikuBot that knows everything about haikus. Your mission is to write the best haikus following the user instructions. Remember to be polite.";
  let prompt = `The user instructions are: Generate a haiku about ${topicInput.value}. Format in basic HTML and separate each line with a <br> tag. Do not add a title, and do not respond with anything more text besides the poem lines. At the end, add another <br> and then please sign your name. Wrap your name in a <span> element with the class "cursive-small".`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuResult = document.querySelector("#haiku-result");
  haikuResult.classList.remove("hidden");
  haikuResult.innerHTML = `<div class="blink">generating a haiku about ${topicInput.value}...</div>`;

  let smallText = document.querySelector("small");
  smallText.classList.add("hidden");

  console.log("preparing haiku");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  // make call to API
  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);
