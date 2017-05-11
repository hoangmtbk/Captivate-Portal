 $(function () {


   var downloadButton = document.getElementById("cta");
   var counter = 15;
   var newElement = document.createElement("span");
   newElement.innerHTML = "<span class='button secondary large noclick '>15</span>";
   var id;

   downloadButton.parentNode.replaceChild(newElement, downloadButton);

   id = setInterval(function () {
     counter--;
     if (counter < 0) {
       newElement.parentNode.replaceChild(downloadButton, newElement);
       clearInterval(id);

         if($("#form-dangnhap").length){
             $("#form-dangnhap").show();
         }




     } else {
       newElement.innerHTML = "<span class='button secondary large noclick'>" + counter.toString() + "</span>";
     }
   }, 1000);

 });