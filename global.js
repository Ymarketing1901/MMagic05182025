
// Global storage keys
const AVATAR_KEY = 'mathMagicAvatar';
// const GRADE_KEY removed; using mathMagicSave structure.
const COIN_KEY = 'mathMagicCoins';
const HOSPITAL_DONE_KEY = 'mathMagicHospitalDone';

// Save avatar and grade selection
function saveProfile(avatar, grade) {
  localStorage.setItem(AVATAR_KEY, avatar);
  localStorage.setItem(GRADE_KEY, grade);
}

// Load avatar and grade
function getProfile() {
  return {
    avatar: localStorage.getItem(AVATAR_KEY),
    grade: localStorage.getItem(GRADE_KEY)
  };
}

// Coin handling
function addCoin() {
  let coins = parseInt(localStorage.getItem(COIN_KEY) || '0');
  localStorage.setItem(COIN_KEY, coins + 1);
}

function getCoins() {
  return parseInt(localStorage.getItem(COIN_KEY) || '0');
}

// Track Hospital completion
function markHospitalComplete() {
  localStorage.setItem(HOSPITAL_DONE_KEY, 'true');
}

function isHospitalComplete() {
  return localStorage.getItem(HOSPITAL_DONE_KEY) === 'true';
}
