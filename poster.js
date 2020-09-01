const colors = ['lightred', 'lightgreen', 'lightblue', 'yellow', 'pink', 'purple']
button.addEventListener('click', changeBackground)

function changeText() {
    let text
    text = prompt('Type a message (e.g. Carry On):')
    document.getElementById('message').innerHTML = text
}



function changeColor() {
    let poster = document.getElementById('poster')
    const colorIndex = parseInt(Math.random() * colors.length)
    poster.style.backgroundColor = colors[colorIndex]
}