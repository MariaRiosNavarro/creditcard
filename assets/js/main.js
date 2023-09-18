// Save variables

// Input

const cardNumber = document.querySelector('[data-js="card-number"]');
const cardHolder = document.querySelector('[data-js="card-holder"]');
const cardDate = document.querySelector('[data-js="card-date"]');
const cardCVV = document.querySelector('[data-js="card-cvv"]');

// Output

const outputNumber = document.querySelector('[data-js="card-number-output"]');
const outputName = document.querySelector('[data-js="card-name-output"]');
const outputDate = document.querySelector('[data-js="card-date-output"]');

// Function

function dataSubmit() {
  //extract the values
  let userNumber = cardNumber.value;
  console.log({ userNumber });
  let userName = cardHolder.value;
  console.log({ userName });
  let userDate = cardDate.value;
  console.log({ userDate });
  console.log(userDate);

  // Transform the date value in our output Format

  let date = new Date(userDate);
  //   Month is zero based, therefore +1
  let month = date.getMonth() + 1;
  console.log(month);
  let year = date.getFullYear();

  let smallYear = year % 100;
  //   With modulo we can reduce a figure of 4 numbers to its last 2 with %100

  let dateOutput = month + "/" + smallYear;
  console.log({ dateOutput });

  //   !Add the Outputs

  outputNumber.innerHTML = userNumber;
  outputName.innerHTML = userName;
  outputDate.innerHTML = dateOutput;
}

// Reduce Input in card number(16-19number) and cvv(3number). In HTML add pattern to the 2 inputs

document.getElementById("card-number").addEventListener("input", function (e) {
  let input = e.target;
  let value = input.value.replace(/\D/g, ""); // Entferne Nicht-Ziffern
  input.value = value.substring(0, 19); // Begrenze auf 16 Zeichen
});

document.getElementById("card-cvv").addEventListener("input", function (e) {
  let input = e.target;
  let value = input.value.replace(/\D/g, ""); // Entferne Nicht-Ziffern
  input.value = value.substring(0, 3); // Begrenze auf 3 Zeichen
});
