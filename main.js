// common code function

function incrementDecrement(id) {
  let amountOfMobile = document.getElementById(id).value;
  let numberOfMobile = parseInt(amountOfMobile);
  return numberOfMobile;
}

function priceCalculator(id) {
  let price = document.getElementById(id).innerText;
  let actualPrice = parseFloat(price);
  return actualPrice;
}

function subTotal(id) {
  let amount = document.getElementById(id).innerText;
  let subTotalAmount = parseInt(amount);
  return subTotalAmount;
}

// function incrementAll(id, id2) {
//   document.getElementById(id).addEventListener("click", function (event) {
//     let amount = incrementDecrement(id2);
//     document.getElementById(id2).value = amount + 1;
//   });
// }

// code for increment

// let incrementOfAll = incrementAll("increment", "mobileAmount");
// let price = priceCalculator("mobilePrice");
// document.getElementById("mobilePrice").innerText = price + 1219;
// document.getElementById("mobilePrice").innerText = incrementOfAll + 1219;
document
  .getElementById("increment")
  .addEventListener("click", function (event) {
    let amount = incrementDecrement("mobileAmount");
    document.getElementById("mobileAmount").value = amount + 1;

    // code for mobile price
    let price = priceCalculator("mobilePrice");
    document.getElementById("mobilePrice").innerText = price + 1219;

    // code for subtotal
    let total = subTotal("subtotal");
    let subtotalNum = (document.getElementById("subtotal").innerText =
      total + 1219);

    // code for tax
    let totalTax = (document.getElementById("tax").innerText =
      (subtotalNum * 15) / 100);
    // code for total
    document.getElementById("total").innerText = totalTax + subtotalNum;
  });

//   code for decrement
document
  .getElementById("decrement")
  .addEventListener("click", function (event) {
    let amount = incrementDecrement("mobileAmount");
    // code for mobile price
    let price = priceCalculator("mobilePrice");
    // code for subtotal
    let total = subTotal("subtotal");
    if (amount == 0) {
      return 0;
    } else {
      document.getElementById("mobileAmount").value = amount - 1;
      document.getElementById("mobilePrice").innerText = price - 1219;

      let subtotalNum = (document.getElementById("subtotal").innerText =
        total - 1219);
      // code for tax
      let totalTax = (document.getElementById("tax").innerText =
        (subtotalNum * 15) / 100);
      // code for total
      document.getElementById("total").innerText = totalTax + subtotalNum;
    }
  });

//   code for mobile Case amount increment

document
  .getElementById("incrementValue")
  .addEventListener("click", function (event) {
    let amount = incrementDecrement("caseAmount");
    document.getElementById("caseAmount").value = amount + 1;

    // code for mobile price
    let price = priceCalculator("casePrice");
    document.getElementById("casePrice").innerText = price + 59;
    // code for subtotal
    let total = subTotal("subtotal");
    let subtotalNum = (document.getElementById("subtotal").innerText =
      total + 59);
    // code for tax
    let totalTax = (document.getElementById("tax").innerText =
      (subtotalNum * 15) / 100);
    // code for total
    document.getElementById("total").innerText = totalTax + subtotalNum;
  });

//   code for mobile Case amount increment
document
  .getElementById("decrementValue")
  .addEventListener("click", function (event) {
    let amount = incrementDecrement("caseAmount");
    // code for mobile price
    let price = priceCalculator("casePrice");
    // code for subtotal
    let total = subTotal("subtotal");

    if (amount == 0) {
      return 0;
    } else {
      document.getElementById("caseAmount").value = amount - 1;
      document.getElementById("casePrice").innerText = price - 59;
      let subtotalNum = (document.getElementById("subtotal").innerText =
        total - 59);
      // code for tax
      let totalTax = (document.getElementById("tax").innerText =
        (subtotalNum * 15) / 100);
      // code for total
      document.getElementById("total").innerText = totalTax + subtotalNum;
    }
  });

//   code for remove

document
  .getElementById("remove-mobile")
  .addEventListener("click", function (event) {
    let cartItem = document.getElementById("mobile-cart");
    cartItem.style.display = "none";
  });

document
  .getElementById("remove-case")
  .addEventListener("click", function (event) {
    let cartItem = document.getElementById("case-cart");
    cartItem.style.display = "none";
  });
