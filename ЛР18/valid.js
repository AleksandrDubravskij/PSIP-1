document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registration-form");

    // Обработка отправки формы
    form.addEventListener("submit", function (event) {
        // Проверка на HTML5 атрибуты (required)
        if (!form.checkValidity()) {
            alert("Заполните все обязательные поля.");
            event.preventDefault();
            return;
        }

        // Проверка через JavaScript
        const surname = document.getElementById("surname").value.trim();
        const name = document.getElementById("name").value.trim();
        const birthdate = document.getElementById("birthdate").value;
        const captcha = document.getElementById("captcha").value.trim();

        // Проверка на пустое поле
        if (!surname || !name || !birthdate || !captcha) {
            alert("Пожалуйста, заполните все обязательные поля.");
            event.preventDefault();
            return;
        }

        // Проверка формата даты рождения 
        const birthYear = new Date(birthdate).getFullYear();
        const currentYear = new Date().getFullYear();
        if (birthYear < 2024 || birthYear > currentYear) {
            alert("Укажите корректную дату рождения.");
            event.preventDefault();
            return;
        }

        // Проверка длины кода капчи (должен быть не менее 5 символов)
        if (captcha.length < 5) {
            alert("Код капчи должен содержать не менее 5 символов.");
            event.preventDefault();
            return;
        }

        // Валидация регулярными выражениями
        const namePattern = /^[А-Яа-яЁёA-Za-z\s-]+$/;

        if (!namePattern.test(surname)) {
            alert("Фамилия должна содержать только буквы.");
            event.preventDefault();
            return;
        }

        if (!namePattern.test(name)) {
            alert("Имя должно содержать только буквы.");
            event.preventDefault();
            return;
        }

        alert("Форма успешно отправлена!");
    });
});
