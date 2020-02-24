const container = document.querySelector(".container h1");
const aboutParagraph = document.querySelector(".about blockquote");

function replaceText() {
  container.innerText = container.innerText.replace(/The/g, "Replaced");
  container.innerText = container.innerText.replace(/the/g, "replaced");
  aboutParagraph.innerText = aboutParagraph.innerText.replace(
    /the /g,
    "replaced "
  );
  aboutParagraph.innerText = aboutParagraph.innerText.replace(
    /The /g,
    "Replaced "
  );
}
setTimeout(replaceText, 4000);
