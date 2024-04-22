

const CELL_SIZE = 10;
const INFOS_HEIGHT = 100;
const BOARD_WIDTH = window.innerWidth;
const BOARD_HEIGHT = window.innerHeight - INFOS_HEIGHT;
const CELL_MAX_X = Math.floor(BOARD_WIDTH / CELL_SIZE);
const CELL_MAX_Y = Math.floor(BOARD_HEIGHT / CELL_SIZE);
/*
const CELL_MAX_X = 100;
const CELL_MAX_Y = 100;

const BOARD_WIDTH = CELL_MAX_X * CELL_SIZE;
const BOARD_HEIGHT = CELL_MAX_Y * CELL_SIZE;
*/

//const INFOS_HEIGHT = 100;
const PADDING = 20;
const BUTTON_WIDTH = 60;
const BUTTON_HEIGHT = 30;

const CELL_ALIVE_PROBA_PERCENT = 38;

const FRAME_COUNT = 4;

const CELL_STROKE_WEIGHT = 1;

var BG_COLOR;
var LINES_COLOR;
var TEXT_COLOR;
//var PRIMARY_COLOR;
var CELL_ALIVE_COLOR;
var CELL_DEAD_COLOR;
var CELL_TEST_COLOR;
var BUTTON_BG_COLOR;
var BUTTON_BG_HOVER_COLOR;
var BUTTON_BG_DISABLED_COLOR;

function initConfigColors() {
  //console.log('colors init');
  BG_COLOR = color(10,10,10);
  LINES_COLOR = color(40,40,40);
  TEXT_COLOR = color(255,153,51);
  //PRIMARY_COLOR = color(255, 119, 51);
  CELL_ALIVE_COLOR = color(100, 80, 60);
  CELL_DEAD_COLOR = color(25,25,25);
  CELL_TEST_COLOR = color(200,200,50);
  BUTTON_BG_COLOR = color(35,35,35);
  BUTTON_BG_HOVER_COLOR = color(150,150,150);
  BUTTON_BG_DISABLED_COLOR = color(10,10,10);
}
