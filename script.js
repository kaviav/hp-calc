// first method

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C: " + c);

// second method

document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = parseFloat(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2));
  document.getElementById("cLabel").innerHTML = "Side C: " + c;
};
