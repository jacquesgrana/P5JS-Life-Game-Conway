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
}
