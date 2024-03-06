let clicks = 0;
let upgradeCost = 100;
let upgradeMultiplier = 1;
let pop = 1;

// Функция, вызываемая при клике на кнопку
function handleClick() {
  // Увеличиваем счетчик кликов на 1
  clicks += upgradeMultiplier;

  // Обновляем значение на кнопке
  document.getElementById('click-counter').innerText = clicks;
}
function handleupd() {// Проверяем, достаточно ли кликов для покупки улучшения
  if (clicks >= upgradeCost) {
    upgradeMultiplier++;
    pop ++;
    // Если да, уменьшаем счетчик кликов на стоимость улучшения
    clicks -= upgradeCost;
    // Увеличиваем стоимость улучшения на 5
    upgradeCost *= 2;

    // Обновляем значения на кнопке и стоимости улучшений
    document.getElementById('click-counter').innerText = clicks;
    document.getElementById('upgrade-cost').innerText = upgradeCost;
    document.getElementById('pop').innerText = upgradeDisplay;
  }
}
// Назначаем обработчик клика на кнопку
document.getElementById('click-button').addEventListener('click', handleClick);
document.getElementById('upgrade').addEventListener('click', handleupd);
