const btnConselhoAleatorio = document.getElementById("dice-button")


async function gerarConselho() {
    const conselhoGerado = await (await fetch("https://api.adviceslip.com/advice")).json()
    const idDoConselho = document.getElementById("advice-number")
    const conselho = document.getElementById("advice")
    conselho.innerText = `"${conselhoGerado.slip.advice}"`
    idDoConselho.innerText = `ADVICE #${conselhoGerado.slip.id}`
}

btnConselhoAleatorio.addEventListener("click", () => {
    gerarConselho()
})