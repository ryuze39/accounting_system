// 固定資産データを保持する配列
const assets = [];

document.getElementById("assetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = document.getElementById("acquiredDate").value;
  const costStr = document.getElementById("acquisitionCost").value;
  const yearsStr = document.getElementById("lifeYears").value;
  const title = document.getElementById("accountTitle").value;

  // 入力チェック（超シンプル版）
  if (!date || !costStr || !yearsStr) {
    alert("日付・取得価額・耐用年数は必須です。");
    return;
  }

  const cost = Number(costStr);
  const years = Number(yearsStr);

  if (Number.isNaN(cost) || cost <= 0) {
    alert("取得価額は0より大きい数値を入力してください。");
    return;
  }

  if (Number.isNaN(years) || years <= 0) {
    alert("耐用年数は0より大きい数値を入力してください。");
    return;
  }

  // 配列に追加
  const asset = { date, cost, years, title };
  assets.push(asset);

  // テーブルに1行追加
  const tableBody = document
    .getElementById("assetTable")
    .querySelector("tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${asset.date}</td>
    <td>${asset.cost}</td>
    <td>${asset.years}</td>
    <td>${asset.title}</td>
  `;

  tableBody.appendChild(row);

  // サマリー更新
  updateAssetSummary();

  // フォーム初期化
  e.target.reset();
});

// サマリーを計算して画面に反映する関数
function updateAssetSummary() {
  const count = assets.length;
  const total = assets.reduce((sum, asset) => sum + asset.cost, 0);

  document.getElementById("assetCount").textContent = count;
  document.getElementById("assetTotal").textContent = total.toLocaleString();
}

