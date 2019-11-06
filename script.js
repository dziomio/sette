


let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');

let ul = document.querySelectorAll('ul');
let li = document.querySelectorAll('li');
//5 Восстановить порядок глав во второй и пятой книге
// Книга 2
ul[0].insertBefore(li[2], li[10]);
ul[0].insertBefore(li[6], li[4]);
ul[0].insertBefore(li[8], li[4]);
// Книга 5
ul[5].insertBefore(li[51], li[54]);
ul[5].insertBefore(li[48], li[52]);
ul[5].insertBefore(li[55], li[49]);


//1 Восстановить порядок книг
books[0].insertBefore( book[4], null);
books[0].insertBefore( book[3], null);
books[0].insertBefore( book[5], null);
books[0].insertBefore( book[2], null);
books[0].insertBefore( book[1], book[0]);


//6- в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
ul[4].appendChild(newElem);
let chapterBook = ul[4].querySelectorAll('li');

//chapterBook[0].insertBefore(li[10], li[8]);



//3 Исправить заголовок в книге 3
let txt = document.querySelectorAll('h2>a')[2];
txt.text = 'Книга 3. this и Прототипы Объектов';


//4 Удалить рекламу со страницы
let span = document.querySelector('.adv');
span.style.display = 'none';


//2 Заменить картинку заднего фона на другую из папки image
let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
