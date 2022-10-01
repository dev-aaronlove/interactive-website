let portfolioCards = [
  ["./assets/images/portfolio-1.jpg", "Web Development", "Merchandise Website", 'web'],
  ["./assets/images/portfolio-2.jpg", "UI Design", "Organized Design", "ui"],
  ["./assets/images/portfolio-3.jpg", "Web Development", "Shopping Website", "web"],
  ["./assets/images/portfolio-4.jpg", "Web Development", "Business Website", "web"],
  ["./assets/images/portfolio-5.jpg", "App Development", "Graphics App", "app"],
  ["./assets/images/portfolio-6.jpg", "App Development", "Finance App", "app"],
  ["./assets/images/portfolio-7.jpg", "App Development", "Network App", "app"],
  ["./assets/images/portfolio-8.jpg", "UI Design", "Mobile Designs", "ui"],
];

let parent = document.querySelector('.portfolio-grid');
let dynamicCard = document.createElement('div');
let cardBody = document.createElement('div');
let cardBackground = document.createElement('img');
let cardAnchor = document.createElement('a');
let cardType = document.createElement('div');
let cardTitle = document.createElement('h3');

cardAnchor.classList.add('card-popup-box');
cardBackground.alt = 'portfolio icon';
cardBody.classList.add('card-body');
dynamicCard.classList.add('portfolio-card');

portfolioCards.forEach((data) => {
  cardType.innerHTML = data[1];
  cardTitle.innerHTML = data[2];
  cardAnchor.appendChild(cardType);
  cardAnchor.appendChild(cardTitle);
  cardBackground.src = data[0];
  cardBody.appendChild(cardBackground);
  cardBody.appendChild(cardAnchor);
  dynamicCard.appendChild(cardBody);
  dynamicCard.dataset.item = data[3];
  parent.append(dynamicCard);
})