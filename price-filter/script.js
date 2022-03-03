var lowerSlider = document.querySelector('#lower'); // min price toggle
var upperSlider = document.querySelector('#upper'); // max price toggle
var inputLower = document.querySelector('#one');
var inputUpper = document.querySelector('#two');
inputLower.value = lowerSlider.value; //set From value
inputUpper.value = upperSlider.value; //set To value
var lowerVal = parseInt(lowerSlider.value); // get From value INT
var upperVal = parseInt(upperSlider.value); // get To value INT
upperSlider.oninput = function () {
  console.log('change Lower');
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);


  inputUpper.value = upperVal;
  if (upperVal < lowerVal + 1) {
    lowerSlider.value = upperVal - 1;
    inputLower.value = upperVal;
    if (lowerVal === lowerSlider.min) {
      upperSlider.value = 1;
    }
  }
  inputUpper.value=this.value;
  console.group('inputs');
  console.log('Slider lower',inputLower.value);
  console.log('range lower',inputUpper.value);
  console.log('Slier upper',lowerVal);
  console.log('range upper',upperVal);
  console.groupEnd();
};
lowerSlider.oninput = function () {
  console.log('change Upper');
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  inputLower.value = lowerVal;
  if (lowerVal > upperVal - 1) {
    upperSlider.value = lowerVal + 1;
    inputUpper.value = lowerVal;
    if (upperVal === upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 1;
    }
  }
  inputLower.value=this.value;
  console.group('inputs');
  console.log('Slider from',inputLower.value);
  console.log('range from',inputUpper.value);
  console.log('Slier to',lowerVal);
  console.log('range to',upperVal);
  console.groupEnd();
};


//todo keyboard input event