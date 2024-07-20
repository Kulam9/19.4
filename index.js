import "./index.css";
import JSImage from "./assets/JS.png";

console.log('Hello World!');

const body = document.querySelector('body');
const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript";
mainTitle.className = 'title';
const JSImageHTML = document.createElement("img");
JSImageHTML.src = JSImage;
JSImageHTML.className = 'img';
body.append(mainTitle, JSImageHTML);