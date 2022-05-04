let firstChar = document.getElementById("firstChar");
let secondChar = document.getElementById("secondChar");
let thirdChar = document.getElementById("thirdChar");



let characters = [firstChar, secondChar, thirdChar];

let siteGuide = "";

firstChar.addEventListener('click', event =>{
    document.getElementById('choose').innerHTML = "";
    document.getElementById('characterset').innerHTML = "";
    document.getElementById("siteMaze").style.display = "grid";
    document.getElementById("siteDisplay").style.display = "grid";
    document.getElementById("guide").style.display = "grid";
});
secondChar.addEventListener('click', event =>{
    document.getElementById('choose').innerHTML = "";
    document.getElementById('characterset').innerHTML = "";
    document.getElementById("siteMaze").style.display = "grid";
    document.getElementById("siteDisplay").style.display = "grid";
    document.getElementById("guide").style.display = "grid";
});
thirdChar.addEventListener('click', event =>{
    document.getElementById('choose').innerHTML = "";
    document.getElementById('characterset').innerHTML = "";
    document.getElementById("siteMaze").style.display = "grid";
    document.getElementById("siteDisplay").style.display = "grid";
    document.getElementById("guide").style.display = "grid";
    document.getElementById("guide").innerHTML = " <img src = './img/ghost.webp'>"
});



 //   const backgroundPositions = [
//        "randomImage1",
 //       "randomImage2",
 ////       "randomImage3"

 //   ]

 //   function randomImage() {
  //      const randomImages = [
  //          "./img/hall1.jpg", 
   //         "./img/hall1.jpg", 
   //         "./img/hall1.jpg"
   //     ],
   //     randomIndex = Math.floor(Math.random() * randomImages.length),
    //    backgroundImage = randomImages[randomIndex],
    //    randomIndex2 = Math.floor(Math.random() * backgroundPositions.length);
    
     //   document.getElementById(`${backgroundPositions[randomIndex2]}`).innerHTML = `<img src = ${backgroundImage}>`;
    //}
    
    //randomImage();
    //setInterval(randomImage, 1000);