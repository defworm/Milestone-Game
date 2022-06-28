function mainCharacter(x, y) {
    const element = newImage('assets/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/mainCharacter.gif`
        }
        if (direction === 'left') {
            element.src = `assets/left.gif`
        }
        if (direction === 'up') {
            element.src = `assets/up.gif`
        }
        if (direction === 'right') {
            element.src = `assets/right.gif`
        }
        if (direction === 'down') {
            element.src = `assets/down.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}