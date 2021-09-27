var i = 0;
var txt = 'Hemanth Kumar K';
var speed = 100;
function typeWriter() { 
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if(i == txt.length){
    $('#desg').show();
   setTimeout(function(){ role();}, 300);
   
  }
};


     var a = 0;
var data = ' Java Developer, Full Stack Web Developer.';
var speed1 = 120;
function role() { 
  if (a < data.length) {
    document.getElementById("desg").innerHTML += data.charAt(a);
    a++;
    setTimeout(role, speed1);
  }

  if(a == data.length){ 
    $('#img').show();
    $('#connect').show();
   $('#prfbtn').show();
  }
};


     var b = 0;
var data1 = "Hey, I'm";
var speed2 = 100;
function welcome() { 
  if (b < data1.length) {
     document.getElementById("welcome").innerHTML += data1.charAt(b);
    b++;
    setTimeout(welcome, speed2);
  }
  if(b == data1.length){
   setTimeout(function(){ typeWriter();}, 300);
 

  }
};

welcome();



function myFunction(x) {
  if (x.matches) { // If media query matches
   $('#sizefix .col-md-2').addClass('col-3');
   // $("#navbar").click();
  } else {
   $('#sizefix .col-md-2').addClass('col-md-2');
  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach

$(".nav-link").click(function(){
  $("#navbarSupportedContent").removeClass('show');
})


