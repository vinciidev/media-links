document.addEventListener('DOMContentLoaded', function() {
  var body = document.body;
  var toggleButton = document.getElementById('toggleBackgroundBtn');

  var backgrounds = [
    './assets/sky.gif',
    './assets/sky2.gif',
    // Adicione mais URLs de imagens conforme necessário
  ];

// Recupera a escolha do usuário do armazenamento local
var currentBackgroundIndex = parseInt(localStorage.getItem('backgroundIndex')) || 0;
var currentBackground = backgrounds[currentBackgroundIndex];

// Define o background inicial
body.style.backgroundImage = 'url(' + currentBackground + ')';

toggleButton.addEventListener('click', function() {
  // Alternar entre os backgrounds
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  var newBackground = backgrounds[currentBackgroundIndex];

  // Armazena a escolha do usuário no armazenamento local
  localStorage.setItem('backgroundIndex', currentBackgroundIndex);

  // Alterar o background do corpo da página
  body.style.backgroundImage = 'url(' + newBackground + ')';
});
});
