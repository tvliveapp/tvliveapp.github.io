var mySidenav1 =document.getElementById("mySidenav1");
mySidenav1.activeIndex=1;
var elements = document.getElementsByClassName("arrow-togglable");
var currentIndex = 0;
console.log(elements)
var menuIndex = 0;
var menuList=[];
var activeNav="";
var activeSt=0;
var lastChnLst="";

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
      
      //
      //
  
      switch (e.keyCode) {
        case 37:
          if(activeNav=="mySidenav1"){
             lastChnLst= document.activeElement.name;
             closeNav(activeNav);
             activeNav=""; 
            
         } else{
             closeNav(activeNav);
              activeNav= "mySidenav1";
           //  openNav("mySidenav1");
          }
          document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          break;
        //  0>>1>>2>>3>>2>>3
        case 39:
          if(activeNav==""){
              activeNav="mySidenav1"
              openNav("mySidenav1");
          } else if(activeNav=="mySidenav1"){
               closeNav(activeNav);
               activeNav= document.activeElement.name;
               openNav(activeNav);
         } else if(document.getElementById(activeNav).style.width == "0px"){
               openNav(activeNav);
              
          }else
                closeNav(activeNav);
         
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
          if(activeNav){
            if(document.getElementById(activeNav).activeIndex>1)
              document.getElementById(activeNav).activeIndex=document.getElementById(activeNav).activeIndex-1;
            document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          }else{
              if(document.getElementById(lastChnLst).activeIndex>1)
                document.getElementById(lastChnLst).activeIndex=document.getElementById(lastChnLst).activeIndex-1;
              document.getElementById(lastChnLst).children[ document.getElementById(lastChnLst).activeIndex].focus(); 
          }
                        /*currentIndex = (currentIndex == 0) ? elements.length - 1 : --currentIndex;
          elements[currentIndex].focus();
          */
          break;
        case 40:
          if(activeNav){ 
            if(document.getElementById(activeNav).activeIndex<document.getElementById(activeNav).childElementCount-1)
              document.getElementById(activeNav).activeIndex=document.getElementById(activeNav).activeIndex+1;
            document.getElementById(activeNav).children[ document.getElementById(activeNav).activeIndex].focus();
          }else{

            if(document.getElementById(lastChnLst).activeIndex<document.getElementById(lastChnLst).childElementCount-1)
              document.getElementById(lastChnLst).activeIndex=document.getElementById(lastChnLst).activeIndex+1;
            document.getElementById(lastChnLst).children[ document.getElementById(lastChnLst).activeIndex].focus();
          }
            /*
          currentIndex = ((currentIndex + 1) == elements.length) ? 0 : ++currentIndex;
          elements[currentIndex].focus();*/
          break;
      }
    };

