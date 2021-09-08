document.body.onload = addElement;

let submitBtn = document.querySelector(".submitBtn");
let tipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");
let personAmount = document.querySelector("#person-amount");

let serviceOptions = [
  {
    quality: "Bad",
    tip: "2%",
    value: 0.02,
  },
  {
    quality: "Good",
    tip: "10%",
    value: 0.1,
  },
  {
    quality: "Great",
    tip: "20%",
    value: 0.2,
  },
];

function addElement() {
  let service = document.querySelector("#input-service");
  // let option = document.createElement("option");
  // for (let i = 0; i < serviceOptions.length; i++) {
  //   option.value = serviceOptions[i]["value"];
  //   option.innerHTML = serviceOptions[i]["tip"];
  //   service.appendChild(option);
  // }
  for (let i = serviceOptions.length - 1; i >= 0; i--) {
    service.options.add(
      new Option(
        `${serviceOptions[i]["quality"]} - ${serviceOptions[i]["tip"]}`,
        serviceOptions[i]["value"]
      )
    );
  }
}

function calculate(billCalc, usersCalc, serviceCalc) {
  billCalc = parseInt(billCalc);
  usersCalc = parseInt(usersCalc);
  serviceCalc = parseFloat(serviceCalc);
  let tip = billCalc * serviceCalc;
  let total = billCalc + tip;
  let perPerson = total / usersCalc;
  // console.log(tip);
  // console.log(total);
  // console.log(perPerson);

  return [tip, total, perPerson];
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let results = document.querySelector(".results");
  let loader = document.querySelector(".loader");
  loader.style.display = "block";
  setTimeout(function () {
    loader.style.display = "none";
    results.style.display = "block";
  }, 2000);
  let bill = document.querySelector("#input-bill").value;
  let users = document.querySelector("#input-users").value;
  let service = document.querySelector("#input-service").value;
  // console.log(bill, users, service);
  let calc = calculate(bill, users, service);
  // console.log(`Tip:${calc[0]},Total:${calc[1]},perPerson:${calc[2]}`);
  tipAmount.innerHTML = calc[0].toFixed(2);
  totalAmount.innerHTML = calc[1].toFixed(2);
  personAmount.innerHTML = calc[2].toFixed(2);
  setTimeout(function () {
    results.style.display = "none";
    document.querySelector("#tip-form").reset();
  }, 8000);
});
