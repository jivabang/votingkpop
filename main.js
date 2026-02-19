const pollOptions = document.getElementById('poll-options');
const idolNameInput = document.getElementById('idol-name');
const idolGroupInput = document.getElementById('idol-group');
const addIdolButton = document.getElementById('add-idol');

let idols = [
    { name: '카리나', group: '에스파', votes: 0 },
    { name: '윈터', group: '에스파', votes: 0 },
    { name: '민지', group: '뉴진스', votes: 0 },
    { name: '하니', group: '뉴진스', votes: 0 },
];

function renderPoll() {
    pollOptions.innerHTML = '';
    idols.sort((a, b) => b.votes - a.votes);
    idols.forEach((idol, index) => {
        const option = document.createElement('div');
        option.classList.add('poll-option');
        option.innerHTML = `
            <div class="rank">${index + 1}</div>
            <div class="idol-info">
                <span class="idol-name">${idol.name}</span>
                <span class="idol-group">${idol.group}</span>
            </div>
            <div class="vote-section">
                <span class="votes">${idol.votes}</span>
                <button class="vote-btn">투표</button>
            </div>
        `;

        const voteButton = option.querySelector('.vote-btn');
        voteButton.addEventListener('click', () => {
            idol.votes++;
            renderPoll();
        });

        pollOptions.appendChild(option);
    });
}

addIdolButton.addEventListener('click', () => {
    const name = idolNameInput.value;
    const group = idolGroupInput.value;
    if (name && group) {
        idols.push({ name, group, votes: 0 });
        idolNameInput.value = '';
        idolGroupInput.value = '';
        renderPoll();
    }
});

renderPoll();
