const body = document.querySelector("body");

const redp = document.createElement("p");
redp.style.color = "red";
redp.textContent = "Hey I'm red!";

body.appendChild(redp);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "Hey I'm a blue h3!";

body.appendChild(h3);

const div = document.createElement("div");
div.style.border = "solid";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "HEY ME TOO";

div.appendChild(h1);
div.appendChild(p);

body.appendChild(div);