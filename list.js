document.addEventListener('DOMContentLoaded', () => {
    const destinationListContainer = document.getElementById('destination-list-container');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('destination-card');

        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <div class="destination-card-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            </div>
        `;
        destinationListContainer.appendChild(card);
    });

    const homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
