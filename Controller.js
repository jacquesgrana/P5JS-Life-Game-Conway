class Controller {
 
  
  constructor() {
    //console.log('manager instanciation');
    this.model = new Model();
    this.view = new View();
    this.board = new GameBoard(CELL_MAX_X, CELL_MAX_Y);
  }
  
  init() {
    //console.log('manager init');
    this.model.init();
    this.view.init();
  }
  
  run() {
   //console.log('controller run');
   this.view.clearView();
   this.view.renderBoard(this.board);
  }
  
  handleRunKey() {
    console.log('controller : run');
    model.setIsSimulationRunning(!model.getIsSimulationRunning());
    console.log('is running :', model.getIsSimulationRunning());
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
