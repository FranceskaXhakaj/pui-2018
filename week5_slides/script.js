window.onload = function() {
    console.log("hello world!");
    var myElement = document.getElementById("text");

    myElement.onclick = function() {
        myElement.innerHTML = "New text";
    }
}

// $(document).ready(function(){
//     console.log("hello world with JQuery!");

//     $("#text").click(function(){
//         $("#text").text("New text with JQuery");
//     });
// });


