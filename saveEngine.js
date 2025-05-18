
function getSave() {
  const data = localStorage.getItem("mathMagicSave");
  return data ? JSON.parse(data) : {};
}

function saveGame(updated) {
  localStorage.setItem("mathMagicSave", JSON.stringify(updated));
}

// Avatar: { animal: "cat", color: "blue" }
function setAvatar(animal, color) {
  const save = getSave();
  save.avatar = { animal, color };
  saveGame(save);
}

// Coins
function getCoins() {
  return getSave().coins || 0;
}

function setCoins(amount) {
  const save = getSave();
  save.coins = amount;
  saveGame(save);
}

function addCoins(amount) {
  const current = getCoins();
  setCoins(current + amount);
}

function spendCoins(amount) {
  const current = getCoins();
  if (current >= amount) {
    setCoins(current - amount);
    return true;
  }
  return false;
}

// Land unlocks
function unlockLand(landNumber) {
  const save = getSave();
  if (!save.unlockedLands) save.unlockedLands = [1];
  if (!save.unlockedLands.includes(landNumber)) {
    save.unlockedLands.push(landNumber);
  }
  save.currentLand = landNumber;
  saveGame(save);
}

// Progress
function logProgress(type, land, correctCount) {
  const save = getSave();
  const key = type === "lab" ? "labProgress" : "hospitalProgress";
  if (!save[key]) save[key] = {};
  save[key][land] = { correct: correctCount };
  saveGame(save);
}

// Inventory
function setInventory(item, value) {
  const save = getSave();
  if (!save.inventory) save.inventory = {};
  save.inventory[item] = value;
  saveGame(save);
}

// Home upgrades
function setHomeUpgrade(item, value) {
  const save = getSave();
  if (!save.homeUpgrades) save.homeUpgrades = {};
  save.homeUpgrades[item] = value;
  saveGame(save);
}

// Grade
function setGrade(grade) {
  const save = getSave();
  save.grade = grade;
  saveGame(save);
}

function getGrade() {
  return getSave().grade || 1;
}
