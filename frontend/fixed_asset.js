document.getElementById("assetForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("acquiredDate").value;
  const cost = document.getElementById("acquisitionCost").value;
  const years = document.getElementById("lifeYears").value;
  const title = document.getElementById("accountTitle").value;

  const table = document.getElementById("assetTable").querySelector("tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${date}</td>
    <td>${cost}</td>
    <td>${years}</td>
    <td>${title}</td>
  `;

  table.appendChild(row);

  // 後でAPIに送る（今はUIだけ）
});
