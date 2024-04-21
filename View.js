class View {
 
  constructor() {
    //console.log('view instanciation');
  }
  
  init() {
    //console.log('view init');
    initConfigColors();
    createCanvas(BOARD_WIDTH, BOARD_HEIGHT + INFOS_HEIGHT);
    background(BG_COLOR);
  }
  
  clearView() {
     background(BG_COLOR);
  }
  
  renderBoard(board) {
    let cellColor = color(0, 0, 0);
    for (let x = 0; x < CELL_MAX_X; x++) {
      for (let y = 0; y < CELL_MAX_Y; y++) {
        const cell = board.getCell(x, y);
        if (cell.getState()) {
          cellColor = CELL_ALIVE_COLOR;
        }
        else {
          cellColor = CELL_DEAD_COLOR;
        }
        this.drawCell(cell.getPosX(), cell.getPosY(), cellColor);
      }
    }
    
    this.displayInfos(board);
    //this.drawLines(CELL_MAX_X, CELL_MAX_Y);
    
    /*
    const cellsClose = board.getNeighborhood(0, 0);
    cellsClose.forEach((c) => {
      this.drawCell(c.getPosX(), c.getPosY(), CELL_ALIVE_COLOR);
    });
    */
    
    /*
    //board.cells[14][15].setState(true);
    board.setCellState(14, 15, true);
    board.setCellState(14, 14, true);
    const aliveCellsNumber = board.getAliveNeighborhood(15,15);
    //console.log('alive cells :', aliveCellsNumber);
    const deadCellsNumber = board.getDeadNeighborhood(15,15);
    //console.log('dead cells :', deadCellsNumber);
    */
  }
  
  displayInfos(board) {
    //console.log('counter :', board.getGenCounter());
    /*
    strokeWeight(CELL_STROKE_WEIGHT);
    stroke(LINES_COLOR);
    fill(BG_COLOR);
    rect(0, BOARD_HEIGHT, BOARD_WIDTH, INFOS_HEIGHT);
    */
    fill(PRIMARY_COLOR);
    textSize(16);
    textAlign(LEFT, TOP);
    text('Génération n° ' + board.getGenCounter(), 20, BOARD_HEIGHT + 20);
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
}
