// 債権データ配列
const receivables = [];

document
  .getElementById("receivableForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("paymentDate").value;
    const amountStr = document.getElementById("amount").value;
    const customer = document.getElementById("customer").value;
    const note = document.getElementById("note").value;

    if (!date || !amountStr || !customer) {
      alert("入金日・金額・取引先は必須です。");
      return;
    }

    const amount = Number(amountStr);
    if (Number.isNaN(amount) || amount <= 0) {
      alert("金額は0より大きい数値を入力してください。");
      return;
    }

    const rec = { date, amount, customer, note };
    receivables.push(rec);

    const tableBody = document
      .getElementById("receivableTable")
      .querySelector("tbody");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${rec.date}</td>
      <td>${rec.amount}</td>
      <td>${rec.customer}</td>
      <td>${rec.note}</td>
    `;

    tableBody.appendChild(row);

    updateReceivableSummary();

    e.target.reset();
  });

// サマリー更新
function updateReceivableSummary() {
  const count = receivables.length;
  const total = receivables.reduce((sum, r) => sum + r.amount, 0);

  document.getElementById("receivableCount").textContent = count;
  document.getElementById("receivableTotal").textContent =
    total.toLocaleString();
}
