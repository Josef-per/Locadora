const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const enigmas = {
    1: {
        numero: "Enigma 01",
        titulo: "A Origem",
        pergunta: "Bem... talvez não seja por onde tudo começou, mas foi por onde eu comecei a falar com você.",
        resposta: "ETEC"
    },

    2: {
        numero: "Enigma 02",
        titulo: "Enola Holmes",
        pergunta: "Posso até ter sido uma detetive nesse filme, mas tem séries que eu sou bem mais forte do que aparento ser. Que número eu sou?",
        resposta: "11"
    },

    3: {
        numero: "Enigma 03",
        titulo: "Noite de cinema",
        pergunta: "Às vezes uma noite de cinema com sobretudo vermelho pode virar um clipe viral, quem sabe quando o próximo zumbi pode dançar com você.",
        resposta: "Thriller"
    },

    4: {
        numero: "Enigma 04",
        titulo: "Regras",
        pergunta: "Me deixa tão triste você sempre ter tantas regras, ser tão regrada... Até parece que todo mundo quer... Ué não era pra estar em inglês, tradutor fdp. Espero que ache a música HEHEHEHE.",
        resposta: "Everybody Wants To Rule The World"
    },

    5: {
        numero: "Enigma 05",
        titulo: "Que noite!",
        pergunta: "Acho que de músicas já terminamos... mas aquela noite no cinema foi muito boa. Mr.Kitty consegue fazer uma música que encaixa bem com você e seus olhos.",
        resposta: "After Dark"
    },

    6: {
        numero: "Enigma 06",
        titulo: "Transmissão",
        pergunta: "Eu queria fazer de fitas VHS, mas só sei de músicas... de outro universo eu já fiz parte. Talvez isso te lembre alguém.",
        resposta: "Dante"
    },

    7: {
        numero: "Enigma 07",
        titulo: "Sexta-feira",
        pergunta: "Quando você abre a porta toda vez pra mim na sexta sempre me sinto: I just wanna get high with my lover...",
        resposta: "Moonlight"
    },

    8: {
        numero: "Enigma 08",
        titulo: "Elementos",
        pergunta: "Podemos ser fogo e água, opostos na teoria... mas ainda assim do mesmo universo.",
        resposta: "Ordem Paranormal"
    },

    9: {
        numero: "Enigma 09",
        titulo: "Cartas",
        pergunta: "Às vezes cartas escondem mais do que uma simples leitura... então quem é você nisso tudo?",
        resposta: "A minha nerd das artes"
    },

    10: {
        numero: "Enigma 10",
        titulo: "Dança",
        pergunta: "Os coreanos da LNGSHOT podem tentar, mas nunca vão ser o rei do pop... ou vão?",
        resposta: "Moonwalking"
    },

    11: {
        numero: "Enigma 11",
        titulo: "Retrospectiva",
        pergunta: "Essa foi minha música de 2022... não sinto falta do ano, mas sinto de quem estava comigo.",
        resposta: "As It Was"
    },

    12: {
        numero: "Enigma 12",
        titulo: "Fuga",
        pergunta: "Você sempre quis fugir desse inferno... talvez a Kate Bush tenha a resposta.",
        resposta: "Running Up That Hill"
    },

    13: {
        numero: "Enigma 13",
        titulo: "Cyberpunk",
        pergunta: "No meio desse caos, eu só queria um lugar pra ficar em paz... e eu encontrei isso e ____.",
        resposta: "I Really Want to Stay at Your House"
    },

    14: {
        numero: "Enigma 14",
        titulo: "Proteção",
        pergunta: "Mesmo longe, você sempre me protegeu... como um ser místico.",
        resposta: "Anjo da Guarda"
    },

    15: {
        numero: "Enigma 15",
        titulo: "Final",
        pergunta: "Qual vai ser o nome do nosso gato? SIM ESSE MESMO.",
        resposta: "Copo"
    }
};

// PROGRESSO SALVO
let progresso = Number(localStorage.getItem("progresso")) || 1;


//Block de acesso direto 
if (id > progresso) {
    document.body.innerHTML = "<h1>Você não desbloqueou este enigma ainda</h1>";
    throw new Error("Acesso bloqueado");
}

// PROTEÇÃO: enigma não existe
if (!enigmas[id]) {
    document.body.innerHTML = "<h1>Enigma não encontrado</h1>";
    throw new Error("ID inválido");
}


document.getElementById("titulo").textContent = enigmas[id].titulo;
document.getElementById("pergunta").textContent = enigmas[id].pergunta;
document.getElementById("numero").textContent = enigmas[id].numero;

function verifyResposta() {
    const input = document.querySelector("#resposta");
    const respostaUser = input.value.trim();
    const correta = enigmas[id].resposta;

    if (respostaUser.toLowerCase() === correta.toLowerCase()) {
        alert("Acertou!");

        if (id === progresso) {
            progresso++;
            localStorage.setItem("progresso", progresso);
        }

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 800);

    } else {
        alert("Errou!");
    }
}