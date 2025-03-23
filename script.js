let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

function showValWeight(newVal) {
  weightSlider.value=newVal;
};

function showValHeight(newVal) {
  heightSlider.value=newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = (document.bmiForm.realheight.value)/100;
  let realbmi = (weight)/Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = "";
  realbmiOutput.innerHTML = " " + roundedBmi;
  if (roundedBmi > 26) {
    messageOutput.innerHTML = "<br> Overweight - Start workout";
  }

  else if (roundedBmi>=19 && roundedBmi<=25){ 
    messageOutput.innerHTML="<br> Normal Weight - Maintain normal diet"
  }
  else messageOutput.innerHTML = "<br> Underweight - Start calorie surplus and consult a dietician"
  

}