document.addEventListener("DOMContentLoaded", () => {
/* ==========================================================================
0. Variáveis CSS (Custom Properties) - O Segredo para um Dark Mode Limpo
   ========================================================================== */
:root {
    /* Tema Palmeiras */
    --bg-body: #edf7ee;
    --text-main: #111111;
    --text-muted: #4a5a4d;

    --green-primary: #0d7a2c;
    --green-hover: #094f20;
    --green-light: #dfeee1;
    --green-dark: #052d17;
    --gold-primary: #f5d76d;
    --gold-deep: #caa12b;

    --header-bg: var(--green-primary);
    --card-bg: #ffffff;
    --card-border: #dfeadf;
    --shadow-sm: rgba(0, 0, 0, 0.05);
    --shadow-md: rgba(0, 0, 0, 0.12);
    --shadow-lg: rgba(0, 0, 0, 0.18);

    --footer-bg: #062d1a;
    --footer-text: #edf6ee;
    --bg-image-overlay: rgba(237, 247, 238, 0.88);
}

/* ==========================================================================
   1. Reset & Base Styles
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(var(--bg-image-overlay), var(--bg-image-overlay)), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1800&q=80') no-repeat center center fixed;
    background-size: cover;
    color: var(--text-main);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

section[id] {
    scroll-margin-top: 100px;
}

/* Garante visibilidade e foco para acessibilidade */
:focus-visible {
    outline: 2px dashed var(--green-primary);
    outline-offset: 4px;
}

/* ==========================================================================
   2. Header & Navigation
   ========================================================================== */
header {
    background: linear-gradient(135deg, var(--green-dark), var(--green-primary));
    color: white;
    padding: 15px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 16px var(--shadow-md);
    transition: background-color 0.3s ease;
}

header .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

nav {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 5px;
}

nav::-webkit-scrollbar {
    display: none;
}

nav a {
    white-space: nowrap;
    flex-shrink: 0;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover, nav a:focus-visible {
    color: var(--gold-primary);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

/* ==========================================================================
   3. Hero Section (Destaque Principal)
   ========================================================================== */
.hero {
    background: linear-gradient(rgba(4, 28, 16, 0.72), rgba(5, 40, 22, 0.86)), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1800&q=80') no-repeat center center/cover;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    padding: 20px;
}

.hero-conteudo {
    max-width: 800px;
}

.hero-conteudo h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: bold;
    color: var(--gold-primary);
    text-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
}

.hero-conteudo p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #f1f5f1;
}

.btn-cta {
    background: linear-gradient(135deg, var(--gold-primary), var(--gold-deep));
    color: #101010;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 30px;
    transition: 0.3s;
    box-shadow: 0 4px 15px var(--shadow-md);
    display: inline-block;
}

.btn-cta:hover, .btn-cta:focus-visible {
    background: var(--green-hover);
    transform: scale(1.05);
}

.banner {
    text-align: center;
    padding: 30px;
}

.banner img {
    width: 90%;
    max-width: 800px;
    border-radius: 15px;
    box-shadow: 0 5px 15px var(--shadow-lg);
    height: auto;
}

.intro {
    text-align: center;
    padding: 40px 20px 20px;
    max-width: 860px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
}

.section-header h2 {
    font-size: clamp(2rem, 3vw, 2.7rem);
    margin-bottom: 10px;
}

.section-header.small h2 {
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
}

.eyebrow {
    display: inline-block;
    margin-bottom: 18px;
    letter-spacing: 0.18em;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--gold-primary);
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 22px;
}

.btn-cta-secondary {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: #fff;
}

.idolos-section {
    margin: 30px auto 0;
    max-width: 1200px;
    padding: 36px 24px;
}

.idolos-intro {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 24px;
    color: var(--text-muted);
    font-size: 1.05rem;
}

.idolos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.idolos-action {
    display: flex;
    justify-content: center;
    margin-top: 28px;
}

.idol-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(13, 122, 44, 0.08), rgba(255, 255, 255, 0.9));
    border: 1px solid var(--card-border);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 18px 30px rgba(8, 61, 28, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.idol-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 32px rgba(8, 61, 28, 0.12);
}

.idol-card::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, var(--gold-primary), var(--green-primary));
}

.idol-visual {
    height: 220px;
    background-size: cover;
    background-position: center;
    filter: saturate(1.08);
}

.idol-marcos {
    background-image: linear-gradient(rgba(7, 56, 25, 0.18), rgba(7, 56, 25, 0.18)), url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80');
}

.idol-rivaldo {
    background-image: linear-gradient(rgba(7, 56, 25, 0.18), rgba(7, 56, 25, 0.18)), url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80');
}

.idol-dudu {
    background-image: linear-gradient(rgba(7, 56, 25, 0.18), rgba(7, 56, 25, 0.18)), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80');
}

.idol-info {
    padding: 18px 18px 22px;
}

.idol-tag {
    display: inline-block;
    margin-bottom: 10px;
    background: var(--green-light);
    color: var(--green-primary);
    border-radius: 999px;
    padding: 6px 11px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.idol-card h3 {
    margin-bottom: 8px;
    font-size: 1.6rem;
    color: var(--green-dark);
}

.idol-card p {
    color: var(--text-muted);
    line-height: 1.6;
}

.story-grid {
    display: grid;
    grid-template-columns: 1.5fr 0.8fr;
    gap: 30px;
    align-items: center;
}

.badge-box {
    background: linear-gradient(135deg, var(--green-dark), var(--green-primary));
    border-radius: 22px;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    box-shadow: 0 18px 34px rgba(9, 79, 32, 0.25);
}

.badge-number {
    font-size: clamp(2.8rem, 5vw, 4.4rem);
    font-weight: 800;
    color: var(--gold-primary);
}

.badge-label {
    font-size: 1rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 8px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
    margin-top: 18px;
}

.feature-card {
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(13,122,44,0.06));
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 22px 18px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.feature-kicker {
    display: inline-block;
    margin-bottom: 12px;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--green-primary);
    font-weight: 700;
}

.feature-card h3 {
    color: var(--green-primary);
    margin-bottom: 8px;
    font-size: 1.5rem;
}

.feature-card p {
    color: var(--text-muted);
    line-height: 1.6;
}

/* ==========================================================================
   4. Cards de Conteúdo
   ========================================================================== */
.card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    margin: 25px auto;
    max-width: 1000px;
    padding: 30px;
    border-radius: 18px;
    box-shadow: 0 8px 24px var(--shadow-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 32px var(--shadow-lg);
}

.card h2 {
    color: var(--green-primary);
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.card ul {
    margin-top: 15px;
    padding-left: 20px;
}

.card li {
    margin-bottom: 8px;
    color: var(--text-main);
}

.card a {
    color: var(--green-primary);
    text-decoration: none;
    font-weight: bold;
}

.card a:hover {
    text-decoration: underline;
}

.comparativo {
    background: var(--card-bg);
}

.comparativo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.comparativo-grid.mostrar-depois .comparativo-antes {
    display: none;
}

.comparativo-grid.mostrar-antes .comparativo-depois {
    display: none;
}

.comparativo-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 10px 30px var(--shadow-sm);
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.comparativo-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    border-radius: 14px;
    margin-bottom: 18px;
}

.comparativo-card:hover {
    transform: translateY(-4px);
    border-color: var(--green-primary);
}

.comparativo-card h3 {
    margin-bottom: 14px;
    color: var(--green-primary);
}

.comparativo-card ul {
    list-style: none;
    padding-left: 0;
}

.comparativo-card li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 10px;
    color: var(--text-main);
}

.comparativo-card li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--green-primary);
}

@media (max-width: 720px) {
    .comparativo-grid {
        grid-template-columns: 1fr;
    }
}

/* ==========================================================================
   5. Estatísticas & Dashboard
   ========================================================================== */
.impacto {
    padding: 40px 20px;
    text-align: center;
}

.impacto h2 {
    margin-bottom: 20px;
    color: var(--green-primary);
}

.estatisticas {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px 0;
}

.box {
    background: var(--card-border);
    color: var(--text-main);
    padding: 25px;
    border-radius: 12px;
    width: 250px;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px var(--shadow-md);
}

.box {
    background: var(--green-primary);
    color: white;
}

.box:hover {
    transform: scale(1.08);
}

.box h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

/* ==========================================================================
   6. Galeria de Tecnologias
   ========================================================================== */
.galeria-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 25px;
}

.galeria-item {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px var(--shadow-sm);
    border: 1px solid var(--card-border);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.galeria-item img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.galeria-legenda {
    padding: 15px;
}

.galeria-legenda h3 {
    font-size: 1.1rem;
    color: var(--green-primary);
    margin-bottom: 5px;
}

.galeria-legenda p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.4;
}

.galeria-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px var(--shadow-md);
}

.galeria-item:hover img {
    transform: scale(1.06);
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 22px;
}

.video-card {
    display: block;
    background: linear-gradient(180deg, rgba(13, 122, 44, 0.08), rgba(255, 255, 255, 0.05));
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 22px 18px;
    text-decoration: none;
    color: var(--text-main);
    box-shadow: 0 8px 18px rgba(0,0,0,0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-card:hover, .video-card:focus-visible {
    transform: translateY(-5px);
    box-shadow: 0 16px 28px rgba(9, 79, 32, 0.15);
}

.video-tag {
    display: inline-block;
    margin-bottom: 10px;
    background: var(--green-primary);
    color: white;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.video-card h3 {
    color: var(--green-primary);
    margin-bottom: 8px;
    font-size: 1.3rem;
}

.video-card p {
    color: var(--text-muted);
    line-height: 1.5;
}

/* ==========================================================================
   7. Footer Moderno & Utilitários
   ========================================================================== */
.footer-moderno {
    background: linear-gradient(180deg, var(--footer-bg), #041b11);
    color: var(--footer-text);
    padding: 50px 20px 20px 20px;
    margin-top: 50px;
    font-size: 0.95rem;
    transition: background-color 0.3s ease;
}

.footer-container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-coluna h3 {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: bold;
    position: relative;
}

.footer-coluna h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 40px;
    height: 2px;
    background: var(--gold-primary);
}

.footer-coluna ul {
    list-style: none;
}

.footer-coluna ul li {
    margin-bottom: 10px;
}

.footer-coluna ul li a {
    color: var(--green-light);
    text-decoration: none;
    transition: 0.3s ease;
}

.footer-coluna ul li a:hover, .footer-coluna ul li a:focus-visible {
    color: #ffffff;
    padding-left: 5px;
}

.redes-sociais {
    margin-top: 15px;
    display: flex;
    gap: 15px;
}

.redes-sociais a {
    color: #ffffff;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 0.85rem;
    transition: 0.3s;
}

.redes-sociais a:hover, .redes-sociais a:focus-visible {
    background: var(--green-primary);
    transform: translateY(-3px);
}

.footer-direitos {
    text-align: center;
    padding-top: 20px;
    font-size: 0.85rem;
    color: #a5d6a7;
}

.topo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, var(--gold-primary), var(--gold-deep));
    color: #101010;
    padding: 12px 15px;
    border-radius: 50%;
    text-decoration: none;
    font-size: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
    z-index: 999;
}

.topo.visivel {
    opacity: 1;
    pointer-events: auto;
}

.topo:hover, .topo:focus-visible {
    transform: scale(1.15);
}

/* Animações e Efeitos */
.reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all .8s ease;
}

.reveal.ativo {
    opacity: 1;
    transform: translateY(0);
}

#titulo::after {
    content: "|";
    animation: piscando .8s infinite;
}

@keyframes piscando {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* ==========================================================================
   8. Responsive Media Queries (Mobile Breakdown)
   ========================================================================== */
/* ==========================================================================
   8. Responsive Media Queries (Mobile Breakdown)
   ========================================================================== */
@media (max-width: 768px) {
    header .container {
        position: relative;
    }

    .menu-toggle {
        display: block;
    }

    nav {
        display: none;
        flex-direction: column;
        gap: 15px;
        background: var(--header-bg);
        padding: 20px;
        border-radius: 8px;
        position: absolute;
        top: 60px;
        right: 0;
        width: calc(100vw - 40px);
        max-width: 320px;
        box-shadow: 0 4px 10px var(--shadow-md);
    }

    nav.ativo {
        display: flex;
    }

    nav a {
        width: 100%;
    }

    .estatisticas {
        flex-direction: column;
        align-items: center;
    }

    .box {
        width: 100%;
        max-width: 320px;
    }

    .banner img {
        width: 100%;
    }

    .hero-conteudo h2 {
        font-size: 2rem;
    }

    .hero-conteudo p {
        font-size: 1rem;
    }

    .story-grid {
        grid-template-columns: 1fr;
    }

    .footer-container {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }

    .footer-coluna h3::after {
        left: 50%;
        transform: translateX(-50%);
    }

    .redes-sociais {
        justify-content: center;
    }
}

@media (min-width: 600px) {
    .options-grid {
        grid-template-columns: 1fr 1fr;
    }
}
