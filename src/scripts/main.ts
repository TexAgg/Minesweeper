import {Minesweeper} from "./Minesweeper";

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gameCanvas");
let box: HTMLInputElement = <HTMLInputElement>document.getElementById('remaining_mines');

// Create a new game.
let game: Minesweeper = new Minesweeper(canvas, box, 30);