import {Minesweeper} from "./Minesweeper";
import {Stopwatch} from "./Stopwatch";

let form: HTMLFormElement = <HTMLFormElement>document.getElementById('game_form');

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gameCanvas");
let box: HTMLInputElement = <HTMLInputElement>document.getElementById('remaining_mines');

let timer_elem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');
/*
let timer = new Stopwatch(timer_elem);
// Start the timer.
timer.time();
*/

// Create a new game.
let game: Minesweeper = new Minesweeper(canvas, box, 30);

let current_time: number = 0;

function add()
{
	current_time++;
	timer_elem.value = String(current_time);
	if (game.is_game_won)
		form.submit();
}