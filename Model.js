class Model {
 
  constructor() {
    //console.log('model instanciation');
    this.isSimulationRunning = false;
    this.genCounter = 0;
    this.cellAliveProbaPercent = CELL_ALIVE_PROBA_PERCENT;
    this.frameInterval = int(FRAME_COUNT);
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
}
