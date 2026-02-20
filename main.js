
const questions = [
    {
        question: "1. 어떤 종류의 휴가를 원하시나요?",
        options: ["느긋한 휴양", "관광과 휴양의 조화", "알찬 관광"],
        category: "activity"
    },
    {
        question: "2. 도시와 자연 중 어떤 풍경을 더 선호하시나요?",
        options: ["활기찬 도시", "자연 속 힐링", "둘 다 좋음"],
        category: "city_nature"
    },
    {
        question: "3. 여행에서 새로운 경험을 하는 것을 얼마나 즐기시나요?",
        options: ["익숙한 곳이 좋음", "가끔 새로운 시도", "항상 새로운 모험"],
        category: "adventure"
    },
    {
        question: "4. 쇼핑과 미식 탐방 중 무엇을 더 즐기시나요?",
        options: ["쇼핑", "미식 탐방", "둘 다 비슷"],
        category: "shopping_food"
    },
    {
        question: "5. 여행 예산은 어느 정도로 생각하시나요?",
        options: ["가성비 여행", "균형있는 소비", "럭셔리한 여행"],
        category: "budget"
    }
];

const destinations = [
    { 
        name: "파리, 프랑스", 
        locationName: "에펠탑", 
        description: "예술과 낭만의 도시 파리! 루브르 박물관의 명작들과 센 강의 아름다운 야경을 즐겨보세요.",
        locationInfo: "프랑스 파리의 상징으로, 매년 수백만 명이 방문하는 세계적인 명소입니다.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=2070&auto=format&fit=crop", 
        scores: { activity: 2, city_nature: 1, adventure: 2, shopping_food: 3, budget: 3 } 
    },
    { 
        name: "발리, 인도네시아", 
        locationName: "다이아몬드 해변",
        description: "신들의 섬 발리에서 끝없는 해변과 푸른 자연을 만끽하며 진정한 휴식을 경험하세요.",
        locationInfo: "누사 페니다 섬에 위치한 다이아몬드 해변은 눈부신 백사장과 에메랄드빛 바다로 유명합니다.",
        image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop", 
        scores: { activity: 1, city_nature: 2, adventure: 2, shopping_food: 2, budget: 1 } 
    },
    { 
        name: "뉴욕, 미국", 
        locationName: "브루클린 브릿지",
        description: "잠들지 않는 도시 뉴욕의 화려한 스카이라인과 브로드웨이의 열기를 직접 느껴보세요.",
        locationInfo: "맨해튼과 브루클린을 연결하는 상징적인 다리로, 환상적인 도시 전망을 자랑합니다.",
        image: "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2074&auto=format&fit=crop", 
        scores: { activity: 3, city_nature: 1, adventure: 3, shopping_food: 3, budget: 3 } 
    },
    { 
        name: "스위스 인터라켄", 
        locationName: "하더 쿨름",
        description: "알프스의 심장, 인터라켄에서 패러글라이딩과 하이킹 등 대자연의 위대함을 온몸으로 체험하세요.",
        locationInfo: "인터라켄의 전경과 알프스 봉우리를 한눈에 담을 수 있는 최고의 전망대입니다.",
        image: "https://images.unsplash.com/photo-1534940428755-4157b8563914?q=80&w=1974&auto=format&fit=crop", 
        scores: { activity: 3, city_nature: 2, adventure: 3, shopping_food: 1, budget: 3 } 
    },
    { 
        name: "교토, 일본", 
        locationName: "기요미즈데라",
        description: "천년 고도 교토의 고즈넉한 신사와 전통 가옥 거리에서 일본의 아름다움을 느껴보세요.",
        locationInfo: "언덕 위에 세워진 목조 사찰로, 교토 시내를 한눈에 조망할 수 있는 멋진 경치를 자랑합니다.",
        image: "https://images.unsplash.com/photo-1525985223521-44161e2a829d?q=80&w=1974&auto=format&fit=crop", 
        scores: { activity: 2, city_nature: 3, adventure: 1, shopping_food: 2, budget: 2 } 
    }
];

const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const startBtn = document.getElementById('start-btn');

let currentQuestionIndex = 0;
const userAnswers = {};

function showQuestion(index) {
    const q = questions[index];
    let buttonsHTML = '';
    if (index > 0) {
        buttonsHTML += '<button id="prev-btn">이전</button>';
    }
    
    quizContainer.innerHTML = `
        <div class="progress-bar">
            <div class="progress" style="width: ${((index) / questions.length) * 100}%"></div>
        </div>
        <div class="question">
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((option, i) => `
                    <button class="option-btn" data-value="${i + 1}">${option}</button>
                `).join('')}
            </div>
        </div>
        <div class="navigation-buttons">
            ${buttonsHTML}
        </div>
    `;

    const optionBtns = quizContainer.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleNextQuestion(parseInt(e.target.dataset.value));
        });
    });

    if (index > 0) {
        const prevBtn = document.getElementById('prev-btn');
        prevBtn.addEventListener('click', () => {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        });
    }
}

function handleNextQuestion(selectedValue) {
    const category = questions[currentQuestionIndex].category;
    userAnswers[category] = selectedValue;
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

    let bestMatch = null;
    let minDifference = Infinity;

    destinations.forEach(destination => {
        let difference = 0;
        for (const category in userAnswers) {
            difference += Math.abs(userAnswers[category] - destination.scores[category]);
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
            <div class="result-name-overlay">
                <div class="result-name">${bestMatch.name}</div>
            </div>
        </div>
        <div class="result-description">
            <h3>${bestMatch.name}</h3>
            <p>${bestMatch.description}</p>
            <h4>추천 장소: ${bestMatch.locationName}</h4>
            <p>${bestMatch.locationInfo}</p>
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
