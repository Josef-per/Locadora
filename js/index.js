function abrirEnigma(numero) {
    const progresso = Number(localStorage.getItem("progresso")) || 1;

    if (numero > progresso) {
        alert("Você ainda não desbloqueou este enigma!");
        return;
    }

    window.location.href = `./enigmas/enigma.html?id=${numero}`;
}