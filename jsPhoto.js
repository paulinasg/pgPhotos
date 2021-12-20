var slideIndex = 0; //number of slide
carousel(); //function name

function carousel() {
  var i; //creating an indexing variable
  var x = document.getElementsByClassName("mySlides"); //creates array of the photos linked in the html file
  for (i = 0; i < x.length; i++) { //for loop iterating through the photos
    x[i].style.display = "none"; //hides all other photos in the array
  }
  slideIndex++; //onto the next photo in the array
  if (slideIndex > x.length) {slideIndex = 1} //loops index back to the start if index exceeds length of array
  x[slideIndex-1].style.display = "block"; //displays chosen photo
  setTimeout(carousel, 2000); //reloops every 2 seconds 
}