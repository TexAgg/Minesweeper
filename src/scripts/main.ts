import {Minesweeper} from "./Minesweeper";

let form: HTMLFormElement = <HTMLFormElement>document.getElementById('game_form');

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gameCanvas");
let box: HTMLInputElement = <HTMLInputElement>document.getElementById('remaining_mines');

let timer_elem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');

// Create a new game.
let game: Minesweeper = new Minesweeper(canvas, box, 1);

/*
	Start the stopwatch.
	Every second, check if the game is won.
	Submit the form if it has.
*/
let current_time: number = 0;
function add()
{
	current_time++;
	timer_elem.value = String(current_time);
	if (game.is_game_won())
		form.submit();
	else
		time();
}
function time()
{
	setTimeout(() => add(), 1000);
}
time();