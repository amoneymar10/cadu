document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. MENU RESPONSIVO (MOBILE) com Atributos ARIA
       ========================================================================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const estaAtivo = nav.classList.toggle("ativo");
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

    /* ==========================================================================
       2. ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
       ========================================================================== */
    const elementosReveal = document.querySelectorAll(".reveal, .card, .box, .galeria-item");

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("ativo");
            }
        });
    }, { threshold: 0.15 });

    elementosReveal.forEach(el => {
        if (!el.classList.contains("reveal")) {
            el.classList.add("reveal"); 
        }
        revealOnScroll.observe(el);
    });

    /* ==========================================================================
       3. EXIBIÇÃO DO BOTÃO VOLTAR AO TOPO
       ========================================================================== */
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

    /* ==========================================================================
       4. EFEITO DIGITAÇÃO NO TÍTULO PRINCIPAL
       ========================================================================== */
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

    /* ==========================================================================
       5. CONTROLE DO MODO ESCURO (DARK MODE)
       ========================================================================== */
    const darkToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const modoSalvo = localStorage.getItem("theme");

    if (modoSalvo === "dark") {
        body.classList.add("dark-mode");
        if (darkToggle) darkToggle.innerText = '☀️ Modo Claro';
    }

    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                darkToggle.innerText = '☀️ Modo Claro';
                localStorage.setItem("theme", "dark");
            } else {
                darkToggle.innerText = '🌓 Modo Escuro';
                localStorage.setItem("theme", "light");
            }
        });
    }

    /* ==========================================================================
       6. LÓGICA DO QUIZ INTERATIVO (Tema: Agro e Tecnologia)
       ========================================================================== */
    const quizData = [
        {
            question: "O que é Agricultura de Precisão?",
            options: [
                "Plantio manual e tradicional",
                "Uso de dados e tecnologia para aplicar insumos na medida exata",
                "Cultivo exclusivo de produtos sem sementes",
                "Uso indiscriminado de defensivos agrícolas"
            ],
            correctAnswer: "Uso de dados e tecnologia para aplicar insumos na medida exata"
        },
        {
            question: "Qual destas tecnologias é amplamente usada para monitoramento aéreo rápido de pragas nas lavouras?",
            options: ["Sensores IoT de solo", "Tratores Autônomos", "Drones", "Sistemas de Irrigação"],
            correctAnswer: "Drones"
        },
        {
            question: "O que significa a sigla ESG, essencial para o agronegócio moderno?",
            options: [
                "Energia, Sustentabilidade e Ganhos",
                "Ecologia, Solo e Genética",
                "Environmental, Social, and Governance (Ambiental, Social e Governança)",
                "Economic System of Growth"
            ],
            correctAnswer: "Environmental, Social, and Governance (Ambiental, Social e Governança)"
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

    // Previne erro caso o HTML do quiz não exista na página
    if (questionText && optionsContainer) {
        function loadQuestion() {
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
            const buttons = optionsContainer.querySelectorAll("button");
            buttons.forEach(btn => btn.disabled = true);

            if (selectedOption === correctOption) {
                selectedButton.classList.add("correct");
                feedbackText.innerText = "🎉 Resposta Certa!";
                feedbackText.style.color = "#2e7d32";
                score++;
            } else {
                selectedButton.classList.add("wrong");
                feedbackText.innerText = `❌ Errado! A resposta certa era: ${correctOption}`;
                feedbackText.style.color = "#d32f2f";
                
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
            
            let message = "";
            if (score === quizData.length) {
                message = "🏆 Excelente! Você é um especialista no Agro 4.0!";
            } else if (score > 0) {
                message = "👍 Muito bom! Você está no caminho certo.";
            } else {
                message = "📚 Continue explorando nosso site para aprender mais!";
            }

            scoreText.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas!<br><br>${message}`;
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
    }

}); // Fim do DOMContentLoaded