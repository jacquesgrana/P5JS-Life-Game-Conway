class Model {
 
  constructor() {
    //console.log('model instanciation');
    this.isSimulationRunning = false;
    this.isSelectedFigure = false;
    this.genCounter = 0;
    this.cellAliveProbaPercent = CELL_ALIVE_PROBA_PERCENT;
    this.frameInterval = int(FRAME_COUNT);
    this.figures = [];
    this.selectedFigure = {};
    this.selectedFigureRotation = 0;
  }
  
  init() {
    //console.log('model init'); 
    //this.cellAliveProbaPercent = CELL_ALIVE_PROBA_PERCENT;
  }
  
  reset() {
    //console.log('model : reset : FRAME_COUNT:', FRAME_COUNT);
    this.genCounter = 0;
    this.cellAliveProbaPercent = CELL_ALIVE_PROBA_PERCENT;
    this.frameInterval = int(FRAME_COUNT);
    //console.log('model : reset : this.frameInterval:', this.frameInterval);
  }

  rotateFigureLeft() {
    this.setSelectedFigureRotation(this.getSelectedFigureRotation() + 90);
  }

  rotateFigureRight() {
    this.setSelectedFigureRotation(this.getSelectedFigureRotation() - 90);
  }
  
  setIsSimulationRunning (isRunning) {
    this.isSimulationRunning = isRunning;
  }
  
  setGenCounter(genCounter) {
    this.genCounter = genCounter; 
  }
  
  setCellAliveProbaPercent(probaPercent) {
    this.cellAliveProbaPercent = probaPercent;
  }
  
  setFrameInterval(frameInterval) {
    this.frameInterval = frameInterval;
  }

  setFigures(figures) {
    this.figures = figures;
    //console.log('figures :', this.figures);
  }

  setSelectedFigure(figure) {
    this.selectedFigure = figure;
  }

  setIsSelectedFigure(isSelected) {
    this.isSelectedFigure = isSelected;
  }

  setSelectedFigureRotation(rotation) {
    if(rotation < 0) rotation = 360 + rotation % 360;
    if(rotation >= 360) rotation = rotation % 360;
    this.selectedFigureRotation = rotation;
  }
  
  getIsSimulationRunning() {
    return this.isSimulationRunning;
  }
  
  getGenCounter() {
    return this.genCounter; 
  }
  
  getCellAliveProbaPercent() {
    return this.cellAliveProbaPercent;
  }
  
  getFrameInterval() {
    return this.frameInterval; 
  }

  getFigures() {
    return this.figures;
  }

  getSelectedFigure() {
    return this.selectedFigure;
  }

  getIsSelectedFigure() {
    return this.isSelectedFigure;
  }

  getSelectedFigureRotation() {
    return this.selectedFigureRotation;
  }
}
