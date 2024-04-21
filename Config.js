

const CELL_SIZE = 8;
const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 800;
const CELL_MAX_X = Math.floor(BOARD_WIDTH / CELL_SIZE);
const CELL_MAX_Y = Math.floor(BOARD_HEIGHT / CELL_SIZE);
/*
const CELL_MAX_X = 100;
const CELL_MAX_Y = 100;

const BOARD_WIDTH = CELL_MAX_X * CELL_SIZE;
const BOARD_HEIGHT = CELL_MAX_Y * CELL_SIZE;
*/

const INFOS_HEIGHT = 100;

const CELL_ALIVE_PROBA_PERCENT = 38;

const FRAME_COUNT = 4;

const CELL_STROKE_WEIGHT = 1;

var BG_COLOR;
var LINES_COLOR;
var PRIMARY_COLOR;
var CELL_ALIVE_COLOR;
var CELL_DEAD_COLOR;
var CELL_TEST_COLOR;

function initConfigColors() {
  //console.log('colors init');
  BG_COLOR = color(50,50,50);
  LINES_COLOR = color(50,50,200);
  PRIMARY_COLOR = color(255, 119, 51);
  CELL_ALIVE_COLOR = color(204, 102, 0);
  CELL_DEAD_COLOR = color(153,153,255);
  CELL_TEST_COLOR = color(200,200,50);
}
