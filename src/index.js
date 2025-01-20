function displayPoem(response) {
  let poemBox = document.querySelector("#thepoem");
  poemBox.innerHTML = ""; // Clear the "Generating Poem..." message

  new Typewriter("#thepoem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatepoem(event) {
  event.preventDefault();

  let topicElement = document.querySelector("#txtTopic");
  let instructionsElement = document.querySelector("#txtInstructions");
  let poemBox = document.querySelector("#thepoem");

  // Show "Generating Poem..." with blinking effect
  poemBox.innerHTML =
    "<p class='blinking'>Generating Poem... Please wait ✨</p>";

  let apiKey = "b03c74bff4oa46bc3d3tee6230146d23";
  let prompt = `user instructions: Generate a poem in XiTsonga language about ${topicElement.value}`;
  let context = `Make sure the poem is following the ${instructionsElement.value}. Make sure to follow user instructions. Just write the generate the poem alone. Please separate the lines by a <br />`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poemGenerator");
poemForm.addEventListener("submit", generatepoem);
