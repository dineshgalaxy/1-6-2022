let cel = document.getElementById("celId");


function celFun(button) {
  let celValue = cel.value;
  let x = button.id;

  if ((celValue !== "") && (x=='celToFah')) {
     fah = celValue * 1.8 + 32;
    alert("celsius to fahrenheit" + " " + fah);
  }else if (celValue !== "" && x == "fahToCel") {
    cels = (celValue - 32) / 1.8;
    alert("fahrenheit to celsius" + " " + cels);
  } else {
    alert("please enter value");
  }
}