'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var getRandomPercentage = function () {
  return Math.floor(Math.random() * 101);
};
var getBlueWithRandomSaturation = function () {
  return 'hsl(240, ' + getRandomPercentage() + '%, 50%)';
};

var getMaxElement = function(times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
};

var maxTime = getMaxElement(times);

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 230, 20);
  ctx.fillText('Список результатов:', 220, 40);

  var printNames = function (names) {
    for (var i = 0; i < names; i++) {
      if (printNames === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = getBlueWithRandomSaturation();
      }
    }
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
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
