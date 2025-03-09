class Player {
    constructor(x, y, size, imgSrc) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.image = new Image();
        this.image.src = imgSrc;  // Загрузка изображения для игрока
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);  // Отрисовка изображения игрока
    }

    move(direction) {
        const speed = 15;
        if (direction === 'left') this.x -= speed;
        if (direction === 'right') this.x += speed;
        if (direction === 'up') this.y -= speed;
        if (direction === 'down') this.y += speed;

        // Проверка выхода за границы и перемещение на противоположную сторону
        this.checkBoundary();
    }

    checkBoundary() {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        if (this.x > canvasWidth) this.x = 0 - this.size;
        if (this.x + this.size < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0 - this.size;
        if (this.y + this.size < 0) this.y = canvasHeight;
    }
}

class Coin {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = 'red';  // Цвет монеты - золотой
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);  // Рисуем золотой квадрат
    }

    collected(player) {
        return (
            player.x < this.x + this.size &&
            player.x + player.size > this.x &&
            player.y < this.y + this.size &&
            player.y + player.size > this.y
        );
    }
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Замени путь на изображение игрока
let player = new Player(100, 100, 50, 'player.png');  // Игрок с изображением
let coin = new Coin(50, 50, 30);  // Золотая монета в виде квадрата
let score = 0;  // Количество собранных монет
const totalCoins = 10;  // Нужно собрать 10 монет

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    coin.draw(ctx);

    // Проверка, собрана ли монета
    if (coin.collected(player)) {
        score++;  // Увеличиваем счет
        if (score >= totalCoins) {
            alert('Поздравляю! Монетки собрали, а богатым не стали');
            resetGame();  // Перезапуск игры
        } else {
            coin = new Coin(Math.random() * 380, Math.random() * 380, 30);  // Новая монета
        }
    }

    // Отображение количества собранных монет
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Монеты: ' + score + '/' + totalCoins, 10, 30);

    requestAnimationFrame(update);
}

function resetGame() {
    score = 0;  // Сбрасываем счет
    player = new Player(100, 100, 50, 'player.png');  // Возвращаем игрока на стартовую позицию с тем же размером
    coin = new Coin(Math.random() * 380, Math.random() * 380, 30);  // Новая монета
}

window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') player.move('left');
    if (e.key === 'ArrowRight') player.move('right');
    if (e.key === 'ArrowUp') player.move('up');
    if (e.key === 'ArrowDown') player.move('down');
});

update();

