import {Minesweeper} from "./Minesweeper";

let form: HTMLFormElement = <HTMLFormElement>document.getElementById('game_form');

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gameCanvas");
let box: HTMLInputElement = <HTMLInputElement>document.getElementById('remaining_mines');

let timer_elem: HTMLInputElement = <HTMLInputElement>document.getElementById('timer');

// Create a new game with 30 mines.
let game: Minesweeper = new Minesweeper(canvas, box, 30);

/*
	Start the stopwatch.
	Every second, check if the game is won.
	Submit the form if it is.

	I wish this were implemented in a cleaner,
	more organized OOP way.
*/
let current_time: number = 0;
function add()
{
	if (current_time < 999)
	{
		current_time++;
		timer_elem.value = String(current_time);
	}
	if (game.is_game_won())
	{
		// Get the name and add it to the form.
		// http://www.w3schools.com/js/js_popup.asp
		let name: string = window.prompt("What is your name?", "na");
		// If cancel is pressed, null is returned.
		if (name == null)
			name = 'na';
		let name_input = document.createElement('input');
		name_input.type = 'text';
		name_input.value = name;
		name_input.name = 'name';
		// Make it invisible
		name_input.style.display = 'none';

		// Add the element to the form.
		form.appendChild(name_input);

		// Submit the form.
		form.submit();
		// Remove the element.
		form.removeChild(name_input);
	}
	else
		time();
}
function time()
{
	setTimeout(() => add(), 1000);
}
time();