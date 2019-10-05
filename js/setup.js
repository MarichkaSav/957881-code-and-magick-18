'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var getRandomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
};

var getRandomElement = function (arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
};

var generateWizardWithRandomOptions = function () {
  return {
    name: getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES),
    coatColor: getRandomElement(WIZARDS_COAT_COLOR),
    eyesColor: getRandomElement(WIZARDS_EYES_COLOR)
  };
};

var wizards = [];

for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push(generateWizardWithRandomOptions());
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardName = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-label');
wizardName.setAttribute('name', getRandomElement(WIZARDS_NAMES));

var wizardCoatColor = document.querySelector('#similar-wizard-template').content.querySelector('.wizard-coat');
wizardCoatColor.setAttribute('fill', getRandomElement(WIZARDS_COAT_COLOR));

var wizardEyesColor = document.querySelector('#similar-wizard-template').content.querySelector('.wizard-eyes');
wizardEyesColor.setAttribute('fill', getRandomElement(WIZARDS_EYES_COLOR));

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template
// создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните
// их данными из массива:
// имя персонажа name запишите как текст в блок .setup-similar-label;
// цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
// цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.
