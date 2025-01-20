function displayPoem(response) {
  console.log("Poem Generated!!");
  new Typewriter("#thepoem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatepoem(event) {
  event.preventDefault();

  let instructions = document.querySelector("#txtTopic");
  let apiKey = "b03c74bff4oa46bc3d3tee6230146d23";
  let prompt = `user instructions: Generate a poem in XiTsonga language about ${txtTopic.value}`;
  let context =
    "Make it sweet, kind and short. Make sure to follow user instructions. Just write the generate the poem alone. Please seperate the lines by a <br />";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poemGenerator");
poemForm.addEventListener("submit", generatepoem);
