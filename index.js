const mc = mainCharacter (500, 110)

const c2 = character2 (470, 110)

const c3 = character3 (420, 210)

const c4 = character4 (340, 150)

const c5 = character5 (250, 170)



// template from dev.to memory game//
// sounds from dreamstime.com//

 
const cardArray = [ 
    
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "skull", img: "./Assets/skull.jpg", }, 
    { name: "skull", img: "./Assets/skull.jpg", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", }, 
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", }, 
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", }, 
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    { name: "plusOne", img: "./Assets/plusOne.png", },
    
    ]; 
    
    //define variables and get DOM element
    
    let grid = document.querySelector(".grid");
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;
    document.addEventListener("DOMContentLoaded", function () {
    //define functions 
    
    createBoard(grid, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 
    
    //add a click functions for images 
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
    });
    //createBoard function
    
    function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "./Assets/strawberry.gif");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
      const plusOne = new Audio ("./Assets/ding.mp3")
      const skull = new Audio ("./Assets/skullnoise.mp3")
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name
    cardsSelected.push(clicked); 
      
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    if (cardArray[selected].name === "plusOne"){
      plusOne.play();
    }
    if (cardArray[selected].name === "skull"){
      skull.play();
    }
    }
    // checkForMatch function
    
    function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    swal({
      title: "Match!", 
      text: "You Gain A Friend!", 
      icon: "success",
      button: "I'm Going To Win This",
      
    }); 
     // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
      //this below is used if you want to add sounds, you can comment it out if you dont want it
     
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,500) 
    } else { 
    imgs[firstCard].setAttribute("src", "Assets/strawberry.gif");
    imgs[secondCard].setAttribute("src", "Assets/strawberry.gif"); 
    // swal({
    //   title: "Close!", 
    //   text: "Try Again!", 
    //   icon: "error",
    //   button: "I Will!",
    // }); 
      // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
      // audio.load()
      // audio.play()
      imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    swal({
      title: "Congratulations!",
      text: "You Won!",
      button: "Play Again?",
    }); 
    setTimeout(()=> popup.style.display = "flex" ,300); 
    }
    }
    // The replay function
    
    function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
    }
    
