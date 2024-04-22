class View {
 
  
  constructor(controller) {
    //console.log('view instanciation');
    this.frameCounter = 0;
    
    this.buttonReset = new Button(
      BOARD_WIDTH - (BUTTON_WIDTH + PADDING), 
      BOARD_HEIGHT + PADDING, 
      BUTTON_WIDTH, 
      BUTTON_HEIGHT, 
      'Reset', 
      BUTTON_BG_COLOR, 
      LINES_COLOR, 
      LINES_COLOR, 
      TEXT_COLOR, 
      BUTTON_BG_HOVER_COLOR, 
      BUTTON_BG_DISABLED_COLOR, 
      true, 
      controller.handleResetButtonClick.bind(controller)
    );
    
    this.buttonClear = new Button(
      BOARD_WIDTH - 2 * (BUTTON_WIDTH + PADDING), 
      BOARD_HEIGHT + PADDING, 
      BUTTON_WIDTH, 
      BUTTON_HEIGHT, 
      'Clear', 
      BUTTON_BG_COLOR, 
      LINES_COLOR, 
      LINES_COLOR, 
      TEXT_COLOR, 
      BUTTON_BG_HOVER_COLOR, 
      BUTTON_BG_DISABLED_COLOR, 
      true, 
      controller.handleClearButtonClick.bind(controller)
    );
    
    this.buttonRun = new Button(
      BOARD_WIDTH - 3 * (BUTTON_WIDTH + PADDING), 
      BOARD_HEIGHT + PADDING, 
      BUTTON_WIDTH, 
      BUTTON_HEIGHT, 
      'Run', 
      BUTTON_BG_COLOR, 
      LINES_COLOR, 
      LINES_COLOR, 
      TEXT_COLOR, 
      BUTTON_BG_HOVER_COLOR, 
      BUTTON_BG_DISABLED_COLOR, 
      true, 
      controller.handleRunButtonClick.bind(controller)
    );
    
    this.buttonNext = new Button(
      BOARD_WIDTH - 4 * (BUTTON_WIDTH + PADDING), 
      BOARD_HEIGHT + PADDING, 
      BUTTON_WIDTH, 
      BUTTON_HEIGHT, 
      'Next', 
      BUTTON_BG_COLOR, 
      LINES_COLOR, 
      LINES_COLOR, 
      TEXT_COLOR, 
      BUTTON_BG_HOVER_COLOR, 
      BUTTON_BG_DISABLED_COLOR, 
      true, 
      controller.handleNextButtonClick.bind(controller)
    );
  }
  
  init() {
    //console.log('view init');
    createCanvas(BOARD_WIDTH, BOARD_HEIGHT + INFOS_HEIGHT);
    background(BG_COLOR);
  }
  
  clearView() {
     background(BG_COLOR);
  }
  
  renderBoard(controller) {
    let cellColor = color(0, 0, 0);
    for (let x = 0; x < CELL_MAX_X; x++) {
      for (let y = 0; y < CELL_MAX_Y; y++) {
        const cell = controller.board.getCell(x, y);
        if (cell.getState()) {
          cellColor = CELL_ALIVE_COLOR;
        }
        else {
          cellColor = CELL_DEAD_COLOR;
        }
        this.drawCell(cell.getPosX(), cell.getPosY(), cellColor);
      }
    }
    
    this.displayInfos(controller);
    
    if(controller.model.getIsSimulationRunning()) {
      this.frameCounter++;
      //console.log('counter:', this.frameCounter);
      if(this.frameCounter >= controller.model.getFrameInterval()) {
        controller.board.generateNext();
        this.frameCounter = 0;
      }
    }
    //this.drawLines(CELL_MAX_X, CELL_MAX_Y);
  }
  
  displayInfos(controller) {
    fill(TEXT_COLOR);
    textSize(16);
    textAlign(LEFT, TOP);
    text('Génération n° ' + controller.model.getGenCounter(), PADDING, BOARD_HEIGHT + PADDING);
   
    this.buttonReset.drawButton();
    this.buttonReset.run();
    this.buttonClear.drawButton();
    this.buttonClear.run();
    this.buttonRun.drawButton();
    this.buttonRun.run();
    this.buttonNext.drawButton();
    this.buttonNext.run();
  }
  
  /*
  drawLines(maxX, maxY) {
    //console.log('draw lines');
  }
  */
  
  drawCell(x, y, cellColor) {
    strokeWeight(CELL_STROKE_WEIGHT);
    stroke(LINES_COLOR);
    fill(cellColor);
    let xPix = x * CELL_SIZE;
    let yPix = y * CELL_SIZE;
    rect(xPix, yPix, CELL_SIZE, CELL_SIZE);
  }
  
  updateButtons(isRunning) {
    if(isRunning) {
      this.buttonReset.setIsEnabled(false);
      this.buttonClear.setIsEnabled(false);
      this.buttonNext.setIsEnabled(false);
      this.buttonRun.setText('Stop');
    }
    else {
      this.buttonReset.setIsEnabled(true);
      this.buttonClear.setIsEnabled(true);
      this.buttonNext.setIsEnabled(true);
      this.buttonRun.setText('Run');
    }
    this.buttonReset.drawButton();
    this.buttonClear.drawButton();
    this.buttonNext.drawButton();
  }
}
