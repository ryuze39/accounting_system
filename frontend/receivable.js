document.getElementById("receivableForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = paymentDate.value;
  const amount = amount.value;
  const customer = customer.value;
  const note = note.value;

  const table = document.getElementById("receivableTable").querySelector("tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${date}</td>
    <td>${amount}</td>
    <td>${customer}</td>
    <td>${note}</td>
  `;

  table.appendChild(row);

  e.target.reset();
});
