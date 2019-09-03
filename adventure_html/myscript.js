// document.addEventListener("DOMContentLoaded", function(event) {    console.log("DOM fully loaded and parsed");  });

// document.getElementById("button").onclick = function() {
// document.getElementsByClassName("nameHolder").innerHTML ="So your name is" + hName;
// }
// function submit() {
// }
// window.load = clearLog;
// function clearLog() {
//   document.getElementById("heroName").value ="";
// }

var result = document.getElementById("result");
var sDiv = document.getElementsByClassName("second_div");
var hName = document.getElementById("heroName").value;

document.getElementById("Btn").addEventListener("click", clickButton);


function clickButton() {
  var hName = document.getElementById("heroName").value;
  result.innerHTML ="Your name is " + hName + ".";
  if (hName.length > 0) {
    document.getElementById("second_div").style.visibility='visible';
  } else {
    document.getElementById("second_div").style.visibility='hidden';
  };
  console.log(hName);
}
