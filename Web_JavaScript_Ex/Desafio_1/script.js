function verificar() {
    const word = String(document.getElementById("object").value).toLowerCase();
    const resultado = document.getElementById("resultado");

    isPalin = true;

    for(let i = 0; i < word.length/2; i++) {
        if(word[i] == word[word.length - 1 -i]) {
            isPalin = true;
        }
        else {
            isPalin = false;
            break;
        }
    }

    if(isPalin) {
        resultado.textContent = (word + " é um Palindromo!")
        resultado.classList.remove("palin-false")
        resultado.classList.add("palin-true")
    }

    else {
        resultado.textContent = (word + " não é um Palindromo!")
        resultado.classList.remove("palin-true")
        resultado.classList.add("palin-false")
    }
}