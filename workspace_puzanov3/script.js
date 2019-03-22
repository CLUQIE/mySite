var array = ["url('images/fon.jpg')","url('images/fon2.jpg')","url('images/fon3.jpg')"];
var array2 = ["url('images/fon3.jpg')","url('images/fon2.jpg')","url('images/fon.jpg')"];
var i=0;
var slides = document.getElementsByClassName("firstSlide");
function slider(n){
  if (n == 2){
    i++;
    slides[0].style.background = array[i];
    if (i >= 2){
      i=-1;
    }
  }

  if (n == 1){
    slides[0].style.background= array2[i];
    if (i >= 2){
      i=-1;
    }
    i++;
  }
}
