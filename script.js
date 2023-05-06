// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach{(button)=>{
//     button.addEventListener('click', (e)=>{
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//     })
// }}
// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//     });
// });

let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    let buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      calculateResult();
    } else {
      string += buttonValue;
      input.value = string;
    }
  });
});

function calculateResult() {
  let expression = input.value;
  let result = eval(expression);

  input.value = result;
}
