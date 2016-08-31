(function(){
  var boxs = document.querySelectorAll(".transaction-box");
  boxs.forEach(function(box, index){
    box.style.display = "block";
    box.style.width = "100%";
    if(index === 2) {
      box.style.height = "900px";
      box.children[1].style.height = "900px";
    }
  });

  var chat = document.querySelector("#cc #cc_area");
  chat.style.minHeight = "700px";
  chat.style.maxHeight = "700px";
  chat.style.height = "700px";
})();
