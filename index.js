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

    //2d collision detection circle: developer.mozilla//

    const Crafty= img
    
    Crafty.init(200, 200);

    var dim1 = {x: 5, y: 5}
    var dim2 = {x: 20, y: 20}
    
    Crafty.c("Circle", {
       circle: function(radius, color) {
            this.radius = radius;
            this.w = this.h = radius * 2;
            this.color = color || "#000000";
    
            this.bind("Move", Crafty.DrawManager.drawAll)
            return this;
       },
    
       draw: function() {
           var ctx = Crafty.canvas.context;
           ctx.save();
           ctx.fillStyle = this.color;
           ctx.beginPath();
           ctx.arc(
               this.x + this.radius,
               this.y + this.radius,
               this.radius,
               0,
               Math.PI * 2
           );
           ctx.closePath();
           ctx.fill();
           ctx.restore();
        }
    });
    
    var circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");
    
    var circle2 = Crafty.e("2D, Canvas, Circle, Fourway").fourway(2).attr(dim2).circle(20, "blue");
    
    circle2.bind("EnterFrame", function () {
        var dx = (circle1.x + circle1.radius) - (circle2.x + circle2.radius);
        var dy = (circle1.y + circle1.radius) - (circle2.y + circle2.radius);
        var distance = Math.sqrt(dx * dx + dy * dy);
    
        if (distance < circle1.radius + circle2.radius) {
            // collision detected!
            this.color = "green";
        } else {
            // no collision
            this.color = "blue";
        }
    });