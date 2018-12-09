'use strict';

var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_MAX = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

var getRemovedElement = function (array) {
  var shuffledArray = shuffleArray(array);
  var random = shuffledArray[Math.floor(Math.random() * shuffledArray.length)];
  return shuffledArray.splice(random, 1);
};

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizardName = function () {
  var name = getRemovedElement(NAME);
  var surname = getRemovedElement(SURNAME);
  return name + ' ' + surname;
};

var createWizard = function (array) {
	return {
		name: createWizardName(),
		coatColor: getRandomElement(COAT_COLOR),
		eyesColor: getRandomElement(EYES_COLOR),
	}
};

var getWizardsArray = function () {
  var array = [];
  for (var i = 0; i < WIZARDS_MAX; i++) {
    array.push(createWizard());
  }
  return array;
};

var wizardsArray = getWizardsArray();

var similarWizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var createSimilarWizard = function (array) {
  var template = similarWizardsTemplate.cloneNode(true);

  template.querySelector('.setup-similar-label').textContent = array.name;
  template.querySelector('.wizard-coat').style.fill = array.coatColor;
  template.querySelector('.wizard-eyes').style.fill = array.eyesColor;

  return template
};

var wizardsList = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(createSimilarWizard(wizardsArray[i]));
}
wizardsList.appendChild(fragment);

var setupSimilarWizard = document.querySelector('.setup-similar');
setupSimilarWizard.classList.remove('hidden');

