// let googleLink = document.createElement('a');

// // document.body.prepend(googleLink);
// googleLink.textContent = "Google";
// googleLink.href = "https://google.com/";
// googleLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   googleLink.textContent = "Yandex";
// });
// googleLink.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
//   googleLink.style.background = "red";
// });
// googleLink.addEventListener('dblclick', function(event) {
//   event.preventDefault();
//   this.remove();
// });



// document.body.addEventListener('click', function(event) {
//   let div = document.createElement('div');
//   let red = (Math.random() * 255).toFixed(0);
//   let green = (Math.random() * 255).toFixed(0);
//   let blue = (Math.random() * 255).toFixed(0);
//   div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   let size = (Math.random() * 50).toFixed(0);
//   let half = size / 2;
//   div.style.width = `${size}px`;
//   div.style.height = `${size}px`;
//   div.style.borderRadius = `${half}px`
//   div.style.position = 'absolute';
//   div.style.top = `${event.clientX - half}px`;
//   div.style.left = `${event.clientY - half}px`;
  
//   document.body.append(div);
// });


// MY VERSION
// let list = [
//   'Apple', 'Banana', 'Cherry'
// ];
// let listElement =  document.createElement('ul');
// document.body.prepend(listElement);
// for (let i = 0; i < list.length; i++) {
//   let li = document.createElement('li');
//   listElement.append(li);
//   li.textContent = list[i];
//   li.addEventListener('click', function(event) {
//     this.style.textDecoration = "line-through";
//   });
//   li.addEventListener('dblclick', function(event) {
//     this.remove();
//   });
// };

// let input = document.createElement('input');
// document.body.prepend(input);
// let button = document.createElement('button');
// input.after(button);
// button.textContent = "Add";
// button.addEventListener('click', function(event) {
  
// });


// AGAI'S CODE
let list = [
  'Apple', 'Banana', 'Cherry'
];
let input = document.createElement('input');
document.body.append(input);
let button = document.createElement('button');
button.textContent = "Add";
document.body.append(button);

button.addEventListener('click', function() {
  addItem(input.value);
  input.value = '';
});

let ul = document.createElement('ul');
document.body.append(ul);

list.forEach(addItem)

function addItem(text) {
  let li = document.createElement('li');
  li.textContent = text;
  ul.append(li);
  
  li.addEventListener('click', function() {
    li.style.textDecoration = 'line-through';
  })
  li.addEventListener('dblclick', function() {
    li.remove();
  })
}

