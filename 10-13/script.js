function calculate(i, x, y) {
    try {
        if (x === 0) {
            throw new Error("Ошибка: деление на ноль (x не должен быть равен 0).");
        }
        if ((x * x - 4) === 0) {
            throw new Error("Ошибка: деление на ноль (x^2 - 4 не должно быть равно 0).");
        }
        if (y < 0) {
            throw new Error("Ошибка: недопустим корень из отрицательного числа (y должен быть неотрицательным).");
        }

        const result = (i + y) * (2 * x + Math.sqrt(y) - (x + y)) / (y + (1 / (x * x - 4)));
        return result;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

function calculateAndDisplay() {
    const i = parseFloat(document.getElementById("i").value);
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);

    const result = calculate(i, x, y);

    if (result !== null) {
        document.getElementById("result").innerText = "Результат: " + result;
    } else {
        document.getElementById("result").innerText = "Расчет не выполнен из-за ошибки.";
    }
}
function displayStringLengths() {
    var s1 = "Я Люблю Беларусь";
    var s2 = "Я учусь в Политехническом колледже";
    
    var lengthS2 = s2.length;
    
    document.getElementById("lengthS2").innerText = "Длина строки S2: " + lengthS2;
}
