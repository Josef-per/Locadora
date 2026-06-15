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
        pergunta: "Eu queria fazer de fitas VHS, mas eu só sei de músicas, ou de poesias, bem isso não vai ser sempre assim, pois vou ver o primeiro episódio de uma transmissão do outro lado, quem sabe até começo a ter um gosto de música bom kkkkkkk. Acho que posso começar com Ahlevo, hmmmmmm melhor não desse universo eu já fiz parte.",
        resposta: "Dante"
    },

    7: {
        numero: "Enigma 07",
        titulo: "Sexta-feira",
        pergunta: "Quando você abre a porta toda vez pra mim na sexta sempre me sinto: I just wanna get high with my lover, Veo una muñeca cuando miro en el espejo, Kiss, Kiss, looking dolly, I think I may go out tonight.",
        resposta: "Moonlight"
    },

    8: {
        numero: "Enigma 08",
        titulo: "Elementos",
        pergunta: "Podemos até ser de elementos diferentes como fogo e água, um opressor ao outro, bem na teoria.... mas sempre do mesmo universo",
        resposta: "Ordem Paranormal"
    },

    9: {
        numero: "Enigma 09",
        titulo: "Cartas",
        pergunta: " As vezes cartas podem esconder mais que em uma simples leitura, concorda ? Bem ent que você é ? ",
        resposta: "A minha nerd das artes"
    },

    10: {
        numero: "Enigma 10",
        titulo: "Dança",
        pergunta: "As vezes os coreanos da LNGSHOT podem fazer algo melhor que o rei do pop, eu duvido muito, eles nem dançam tanto quanto o nossa Minha Legal Jaqueta Filho",
        resposta: "Moonwalking"
    },

    11: {
        numero: "Enigma 11",
        titulo: "Retrospectiva",
        pergunta: "Bem no final do ano essa foi a minha música de retrospectiva que saudade dela em 2022, só não digo que tenho falta de 2022, pois não tinha minha estrela caida ao meu lado, de tão perfeita e paciente para estar comigo.",
        resposta: "As It Was"
    },

    12: {
        numero: "Enigma 12",
        titulo: "Fuga",
        pergunta: "Eu vejo que vc sempre está querendo fugir desse inferno, eu lembro de alguem com você, talvez a Kate Bush te ensine a fazer uma negociação com Deus para conseguir sair correndo do inferno que te atormenta",
        resposta: "Running Up That Hill"
    },

    13: {
        numero: "Enigma 13",
        titulo: "Cyberpunk",
        pergunta: "Muitas vezes no dia eu me sinto igual em cyberpunk sozinho na lua, as pessoas podem achar até mesmo qe eu sou inabalável por sempre estar com essa cara amena, conversar com mesmo tão, mas eu só não aguento a maioria das coisas que me acontecem, eu só queria achar um lugar pra ficar em paz e esquecer de tudo, mas nem na minha casa eu tenho isso, contudo encontrei isso e ______ ",
        resposta: "I Really Want to Stay at Your House"
    },

    14: {
        numero: "Enigma 14",
        titulo: "Proteção",
        pergunta: "Bem sei que é uma locadora e eu só sei de música, eu adoro falar sobre música, eu até escuto suas músicas sigo os cantores que escuta, porque eu adoro falar de música. Voltando aos enigmas, você sempre me protegeu e bem mesmo estando longe de você sei que sempre estara comigo, como no album validations de Yung Li você seria um ser místico um:",
        resposta: "Anjo da Guarda"
    },

    15: {
        numero: "Enigma 15",
        titulo: "Final",
        pergunta: "Qual vai ser o nome do nosso gato ? SIM ESSE MESMO.",
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