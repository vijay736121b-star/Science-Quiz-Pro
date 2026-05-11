const quiz = [
{
question: "Which planet is known as the Red Planet?",
answers: ["Mars", "Earth", "Venus", "Jupiter"],
correct: "Mars",
reason: "Mars is called the Red Planet because of iron oxide on its surface."
},
{
question: "What is H2O?",
answers: ["Water", "Oxygen", "Salt", "Hydrogen"],
correct: "Water",
reason: "H2O is the chemical formula of water."
},
{
question: "Which planet is the largest?",
answers: ["Jupiter", "Mars", "Earth", "Venus"],
correct: "Jupiter",
reason: "Jupiter is the biggest planet in our solar system."
},
{
question: "What gas do plants absorb?",
answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
correct: "Carbon Dioxide",
reason: "Plants absorb carbon dioxide during photosynthesis."
},
{
question: "How many bones are in the adult human body?",
answers: ["206", "300", "150", "250"],
correct: "206",
reason: "An adult human body has 206 bones."
},
{
question: "Which organ pumps blood?",
answers: ["Heart", "Brain", "Lungs", "Kidney"],
correct: "Heart",
reason: "The heart pumps blood throughout the body."
},
{
question: "What is the boiling point of water?",
answers: ["100°C", "50°C", "120°C", "80°C"],
correct: "100°C",
reason: "Water boils at 100°C under normal conditions."
},
{
question: "Which vitamin comes from sunlight?",
answers: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
correct: "Vitamin D",
reason: "Sunlight helps the body produce Vitamin D."
},
{
question: "What force keeps us on Earth?",
answers: ["Gravity", "Magnetism", "Wind", "Energy"],
correct: "Gravity",
reason: "Gravity pulls objects toward Earth."
},
{
question: "Which gas do humans need to breathe?",
answers: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
correct: "Oxygen",
reason: "Humans need oxygen for respiration."
},
{
question: "Which planet is closest to the Sun?",
answers: ["Mercury", "Venus", "Earth", "Mars"],
correct: "Mercury",
reason: "Mercury is the nearest planet to the Sun."
},
{
question: "What part of plant conducts photosynthesis?",
answers: ["Leaf", "Root", "Stem", "Flower"],
correct: "Leaf",
reason: "Leaves contain chlorophyll for photosynthesis."
},
{
question: "Which blood cells fight infection?",
answers: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
correct: "White Blood Cells",
reason: "White blood cells protect the body from disease."
},
{
question: "Which planet has rings?",
answers: ["Saturn", "Earth", "Mars", "Mercury"],
correct: "Saturn",
reason: "Saturn is famous for its beautiful rings."
},
{
question: "What is the center of an atom called?",
answers: ["Nucleus", "Electron", "Proton", "Neutron"],
correct: "Nucleus",
reason: "The nucleus is at the center of an atom."
},
{
question: "What do bees produce?",
answers: ["Honey", "Milk", "Oil", "Water"],
correct: "Honey",
reason: "Bees make honey from flower nectar."
},
{
question: "Which animal is known as King of Jungle?",
answers: ["Lion", "Tiger", "Elephant", "Bear"],
correct: "Lion",
reason: "Lion is traditionally called King of Jungle."
},
{
question: "What is Earth’s natural satellite?",
answers: ["Moon", "Sun", "Mars", "Venus"],
correct: "Moon",
reason: "The Moon revolves around Earth."
},
{
question: "Which gas protects Earth from UV rays?",
answers: ["Ozone", "Oxygen", "Carbon Dioxide", "Helium"],
correct: "Ozone",
reason: "Ozone layer blocks harmful UV rays."
},
{
question: "How many planets are in Solar System?",
answers: ["8", "7", "9", "10"],
correct: "8",
reason: "There are 8 planets in our solar system."
},
{
question: "Which planet supports life?",
answers: ["Earth", "Mars", "Venus", "Jupiter"],
correct: "Earth",
reason: "Earth has water and oxygen needed for life."
},
{
question: "What is frozen water called?",
answers: ["Ice", "Steam", "Rain", "Mist"],
correct: "Ice",
reason: "Frozen water is called ice."
},
{
question: "Which organ helps us breathe?",
answers: ["Lungs", "Heart", "Brain", "Kidney"],
correct: "Lungs",
reason: "Lungs help in respiration."
},
{
question: "What is the nearest star to Earth?",
answers: ["Sun", "Moon", "Mars", "Venus"],
correct: "Sun",
reason: "The Sun is Earth’s nearest star."
},
{
question: "Which animal lives in water?",
answers: ["Fish", "Lion", "Dog", "Cat"],
correct: "Fish",
reason: "Fish are aquatic animals."
},
{
question: "Which planet is called Morning Star?",
answers: ["Venus", "Mars", "Mercury", "Saturn"],
correct: "Venus",
reason: "Venus is often visible in morning sky."
},
{
question: "What is the hardest natural substance?",
answers: ["Diamond", "Gold", "Iron", "Silver"],
correct: "Diamond",
reason: "Diamond is the hardest natural material."
},
{
question: "What color are healthy leaves?",
answers: ["Green", "Blue", "Red", "Black"],
correct: "Green",
reason: "Leaves are green because of chlorophyll."
},
{
question: "Which planet is famous for red spot?",
answers: ["Jupiter", "Mars", "Saturn", "Earth"],
correct: "Jupiter",
reason: "Jupiter has a giant red storm."
},
{
question: "Which gas is used in balloons?",
answers: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"],
correct: "Helium",
reason: "Helium is lighter than air."
},
{
question: "Which is the fastest land animal?",
answers: ["Cheetah", "Lion", "Tiger", "Horse"],
correct: "Cheetah",
reason: "Cheetah can run extremely fast."
},
{
question: "Which blood cells carry oxygen?",
answers: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
correct: "Red Blood Cells",
reason: "RBC carry oxygen through hemoglobin."
},
{
question: "What is needed for photosynthesis?",
answers: ["Sunlight", "Darkness", "Smoke", "Dust"],
correct: "Sunlight",
reason: "Plants need sunlight to make food."
},
{
question: "Which planet is known for life possibility?",
answers: ["Mars", "Venus", "Mercury", "Saturn"],
correct: "Mars",
reason: "Scientists study Mars for possible life."
},
{
question: "What is used to see tiny organisms?",
answers: ["Microscope", "Telescope", "Camera", "Mirror"],
correct: "Microscope",
reason: "Microscope magnifies tiny objects."
},
{
question: "Which gas do we exhale?",
answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
correct: "Carbon Dioxide",
reason: "Humans exhale carbon dioxide."
},
{
question: "Which planet is blue?",
answers: ["Earth", "Mars", "Mercury", "Venus"],
correct: "Earth",
reason: "Earth looks blue due to oceans."
},
{
question: "What is the process of water cycle called?",
answers: ["Evaporation", "Melting", "Freezing", "Cutting"],
correct: "Evaporation",
reason: "Water changes into vapor by evaporation."
},
{
question: "Which metal is liquid at room temperature?",
answers: ["Mercury", "Iron", "Gold", "Copper"],
correct: "Mercury",
reason: "Mercury remains liquid at room temperature."
},
{
question: "Which organ controls the body?",
answers: ["Brain", "Heart", "Liver", "Lungs"],
correct: "Brain",
reason: "Brain controls body activities."
},
{
question: "What do plants release?",
answers: ["Oxygen", "Carbon Dioxide", "Smoke", "Nitrogen"],
correct: "Oxygen",
reason: "Plants release oxygen during photosynthesis."
},
{
question: "Which animal lays eggs?",
answers: ["Hen", "Dog", "Cat", "Cow"],
correct: "Hen",
reason: "Hens reproduce by laying eggs."
},
{
question: "What is used to measure temperature?",
answers: ["Thermometer", "Scale", "Compass", "Clock"],
correct: "Thermometer",
reason: "Thermometer measures temperature."
},
{
question: "Which planet is hottest?",
answers: ["Venus", "Mercury", "Mars", "Earth"],
correct: "Venus",
reason: "Venus has extremely high temperatures."
},
{
question: "What protects our body from disease?",
answers: ["Immune System", "Bones", "Hair", "Skin"],
correct: "Immune System",
reason: "Immune system fights harmful germs."
},
{
question: "Which is the largest animal?",
answers: ["Blue Whale", "Elephant", "Shark", "Giraffe"],
correct: "Blue Whale",
reason: "Blue whale is the biggest animal on Earth."
},
{
question: "What is Earth mostly covered with?",
answers: ["Water", "Sand", "Ice", "Forest"],
correct: "Water",
reason: "About 71% of Earth is covered by water."
},
{
question: "Which gas is important for fire?",
answers: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
correct: "Oxygen",
reason: "Fire needs oxygen to burn."
},
{
question: "What do humans drink for survival?",
answers: ["Water", "Oil", "Juice", "Milk"],
correct: "Water",
reason: "Water is essential for life."
},
{
question: "Which is the smallest planet?",
answers: ["Mercury", "Mars", "Earth", "Venus"],
correct: "Mercury",
reason: "Mercury is the smallest planet."
},
{
question: "What shape is Earth?",
answers: ["Spherical", "Square", "Triangle", "Flat"],
correct: "Spherical",
reason: "Earth is nearly spherical in shape."
}
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("result").innerHTML = "";

    const q = quiz[currentQuestion];
    q.answers.sort(() => Math.random() - 0.5);

    document.getElementById("question").innerHTML =
"Question " + (currentQuestion + 1) + " / " + quiz.length + "<br><br>" + q.question;

    let buttons = "";

    for(let i = 0; i < q.answers.length; i++) {
        buttons += `
        <button onclick="checkAnswer('${q.answers[i]}')">
        ${q.answers[i]}
        </button>
        `;
    }

    document.getElementById("answers").innerHTML = buttons;
}

function checkAnswer(answer) {

    if(answer === quiz[currentQuestion].correct) {

        score++;

        document.getElementById("result").innerHTML =
        "✅ Correct Answer!<br>" + quiz[currentQuestion].reason;

    } else {

        document.getElementById("result").innerHTML =
        "❌ Wrong Answer!<br>" + quiz[currentQuestion].reason;
    }

    currentQuestion++;

    if(currentQuestion < quiz.length) {

        setTimeout(loadQuestion, 10000);

    } else {

        setTimeout(showScore, 10000);
    }
}

function showScore() {

    document.getElementById("question").innerHTML =
    "🎉 Quiz Finished!";

    document.getElementById("answers").innerHTML = "";

    let message = "";

if(score >= 45){
    message = "🎉 Excellent!";
}
else if(score >= 30){
    message = "👍 Good Job!";
}
else if(score >= 20){
    message = "🙂 Average Performance";
}
else{
    message = "📚 Practice More!";
}

document.getElementById("result").innerHTML =
"Your Score: " + score + "/" + quiz.length + "<br><br>" + message;
}

loadQuestion();
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}


function exitQuiz() {
    location.reload();
}
