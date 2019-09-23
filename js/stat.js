'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 10;
var CLOUD_Y = 100;
var GAP = 50;
var FONT_GAP = 10;
var BAR_HEIGHT = 150;
var barWidth = 40;

var getRandomPercentage = function () {
  return Math.floor(Math.random() * 101);
};
var getBlueWithRandomSaturation = function () {
  return 'hsl(240, ' + getRandomPercentage() + '%, 50%)';
};

var getMaxElement = function (elements) {
  var maxElement = elements[0];
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_Y + FONT_GAP, CLOUD_X + FONT_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_Y, CLOUD_X, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 230, 20);
  ctx.fillText('Список результатов:', 220, 40);

  var roundNumber = function () {
    return Math.round((times[i] * 100) / 100);
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_Y + GAP + ((GAP + barWidth) * i), 250);
    ctx.fillText(roundNumber(times[i]), CLOUD_Y + GAP + ((GAP + barWidth) * i), 80);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getBlueWithRandomSaturation();
    }

    ctx.fillRect(CLOUD_Y + GAP + (GAP + barWidth) * i, CLOUD_Y, barWidth, (BAR_HEIGHT * times[i]) / maxTime);
  }


  // ctx.fillText('Вы', 150, 250);
  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(150, 90, 40, 150);

  // ctx.fillText('Кекс', 240, 250);
  // ctx.fillStyle = getBlueWithRandomSaturation();
  // ctx.fillRect(240, 90, 40, 150);

  // ctx.fillText('Катя', 330, 250);
  // ctx.fillStyle = getBlueWithRandomSaturation();
  // ctx.fillRect(330, 90, 40, 150);

  // ctx.fillText('Игорь', 420, 250);
  // ctx.fillStyle = getBlueWithRandomSaturation();
  // ctx.fillRect(420, 90, 40, 150);
};
