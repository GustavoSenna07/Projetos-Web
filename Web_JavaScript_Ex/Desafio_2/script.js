function verificar() {
    const word = String(document.getElementById("senha").value);
    const resultado = document.getElementById("resultado");
    const barra = document.getElementById("barra");

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    let forte = 0;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= '0' && char <= '9') hasNumber = true;
        else hasSpecial = true;
    }

    if (word.length >= 8) forte++;
    if (hasLower) forte++;
    if (hasUpper) forte++;
    if (hasNumber) forte++;
    if (hasSpecial) forte++;

    barra.classList.remove("fraca", "media", "forte");
    resultado.classList.remove("senha-fraca", "senha-media", "senha-segura");

    if (forte <= 2) {
        barra.classList.add("fraca");
        resultado.textContent = "Senha Fraca";
        resultado.classList.add("senha-fraca");
    } else if (forte <= 4) {
        barra.classList.add("media");
        resultado.textContent = "Senha Média";
        resultado.classList.add("senha-media");
    } else {
        barra.classList.add("forte");
        resultado.textContent = "Senha Forte";
        resultado.classList.add("senha-segura");
    }
}