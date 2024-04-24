var controller;

function setup() {
   controller = new Controller();
   controller.init();
}


function draw() {
  controller.run();
}

// TODO mettre dans deux fichiers : un pour les event de la souris et un pour le clavier
function mousePressed(e) {
  if (mouseButton === LEFT) {
    //console.log('début clic gauche');
  }
  else if (mouseButton === RIGHT) {
    //e.preventDefault();
    //console.log('début clic droit');
  }
}

function mouseReleased(e) {
  if (mouseButton === LEFT) {
     //console.log('fin clic gauche');
     controller.handleLeftClick(mouseX, mouseY);
  }
  else if (mouseButton === RIGHT) {
    //e.preventDefault();
    //console.log('fin clic droit');
    controller.handleRightClick(mouseX, mouseY);
  }
 
}

function keyTyped() {
  if (key === 'N' || key === 'n') {
    controller.handleNextKey();
  }
  if (key === 'R' || key === 'r') {
    controller.handleRunKey();
  }
  if (key === 'H' || key === 'h') {
    controller.handleHelpKey();
  }
}
