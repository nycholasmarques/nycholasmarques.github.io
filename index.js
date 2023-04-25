// Menu responsivo

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

// skills
let websites = document.querySelector('.website-skill');
let games = document.querySelector('.games-skill')
let websiteContainer = document.querySelector('.projects-container')
let gamesContainer = document.querySelector('.games-projects');
let websiteBtns = document.querySelectorAll('.projectBtn');

websites.addEventListener('click', function() {
    websites.classList.add('activePs');
    games.classList.remove('activePs');
    websiteContainer.style.display = 'grid'
    gamesContainer.style.display = 'none';

    websiteBtns.forEach(function(button) {
        button.style.visibility = 'visible';
        button.style.transition = 'none'
    });
  });
  
  games.addEventListener('click', function() {
    games.classList.add('activePs');
    websites.classList.remove('activePs');
    gamesContainer.style.display = 'block'
    if (games.classList.contains('activePs')) {
        websiteContainer.style.display = 'none';
        gamesContainer.style.display = 'block'
        setTimeout(function() {
            websiteBtns.forEach(function(button) {
                button.style.visibility = 'hidden';
                button.style.transition = 'none'
            });
        }, 100);
    }
  });

// card

let cardBtns = document.querySelectorAll('.projectBtn')

cardBtns.forEach((cardBtn) =>
    cardBtn.addEventListener('click', () => {
        let cardProject = cardBtn.closest('.project-card');
         cardProject.classList.toggle('active');
    }
))
  
