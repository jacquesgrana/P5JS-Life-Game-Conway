class Model {
 
  constructor() {
    //console.log('model instanciation');
    this.isSimulationRunning = false;
    this.genCounter = 0;
    this.cellAliveProbaPercent = CELL_ALIVE_PROBA_PERCENT;
    this.frameInterval = FRAME_COUNT;
  }
  
  init() {
    //console.log('model init'); 
    //this.cellAliveProbaPercent = CELL_ALIVE_PROBA_PERCENT;
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
