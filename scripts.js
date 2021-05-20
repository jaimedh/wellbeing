const container = document.querySelector(`.container`)
const text = document.querySelector(`#text`)
// const pointer = document.querySelector('.pointer-container')
// const breathlength= document.querySelector('name.breathfield');
// console.log(`${breathfield}`);

let totalTime = prompt('Enter a number for the length of your desired breath cylce')
//
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
const totalTimeSeconds = totalTime * 1000
const breatheTime = (totalTimeSeconds / 5) * 2
const holdTime = totalTimeSeconds / 5

breatheAnimation()

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
