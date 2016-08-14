import {Minesweeper} from "./Minesweeper";
import {Stopwatch} from "./Stopwatch";

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gameCanvas");
let box: HTMLInputElement = <HTMLInputElement>document.getElementById('remaining_mines');

let timer_elem: HTMLElement = document.getElementById('timer');
let timer = new Stopwatch(timer_elem);
timer.time();

/*
let seconds: number = 0;
function add()
{
    seconds++;
    timer_elem.innerHTML = String(seconds);

    timer();
}
function timer()
{
    setTimeout(add, 1000);
}
timer();
*/

// Create a new game.
let game: Minesweeper = new Minesweeper(canvas, box, 30);