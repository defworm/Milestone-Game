function mainCharacter(x, y) {
    const element = newImage('assets/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}