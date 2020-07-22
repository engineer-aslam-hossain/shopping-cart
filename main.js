// code for increment
document
  .getElementById("increment")
  .addEventListener("click", function (event) {
    let amountOfMobile = document.getElementById("mobileAmount").value;
    let numberOfMobile = parseInt(amountOfMobile);
    // console.log(numberOfMobile + 1);

    document.getElementById("mobileAmount").value = numberOfMobile + 1;
  });

//   code for decrement
document
  .getElementById("decrement")
  .addEventListener("click", function (event) {
    let amountOfMobile = document.getElementById("mobileAmount").value;
    let numberOfMobile = parseInt(amountOfMobile);
    // console.log(numberOfMobile + 1);

    if (numberOfMobile == 0) {
      return 0;
    } else {
      return (document.getElementById("mobileAmount").value =
        numberOfMobile - 1);
    }
  });
