document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const submitButton = document.getElementById("submit-button");

    // Telegram Web App API
    const tg = window.Telegram.WebApp;
    tg.expand(); // Расширить приложение на весь экран

    submitButton.addEventListener("click", () => {
        const registrationData = {
            playerTelegram_id: document.getElementById("playerTelegram_id").value,
            playerGame_id: document.getElementById("playerGame_id").value,
            playerNick_name: document.getElementById("playerNick_name").value,
            web_app_type: "reg"
        };

        // Отправка данных боту
        tg.sendData(JSON.stringify(registrationData)); // Отправляем данные WebAppData
        tg.close(); // Закрыть Web App после отправки
    });
});
