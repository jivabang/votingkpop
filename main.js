
const questions = [
    {
        question: "1. 얼마나 활동적인 여행을 선호하시나요?",
        options: ["전혀 활동적이지 않음", "별로", "보통", "좋음", "매우 활동적임"],
        category: "activity"
    },
    {
        question: "2. 여행지에서 휴양과 관광 중 무엇을 더 선호하시나요?",
        options: ["완전한 휴양", "휴양 위주", "반반", "관광 위주", "꽉 찬 관광"],
        category: "activity"
    },
    {
        question: "3. 도시의 화려함과 자연의 평온함 중 어떤 것을 더 선호하시나요?",
        options: ["자연의 평온함", "자연 선호", "둘 다 좋음", "도시 선호", "도시의 화려함"],
        category: "city"
    },
    {
        question: "4. 여행 중 쇼핑을 얼마나 즐기시나요?",
        options: ["전혀 안 함", "거의 안 함", "가끔 함", "즐김", "매우 즐김"],
        category: "city"
    },
    {
        question: "5. 역사 유적지나 박물관 방문을 얼마나 좋아하시나요?",
        options: ["전혀 안 좋아함", "별로 안 좋아함", "보통", "좋아함", "매우 좋아함"],
        category: "city"
    },
    {
        question: "6. 조용한 해변에서 책을 읽는 것을 얼마나 선호하시나요?",
        options: ["전혀 선호하지 않음", "별로", "보통", "선호함", "매우 선호함"],
        category: "relaxation"
    },
    {
        question: "7. 스파나 마사지를 받는 것을 얼마나 즐기시나요?",
        options: ["전혀 즐기지 않음", "별로", "보통", "즐김", "매우 즐김"],
        category: "relaxation"
    },
    {
        question: "8. 숲 속이나 산책로를 걷는 것을 얼마나 좋아하시나요?",
        options: ["전혀 안 좋아함", "별로", "보통", "좋아함", "매우 좋아함"],
        category: "nature"
    },
    {
        question: "9. 야생동물을 관찰하는 것에 얼마나 관심이 있으신가요?",
        options: ["전혀 없음", "별로 없음", "보통", "관심 있음", "매우 많음"],
        category: "nature"
    },
    {
        question: "10. 여행 예산은 어느 정도로 생각하시나요?",
        options: ["매우 저렴하게", "저렴하게", "보통", "여유롭게", "매우 여유롭게"],
        category: "budget"
    }
];

const destinations = [
    { name: "파리, 프랑스", image: "https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=2070&auto=format&fit=crop", scores: { activity: 4, city: 5, relaxation: 2, nature: 1, budget: 4 } },
    { name: "발리, 인도네시아", image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop", scores: { activity: 3, city: 2, relaxation: 5, nature: 4, budget: 3 } },
    { name: "뉴욕, 미국", image: "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2074&auto=format&fit=crop", scores: { activity: 5, city: 5, relaxation: 1, nature: 1, budget: 5 } },
    { name: "스위스 인터라켄", image: "https://images.unsplash.com/photo-1534940428755-4157b8563914?q=80&w=1974&auto=format&fit=crop", scores: { activity: 5, city: 1, relaxation: 3, nature: 5, budget: 4 } },
    { name: "교토, 일본", image: "https://images.unsplash.com/photo-1536514498073-50e69d93c2b7?q=80&w=2070&auto=format&fit=crop", scores: { activity: 3, city: 4, relaxation: 4, nature: 3, budget: 3 } },
    { name: "보라카이, 필리핀", image: "https://images.unsplash.com/photo-1512718734264-95c10defa381?q=80&w=2070&auto=format&fit=crop", scores: { activity: 2, city: 1, relaxation: 5, nature: 3, budget: 2 } },
    { name: "로마, 이탈리아", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop", scores: { activity: 4, city: 5, relaxation: 2, nature: 1, budget: 4 } },
    { name: "그랜드 캐니언, 미국", image: "https://images.unsplash.com/photo-1527333656c94-78e6c65f9de2?q=80&w=2070&auto=format&fit=crop", scores: { activity: 4, city: 1, relaxation: 2, nature: 5, budget: 3 } },
    { name: "방콕, 태국", image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop", scores: { activity: 4, city: 4, relaxation: 3, nature: 2, budget: 2 } },
    { name: "아이슬란드", image: "https://images.unsplash.com/photo-1500049242043-3c080052b654?q=80&w=2070&auto=format&fit=crop", scores: { activity: 4, city: 2, relaxation: 2, nature: 5, budget: 5 } }
];

const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const startBtn = document.getElementById('start-btn');

let currentQuestionIndex = 0;
const userAnswers = [];

function showQuestion(index) {
    const q = questions[index];
    let buttonsHTML = '';
    if (index > 0) {
        buttonsHTML += '<button id="prev-btn">이전</button>';
    }
    buttonsHTML += '<button id="next-btn">다음</button>';

    quizContainer.innerHTML = `
        <div class="progress-bar">
            <div class="progress" style="width: ${((index) / questions.length) * 100}%"></div>
        </div>
        <div class="question">
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${i + 1}" ${userAnswers[index] === i+1 ? 'checked' : ''}>
                        <span class="option-text">${option}</span>
                    </label>
                `).join('')}
            </div>
        </div>
        <div class="navigation-buttons">
            ${buttonsHTML}
        </div>
    `;

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', () => {
        const selected = quizContainer.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            handleNextQuestion(parseInt(selected.value));
        } else {
            alert("답변을 선택해주세요!");
        }
    });

    if (index > 0) {
        const prevBtn = document.getElementById('prev-btn');
        prevBtn.addEventListener('click', () => {
            currentQuestionIndex--;
            userAnswers.pop();
            showQuestion(currentQuestionIndex);
        });
    }
}

function handleNextQuestion(selectedValue) {
    userAnswers[currentQuestionIndex] = selectedValue;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        calculateResult();
    }
}

function calculateResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    const userScores = {
        activity: 0,
        city: 0,
        relaxation: 0,
        nature: 0,
        budget: 0
    };

    for (let i = 0; i < questions.length; i++) {
        const category = questions[i].category;
        if (category) { 
            userScores[category] += userAnswers[i];
        }
    }

    let bestMatch = null;
    let minDifference = Infinity;

    destinations.forEach(destination => {
        let difference = 0;
        for (const category in userScores) {
            if (userScores.hasOwnProperty(category) && destination.scores.hasOwnProperty(category)) {
                difference += Math.abs(userScores[category] - destination.scores[category]);
            }
        }
        
        if (difference < minDifference) {
            minDifference = difference;
            bestMatch = destination;
        }
    });

    resultContainer.innerHTML = `
        <h2>당신에게 추천하는 여행지는...</h2>
        <div class="result-card">
            <img src="${bestMatch.image}" alt="${bestMatch.name}" class="result-image">
            <div class="result-name-overlay">${bestMatch.name}</div>
        </div>
         <button id="retry-btn">다시하기</button>
    `;

    const retryBtn = document.getElementById('retry-btn');
    retryBtn.addEventListener('click', () => {
        location.reload();
    });
}

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion(currentQuestionIndex);
});
