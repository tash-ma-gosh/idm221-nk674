// function myFnc(e){
//   e.classlist,toggle("show");

//   var elem = document.getElementByID("navID"),
//   Style = window.getComputedStyle(elem),
//   right = Style.getPropertyValue("right");

//   if(right == "-40%"){
//     elem.style.right = "40%"
//   }else{
//       elem.style.right ="0px"
//   }
// }



// /* Set the width of the sidebar to 250px (show it) */
// function openNav() {
//     document.getElementById("mySidepanel").style.width = "250px";
//   }
  
//   /* Set the width of the sidebar to 0 (hide it) */
//   function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
//   }


  
//   function openJob(evt, jobName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
  
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
  
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(jobName).style.display = "block";
//     evt.currentTarget.className += " active";
//   } 