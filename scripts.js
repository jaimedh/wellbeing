const container = document.querySelector(`.container`)
const text = document.querySelector(`#text`)
// const pointer = document.querySelector('.pointer-container')
// const breathlength= document.querySelector('name.breathfield');
// console.log(`${breathfield}`);


// var validNumber=0;

var validInput = false
while (validInput==false) {
  let totalTime = prompt('Enter a number for the length of your desired breath cylce')

  // If # is a valid number
  if (!isNaN(totalTime)) {
    var totalTimeSeconds = totalTime * 1000
    var breatheTime = (totalTimeSeconds / 5) * 2
    var holdTime = totalTimeSeconds / 5
    breatheAnimation()
    validInput = true
  }
//if number is not valid
  else if (isNaN(totalTime)) {
    let totalTime = 8
    var totalTimeSeconds = totalTime * 1000
    var breatheTime = (totalTimeSeconds / 5) * 2
    var holdTime = totalTimeSeconds / 5
    breatheAnimation()
    validInput = true
  }
}
//   else {
//
//  alert (`${totalTime} is not a number! Please enter a number.`)
// }


// var totalTime = false;
// while (validNumber>0) {
//
// if(validNumber.includes(totalTime))
// {
// breatheAnimation()
//
// }
// else {
// alert (`${totalTime} is not a number! Please enter a number.`)
// }
// }



// const wrapper = document.querySelector('wrapper'),
//   form= wrapper.querySelectorAll('.form')
//   submitInput =form[0].querySelector('input [type=submit]');


  // function getDataFrom(e){
  //   e.preventDefult();
  //
  //   var formData = totalTime
  // }

  // document.addEventListener('DOMContentLoaded'.function() ){
  //   submitInput.addEventListener('click', getDataForm, false);
  //
  // }. false);



// var totalTime=3


function breatheAnimation () {

  text.innerHTML = 'Inhale'
  container.className= 'container grow'


  setTimeout(() => {
    text.innerHTML = 'Pause'

      setTimeout(() => {
        text.innerHTML = 'Exhale'
        container.className= 'container shrink'
      }, holdTime)

  }, breatheTime)
}
setInterval(breatheAnimation, totalTimeSeconds)
