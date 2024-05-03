class Controller {
 
  
  constructor() {
    //console.log('manager instanciation');
    initConfigColors();
    this.model = new Model();
    this.view = new View(this);
    this.board = new BoardManager(CELL_MAX_X, CELL_MAX_Y, this.model);
    this.jsonManager = new JsonManager(this);
    // TODO améliorer
    this.clickDropFigureCounter = 0;
  }
  
  init() {
    //console.log('manager init');
    this.model.init();
    this.view.init();
    const fct = async () => {
      await this.jsonManager.init();
      //console.log('figuresData :', this.jsonManager.getFiguresData());
    }
    fct();
  }
  
  run() {
   //console.log('controller run');
   this.view.clearView();
   this.view.renderBoard(this);
  }
  
  handleSpeedSliderModif(value) {
    this.model.setFrameInterval(int(value));
  }
  
  handleProbaSliderModif(value) {
    this.model.setCellAliveProbaPercent(int(value));
  }

  handleGliderButtonClick(isClicked) {
    if(isClicked) {
      // fermer la fenetre des figures et freeze les boutons
      // set la choosenFigure sur glider
      this.model.setSelectedFigure(this.model.getFigures()[0]);
      // set le booleen de la vue de dropFigure sur true
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
      //console.log('glider : ', this.model.getSelectedFigure());
    }
  }

  handleLWSSButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[1]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleMWSSButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[2]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleHWSSButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[3]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleCrossButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[4]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handlePulsarButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[5]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handlePentadecaButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[6]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleClockButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[7]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleGosperGliderButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[8]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleSmallGliderButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[9]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }

  handleSimkinGliderButtonClick(isClicked) {
    if(isClicked) {
      this.model.setSelectedFigure(this.model.getFigures()[10]);
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
  }
  
  handleRunButtonClick(isClicked) {
    if(isClicked) {
      this.model.setIsSimulationRunning(!this.model.getIsSimulationRunning());
      this.view.updateButtons(this.model.getIsSimulationRunning());
    }
  }
  
  handleNextButtonClick(isClicked) {
    if(isClicked) {
      this.board.generateNext();
    }
  }
  
  handleNewButtonClick(isClicked) {
    if(isClicked) {
      this.model.setGenCounter(0);
      this.board.reset();
    }
  }
  
  handleResetButtonClick(isClicked) {
    if(isClicked) {
      this.model.reset();
      this.board.reset();
      this.view.setSliderSimulSpeedValue(this.model.getFrameInterval());
      this.view.setSliderAliveProbaValue(this.model.getCellAliveProbaPercent());
      //console.log('controller : reset : this.model.getFrameInterval()', this.model.getFrameInterval());
    }
  }
  
  handleClearButtonClick(isClicked) {
    if(isClicked) {
      //this.model.reset();
      this.model.setCellAliveProbaPercent(0);
      this.board.reset();
      //this.view.setSliderSimulSpeedValue(this.model.getFrameInterval());
      this.view.setSliderAliveProbaValue(this.model.getCellAliveProbaPercent());
      //console.log('controller : clear : this.model.getFrameInterval()', this.model.getFrameInterval());
    }
  }

  handleLeftRotationKey() {
    if(this.model.getIsSelectedFigure()) {
      //console.log('left arrow key');
      this.model.rotateFigureLeft();
      //console.log('rotation :', this.model.getSelectedFigureRotation());
    }
  }

  handleRightRotationKey() {
    if(this.model.getIsSelectedFigure()) {
      //console.log('right arrow key');
      this.model.rotateFigureRight();
      //console.log('rotation :', this.model.getSelectedFigureRotation());
    }
  }
  
  handleHelpKey() {
    //console.log('help key');
    this.view.toggleShowHelp();
  }

  handleFiguresKey() {
    //console.log('figures key');
    this.view.toggleShowFigures();
    this.model.setSelectedFigureRotation(0);
  }
  
  handleRunKey() {
    this.model.setIsSimulationRunning(!this.model.getIsSimulationRunning());
  }
  
  handleNextKey() {
   //console.log('controller : next'); 
   this.board.generateNext();
  }
  
  handleLeftClick(mx, my) {
   if(this.model.getIsSelectedFigure()) {
    let figureWidth = (this.model.getSelectedFigure().width +  2 * DROP_FIGURE_PADDING) * CELL_SIZE;
    let figureHeight = (this.model.getSelectedFigure().height + 2 * DROP_FIGURE_PADDING) * CELL_SIZE;
    if(this.model.getSelectedFigureRotation() === 90 || this.model.getSelectedFigureRotation() === 270) {
        let temp = figureWidth;
        figureWidth = figureHeight;
        figureHeight = temp;
    }

    if(
      this.clickDropFigureCounter > 0
      && mx > figureWidth / 2
      && my > figureHeight / 2
      && mx < BOARD_WIDTH - (figureWidth / 2)
      && my < BOARD_HEIGHT - (figureHeight / 2)
  ) {


      const x = int((mx - figureWidth / 2) / CELL_SIZE) + DROP_FIGURE_PADDING;
      const y = int((my - figureHeight / 2) / CELL_SIZE) + DROP_FIGURE_PADDING;
      this.board.dropFigure(x, y, this.model.getSelectedFigure(), this.model.getSelectedFigureRotation());
      this.view.toggleDropFigure();
      this.clickDropFigureCounter = 0;
    }
    else {
      this.clickDropFigureCounter++;
    }
   }
   else {
    if(mx >= 0 
    && mx <= BOARD_WIDTH 
    && my >= 0 
    && my <= BOARD_HEIGHT
    && !this.model.getIsSimulationRunning()
    ) {
      const x = Math.floor(mx / CELL_SIZE);
      const y = Math.floor(my / CELL_SIZE);
      //console.log('x:', x, 'y:', y);
      this.board.toggleCellState(x, y);
    }
    else {
      //console.log('clic out board');v   
       
    }
   }
   

  }
  
  handleRightClick(mx, my) {
  if(mx >= 0 
     && mx <= BOARD_WIDTH 
     && my >= 0 
     && my <= BOARD_HEIGHT) {
       const x = Math.floor(mx / CELL_SIZE);
       const y = Math.floor(my / CELL_SIZE);
       //console.log('x:', x, 'y:', y);
       //this.view.displayNeighborhood(x, y, this.board);
   }
   else {
     //console.log('clic out board');
   }
  }
}
