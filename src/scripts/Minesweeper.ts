import {Square} from "./Square";

export class Minesweeper
{
	private board: Array< Array<Square> >;
	private canvas: HTMLCanvasElement;
	private num_mines: number;
	private SQUARE_SIDE = 40;

	constructor(canvas: HTMLCanvasElement)
	{
		this.canvas = canvas;
		this.board = [];
		// http://stackoverflow.com/questions/30144580/typescript-multidimensional-array-initialization
		for (var i = 0; i < 15; i++)
		{
			this.board[i] = [];
			for (var j = 0; j < 15; j++)
			{
				this.board[i][j] = new Square(
					this.canvas.getContext('2d'),
					[this.SQUARE_SIDE*i, this.SQUARE_SIDE*j],
					this.SQUARE_SIDE
				);
			}
		}
	}

	private create_board(): void
	{

	}

	private place_mines(): void
	{

	}

	private place_numbers(): void
	{

	}
}