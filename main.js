
document.querySelectorAll('.avatar-option').forEach(opt => {
  opt.onclick = () => {
    document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    localStorage.setItem('mathMagicAvatar', opt.getAttribute('data-avatar'));
    checkReady();
  };
});

document.getElementById('grade-select').onchange = checkReady;

function checkReady() {
  const grade = document.getElementById('grade-select').value;
  const avatar = document.querySelector('.avatar-option.selected');
  if (grade && avatar) {
    // deprecated; now using mathMagicSave.grade
    document.getElementById('start-btn').style.display = 'inline-block';
  }
}

document.getElementById('start-btn').onclick = () => {
  window.location.href = 'map_index.html';
};
