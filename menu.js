document.getElementById("mySidenav1").activeIndex=1;
var elements = document.getElementsByClassName("arrow-togglable");
var currentIndex = 0;
console.log(elements)
var menuIndex = 0;
var menuList=[];
var activeNav="";
var activeSt=0;


function openNav(idx) {
  document.getElementById(idx).style.width = "250px";  
}

function closeNav(idx) {
  

    document.getElementById(idx).style.width = "0";
}
    

function menu(){
console.log(activeNav);
  
}
document.onkeydown = function(e) {
      console.log(e.keyCode,e.key) 
      document.getElementById("txt").innerHTML=e.key+" "+currentIndex;
      switch (e.keyCode) {
        case 37:
          if(activeNav=="mySidenav1"){
           closeNav(activeNav);
          activeNav= "";
         } else if(activeNav==""){
            
         } else
             closeNav(activeNav);
             openNav("mySidenav1");
          document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          break;
        case 39:
         if(activeNav=="mySidenav1"){
           closeNav(activeNav);
          activeNav= document.activeElement.name;
           openNav(activeNav);
         } else if(activeNav==""){
            activeNav="mySidenav1"
            openNav("mySidenav1");
         } else
             openNav(activeNav);
          
          elements[currentIndex].focus();
         /*
          closeNav(menuIndex);
          menuIndex = (menuIndex == 0) ? 0 : --menuIndex;
          openNav(menuIndex);
          menu();
          
          if(activeNav=="")
            activeNav="mySidenav1"
          if(activeNav=="mySidenav1") 
            activeElement=document.activeElement;
            if (activeElement.search("mySidenav")>-1){
              closeNav(activeNav);
              activeNav=="mySidenav1"
            }
           else{
             
             activeNav=activeNav+"C"
             openNav(activeNav);
           }*/
          
          document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          break;
        case 38:
          if(document.getElementById(activeNav).activeIndex>1)
            document.getElementById(activeNav).activeIndex=document.getElementById(activeNav).activeIndex-1;
          document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          /*currentIndex = (currentIndex == 0) ? elements.length - 1 : --currentIndex;
          elements[currentIndex].focus();
          */
          break;
        case 40:
          if(document.getElementById(activeNav).activeIndex<document.getElementById(activeNav).childElementCount-1)
            document.getElementById(activeNav).activeIndex=document.getElementById(activeNav).activeIndex+1;
          document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          /*
          currentIndex = ((currentIndex + 1) == elements.length) ? 0 : ++currentIndex;
          elements[currentIndex].focus();*/
          break;
      }
    };

