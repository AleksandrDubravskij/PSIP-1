document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let surname = document.getElementById('surname').value;
    let name = document.getElementById('name').value;
    let patronymic = document.getElementById('patronymic').value || 'Нет отчества';
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let birthdate = document.getElementById('birthdate').value;
    let captcha = document.getElementById('captcha').value;
    
    let userData = `
        Фамилия: ${surname}
        Имя: ${name}
        Отчество: ${patronymic}
        Пол: ${gender}
        Дата рождения: ${birthdate}
        Введённый код: ${captcha}
    `;
    
    alert(userData); // Выводим данные в диалоговом окне
});
