window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ========================= */
/* REVEAL NO SCROLL */
/* ========================= */

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));

/* ========================= */
/* ACCORDION NOVENA */
/* ========================= */

document.querySelectorAll(".novena-item").forEach(item => {
    item.querySelector(".novena-toggle").addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

const textoOracao = document.querySelector(".texto-oracao");

const btnCopiar = document.querySelector(".btn-copiar");
const btnLeitura = document.querySelector(".btn-leitura");

/* COPIAR ORAÇÃO */
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(textoOracao.innerText);
    btnCopiar.innerText = "Copiado ✔";

    setTimeout(() => {
        btnCopiar.innerText = "Copiar Oração";
    }, 2000);
});

/* MODO LEITURA (simples) */
btnLeitura.addEventListener("click", () => {
    document.body.classList.toggle("modo-leitura");
});

const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});