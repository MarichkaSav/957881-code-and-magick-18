'use strict';

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


  ctx.fillText('Вы', 150, 250);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 90, 40, 150);

  ctx.fillText('Кекс', 240, 250);
  ctx.fillStyle = 'hsl(240, ' + Math.random() + ', 50)';
  ctx.fillRect(240, 90, 40, 150);

  ctx.fillText('Катя', 330, 250);
  ctx.fillStyle = 'hsl(240, ' + Math.random() + ', 50)';
  ctx.fillRect(330, 90, 40, 150);

  ctx.fillText('Игорь', 420, 250);
  ctx.fillStyle = 'hsl(240, ' + Math.random() + ', 50)';
  ctx.fillRect(420, 90, 40, 150);
};
