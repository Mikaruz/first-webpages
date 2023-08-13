let content = document.getElementById("content");

for (var i = 1; i <= 100; i++) {
  if (isDivisible(i, 3)) {
    content.innerHTML += "Fizz<br>";
  }

  if (isDivisible(i, 5)) {
    content.innerHTML += "Buzz<br>";
  }

  if (!isDivisible(i, 3) && !isDivisible(i, 5)) {
    content.innerHTML += i + "<br>";
  }
}

function isDivisible(number, divisor) {
  if (number % divisor == 0) {
    return true;
  } else {
    return false;
  }
}
