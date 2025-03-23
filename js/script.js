function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    const menuButton = document.getElementById('menu-toggle');

    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';
        menuButton.textContent = 'Close';
    } else {
        menuContainer.style.display = 'none';
        menuButton.textContent = 'Open Menu';
    }
}


function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {

        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleDescription(item) {
    const description = item.querySelector('.description'); 

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}



function toggleBuffet() {
    const buffetInfo = document.getElementById('buffet-info');
    const buffetButton = document.getElementById('buffet-toggle');

    if (buffetInfo.style.display === 'none' || buffetInfo.style.display === '') {
        buffetInfo.style.display = 'block';
        buffetButton.textContent = 'Close';
    } else {
        buffetInfo.style.display = 'none';
        buffetButton.textContent = 'Show Buffet Info';
    }
}
