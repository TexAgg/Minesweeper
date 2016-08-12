import {Minesweeper} from "./Minesweeper";

let canvas = <HTMLCanvasElement>document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// Create a new game.
let game = new Minesweeper(canvas, 15);