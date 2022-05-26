console.log('Contentscript injected');
//console.log(classes);
let element = document.createElement('div');

const injectedText = document.createTextNode(`Extension-like element`);

//element.appendChild(injectedText);

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-child(2)',
);
console.log(parentElement);
element.appendChild(parentElement);
const valueEuro = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p:nth-child(2)',
);
element.append(valueEuro);
console.log(element);
