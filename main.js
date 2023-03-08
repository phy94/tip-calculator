function decimals(el) {
  el.value = parseFloat(el.value).toFixed(2);
}

function limitDecimal(el) {
  if (el.value.indexOf('.') > -1 && (el.value.length - el.value.indexOf('.') > 3)) {
    el.value = el.value.slice(0, -1);
  }
}

var billAmount = document.getElementById("billAmount");

var invalidChars = [
  "-",
  "+",
  "e",
];

billAmount.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return "$ " + value;
}

function formatSplit(value) {
  if (value === "1") return "None";
  return value + " people"

}

function update() {
  let bill = Number(document.getElementById("billAmount").value);
  let tipPercent = document.getElementById("tipSlider").value;
  let split = document.getElementById("splitInput").value;

  let tipValue = bill * (tipPercent / 100)
  let splitEach = bill / split
  let tipEach = tipValue / split
  let splitBillAmount = (bill + tipValue) / split

  document.getElementById("tipPercent").innerHTML = tipPercent + "%"
  document.getElementById("tipAmount").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
  document.getElementById("splitWay").innerHTML = formatSplit(split);
  document.getElementById("splitEach").innerHTML = formatMoney(splitEach);
  document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
  document.getElementById("totalEach").innerHTML = formatMoney(splitBillAmount);





}

let main = document.getElementById('main')
main.addEventListener('input', update);