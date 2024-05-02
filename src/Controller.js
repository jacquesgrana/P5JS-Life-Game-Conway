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
  
  handleHelpKey() {
    //console.log('help key');
    this.view.toggleShowHelp();
  }

  handleFiguresKey() {
    //console.log('figures key');
    this.view.toggleShowFigures();
  }
  
  handleRunKey() {
    this.model.setIsSimulationRunning(!this.model.getIsSimulationRunning());
    //console.log('is running après:', this.model.getIsSimulationRunning());
  }
  
  handleNextKey() {
   //console.log('controller : next'); 
   this.board.generateNext();
  }
  
  handleLeftClick(mx, my) {
   if(this.model.getIsSelectedFigure()) {
    if(this.clickDropFigureCounter > 0) {
      //console.log('drop figure');
      // TODO appeler methode de board pour ajouter la figure
      //const xCenter = Math.floor(mx / CELL_SIZE);
      //const yCenter = Math.floor(my / CELL_SIZE);
      const figureWidth = (this.model.getSelectedFigure().width + 6) * CELL_SIZE;
      const figureHeight = (this.model.getSelectedFigure().height + 6) * CELL_SIZE;
      //console.log('figure :', figureWidth, figureHeight);
      const x = int((mx - figureWidth / 2) / CELL_SIZE);
      const y = int((my - figureHeight / 2) / CELL_SIZE);
      this.board.dropFigure(x, y, this.model.getSelectedFigure());
      // TODO toggle la view de dropFigure
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
      //console.log('clic out board');
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
       this.view.displayNeighborhood(x, y, this.board);
   }
   else {
     //console.log('clic out board');
   }
  }
}
