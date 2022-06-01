//1
let a = +prompt('Введите число', 0);
let b = +prompt('Введите число', 0);
let result = (a + b < 4) ? 'Мало': 'Много';
alert(result);
//2
let login = prompt('Введите Ваш логин');
let message = (login == 'Сотрудник') ? 'Привет':
              (login == 'Директор') ? 'Здравствуйте': 
              (login == "") ? 'Нет логина': "";
alert(message);
//3 4
let age = +prompt('Сколько Вам лет?', 0);
if (age >= 14 && age <= 90) {
    alert('Здравствуйте!');
} else if (age < 14 || age > 90) {
    alert('До свидания!');
} else {
    alert('Введите Ваш возраст!');
}
//5
let user = prompt('Кто там?', '');
if (user == 'Админ') {
    let password = prompt('Пароль?', '');
    if (password == 'Я Главный') {
        alert('Здравствуйте!');
    } else if (password == '' || password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (user == '', user == null) {
    alert('Отменено');
} else {
    alert('Я Вас не знаю');
}