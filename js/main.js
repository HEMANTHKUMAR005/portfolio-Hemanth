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
var data = ' Java Developer, Full Stack Developer.';
var speed1 = 120;
function role() { 
  if (a < data.length) {
    document.getElementById("desg").innerHTML += data.charAt(a);
    a++;
    setTimeout(role, speed1);
  }
};


     var b = 0;
var data1 = "Hii, I'm";
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




