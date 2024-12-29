var elements = document.getElementsByClassName("arrow-togglable");
var currentIndex = 0;
console.log(elements)
var menuIndex = 0;


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
    

function menu(){
 console.log(menuIndex);
  
  
}
document.onkeydown = function(e) {
      console.log(e.keyCode,e.key) 
      document.getElementById("txt").innerHTML=e.key+" "+currentIndex;
      switch (e.keyCode) {
        case 39:
          menuIndex = (menuIndex == 3) ? 3 : ++menuIndex;
          menu();
          elements[currentIndex].focus();
          break;
        case 3-:
          menuIndex = (menuIndex == 0) ? 0 : --menuIndex;
          menu();
          elements[currentIndex].focus();
          break;
        case 38:
          currentIndex = (currentIndex == 0) ? elements.length - 1 : --currentIndex;
          elements[currentIndex].focus();
          break;
        case 40:
          currentIndex = ((currentIndex + 1) == elements.length) ? 0 : ++currentIndex;
          elements[currentIndex].focus();
          break;
      }
    };

