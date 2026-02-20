
const questions = [
    {
        question: "1. 어떤 여행 스타일을 선호하시나요?",
        options: ["느긋하고 여유로운 휴식", "관광과 휴식을 적절히 분배", "다양한 볼거리와 액티비티"],
        category: "pacing"
    },
    {
        question: "2. 어떤 풍경에 더 마음이 끌리시나요?",
        options: ["유서 깊은 건축물과 역사 유적", "아름다운 해변과 자연 경관", "화려한 스카이라인의 현대적인 도시"],
        category: "interest"
    },
    {
        question: "3. 선호하는 날씨는 어떤가요?",
        options: ["따뜻하고 화창한 날씨", "선선하고 쾌적한 날씨", "계절의 특색이 뚜렷한 곳"],
        category: "climate"
    },
    {
        question: "4. 여행 예산은 어느 정도로 생각하시나요?",
        options: ["알뜰하고 경제적인 여행", "합리적인 소비의 균형잡힌 여행", "특별한 경험을 위한 럭셔리 여행"],
        category: "budget"
    },
    {
        question: "5. 미식 경험에서 무엇을 가장 중요하게 생각하시나요?",
        options: ["현지인 맛집과 길거리 음식 탐방", "분위기 좋은 레스토랑에서의 식사", "다양한 종류의 세계적인 음식"],
        category: "food"
    },
    {
        question: "6. 어떤 종류의 활동을 더 즐기시나요?",
        options: ["쇼핑, 스파 등 편안한 실내 활동", "하이킹, 서핑 등 활동적인 액티비티", "둘 다 적절히 즐기는 편"],
        category: "activity"
    },
    {
        question: "7. 누구와 함께하는 여행을 계획하시나요?",
        options: ["나홀로 떠나는 자유로운 여행", "연인 또는 친구와 함께하는 여행", "온 가족이 함께하는 여행"],
        category: "companion"
    },
    {
        question: "8. 문화 예술 경험 중 어떤 것을 선호하시나요?",
        options: ["박물관, 미술관, 유적지 탐방", "뮤지컬, 콘서트 등 공연 관람", "현지 문화와 축제 체험"],
        category: "art"
    },
    {
        question: "9. 여행지에서의 이동은 어떤 방식을 선호하시나요?",
        options: ["대중교통으로 즐기는 뚜벅이 여행", "렌터카로 즐기는 자유로운 드라이브", "편리한 택시 또는 투어 상품 이용"],
        category: "transport"
    },
    {
        question: "10. 여행지의 분위기는 어떤 곳이 좋으신가요?",
        options: ["조용하고 한적한 분위기", "활기차고 에너지 넘치는 분위기", "상관 없음"],
        category: "vibe"
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
    
    // 이전 답변이 있으면 해당 버튼 스타일을 유지하기 위한 로직 추가
    const selectedValue = userAnswers[q.category];

    quizContainer.innerHTML = `
        <div class="progress-bar">
            <div class="progress" style="width: ${((index) / questions.length) * 100}%"></div>
        </div>
        <div class="question">
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((option, i) => `
                    <button class="option-btn ${selectedValue === (i + 1) ? 'selected' : ''}" data-value="${i + 1}">${option}</button>
                `).join('')}
            </div>
        </div>
        <div class="navigation-buttons">
            ${index > 0 ? '<button id="prev-btn">이전</button>' : ''}
        </div>
    `;

    const optionBtns = quizContainer.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 선택된 버튼에 'selected' 클래스 추가
            optionBtns.forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
            
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
    
    // 0.2초 후에 다음 질문으로 넘어갑니다.
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            calculateResult();
        }
    }, 200);
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
         <button id="list-btn">전체 목록 보기</button>
    `;

    const retryBtn = document.getElementById('retry-btn');
    retryBtn.addEventListener('click', () => {
        location.reload();
    });

    const listBtn = document.getElementById('list-btn');
    listBtn.addEventListener('click', () => {
        window.location.href = 'list.html';
    });
}

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion(currentQuestionIndex);
});
