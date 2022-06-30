function mainCharacter(x, y){
    const element = newImage('assets/mainCharacter.gif')
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