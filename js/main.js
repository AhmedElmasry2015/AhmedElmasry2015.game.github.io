
 //obstacle1=document.getElementById("obstacle1");
// initilze the objects
var myclass,all,obstacle1,arr;
myclass=document.getElementById("myclass");
//all=document.getElementsByClassName("obstacle");
//arr=generateRandomDivAndMove(all);

// generate random position of all Enemies

$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    
  

});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 6000,   function(){
      
      animateDiv(myclass);        
    });
    
};

// moving My div 
$(document).ready(function() {
  var hero = $("#myclass");
  var mainCollision;
  var counter=0;
  var elem = $("#ball");
  var enemyball =$(".enemyball");
  var speed = 1;
  var shot;
  var direction = {
    left: false,
    up: false,
    right: false,
    down: false

  };

  $(document).on('keydown', function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) direction.left = true;
    if (kc === 38) direction.up = true;
    if (kc === 39) direction.right = true;
    if (kc === 40) direction.down = true;
    if (kc === 32) shot=true;
  });

  $(document).on('keyup', function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) direction.left = false;
    if (kc === 38) direction.up = false;
    if (kc === 39) direction.right = false;
    if (kc === 40) direction.down = false;
    if (kc === 32) shot=false;
  });

  function move() {
    if (direction.left){
        var leftCollison;
     hero.css("left", (hero.position().left - speed) + "px");
    
    }
    if (direction.up) {
            var upCollision;
    hero.css("top", (hero.position().top - speed) + "px");
    
    }
    if (direction.right) {
    hero.css("left", (hero.position().left + speed) + "px"); 
    }
    if (direction.down) {
    hero.css("top", (hero.position().top + speed) + "px");
    }
       for(var i=1;i<8;i++){
        mainCollision=(collision($('#'+'obstacle'+i),$('#myclass')));
        if(mainCollision){alert("Game Over");}
       }
       if(shot){
        var x;
        var motion;
        elem.show();
        elem.css("top", (elem.position().top - 10) + "px");
       for(var i=1;i<8;i++){
       x = collision($('#ball'),$('#'+'obstacle'+i ));
        if(x == true){ 
    elem.css("top", 0 + "px"); 
    elem.css("left", 0 + "px"); 
    $('#'+'obstacle'+i ).hide();
    ++counter;
    document.getElementById("score").innerHTML=counter;
        }
       }     
    }
    else{
    shot=false;
    elem.css("top", 0 + "px"); 
    elem.css("left", 0 + "px"); 
    elem.hide();
    }
    if(counter ==7){
        alert("You Won");
    }
}

setInterval(move, 1);

});

function collision($div1, $div2) {
    var flag=false;
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)) {
  //$div2.hide();
  flag=true;}

  return flag; 
}









/*
function generateRandomDivAndMove(el){
    'use strict';
    var divLength=el.length;
    var i;
    for(i=0;i<divLength;i++){
        var height=Math.floor( Math.random() * screen.height );
        var width=Math.floor( Math.random() * screen.width );
        while(height > 629){
         height=Math.floor( Math.random() * screen.height );
        }
        el[i].style.top = height + 'px'; 
        el[i].style.left = width + 'px'; 
    //var pos = 0;
    
        }
    

}*/







/*
function myMove() {  
    var pos = 0;
    var id = setInterval(frame, 20);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
/*
function generateRandomBalls(balls){
    'use strict';
    var balllength=balls.length;
    var i;
    for(i=0;i<balllength;i++){
        
       var posX=Math.floor( Math.random() * screen.height );
       var posY=Math.floor( Math.random() * screen.width );
    balls[i].css("top", (elem.position().top - posX) + "px");
    balls[i].css("left", (elem.position().top + posY) + "px");
    }
    return balls;
   }
*/






/**************************************************************************************88** */

/*
function hitBall(){
    
//var pos = 0;
 /*   $(document).on('keydown', function(e) {
        var kc = e.keyCode;
        e.preventDefault();
        if (kc === 32) shot=true;
    
    });   
  $(document).on('keyup', function(e) {
    var kc = e.keyCode;
    e.preventDefault();
    if (kc === 32) shot=false;

});*/
   /* var id = setInterval(frame, 20);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
//if(shot){
  //  var x;
    elem.show();
    var id = setInterval(motion,200);
    function motion(){elem.css("top", (elem.position().top - 10) + "px");
//}
   for(var i=1;i<8;i++){
        x = collision($('#ball'),$('#'+'obstacle'+i ));
            if(x == true){ 
        elem.css("top", 0 + "px"); 
        elem.css("left", 0 + "px"); 
        clearInterval(id);
            }       
   }     
}
/*else{
shot=false;
elem.css("top", 0 + "px"); 
elem.css("left", 0 + "px"); 
elem.hide();
//clearInterval(id);
}
}*/
//setInterval(hitBall,100);


/*
function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 20);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }*/



// function generate random balls

 
 
   
// here happens collision












/*
window.setInterval(function() {
 
  (collision($('#myclass'),$('#obstacle1')));
  
}, 200);*/


   
           // elem.style.opacity=1;
           //elem.animate({top: '-250px'});



//  elem.hide();
           // (collision($('#ball'),$('#obstacle1')));
           //}
        //   (collision($('#ball'),$("#obstacle1")));
          /*  document.write(elem.position().top);
            //var pos =  elem.style.top;
            var pos=400;
            var id = setInterval(frame, 5);
            function frame() {
              if (pos == 0) {
                clearInterval(id);
              } else {
                pos--; 
                elem.style.top = pos - 'px';   
               // elem.css("top", (elem.position().top - 400) + "px");
              }
            }*/






/*
    var redGamePiece, blueGamePiece, yellowGamePiece;

    function startGame() {
        redGamePiece = new component(75, 75, "red", 10, 10);
        yellowGamePiece = new component(75, 75, "yellow", 50, 60);    
        blueGamePiece = new component(75, 75, "blue", 10, 110);
        myGameArea.start();
    }
    
    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 480;
            this.canvas.height = 270;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;    
        this.update = function(){
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    
    function updateGameArea() {
        myGameArea.clear();
        myGamePiece.x += 1;
        redGamePiece.update();
        yellowGamePiece.update();        
        blueGamePiece.update();
    }
*/



















