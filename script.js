
//book[0].insertBefore( li[12], li[10]);
let book = document.querySelectorAll('.book');
console.log(book);

let li = document.getElementsByTagName( 'li' );
console.log(li);

//book[1].insertBefore( li[5], li[9]);

let ul1 = document.querySelectorAll('bk>li');
//console.log(ul1);


let books = document.querySelectorAll('.books');
//let book = document.querySelectorAll('.book');


books[0].insertBefore( book[4], null);
books[0].insertBefore( book[3], null);
books[0].insertBefore( book[5], null);
books[0].insertBefore( book[2], null);
books[0].insertBefore( book[1], book[0]);



let collectUl = document.querySelectorAll('ul');
let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
collectUl[2].appendChild(newElem);




let txt = document.querySelectorAll('h2>a')[2];
txt.text = 'Книга 3. this и Прототипы Объектов';



let span = document.querySelector('.adv');
span.style.display = 'none';



let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
