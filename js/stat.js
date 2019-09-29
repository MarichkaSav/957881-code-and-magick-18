'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_Y = 10;
var CLOUD_X = 100;
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
  ctx.fillRect(CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 230, 20);
  ctx.fillText('Список результатов:', 220, 40);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + ((GAP + barWidth) * i), 250);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + ((GAP + barWidth) * i), CLOUD_HEIGHT - GAP - (BAR_HEIGHT * times[i] / maxTime));
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getBlueWithRandomSaturation();
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + barWidth) * i, CLOUD_X + BAR_HEIGHT - FONT_GAP, barWidth, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};
