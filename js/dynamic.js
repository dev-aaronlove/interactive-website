let portfolioCards = [
  ["./assets/images/portfolio-1.jpg", "Web Development", "Merchandise Website", 'web', "web-1"],
  ["./assets/images/portfolio-2.jpg", "UI Design", "Organized Design", "ui", "ui-1"],
  ["./assets/images/portfolio-3.jpg", "Web Development", "Shopping Website", "web", "web-2"],
  ["./assets/images/portfolio-4.jpg", "Web Development", "Business Website", "web", "web-3"],
  ["./assets/images/portfolio-5.jpg", "App Development", "Graphics App", "app", "app-1"],
  ["./assets/images/portfolio-6.jpg", "App Development", "Finance App", "app", "app-2"],
  ["./assets/images/portfolio-7.jpg", "App Development", "Network App", "app", "app-3"],
  ["./assets/images/portfolio-8.jpg", "UI Design", "Mobile Designs", "ui", "ui-2"],
];

let parent = document.querySelector('.portfolio-grid');

portfolioCards.forEach((data) => {
  let dynamicCard = document.createElement('div');
  let cardBody = document.createElement('div');
  let cardBackground = document.createElement('img');
  let cardBox = document.createElement('div');
  let cardType = document.createElement('div');
  let cardTitle = document.createElement('h3');
  
  cardBox.classList.add('card-popup-box');
  cardBackground.alt = 'portfolio icon';
  cardBody.classList.add('card-body');
  dynamicCard.classList.add('portfolio-card');

  cardType.innerHTML = data[1];
  cardTitle.innerHTML = data[2];
  cardBox.appendChild(cardType);
  cardBox.appendChild(cardTitle);
  cardBackground.src = data[0];
  cardBody.appendChild(cardBackground);
  cardBody.appendChild(cardBox);
  dynamicCard.appendChild(cardBody);
  dynamicCard.dataset.item = data[3];
  dynamicCard.dataset.open = data[4];
  parent.append(dynamicCard);
})