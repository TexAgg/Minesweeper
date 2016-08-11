import {Minesweeper} from "./Minesweeper";

let canvas = <HTMLCanvasElement>document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let game = new Minesweeper(canvas);