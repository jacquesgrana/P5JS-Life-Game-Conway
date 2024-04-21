class Model {
 
  constructor() {
    //console.log('model instanciation');
    this.isSimulationRunning = false;
  }
  
  init() {
    //console.log('model init'); 
  }
  
  setIsSimulationRunning (isRunning) {
    this.isSimulationRunning = isRunning;
  }
  
  getIsSimulationRunning() {
    return this.isSimulationRunning;
  }
}
