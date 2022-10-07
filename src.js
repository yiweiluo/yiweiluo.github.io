function myFunction() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("week");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "none") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function myFunctionFood() {
  var x = document.getElementById("myDIVfood");
  var y = document.getElementById("week");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "none") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function dispDay(date) {
  var x = document.getElementById(date);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function disp(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function hideElem() {
  document.getElementById("myDIV").style.visibility = "hidden";
}
