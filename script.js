function toggleMenu() {
    const menuContainer = document.getElementById('menuSection');
    

    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';  // show
        menuButton.textContent = 'Close Menu'; 
    } else {
        menuContainer.style.display = 'none';  // hide
        menuButton.textContent = 'Show Menu'; 
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
}function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    
    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';  
    } else {
        menuContainer.style.display = 'none';  
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
    buffetInfo.style.display = (buffetInfo.style.display === 'none' || buffetInfo.style.display === '') ? 'block' : 'none';
}

