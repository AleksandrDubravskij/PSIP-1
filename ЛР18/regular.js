document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let surname = document.getElementById('surname').value;
    let name = document.getElementById('name').value;
    
    // RegExp для проверки фамилии и имени (только буквы)
    let namePattern = /^[A-Za-zА-Яа-яЁё]+$/;
    
    if (!namePattern.test(surname)) {
        alert("Фамилия должна содержать только буквы.");
        return;
    }

    if (!namePattern.test(name)) {
        alert("Имя должно содержать только буквы.");
        return;
    }

    // Использование методов RegExp: test, exec
    let nameTest = namePattern.test(surname);
    console.log(`Проверка фамилии: ${nameTest}`);  // true или false

    let nameExec = namePattern.exec(surname);
    console.log(`Результат exec для фамилии: ${nameExec}`);  // Найденное совпадение

    // Методы объекта String: split, match, search, replace
    let splitExample = surname.split('');
    console.log(`Фамилия по буквам: ${splitExample}`);  // Массив букв

    let matchExample = name.match(namePattern);
    console.log(`Совпадение в имени: ${matchExample}`);  // Найденное совпадение

    let searchExample = surname.search(/а/);
    console.log(`Индекс первой буквы "а" в фамилии: ${searchExample}`);  // Индекс

    let replaceExample = surname.replace(/а/g, 'о');
    console.log(`Фамилия с заменой "а" на "о": ${replaceExample}`);  // Изменённая фамилия
});
