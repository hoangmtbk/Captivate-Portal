 $(function () {


   var downloadButton = document.getElementById("cta");

   var counter = 5;
   var newElement = document.createElement("div");
   newElement.innerHTML = "<span class='button secondary large noclick'>5</span>";
   var id;

   downloadButton.parentNode.replaceChild(newElement, downloadButton);

   id = setInterval(function () {
     counter--;
     if (counter < 0) {
       newElement.parentNode.replaceChild(downloadButton, newElement);
       clearInterval(id);


     } else {
        newElement.innerHTML = "<span class='button secondary large noclick'>" + counter.toString() + "</span>";
     }
   }, 1000);

 });