$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_yes = $("#yes-btn");
    var btn_no = $("#no-btn");
    var questionPage = $("#question-page");
    var letterPage = $("#letter-page");
    var loveMessage = $(".love-message");

    // Asegurar que el sobre empieza cerrado
    envelope.addClass("close");

    // Guardar la posición original del botón "No"
    var originalPosition = {
        left: btn_no.position().left,
        top: btn_no.position().top,
    };

    // Abrir la carta al hacer clic en el sobre o en el botón "Open"
    envelope.click(function () {
        openEnvelope();
    });
    btn_open.click(function () {
        openEnvelope();
    });

    // Cerrar la carta al hacer clic en el botón "Reset"
    btn_reset.click(function () {
        closeEnvelope();
    });

    // Mostrar la carta cuando se hace clic en "Sí"
    btn_yes.click(function () {
        questionPage.addClass("hidden");
        letterPage.removeClass("hidden");
    });

    // Mover el botón "No" cuando el cursor esté sobre él
    btn_no.on("mouseover", function () {
        moveButton();
    });

    // Función para abrir la carta
    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        setTimeout(() => {
            loveMessage.removeClass("hidden"); // Mostrar el mensaje "Te Amo"
        }, 500); // Pequeño retraso para mejor efecto visual
    }

    // Función para cerrar la carta
    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        loveMessage.addClass("hidden"); // Ocultar el mensaje "Te Amo"
    }

    // Función para mover el botón "No" dentro de un radio de 200 píxeles
    function moveButton() {
        const radius = 200; // Radio de 200 píxeles
        const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio
        const newX = originalPosition.left + radius * Math.cos(angle); // Nueva posición X
        const newY = originalPosition.top + radius * Math.sin(angle); // Nueva posición Y

        // Mover el botón a la nueva posición
        btn_no.css({
            position: "absolute",
            left: newX + "px",
            top: newY + "px",
        });
    }
});
