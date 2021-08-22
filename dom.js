//Add Border on Whole Container
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '5px solid red'
    container.style.padding = '10px'
})

/* Add backgroundColor on div  */

// document.getElementById('add-background').addEventListener('click', function () {
//     const friends = document.getElementsByClassName('friend');
//     for (const friend of friends) {
//         friend.style.backgroundColor = 'yellow'
//     }
// })

function getBackGround() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'yellow'
    }
}

//Add color On Friend Name 
document.getElementById('color').addEventListener('click', function () {
    const colors = document.getElementsByClassName('friend-name');
    for (const color of colors) {
        color.style.color = 'red'
    }
})


// Add Friends 
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container')
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
                <h3 class="friend-name">Friend - new</h3>
                <p>Cupiditate, ea! Iste suscipit magni quidem eligendi voluptas enim illum.</p>
    `;
    container.appendChild(friendDiv);
})