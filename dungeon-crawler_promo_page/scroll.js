window.addEventListener('scroll', function() {
 
    if (window.innerHeight + window.scrollY  +2>= document.body.scrollHeight) {
   
      document.getElementById("scroll_indicator").style.visibility = "hidden";
    }
    else if (window.innerHeight + window.scrollY  +2< document.body.scrollHeight) {
   
      document.getElementById("scroll_indicator").style.visibility = "visible";
    }
   
  });