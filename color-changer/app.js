const centerContainer = document.querySelector('#center-container');

//to know when mouse is inside the container
centerContainer.addEventListener('mousemove', function(d){
 const centerContainerLocation = centerContainer.getBoundingClientRect();

 //The code calculates the value of insideCenterContainerValue by subtracting the left position of the centerContainer from the clientX property of the event object (d)
 const insideCenterContainerValue = d.clientX - centerContainerLocation.left; 


 if(insideCenterContainerValue<centerContainerLocation.width/2){
 let redColor = gsap.utils.mapRange(0,centerContainerLocation.width/2,255,0,insideCenterContainerValue);
 gsap.to(centerContainer,{
    backgroundColor: `rgb(${redColor},0,0)`,
    ease: Power4,
 });
 }else{
    let blueColor = gsap.utils.mapRange(centerContainerLocation.width/2,centerContainerLocation.width,0,255,insideCenterContainerValue);
    gsap.to(centerContainer,{
       backgroundColor: `rgb(0,0,${blueColor})`,
       ease: Power4,
    });
 }
})

centerContainer.addEventListener('mouseleave', function() {
    gsap.to(centerContainer,{
    backgroundColor: "white",
});
});
