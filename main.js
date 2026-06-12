document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. MENU RESPONSIVO (MOBILE)
    // ==========================================================================
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("ativo");
        });

        // Fecha o menu automaticamente ao clicar em qualquer link (melhora a UX)
        const navLinks = nav.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("ativo");
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
            // Adiciona a classe base de revelação se ela não existir no HTML
            if (!elemento.classList.contains("reveal")) {
                elemento.classList.add("reveal");
            }

            const topoElemento = elemento.getBoundingClientRect().top;

            if (topoElemento < gatilhoJanela) {
                elemento.classList.add("ativo");
            }
        });
    };

    // Executa uma vez ao carregar para mostrar os elementos que já estão no topo
    checarScroll(); 
    // Executa a função toda vez que o usuário usar o scroll
    window.addEventListener("scroll", checarScroll);

    // ==========================================================================
    // 3. EFEITO DIGITAÇÃO NO TÍTULO principal
    // ==========================================================================
    const titulo = document.getElementById("titulo");
    if (titulo) {
        const textoOriginal = "Agro Forte";
        titulo.innerText = ""; // Limpa o texto inicial para começar o efeito
        let index = 0;

        const digitar = () => {
            if (index < textoOriginal.length) {
                titulo.innerText += textoOriginal.charAt(index);
                index++;
                setTimeout(digitar, 150); // Velocidade da digitação (em milissegundos)
            }
        };

        // Pequeno atraso para iniciar a digitação de forma elegante
        setTimeout(digitar, 500);
    }
});