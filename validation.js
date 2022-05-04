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
    document.getElementById("guide").innerHTML = " <img src = './img/pumpkinChar.webp'>"
});
secondChar.addEventListener('click', event =>{
    document.getElementById('choose').innerHTML = "";
    document.getElementById('characterset').innerHTML = "";
    document.getElementById("siteMaze").style.display = "grid";
    document.getElementById("siteDisplay").style.display = "grid";
    document.getElementById("guide").style.display = "grid";
    document.getElementById("guide").innerHTML = " <img src = './img/witch.png'>"
});
thirdChar.addEventListener('click', event =>{
    document.getElementById('choose').innerHTML = "";
    document.getElementById('characterset').innerHTML = "";
    document.getElementById("siteMaze").style.display = "grid";
    document.getElementById("siteDisplay").style.display = "grid";
    document.getElementById("guide").style.display = "grid";
    document.getElementById("guide").innerHTML = " <img src = './img/ghost.webp'>"
});



 const backgroundPositions = [
            "startingPoint",
             "aboutUs",
            "tickets",
            "merchandise",
            "reviews",
            "photos"

  ]

function randomImage() {
    const randomImages = [
             "./img/mummy.png",     
             "./img/reaper.png", 
            "./img/cat.png",
            "./img/flytrap.png",
            "./img/spider.png",
            "./img/evilpump.png"


   ],
          randomIndex = Math.floor(Math.random() * randomImages.length),
          backgroundImage = randomImages[randomIndex],
          randomIndex2 = Math.floor(Math.random() * backgroundPositions.length);
    
          
          for (background in backgroundPositions) {
            let current = document.getElementById(`${backgroundPositions[background]}`).innerText
            document.getElementById(`${backgroundPositions[background]}`).innerHTML = `${current} <img src = ${backgroundImage}>`;

          }
          
    }
    
    randomImage();
    setInterval(randomImage, 1000);