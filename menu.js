var elements = document.getElementsByClassName("arrow-togglable");
var currentIndex = 0;
console.log(elements)
var menuIndex = 0;
var menuList=[];

function openNav(idx) {
  var slideName="mySidenav"+idx;
  if (idx && idx<3)
    document.getElementById(slideName).style.width = "250px";
}

function closeNav(idx) {
  var slideName="mySidenav"+idx;
  if (idx)
    document.getElementById(slideName).style.width = "0";
}
    

function menu(){
 console.log(menuIndex); 
  
}
document.onkeydown = function(e) {
      console.log(e.keyCode,e.key) 
      document.getElementById("txt").innerHTML=e.key+" "+currentIndex;
      switch (e.keyCode) {
        case 39:
          closeNav(menuIndex);
          menuIndex = (menuIndex == 3) ? 3 : ++menuIndex;
          openNav(menuIndex);
          menu();
          elements[currentIndex].focus();
          break;
        case 37:
          closeNav(menuIndex);
          menuIndex = (menuIndex == 0) ? 0 : --menuIndex;
          openNav(menuIndex);
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

