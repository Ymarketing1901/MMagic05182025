
// coinEngine.js

const COIN_KEY = "mm-coins";

function getCoins() {
  return parseInt(localStorage.getItem(COIN_KEY) || "0");
}

function setCoins(amount) {
  localStorage.setItem(COIN_KEY, amount);
  updateCoinDisplays();
}

function addCoins(amount) {
  setCoins(getCoins() + amount);
}

function spendCoins(amount) {
  const current = getCoins();
  if (current >= amount) {
    setCoins(current - amount);
    return true;
  }
  return false;
}

function updateCoinDisplays() {
  document.querySelectorAll("[data-coin-display]").forEach(el => {
    el.textContent = getCoins();
  });
}

// Optional: auto-update coin display on page load
document.addEventListener("DOMContentLoaded", updateCoinDisplays);

// ✅ Export for ES module support
export { getCoins as getCoinCount, setCoins, addCoins, spendCoins };
