class Controller {
 
  
  constructor() {
    //console.log('manager instanciation');
    initConfigColors();
    this.model = new Model();
    this.view = new View(this);
    this.board = new GameBoard(CELL_MAX_X, CELL_MAX_Y, this.model);
  }
  
  init() {
    //console.log('manager init');
    this.model.init();
    this.view.init();
  }
  
  run() {
   //console.log('controller run');
   this.view.clearView();
   this.view.renderBoard(this);
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
  
  handleResetButtonClick(isClicked) {
    if(isClicked) {
      this.board.reset();
      this.model.genCounter = 0;
    }
  }
  
  handleClearButtonClick(isClicked) {
    if(isClicked) {
      this.board.empty();
      this.model.genCounter = 0;
    }
  }
  
  handleRunKey() {
    this.model.setIsSimulationRunning(!this.model.getIsSimulationRunning());
    //console.log('is running après:', this.model.getIsSimulationRunning());
  }
  
  handleNextKey() {
   //console.log('controller : next'); 
   this.board.generateNext();
   //this.view.displayInfos(this.board);
  }
  
  handleLeftClick(mx, my) {
   //console.log('clic gauche controller'); 
   if(mx >= 0 
   && mx <= BOARD_WIDTH 
   && my >= 0 
   && my <= BOARD_HEIGHT) {
     const x = Math.floor(mx / CELL_SIZE);
     const y = Math.floor(my / CELL_SIZE);
     //console.log('x:', x, 'y:', y);
     this.board.toggleCellState(x, y);
   }
   else {
     //console.log('clic out board');
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
