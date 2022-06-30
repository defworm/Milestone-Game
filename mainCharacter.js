function mainCharacter(x, y){
    const element = newImage('assets/Maincharacter.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/mainCharacter.gif`
        }
        if (direction === 'west') {
            element.src = `assets/left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/up.gif`
        }
        if (direction === 'east') {
            element.src = `assets/right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character2(x, y){
    const element = newImage('assets/character2.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/character2.gif`
        }
        if (direction === 'west') {
            element.src = `assets/character2left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/character2up.gif`
        }
        if (direction === 'east') {
            element.src = `assets/character2right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/character2down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character3(x, y){
    const element = newImage('assets/character3.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/character3.gif`
        }
        if (direction === 'west') {
            element.src = `assets/character3left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/character3down.gif`
        }
        if (direction === 'east') {
            element.src = `assets/character3right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/character3up.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character4(x, y){
    const element = newImage('assets/character4.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/character4.gif`
        }
        if (direction === 'west') {
            element.src = `assets/character4left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/character4up.gif`
        }
        if (direction === 'east') {
            element.src = `assets/character4right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/character4down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}

function character5(x, y){
    const element = newImage('assets/character5.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/character5.gif`
        }
        if (direction === 'west') {
            element.src = `assets/character5left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/character5up.gif`
        }
        if (direction === 'east') {
            element.src = `assets/character5right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/character5down.gif`
        }
    }
        
        move(element).withArrowKeys(x, y, handleDirectionChange)

        return {
            element: element
        
        
    }
}