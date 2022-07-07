function mainCharacter(x, y){
    const element = newImage('Assets/Maincharacter.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `Assets/mainCharacter.gif`
        }
        if (direction === 'west') {
            element.src = `Assets/left.gif`
        }
        if (direction === 'north') {
            element.src = `Assets/up.gif`
        }
        if (direction === 'east') {
            element.src = `Assets/right.gif`
        }
        if (direction === 'south') {
            element.src = `Assets/down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character2(x, y){
    const element = newImage('Assets/character2.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `Assets/character2.gif`
        }
        if (direction === 'west') {
            element.src = `Assets/character2left.gif`
        }
        if (direction === 'north') {
            element.src = `Assets/character2up.gif`
        }
        if (direction === 'east') {
            element.src = `Assets/character2right.gif`
        }
        if (direction === 'south') {
            element.src = `Assets/character2down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

// goofed my up and down in saved file, have to correct//
function character3(x, y){
    const element = newImage('Assets/character3.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `Assets/character3.gif`
        }
        if (direction === 'west') {
            element.src = `Assets/character3left.gif`
        }
        if (direction === 'north') {
            element.src = `Assets/character3down.gif`
        }
        if (direction === 'east') {
            element.src = `Assets/character3right.gif`
        }
        if (direction === 'south') {
            element.src = `Assets/character3up.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character4(x, y){
    const element = newImage('Assets/character4.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `Assets/character4.gif`
        }
        if (direction === 'west') {
            element.src = `Assets/character4left.gif`
        }
        if (direction === 'north') {
            element.src = `Assets/character4up.gif`
        }
        if (direction === 'east') {
            element.src = `Assets/character4right.gif`
        }
        if (direction === 'south') {
            element.src = `Assets/character4down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character5(x, y){
    const element = newImage('Assets/character5.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `Assets/character5.gif`
        }
        if (direction === 'west') {
            element.src = `Assets/character5left.gif`
        }
        if (direction === 'north') {
            element.src = `Assets/character5up.gif`
        }
        if (direction === 'east') {
            element.src = `Assets/character5right.gif`
        }
        if (direction === 'south') {
            element.src = `Assets/character5down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}