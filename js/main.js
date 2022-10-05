const theme = 'theme'; //to be stored and assigned a value in localStorage later
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

/* Theme Variables/Helper Fns*/
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme); //see if value was saved in local storage

const setActive = (elm, selector) => {
  if(document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
}

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark); //first param: name of dataset, second param: value assigned to dataset
    localStorage.setItem(theme, dark); //saves value even after refresh page
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
}

/* Portfolio Variables*/
const filterLinks = document.querySelectorAll(dataFilter); //node list of all elements with data-filter on it
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/* Modals Variables*/
const openModal = document.querySelectorAll(modalOpen); //stores a node list
const closeModal = document.querySelectorAll(modalClose); 


/* Theme Functionality */
if (currentTheme) { //if theme has been stored in localStorage
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  })
  if(currentTheme === dark) switcher[1].classList.add(active);
  else switcher[0].classList.add(active);
}

toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) tab.classList.add(open);
  else tab.classList.remove(open);
})

for (const elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  })
}

/* Portfolio Functionality */
searchBox.addEventListener('keyup', (elem) => {
  const searchInput = elem.target.value.toLowerCase().trim(); // trims whitespace
  
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) card.style.display = 'block';
    else card.style.display = 'none';
  })
});

for (const link of filterLinks) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') card.style.display = 'block';
      else if (card.dataset.item === filter) card.style.display = 'block';
      else card.style.display = 'none';
    })
  })
}

/* Modal & Full Site Modal Open Buttons*/
for (const elm of openModal) {
  elm.addEventListener('click', function() { //since using "function" instead of arrow fn: now have access to "this" 
    const modalId = this.dataset.open; //"this" refers to elm. "dataset" means "data-"
    document.getElementById(modalId).classList.add(isVisible); //modalID conveniently is the same as the id="about" or id="contact"
  })
}


for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  })
}

// Modal
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    //clicked on backdrop area. Another way to close the modal.
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key  === "Escape") {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elms', marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}