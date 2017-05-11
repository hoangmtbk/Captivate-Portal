 $(function () {


   var downloadButton = document.getElementById("cta");

   var counter = 5;
   var newElement = document.createElement("div");
   newElement.innerHTML = "<span class='button secondary large noclick'>Bạn có thể truy cập internet trong 5 giây.</span>";
   var id;

   downloadButton.parentNode.replaceChild(newElement, downloadButton);

   id = setInterval(function () {
     counter--;
     if (counter < 0) {
       newElement.parentNode.replaceChild(downloadButton, newElement);
       clearInterval(id);


     } else {
        newElement.innerHTML = "<span class='button secondary large noclick'>Bạn có thể truy cập internet trong " + counter.toString() + " giây.</span>";
     }
   }, 1000);

 });