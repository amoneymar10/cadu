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

    const comparativoToggle = document.getElementById('comparativo-toggle');
    const comparativoGrid = document.getElementById('comparativo-grid');

    if (comparativoToggle && comparativoGrid) {
        comparativoToggle.addEventListener('click', () => {
            const mostrandoDepois = comparativoGrid.classList.toggle('mostrar-depois');
            comparativoGrid.classList.remove('mostrar-antes');
            comparativoToggle.innerText = mostrandoDepois ? 'Mostrar comparativo completo' : 'Mostrar apenas o depois';
        });
    }

}); // Fim do DOMContentLoaded