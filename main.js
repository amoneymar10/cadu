document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. MENU RESPONSIVO (MOBILE) com Atributos ARIA
    // ==========================================================================
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const estaAtivo = nav.classList.toggle("ativo");
            // Atualiza o estado de acessibilidade para leitores de tela
            menuToggle.setAttribute("aria-expanded", estaAtivo);
        });

        const navLinks = nav.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("ativo");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ==========================================================================
    // 2. ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
    // ==========================================================================
    const elementosReveal = document.querySelectorAll(".reveal, .card, .box, .dash-card");

    const checarScroll = () => {
        const gatilhoJanela = window.innerHeight * 0.85; // Dispara quando o elemento atinge 85% da tela

        elementosReveal.forEach(elemento => {
            if (!elemento.classList.contains("reveal")) {
                elemento.classList.add("reveal");
            }

            const topoElemento = elemento.getBoundingClientRect().top;

            if (topoElemento < gatilhoJanela) {
                elemento.classList.add("ativo");
            }
        });
    };

    checarScroll(); 
    window.addEventListener("scroll", checarScroll);

    // ==========================================================================
    // 3. EXIBIÇÃO DO BOTÃO VOLTAR AO TOPO
    // ==========================================================================
    const botaoTopo = document.querySelector(".topo");
    
    if (botaoTopo) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                botaoTopo.classList.add("visivel");
            } else {
                botaoTopo.classList.remove("visivel");
            }
        });
    }

    // ==========================================================================
    // 4. EFEITO DIGITAÇÃO NO TÍTULO PRINCIPAL
    // ==========================================================================
    const titulo = document.getElementById("titulo");
    if (titulo) {
        const textoOriginal = "Agro Forte";
        titulo.innerText = ""; 
        let index = 0;

        const digitar = () => {
            if (index < textoOriginal.length) {
                titulo.innerText += textoOriginal.charAt(index);
                index++;
                setTimeout(digitar, 150); 
            }
        };

        setTimeout(digitar, 500);
    }

    // ==========================================================================
    // ==========================================================================
    // 5. CONTROLE DO MODO ESCURO (DARK MODE)
    // ==========================================================================
    const darkToggle = document.getElementById("dark-mode-toggle");
    const modoSalvo = localStorage.getItem("theme");

    // Verifica preferência anterior e injeta a classe se necessário
    if (modoSalvo === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Define de forma limpa o valor no localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
            // ==========================================
// LÓGICA DO QUIZ
// ==========================================
const quizData = [
    {
        question: "Qual dessas não é uma linguagem de programação?",
        options: ["Python", "HTML", "Java", "C++"],
        correctAnswer: "HTML" // HTML é linguagem de marcação
    },
    {
        question: "O que significa a sigla CSS?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Qual a principal função do JavaScript em um site?",
        options: ["Estruturar os textos", "Estilizar as cores", "Adicionar interatividade", "Criar bancos de dados"],
        correctAnswer: "Adicionar interatividade"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    // Reseta estado anterior
    feedbackText.innerText = "";
    nextBtn.style.display = "none";
    optionsContainer.innerHTML = "";

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn-option");
        button.onclick = () => checkAnswer(button, option, currentQuestion.correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedOption, correctOption) {
    // Desabilita todos os botões após a escolha
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctOption) {
        selectedButton.classList.add("correct");
        feedbackText.innerText = "🎉 Resposta Certa!";
        feedbackText.style.color = "#2e7d32";
        score++;
    } else {
        selectedButton.classList.add("wrong");
        feedbackText.innerText = `❌ Errado! A certa era: ${correctOption}`;
        feedbackText.style.color = "#d32f2f";
        
        // Destaca a correta
        buttons.forEach(btn => {
            if (btn.innerText === correctOption) {
                btn.classList.add("correct");
            }
        });
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreText.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    loadQuestion();
});

// Inicia o Quiz
loadQuestion();
        });
    }
}); // <-- Este fecha o document.addEventListener("DOMContentLoaded", () => { lá do início
});
   