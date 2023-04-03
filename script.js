const rangeSlider1 = document.querySelector(".range-1");
// const rangeSlider2 = document.querySelector(".range-2");

const pageview1 = document.querySelector(".page-view1");
// const pageview2 = document.querySelector(".page-view2");

const priceAmount1 = document.querySelector(".price-1");
// const priceAmount2 = document.querySelector(".price-2");

const time = document.querySelector('.time')
const toggleBtn = document.querySelector('.toggle')


// toggle btn
toggleBtn.addEventListener('click', () => {

  toggleBtn.classList.toggle('active')
  let value1 = rangeSlider1.value

  if (toggleBtn.classList.contains('active')) {
    priceAmount1.innerHTML = ((((value1 * 0.16) * 12) / 100) * 75).toFixed(2)
    time.innerHTML = '/year';

  } else {
    priceAmount1.innerHTML = (value1 * 0.16).toFixed(2)
    time.innerHTML = '/month';
  }

})


//calculations for  range-slider-1
rangeSlider1.addEventListener('input', () => {
  let value1 = rangeSlider1.value
  priceAmount1.innerHTML = value1
  pageview1.innerHTML = rangeSlider1.value;

  if (toggleBtn.classList.contains('active')) {
    priceAmount1.innerHTML = ((((value1 * 0.16) * 12) / 100) * 75).toFixed(2)
  } else {
    priceAmount1.innerHTML = (value1 * 0.16).toFixed(2)
  }

})



// second range code dont work
// calculations for  range-slider-2
// rangeSlider2.addEventListener('input', () => {
//   let value2 = rangeSlider2.value
//   priceAmount2.innerHTML = value2
//   pageview2.innerHTML = rangeSlider2.value;

//   if (toggleBtn.classList.contains('active')) {
//     priceAmount2.innerHTML = ((((value2 * 0.16) * 12) / 100) * 75).toFixed(2)
//   } else {
//     priceAmount2.innerHTML = (value2 * 0.16).toFixed(2)
//   }

// })