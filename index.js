

const mc = mainCharacter (100, 420)

const c2 = character2 (280, 470)

const c3 = character3 (350, 480)

const c4 = character4 (440, 450)

const c5 = character5 (550, 470)

// Image[] D = new Image [] {
//   new Image("./Assets/one.jpg"),
//   new Image("./Assets/two.jpg"),
// }



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
//trying to simplify array here//
// const cardArray = [
//   { name: "plusOne", img: "./Assets/plusOne.png",},
//   { name: "skull", img: "./Assets/skull.jpg", }, 
// ];

// const fillArray = (name, len) => {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(name);
//   }
//   return arr;
// }

// const arr = Array(16).fill("plusOne")
// console.log(arr)
    
    //define variables and get DOM element
    
    let grid = document.querySelector(".grid");
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon= 0; 
    let clicks = 0;
    document.addEventListener("DOMContentLoaded", function () {
    //define functions 
    
    arrangeCard();
    createBoard(grid, cardArray); 
   
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
     
      imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }

   function showWords(){
    if (cardsWon == 5){
      console.log("You have all of the friends!");
      if (cardsWon == 4){
        console.log("You have four friends!");
        if (cardsWon == 3){
          console.log ("You have three friends!");
          if (cardsWon == 2){
            console.log ("you have two friends!");
            if (cardsWon == 1){
              console.log ("You have one friend!");
            } else {
              console.log ("You have no friends");
            }
          }
        }
      }

    }}

    setTimeout(checkLose,500)
    
    function checkLose() {
      if (clicks === 15){
        swal({
          title: "Dang",
          text: "You Lose",
        });
      }
    }

// original cardsWon formula instead of 5//
    // cardArray.length / 2
    
    function checkWon() {
     
      
    if (cardsWon == 5) {
    swal({
      title: "Congratulations!",
      text: "You Won!",
      // button: "Play Again?",
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

 