class BoardManager {
 
  constructor(width, height, model) {
    this.width = width;
    this.height = height;
    this.model = model;
    this.cells = this.initCells(this.model);
    //this.genCounter = 0;
    //console.log('cells : ', this.cells);
  }
  
  initCells(model) {
    let cells = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      cells[x] = new Array(this.height);
      for (let y = 0; y < this.height; y++) {
        const state = this.calculateRandomState(model);
        cells[x][y] = new Cell(state, x, y);
      }
    }
    //cells[10][10].setState(true);
    //cells[8][8].setState(true);
    //console.log('length:', cells.length, ' x:', cells[0].length);
    return cells;
  }
  
  // TODO faire fonction
  /*
  empty() {
    let cells = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      cells[x] = new Array(this.height);
      for (let y = 0; y < this.height; y++) {
        //const state = this.calculateRandomState(model);
        cells[x][y] = new Cell(false, x, y);
      }
    }
    this.cells = cells;
  }
  */
  
  reset() {
    this.cells = this.initCells(this.model);
  }

  /**
   * x, y : coordonnées du coin sup gauche de la figure dans le tableau cells au clic de la souris
   */
  dropFigure(x, y, figure, rotation) {
    console.log('x:', x, 'y:', y);


    console.log('rotation:', rotation);
    //console.log('datas:', figure.datas);
    if(rotation === 0) {
      for (let i= x - DROP_FIGURE_PADDING; i < x + figure.width + DROP_FIGURE_PADDING; i++) {
        for (let j= y - DROP_FIGURE_PADDING; j < y + figure.height + DROP_FIGURE_PADDING; j++) {
          this.cells[i][j].setState(false);
        }
      }



      for (let i = x; i < x + figure.width; i++) {
        for (let j= y; j < y + figure.height; j++) {
          let ii = i - x;
          let jj = j - y;
          if(figure.datas[ii][jj] === 1) {
            this.cells[i][j].setState(true);
          }
        }
      }
    }
    else if(rotation === 90) {

      for (let i= x - DROP_FIGURE_PADDING; i < x + figure.height + DROP_FIGURE_PADDING; i++) {
        for (let j= y - DROP_FIGURE_PADDING; j < y + figure.width + DROP_FIGURE_PADDING; j++) {
          this.cells[i][j].setState(false);
        }
      }

      for (let i = x; i < x + figure.height; i++) {
        for (let j = y; j < y + figure.width; j++) {
          let ii = figure.width - 1 - j + y; //figure.height - 1 - i + x
          let jj = i - x;
          if(figure.datas[ii][jj] === 1) {
            this.cells[i][j].setState(true);
          }
        }
      }
      
    }
    else if(rotation === 180) {
      for (let i= x - DROP_FIGURE_PADDING; i < x + figure.width + DROP_FIGURE_PADDING; i++) {
        for (let j= y - DROP_FIGURE_PADDING; j < y + figure.height + DROP_FIGURE_PADDING; j++) {
          this.cells[i][j].setState(false);
        }
      }


      for (let i= x ; i < x + figure.width; i++) {
        for (let j= y; j < y + figure.height; j++) {
          let ii = i - x;
          ii = figure.width - 1 - ii;
          let jj = j - y;
          jj = figure.height - 1 - jj;
          if(figure.datas[ii][jj] === 1) {
            this.cells[i][j].setState(true);
          }
        }
      }
    }
    else if(rotation === 270) {

      for (let i= x - DROP_FIGURE_PADDING; i < x + figure.height + DROP_FIGURE_PADDING; i++) {
        for (let j= y - DROP_FIGURE_PADDING; j < y + figure.width + DROP_FIGURE_PADDING; j++) {
          this.cells[i][j].setState(false);
        }
      }

      for (let i = x; i < x + figure.height; i++) {
        for (let j = y; j < y + figure.width; j++) {
          let ii = j - y;
          let jj = figure.height - 1 - i + x;
          if(figure.datas[ii][jj] === 1) {
            this.cells[i][j].setState(true);
          }
        }
      }
    }
  }
  
 

   

  generateNext() {
    //console.log('board : next');
    //this.cells = [];
    const newCells = new Array(this.width);
    for (let x = 0; x < this.width; x++) {
      newCells[x] = new Array(this.height);
      for (let y = 0; y < this.height; y++) {
        newCells[x][y] =  new Cell(this.getNewState(x, y), x, y);
      }
    }
    this.model.setGenCounter(this.model.getGenCounter() + 1);
    //console.log('genCounter:', this.genCounter);
    this.cells = newCells;
  }
  
  getNewState(x, y) {
    let newState = false;
    //console.log('cell ec :', cell);
    const aliveNeighborsNumber = this.getAliveNeighborhoodNumber(x, y);
    
    if(aliveNeighborsNumber > 0) { 
      //console.log('x:', x, 'y:', y, 'n:', aliveNeighborsNumber);
    }

    if(this.getCell(x, y).getState() === true) {
      newState = aliveNeighborsNumber === 2 || aliveNeighborsNumber === 3;
    }
    else {
      newState = aliveNeighborsNumber === 3;
    }
    return newState;
  }
  
  getAliveNeighborhoodNumber(x, y) {
    return this.getNeighborhood(x, y).filter((c) => c.state === true).length;
    /*
    const neighborhood = this.getNeighborhood(x, y);
    let counter = 0;
    for(let i = 0; i < neighborhood.length; i++) {
      //console.log('voisin:', neighborhood[i]);
      if(neighborhood[i].getState() === true) {
        counter++;
        //console.log('voisine state :', neighborhood[i].getState(), 'x:', x, 'y:', y, 'counter', counter); 
      }
    }
    return counter;*/
  }
  
  getDeadNeighborhood(x, y) {
    return this.getNeighborhood(x, y).filter((c) => c.getState() === false).length;
  } 
  
  calculateRandomState(model) {
    const aliveProba = model.getCellAliveProbaPercent() / 100;
    // faire code qui met toReturn à true de manière aléatoire avec une probabilité : aliveProba
    return Math.random() < aliveProba;
  }
  
  getCell(x,y) {
    return this.cells[x][y]; 
  }
  
  getNeighborhood(x, y) {
     const toReturn = [];
     const width = this.width;
     const height = this.height;
    
     const left = x === 0 ? width - 1 : x - 1;
     const right = x === width - 1 ? 0 : x + 1;
     const top = y === height - 1 ? 0 : y + 1;
     const bottom = y === 0 ? height - 1 : y - 1;
    
     toReturn.push(this.cells[left][top]);
     toReturn.push(this.cells[x][top]);
     toReturn.push(this.cells[right][top]);
    
     toReturn.push(this.cells[left][y]);
     toReturn.push(this.cells[right][y]);
    
     toReturn.push(this.cells[left][bottom]);
     toReturn.push(this.cells[x][bottom]);
     toReturn.push(this.cells[right][bottom]);
     //console.log('x:', x, 'y:', y, 'voisins:', toReturn);
     return toReturn;
  }
  
  setCellState(x, y, state) {
    this.cells[x][y].setState(state);
  }
  
  toggleCellState(x, y) {
    this.cells[x][y].setState(!this.cells[x][y].getState());
  }
  
  getGenCounter() {
    return this.genCounter; 
  }
}
