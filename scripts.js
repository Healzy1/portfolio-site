// Carrossel 1
const carrossel1 = document.getElementById('carrossel1').querySelector('.container');
const prevButton1 = document.getElementById('prev1');
const nextButton1 = document.getElementById('next1');
let currentIndex1 = 0; // Índice da imagem atual para o carrossel 1

// Função para mover o carrossel 1 para a imagem correspondente
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

// Carrossel 2
const carrossel2 = document.getElementById('carrossel2').querySelector('.container');
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
let currentIndex2 = 0; // Índice da imagem atual para o carrossel 2

// Função para mover o carrossel 2 para a imagem correspondente
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

// Partes de scroll

document.querySelector('a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    window.scrollTo({
        top: 0, // Define o topo máximo da página
        behavior: 'smooth' // Rola suavemente até o topo
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Pega o id do alvo
        const targetElement = document.getElementById(targetId);

        // Distância do topo do alvo, subtraindo a altura do cabeçalho fixo (5px a menos)
        const offsetTop = targetElement.offsetTop - 60;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Animação de scroll dos projetos

document.addEventListener('DOMContentLoaded', function () {
    const projetos = document.querySelectorAll('.projeto');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, { threshold: 0.5 }); // Quando 50% do elemento estiver visível
    
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
            form.submit(); // Submete o formulário se tudo estiver correto
        }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
