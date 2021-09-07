document.body.onload = addElement;

let submitBtn = document.querySelector(".submitBtn");
let tipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");
let personAmount = document.querySelector("#person-amount");

let serviceOptions = [
  {
    tip: "2%",
    value: 0.02,
  },
  {
    tip: "10%",
    value: 0.1,
  },
  {
    tip: "20%",
    value: 0.2,
  }
];

function addElement() {
  let service = document.querySelector("#input-service");
  let option = document.createElement("option");
  // for (let i = 0; i < serviceOptions.length; i++) {
  //   option.value = serviceOptions[i]["value"];
  //   option.innerHTML = serviceOptions[i]["tip"];
  //   service.appendChild(option);
  // }
  for (let i = 0; i < serviceOptions.length; i++) {
      service.options.add(new Option(serviceOptions[i]['tip'],serviceOptions[i]['value']))
  }

}
let results = document.querySelector(".results");

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
  results.style.display = "block";
  let bill = document.querySelector("#input-bill").value;
  let users = document.querySelector("#input-users").value;
  let service = document.querySelector("#input-service").value;
  // console.log(bill, users, service);
  let calc = calculate(bill, users, service);
  // console.log(`Tip:${calc[0]},Total:${calc[1]},perPerson:${calc[2]}`);
  tipAmount.innerHTML = calc[0].toFixed(2);
  totalAmount.innerHTML = calc[1].toFixed(2);
  personAmount.innerHTML = calc[2].toFixed(2);
});
