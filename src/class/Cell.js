class Cell {
 
  constructor(state, posX, posY) {
    this.state = state;
    this.posX = posX;
    this.posY = posY;
  }
  
  setState(state) {
    this.state = state;
    return this;
  }
  
    setPosX(posX) {
    this.posX = posX;
    return this;
  }
  
    setPosY(posY) {
    this.posY = posY;
    return this;
  }
  
  getState() {
    return this.state;
  }
  
  getPosX() {
    return this.posX;
  }
  
  getPosY() {
    return this.posY;
  }
    
}
