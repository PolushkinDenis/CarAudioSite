function checkImpendans(){
    var empendansvalue = document.getElementById("impendans").value;
    var sabvalue = document.getElementById("sab").value;
    img = new Image();


        img.src = './img/'+sabvalue + '_' + empendansvalue + '.jpg';
        document.getElementById("scheme").src = img.src;

}

function show(){
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('scheme');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.getElementById("img01").style.width = "200%"

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
}