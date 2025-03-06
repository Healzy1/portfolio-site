// carrossel 1
const carrossel1 = document.getElementById('carrossel1').querySelector('.container');
const prevButton1 = document.getElementById('prev1');
const nextButton1 = document.getElementById('next1');
let currentIndex1 = 0; // indice da imagem atual para o carrossel 1

// funcao carrossel 1
function moveToImage1(index) {
    const width = carrossel1.clientWidth;
    carrossel1.style.transform = `translateX(-${index * width}px)`;
}

prevButton1.addEventListener('click', () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
        moveToImage1(currentIndex1);
    }
});

nextButton1.addEventListener('click', () => {
    if (currentIndex1 < carrossel1.children.length - 1) {
        currentIndex1++;
    } else {
        currentIndex1 = 0;
    }
    moveToImage1(currentIndex1);
});

// carrossel 2
const carrossel2 = document.getElementById('carrossel2').querySelector('.container');
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
let currentIndex2 = 0; // indice imagem

// funcao carrossel 2
function moveToImage2(index) {
    const width = carrossel2.clientWidth;
    carrossel2.style.transform = `translateX(-${index * width}px)`;
}

prevButton2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        moveToImage2(currentIndex2);
    }
});

nextButton2.addEventListener('click', () => {
    if (currentIndex2 < carrossel2.children.length - 1) {
        currentIndex2++;
    } else {
        currentIndex2 = 0;
    }
    moveToImage2(currentIndex2);
});

// scroll

document.querySelector('a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0, // topo da pagina
        behavior: 'smooth' // scrolla suavemente ate o topo
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // pega o id do alvo
        const targetElement = document.getElementById(targetId);

        // dist do topo do alvo, subtraindo a altura do cabecalho
        const offsetTop = targetElement.offsetTop - 60;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// animacao de scroll dos projetos aparecendo

document.addEventListener('DOMContentLoaded', function () {
    const projetos = document.querySelectorAll('.projeto');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, { threshold: 0.5 }); // quando 50% do elemento estiver visivel
    
    projetos.forEach(projeto => {
        observer.observe(projeto);
    });
});

// validacao form

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede envio

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        let erro = "";

        if (nome.length < 3) {
            erro += "O nome deve ter pelo menos 3 caracteres.\n";
        }

        if (!validarEmail(email)) {
            erro += "Por favor, insira um email válido.\n";
        }

        if (mensagem.length < 10) {
            erro += "A mensagem deve ter pelo menos 10 caracteres.\n";
        }

        if (erro) {
            alert(erro);
        } else {
            alert("Formulário enviado com sucesso!");
            form.submit(); // submete o formulario se tudo estiver correto
        }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
