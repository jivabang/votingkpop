
const questions = [
    {
        question: "1. 얼마나 활동적인 여행을 선호하시나요?",
        options: ["1: 전혀 활동적이지 않음", "2", "3", "4", "5: 매우 활동적임"],
        category: "activity"
    },
    {
        question: "2. 여행지에서 휴양과 관광 중 무엇을 더 선호하시나요?",
        options: ["1: 완전한 휴양", "2", "3", "4", "5: 꽉 찬 관광"],
        category: "activity"
    },
    {
        question: "3. 도시의 화려함과 자연의 평온함 중 어떤 것을 더 선호하시나요?",
        options: ["1: 자연의 평온함", "2", "3", "4", "5: 도시의 화려함"],
        category: "city"
    },
    {
        question: "4. 여행 중 쇼핑을 얼마나 즐기시나요?",
        options: ["1: 전혀 안 함", "2", "3", "4", "5: 매우 즐김"],
        category: "city"
    },
    {
        question: "5. 역사 유적지나 박물관 방문을 얼마나 좋아하시나요?",
        options: ["1: 전혀 안 좋아함", "2", "3", "4", "5: 매우 좋아함"],
        category: "city"
    },
    {
        question: "6. 조용한 해변에서 책을 읽는 것을 얼마나 선호하시나요?",
        options: ["1: 전혀 선호하지 않음", "2", "3", "4", "5: 매우 선호함"],
        category: "relaxation"
    },
    {
        question: "7. 스파나 마사지를 받는 것을 얼마나 즐기시나요?",
        options: ["1: 전혀 즐기지 않음", "2", "3", "4", "5: 매우 즐김"],
        category: "relaxation"
    },
    {
        question: "8. 숲 속이나 산책로를 걷는 것을 얼마나 좋아하시나요?",
        options: ["1: 전혀 안 좋아함", "2", "3", "4", "5: 매우 좋아함"],
        category: "nature"
    },
    {
        question: "9. 야생동물을 관찰하는 것에 얼마나 관심이 있으신가요?",
        options: ["1: 전혀 없음", "2", "3", "4", "5: 매우 많음"],
        category: "nature"
    },
    {
        question: "10. 여행 예산은 어느 정도로 생각하시나요?",
        options: ["1: 매우 저렴하게", "2", "3", "4", "5: 매우 여유롭게"],
        category: "budget"
    }
];

const destinations = [
    { name: "파리, 프랑스", scores: { activity: 4, city: 5, relaxation: 2, nature: 1, budget: 4 } },
    { name: "발리, 인도네시아", scores: { activity: 3, city: 2, relaxation: 5, nature: 4, budget: 3 } },
    { name: "뉴욕, 미국", scores: { activity: 5, city: 5, relaxation: 1, nature: 1, budget: 5 } },
    { name: "스위스 인터라켄", scores: { activity: 5, city: 1, relaxation: 3, nature: 5, budget: 4 } },
    { name: "교토, 일본", scores: { activity: 3, city: 4, relaxation: 4, nature: 3, budget: 3 } },
    { name: "보라카이, 필리핀", scores: { activity: 2, city: 1, relaxation: 5, nature: 3, budget: 2 } },
    { name: "로마, 이탈리아", scores: { activity: 4, city: 5, relaxation: 2, nature: 1, budget: 4 } },
    { name: "그랜드 캐니언, 미국", scores: { activity: 4, city: 1, relaxation: 2, nature: 5, budget: 3 } },
    { name: "방콕, 태국", scores: { activity: 4, city: 4, relaxation: 3, nature: 2, budget: 2 } },
    { name: "아이슬란드", scores: { activity: 4, city: 2, relaxation: 2, nature: 5, budget: 5 } }
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

function displayQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');
        
        for (let i = 1; i <= 5; i++) {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${index}`;
            radio.value = i;
            radio.required = true;
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(i));
            optionsDiv.appendChild(label);
        }
        
        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function calculateResult() {
    const userScores = {
        activity: 0,
        city: 0,
        relaxation: 0,
        nature: 0,
        budget: 0
    };

    const answerGroups = document.querySelectorAll('.options');
    let allAnswered = true;

    answerGroups.forEach((group, index) => {
        const selected = group.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            const score = parseInt(selected.value);
            const category = questions[index].category;
            userScores[category] += score;
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert("모든 질문에 답변해주세요!");
        return;
    }

    let bestMatch = null;
    let minDifference = Infinity;

    destinations.forEach(destination => {
        let difference = 0;
        for (const category in userScores) {
            difference += Math.abs(userScores[category] - destination.scores[category]);
        }
        
        if (difference < minDifference) {
            minDifference = difference;
            bestMatch = destination;
        }
    });

    resultContainer.innerHTML = `<h2>추천 여행지: ${bestMatch.name}</h2>`;
}

displayQuestions();
submitBtn.addEventListener('click', calculateResult);
