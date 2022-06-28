function newImage(url) {
    let image = document.createElement ('img')
    image.src = url 
    document.body.append (image)
    return image
}

function move (image, left, bottom){
    image.style.position = 'fixed'
    

    function moveToCoordinates (left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom = 'px'
    }
    

    return {
        to: moveToCoordinates
    }
}


move (newImage('assets/mainCharacter.gif')).to (120, 250)
move (newImage('assets/character2.gif')).to (120, 200)
move (newImage('assets/character3.gif')).to (70, 150)
move (newImage('assets/character4.gif')).to (12, 100)
move (newImage('assets/character5.gif')).to (1, 500)

//     function moveToCoordinates(left, bottom) 
//         element.style.left = left + 'px'
//         element.style.bottom = bottom + 'px'
//     }

//     function moveWithArrowKeys(left, bottom, callback){
//         let direction = null;
//         let x = left;
//         let y = bottom;

//         element.style.left = x + 'px'
//         element.style.bottom = y + 'px'
        
//         function moveCharacter(){ 
//             if(direction === 'left'){
//                 x-=1
//             }
//             if(direction === 'up'){
//                 y+=1
//             }
//             if(direction === 'right'){
//                 x+=1
//             }
//             if(direction === 'down'){
//                 y-=1
//             }
//             element.style.left = x + 'px'
//             element.style.bottom = y + 'px'
//         }
        
//         setInterval(moveCharacter, 1)
        
//         document.addEventListener('keydown', function(e){
//             if(e.repeat) return;
        
//             if(e.key === 'ArrowLeft'){
//                 direction = 'left'
//             }
//             if(e.key === 'ArrowUp'){
//                 direction = 'up'
//             }
//             if(e.key === 'ArrowRight'){
//                 direction = 'right'
//             }
//             if(e.key === 'ArrowDown'){
//                 direction = 'down'
//             }
//             callback(direction)
//         })
        
//         document.addEventListener('keyup', function(e){
//             direction = null
//             callback(direction)
//         })
//     }

//     return {
//         to: moveToCoordinates,
//         withArrowKeys: moveWithArrowKeys
//     }
// }