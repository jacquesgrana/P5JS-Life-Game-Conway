class View {
 
  
  constructor(controller) {
    //console.log('view instanciation');
    this.frameCounter = 0;
    this.isShowHelp = false;
    this.isShowFigures = false;
    //this.isDropFigure = false; 
    //this.isSimulWasRunning = false;
    
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
    
    this.buttonNew = new Button(
      BOARD_WIDTH - 3 * (BUTTON_WIDTH + PADDING), 
      BOARD_HEIGHT + PADDING, 
      BUTTON_WIDTH, 
      BUTTON_HEIGHT, 
      'New', 
      BUTTON_BG_COLOR, 
      LINES_COLOR, 
      LINES_COLOR, 
      TEXT_COLOR, 
      BUTTON_BG_HOVER_COLOR, 
      BUTTON_BG_DISABLED_COLOR, 
      true, 
      controller.handleNewButtonClick.bind(controller)
    );
    
    this.buttonRun = new Button(
      BOARD_WIDTH - 4 * (BUTTON_WIDTH + PADDING), 
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
      BOARD_WIDTH - 5 * (BUTTON_WIDTH + PADDING), 
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

    this.buttonFiguresGlider = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH * 2 - 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 1.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Glider',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleGliderButtonClick.bind(controller)
    )

    this.buttonFiguresLWSS = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH * 1 - 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 1.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'LWSS',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleLWSSButtonClick.bind(controller)
    )

    this.buttonFiguresMWSS = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2  + 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 1.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'MWSS',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleMWSSButtonClick.bind(controller)
    )

    this.buttonFiguresHWSS = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 + BUTTON_WIDTH + 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 1.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'HWSS',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleHWSSButtonClick.bind(controller)
    )

    this.buttonFiguresCross = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH * 2 - 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 3 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Cross',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleCrossButtonClick.bind(controller)
    )

    this.buttonFiguresPulsar = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH * 1 - 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 3 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Pulsar',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handlePulsarButtonClick.bind(controller)
    )

    this.buttonFiguresPentadeca = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2  + 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 3 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Penta',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handlePentadecaButtonClick.bind(controller)
    )

    this.buttonFiguresClock = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 + BUTTON_WIDTH + 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 3 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Clock',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleClockButtonClick.bind(controller)
    )

    this.buttonFiguresGosperGlider = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH * 2 - 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 4.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Gosper',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleGosperGliderButtonClick.bind(controller)
    )

    this.buttonFiguresSmallGlider = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH - 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 4.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Small',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleSmallGliderButtonClick.bind(controller)
    )

    this.buttonFiguresSimkinGlider = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2  + 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 4.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Simkin',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleSimkinGliderButtonClick.bind(controller)
    )

    this.buttonFiguresGliderless = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 + BUTTON_WIDTH + 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 4.5 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Less',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleGliderlessButtonClick.bind(controller)
    )

    this.buttonFiguresBackrake = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH * 2 - 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 6 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Rake 1',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleBackrakeButtonClick.bind(controller)
    )

    this.buttonFiguresBackrakeTwo = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 - BUTTON_WIDTH - 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 6 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Rake 2',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleBackrakeTwoButtonClick.bind(controller)
    )

    this.buttonFiguresSpacerake = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2  + 0.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 6 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Space',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleSpacerakeButtonClick.bind(controller)
    )

    this.buttonFiguresSlowPuffer = new Button(
      FIGURES_POS_X + FIGURES_WIDTH/2 + BUTTON_WIDTH + 1.5 * PADDING,
      FIGURES_POS_Y + 2 * PADDING + 6 * LINE_HEIGHT,
      BUTTON_WIDTH,
      BUTTON_HEIGHT,
      'Slow',
      BUTTON_BG_COLOR,
      LINES_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      BUTTON_BG_HOVER_COLOR,
      BUTTON_BG_DISABLED_COLOR,
      true,
      controller.handleSlowPufferButtonClick.bind(controller)
    )
    //buttonFiguresGliderless
    
    this.sliderSimulSpeed = new Slider(
      PADDING,
      BOARD_HEIGHT + 2 * PADDING + SLIDER_HEIGHT + 10,
      SLIDER_WIDTH,
      SLIDER_HEIGHT,
      SLIDER_HANDLER_WIDTH,
      0,
      10,
      controller.model.getFrameInterval(),
      BUTTON_BG_COLOR,
      BUTTON_BG_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      true,
      controller.handleSpeedSliderModif.bind(controller)
    );
    
   this.sliderAliveProba = new Slider(
      SLIDER_WIDTH + 2 * PADDING,
      BOARD_HEIGHT + 2 * PADDING + SLIDER_HEIGHT + 10,
      SLIDER_WIDTH,
      SLIDER_HEIGHT,
      SLIDER_HANDLER_WIDTH,
      0,
      100,
      controller.model.getCellAliveProbaPercent(),
      BUTTON_BG_COLOR,
      BUTTON_BG_COLOR,
      LINES_COLOR,
      TEXT_COLOR,
      true,
      controller.handleProbaSliderModif.bind(controller)
    );
  }
  
  init() {
    //console.log('view init');
    this.sliderSimulSpeed.init();
    this.sliderAliveProba.init();
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
    
    //controller.model.setIsSimulationRunning(!this.isShowHelp && controller.model.getIsSimulationRunning());
    
    if(controller.model.getIsSimulationRunning()) {
      this.frameCounter++;
      //console.log('counter:', this.frameCounter);
      if(this.frameCounter >= controller.model.getFrameInterval()) {
        controller.board.generateNext();
        this.frameCounter = 0;
      }
    }
    
    if(this.isShowHelp) {
      this.displayHelp();
      this.freeze();
    }
    else if(this.isShowFigures) {
      this.displayFigures(controller);
      this.freeze();
    }
    //
    else if(controller.model.getIsSelectedFigure()) {
      this.displayDropFigure(controller);
      this.freeze();
    }
    else {
      this.updateButtons(controller.model.getIsSimulationRunning());
    }
    //this.drawLines(CELL_MAX_X, CELL_MAX_Y);
  }
  
  displayInfos(controller) {
    fill(TEXT_COLOR);
    textSize(16);
    textAlign(LEFT, TOP);
    //console.log('view : frame interval :', controller.model.getFrameInterval());
    text('Generation nb : ' + controller.model.getGenCounter() + ' / Delay : ' + controller.model.getFrameInterval() + ' / Start Alive Proba : ' + controller.model.getCellAliveProbaPercent() + '%', PADDING, BOARD_HEIGHT + PADDING + 5);
    textSize(12);
    textAlign(RIGHT, TOP);
    text('[H] : help menu / [F] : figures menu', BOARD_WIDTH - PADDING, BOARD_HEIGHT + PADDING + LINE_HEIGHT);
    this.buttonReset.drawButton();
    this.buttonReset.run();
    this.buttonClear.drawButton();
    this.buttonClear.run();
    this.buttonNew.drawButton();
    this.buttonNew.run();
    this.buttonRun.drawButton();
    this.buttonRun.run();
    this.buttonNext.drawButton();
    this.buttonNext.run();
    
    this.sliderSimulSpeed.drawSlider();
    controller.model.setFrameInterval(int(this.sliderSimulSpeed.run()));
    //this.sliderSimulSpeed.run()
    
    this.sliderAliveProba.drawSlider();
    controller.model.setCellAliveProbaPercent(int(this.sliderAliveProba.run()));
    //this.sliderAliveProba.run()
  }

  displayDropFigure(controller) {
    //this.buttonFiguresGlider.drawButton();
    //console.log('figures :', controller.model.getFigures());
    //fill(BG_COLOR);
    //rect(HELP_POS_X, HELP_POS_Y, HELP_WIDTH, HELP_HEIGHT);
    this.drawDropFigure(controller);
  }

  displayFigures(controller) {
    //console.log('figures :', controller.model.getFigures());
    const textSize01 = 32;
    const textSize02 = 18;
    const textSize03 = 14;

    fill(BG_COLOR);
    rect(FIGURES_POS_X, FIGURES_POS_Y, FIGURES_WIDTH, FIGURES_HEIGHT);

    fill(TEXT_COLOR);
    
    textAlign(CENTER, TOP);
    textSize(textSize01);
    text('Figures Menu' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING);

    textSize(textSize02);
    text('Spaceships' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING + LINE_HEIGHT);
    text('Oscillators' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING + 2.5 * LINE_HEIGHT);
    text('Guns' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING + 4 * LINE_HEIGHT);
    text('Puffers' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING + 5.5 * LINE_HEIGHT);
    textSize(textSize03);
    text('Select a figure and click on the map to paste it' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING + 7.5 * LINE_HEIGHT);
    text('[T / Y] : rotate figure before pasting' , FIGURES_POS_X + FIGURES_WIDTH/2, FIGURES_POS_Y +  2 * PADDING + 8 * LINE_HEIGHT);
    this.buttonFiguresGlider.drawButton();
    this.buttonFiguresGlider.run();
    this.buttonFiguresLWSS.drawButton();
    this.buttonFiguresLWSS.run();
    this.buttonFiguresMWSS.drawButton();
    this.buttonFiguresMWSS.run();
    this.buttonFiguresHWSS.drawButton();
    this.buttonFiguresHWSS.run();
    this.buttonFiguresCross.drawButton();
    this.buttonFiguresCross.run();
    this.buttonFiguresPulsar.drawButton();
    this.buttonFiguresPulsar.run();
    this.buttonFiguresPentadeca.drawButton();
    this.buttonFiguresPentadeca.run();
    this.buttonFiguresClock.drawButton();
    this.buttonFiguresClock.run();
    this.buttonFiguresGosperGlider.drawButton();
    this.buttonFiguresGosperGlider.run();
    this.buttonFiguresSmallGlider.drawButton();
    this.buttonFiguresSmallGlider.run();
    this.buttonFiguresSimkinGlider.drawButton();
    this.buttonFiguresSimkinGlider.run();
    this.buttonFiguresGliderless.drawButton();
    this.buttonFiguresGliderless.run();
    this.buttonFiguresBackrake.drawButton();
    this.buttonFiguresBackrake.run();
    this.buttonFiguresBackrakeTwo.drawButton();
    this.buttonFiguresBackrakeTwo.run();    
    this.buttonFiguresSpacerake.drawButton();
    this.buttonFiguresSpacerake.run();
    this.buttonFiguresSlowPuffer.drawButton();
    this.buttonFiguresSlowPuffer.run();
  }
  
  displayHelp() {
    const textSize01 = 32;
    const textSize02 = 18;
    const textSize03 = 14;
    //const helpWindowWidth = HELP_WIDTH >= 400 ? 400 : HELP_WIDTH;
    fill(BG_COLOR);
    rect(HELP_POS_X, HELP_POS_Y, HELP_WIDTH, HELP_HEIGHT);
    
    fill(TEXT_COLOR);
    
    textAlign(CENTER, TOP);
    textSize(textSize01);
    text('Help Menu' , HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y +  2 * PADDING);
    
    textSize(textSize02);
    text('Keys :' , HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y +  2 * PADDING + LINE_HEIGHT);
    
    textSize(textSize03);
    //text('[N] : next generation' , 
    //HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 1.5 * LINE_HEIGHT);
    //text('[R] : run/pause simulation' , 
    //HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 2 * LINE_HEIGHT);
    text('[H] : show/hide help menu' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 1.5 * LINE_HEIGHT);
    text('[F] : show/hide add figures menu' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 2 * LINE_HEIGHT);
    
    textSize(textSize02);
    text('Mouse :' , HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 3 * LINE_HEIGHT);
    
    textSize(textSize03);
    text('[Left Click] : change cell state' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 3.5 * LINE_HEIGHT);
    
    textSize(textSize02);
    text('Buttons :' , HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 4.5 * LINE_HEIGHT);
    textSize(textSize03);
    text('[Next] : next generation' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 5 * LINE_HEIGHT);
    text('[Run] : run/pause simulation' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 5.5 * LINE_HEIGHT);
    text('[New] : new simulation without reset' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 6 * LINE_HEIGHT);
    text('[Clear] : new simulation with no alive cells' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 6.5 * LINE_HEIGHT);
    text('[Reset] : new simulation with reset' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 7 * LINE_HEIGHT);
    
    textSize(textSize02);
    text('Sliders :' , HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 8 * LINE_HEIGHT);
    textSize(textSize03);
    text('[Left] : modify frame delay' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 8.5 * LINE_HEIGHT);
    text('[right] : modify start alive cells proportion' , 
    HELP_POS_X + HELP_WIDTH/2, HELP_POS_Y + 2 * PADDING + 9 * LINE_HEIGHT);
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

  drawDropFigure(controller) {

    //fill(TEXT_COLOR);
    const figure = controller.model.getSelectedFigure();
    //console.log('draw figure :', figure);
    const zoneWidth = (figure.width + 2 * DROP_FIGURE_PADDING) * CELL_SIZE;
    const zoneHeight = (figure.height + 2 * DROP_FIGURE_PADDING) * CELL_SIZE;
    const figureWidth = figure.width * CELL_SIZE;
    const figureHeight = figure.height * CELL_SIZE;
    //console.log('zone :', zoneWidth, zoneHeight);
    if(
      (
        (controller.model.getSelectedFigureRotation() === 0 
      || controller.model.getSelectedFigureRotation() === 180)
      && mouseX > (zoneWidth / 2) 
      && mouseY > (zoneHeight / 2)
      && mouseX < (BOARD_WIDTH - (zoneWidth / 2))
      && mouseY < (BOARD_HEIGHT - (zoneHeight / 2))
    ) || (
      (controller.model.getSelectedFigureRotation() === 90
      || controller.model.getSelectedFigureRotation() === 270)
      && mouseX > (zoneHeight / 2)
      && mouseY > (zoneWidth / 2)
      && mouseX < (BOARD_WIDTH - (zoneHeight / 2))
      && mouseY < (BOARD_HEIGHT - (zoneWidth / 2))
    )
    ) {
      this.drawDropFigureSelected(figure, zoneWidth, zoneHeight, figureWidth, figureHeight, controller.model.getSelectedFigureRotation());
    }
  }

  drawDropFigureSelected(figure, zoneWidth, zoneHeight, figureWidth, figureHeight, rotation) {

    let pointX = 0;
    let pointY = 0;
    if(rotation === 0) {
      pointX = mouseX + (figureWidth / 2) + 10;
      pointY = mouseY;
    }
    else if(rotation === 90) {
      let temp = figureWidth;
      figureWidth = figureHeight;
      figureHeight = temp;
      temp = zoneWidth;
      zoneWidth = zoneHeight;
      zoneHeight = temp;
      pointX = mouseX;
      pointY = mouseY - (figureHeight / 2) - 10;
    }
    else if(rotation === 180) {
      pointX = mouseX - (figureWidth / 2) - 10;
      pointY = mouseY;
    }
    else if(rotation === 270) {
      let temp = figureWidth;
      figureWidth = figureHeight;
      figureHeight = temp;
      temp = zoneWidth;
      zoneWidth = zoneHeight;
      zoneHeight = temp;
      pointX = mouseX;
      pointY = mouseY + (figureHeight / 2) + 10;
    }
    strokeWeight(CELL_STROKE_WEIGHT);
    stroke(TEXT_COLOR);
    noFill();
    rect(mouseX - (zoneWidth / 2), mouseY - (zoneHeight / 2), zoneWidth, zoneHeight);
    stroke(DANGER_COLOR);
    rect(mouseX - (figureWidth / 2), mouseY - (figureHeight / 2), figureWidth, figureHeight);
    fill(DANGER_COLOR);
    stroke(DANGER_COLOR);
    ellipse(pointX, pointY, 5, 5);
  }
  
  freeze() {
    this.buttonReset.setIsEnabled(false);
    this.buttonClear.setIsEnabled(false);
    this.buttonNew.setIsEnabled(false);
    this.buttonNext.setIsEnabled(false);
    this.buttonRun.setIsEnabled(false);
    this.buttonRun.setText('Run');
    
    this.sliderSimulSpeed.setIsEnabled(false);
    this.sliderAliveProba.setIsEnabled(false);
  }
  
  unFreeze() {
    this.buttonReset.setIsEnabled(true);
    this.buttonClear.setIsEnabled(true);
    this.buttonNew.setIsEnabled(true);
    this.buttonNext.setIsEnabled(true);
    this.buttonRun.setIsEnabled(true);
    //this.buttonRun.setText('Run');
    this.sliderSimulSpeed.setIsEnabled(true);
    this.sliderAliveProba.setIsEnabled(true);
  }
  
  updateButtons(isRunning) {
    this.buttonRun.setIsEnabled(true);
    if(isRunning) {
      this.buttonReset.setIsEnabled(false);
      this.buttonClear.setIsEnabled(false);
      this.buttonNew.setIsEnabled(false);
      this.buttonNext.setIsEnabled(false);
      this.buttonRun.setText('Pause');
      this.sliderSimulSpeed.setIsEnabled(false);
      this.sliderAliveProba.setIsEnabled(false);
    }
    else {
      this.buttonReset.setIsEnabled(true);
      this.buttonClear.setIsEnabled(true);
      this.buttonNew.setIsEnabled(true);
      this.buttonNext.setIsEnabled(true);
      this.buttonRun.setText('Run');
      this.sliderSimulSpeed.setIsEnabled(true);
      this.sliderAliveProba.setIsEnabled(true);
    }
    this.buttonReset.drawButton();
    this.buttonClear.drawButton();
    this.buttonNew.drawButton();
    this.buttonNext.drawButton();
    this.buttonRun.drawButton();
  }
  
  setSliderSimulSpeedValue(value) {
    this.sliderSimulSpeed.setValToReturn(value);
  }
  
  setSliderAliveProbaValue(value) {
    this.sliderAliveProba.setValToReturn(value);
  }
  
  toggleShowHelp() {
   this.isShowHelp = !this.isShowHelp;
   this.isShowFigures = false;
   controller.model.setIsSelectedFigure(false);
   //this.isDropFigure = false;
   //console.log('show help:', this.isShowHelp); 
   controller.model.setIsSimulationRunning(!this.isShowHelp && controller.model.getIsSimulationRunning());
  }

  toggleShowFigures() {
    this.isShowFigures = !this.isShowFigures;
    this.isShowHelp = false;
    controller.model.setIsSelectedFigure(false);
    //this.isDropFigure = false;
    //console.log('show figures:', this.isShowFigures);
    controller.model.setIsSimulationRunning(!this.isShowFigures && controller.model.getIsSimulationRunning());
  }

  toggleDropFigure() {
    //this.isDropFigure = !this.isDropFigure;
    controller.model.setIsSelectedFigure(!controller.model.getIsSelectedFigure());

    this.isShowFigures = false;
    this.isShowHelp = false;
    controller.model.setIsSimulationRunning(!controller.model.getIsSelectedFigure() && controller.model.getIsSimulationRunning());
  }
}
