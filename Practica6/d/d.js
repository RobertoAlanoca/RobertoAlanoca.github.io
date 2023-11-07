document.addEventListener("DOMContentLoaded", function () {
    const simularButton = document.getElementById("simularButton");
    simularButton.addEventListener("click", simularJuegos);

    function simularJuegos() {
        const numJuegosInput = document.getElementById("numJuegos");
        const numJuegos = parseInt(numJuegosInput.value, 10);

        let gananciaNeta = 0;
        let juegosGanados = 0;

        for (let i = 0; i < numJuegos; i++) {
            const dado1 = Math.floor(Math.random() * 6) + 1;
            const dado2 = Math.floor(Math.random() * 6) + 1;
            const suma = dado1 + dado2;

            if (suma === 7) {
                gananciaNeta -= 5; // La casa paga 5 Bs. al jugador
            } else {
                gananciaNeta += 2; // El jugador paga 2 Bs. a la casa
                juegosGanados++;
            }
        }

        const porcentajeGanados = (juegosGanados / numJuegos) * 100;

        document.getElementById("gananciaNeta").textContent = gananciaNeta;
        document.getElementById("juegosGanados").textContent = juegosGanados;
        document.getElementById("porcentajeGanados").textContent = porcentajeGanados.toFixed(2) + "%";
    }
});
