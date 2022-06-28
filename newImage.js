function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

function move(element){
    element.style.position = 'relative'

    function moveToCoordinates(left,bottom){
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    return {
        to: moveToCoordinates
    }
}

// gifs from gifer.com, animation changes made on ezgif.com
// move(newImage('assets/mainCharacter.gif', 100, 250))

// newImage('assets/mainCharacter.gif', 100, 250)
// newImage('assets/left.gif', 100, 250)
// newImage('assets/character2.gif', 100, 250)
// newImage('assets/character3.gif', 100, 250)
// newImage('assets/character4.gif', 100, 250)
// newImage('assets/character5.gif', 100, 250)