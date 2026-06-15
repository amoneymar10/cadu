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

    const fontDecrease = document.getElementById("font-size-decrease");
    const fontIncrease = document.getElementById("font-size-increase");
    const root = document.documentElement;
    const savedFontSize = Number(localStorage.getItem("fontSize")) || 16;
    let currentFontSize = savedFontSize;

    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 28) currentFontSize = 28;
    root.style.fontSize = `${currentFontSize}px`;

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

    if (fontIncrease) {
        fontIncrease.addEventListener("click", () => {
            if (currentFontSize < 28) {
                currentFontSize += 2;
                root.style.fontSize = `${currentFontSize}px`;
                localStorage.setItem("fontSize", currentFontSize);
            }
        });
    }

    if (fontDecrease) {
        fontDecrease.addEventListener("click", () => {
            if (currentFontSize > 12) {
                currentFontSize -= 2;
                root.style.fontSize = `${currentFontSize}px`;
                localStorage.setItem("fontSize", currentFontSize);
            }
        });
    }

    const quizData = [
        {
            question: 'Qual tecnologia permite aplicar insumos apenas onde o solo realmente precisa?',
            options: ['Plantio direto', 'Irrigação por gotejamento', 'Agricultura de precisão', 'Roçadas manuais'],
            correctAnswer: 2
        },
        {
            question: 'Qual prática ajuda a reduzir erosão e preservar a umidade do solo?',
            options: ['Queima controlada', 'Plantio direto', 'Rotação de culturas', 'Uso intensivo de fertilizantes'],
            correctAnswer: 1
        },
        {
            question: 'Qual recurso é mais usado para monitoramento de lavouras em tempo real?',
            options: ['Drones', 'Subsolagem', 'Pivôs centrais', 'Canteiros elevados'],
            correctAnswer: 0
        },
        {
            question: 'A integração lavoura-pecuária-floresta (ILPF) é importante porque:',
            options: ['Aumenta a monocultura', 'Melhora a biodiversidade e o uso da terra', 'Substitui gestão de dados', 'Aumenta apenas a irrigação'],
            correctAnswer: 1
        }
    ];

    const quizQuestion = document.querySelector('.quiz-question');
    const quizOptions = document.querySelector('.quiz-options');
    const quizNext = document.getElementById('quiz-next');
    const quizResults = document.querySelector('.quiz-results');

    let currentQuizIndex = 0;
    let quizScore = 0;
    let questionAnswered = false;

    const loadQuizQuestion = () => {
        const item = quizData[currentQuizIndex];
        quizQuestion.innerText = item.question;
        quizOptions.innerHTML = '';
        quizResults.innerText = '';
        quizNext.classList.add('hidden');
        questionAnswered = false;

        item.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.type = 'button';
            optionButton.className = 'quiz-option';
            optionButton.innerText = option;
            optionButton.dataset.index = index;
            optionButton.addEventListener('click', () => {
                if (questionAnswered) return;
                questionAnswered = true;

                if (index === item.correctAnswer) {
                    optionButton.classList.add('correct');
                    quizResults.innerText = 'Resposta correta!';
                    quizScore += 1;
                } else {
                    optionButton.classList.add('incorrect');
                    quizResults.innerText = `Resposta incorreta. A resposta correta é: "${item.options[item.correctAnswer]}".`;
                    const correctButton = quizOptions.querySelector(`[data-index="${item.correctAnswer}"]`);
                    if (correctButton) correctButton.classList.add('correct');
                }

                quizNext.classList.remove('hidden');
            });
            quizOptions.appendChild(optionButton);
        });
    };

    if (quizQuestion && quizOptions && quizNext && quizResults) {
        loadQuizQuestion();

        quizNext.addEventListener('click', () => {
            currentQuizIndex += 1;
            if (currentQuizIndex < quizData.length) {
                loadQuizQuestion();
            } else {
                quizQuestion.innerText = `Quiz finalizado! Sua pontuação foi ${quizScore} de ${quizData.length}.`;
                quizOptions.innerHTML = '';
                quizResults.innerText = 'Obrigado por participar!';
                quizNext.classList.add('hidden');
            }
        });
    }

}); // Fim do DOMContentLoaded