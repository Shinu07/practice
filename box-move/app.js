// const container = document.querySelector(".container");

// container.addEventListener("mousemove", (d) => {
//   let xVal = gsap.utils.mapRange(
//     0,
//     window.innerWidth,
//     100 + container.getBoundingClientRect().width / 2,
//     window.innerWidth - (100 + container.getBoundingClientRect().width / 2),
//     d.clientX
//   );
//   gsap.to(".container", {
//     left: xVal,
//     ease: Power3,
//   });
// });

const container = document.querySelector(".container");
const windowWidth = window.innerWidth;

container.addEventListener("mousemove", (event) => {
const containerRect = container.getBoundingClientRect();
  
  let xVal = mapRange(
    0,
    windowWidth,
    20 + containerRect.width / 2,
    windowWidth - (20 + containerRect.width / 2)  ,
    event.clientX
  );

  container.style.transition = '0.4s ease' ;
  container.style.left = xVal + 'px';
  
function mapRange(inputStart, inputEnd, outputStart, outputEnd, inputValue) {
  const inputRange = inputEnd - inputStart;
  const outputRange = outputEnd - outputStart;
  const normalizedValue = (inputValue - inputStart) / inputRange;
  const mappedValue = normalizedValue * outputRange + outputStart;
  return mappedValue;
}
});


