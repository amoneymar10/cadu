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
        });
    }
}); // <-- Este fecha o document.addEventListener("DOMContentLoaded", () => { lá do início
});
   