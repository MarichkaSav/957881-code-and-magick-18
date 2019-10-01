'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardsRandom = function () {
  return Math.floor(Math.random() * WIZARDS_NAMES.length);
}

// wizardsRandom.setAttribute('src', WIZARDS_NAMES[wizardsRandom]);

var wizards = [
  {
    name: WIZARDS_NAMES[i],
    coatColor: WIZARDS_COAT_COLOR[wizardsRandom],
    eyesColor: WIZARDS_EYES_COLOR[wizardsRandom]
  },
  {
    name: 'WIZARDS_NAMES[wizardsRandom]' + 'WIZARDS_SURNAMES[wizardsRandom]',
    coatColor: WIZARDS_COAT_COLOR[wizardsRandom],
    eyesColor: WIZARDS_EYES_COLOR[wizardsRandom]
  },
  {
    name: WIZARDS_NAMES[wizardsRandom],
    coatColor: WIZARDS_COAT_COLOR[wizardsRandom],
    eyesColor: WIZARDS_EYES_COLOR[wizardsRandom]
  },
  {
    name: WIZARDS_NAMES[wizardsRandom],
    coatColor: WIZARDS_COAT_COLOR[wizardsRandom],
    eyesColor: WIZARDS_EYES_COLOR[wizardsRandom]
  }
];

console.log(wizards);
