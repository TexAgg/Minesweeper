import {Square} from "./Square";

/**
 * Class for the game.
 * 
 * @export
 * @class Minesweeper
 */
export class Minesweeper
{
	// The squares.
	private board: Array< Array<Square> >;
	// The html canvas.
	private canvas: HTMLCanvasElement;
	// Number of mines.
	private num_mines: number;
	// Square side of 40 pixels.
	private SQUARE_SIDE = 40;

	/**
	 * Creates an instance of Minesweeper.
	 * 
	 * @param {HTMLCanvasElement} canvas
	 */
	constructor(canvas: HTMLCanvasElement)
	{
		this.canvas = canvas;
		this.board = [];

		this.create_board();
		this.add_listeners();
	}

	/**
	 * Create the squares and push them into the array.
	 * 
	 * @private
	 */
	private create_board(): void
	{
		// http://stackoverflow.com/questions/30144580/typescript-multidimensional-array-initialization
		for (var i = 0; i < 15; i++)
		{
			// Create empty Array.
			this.board[i] = [];
			// Fill up the Array.
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

	/**
	 * Add the event listeners for right and left clicking.
	 * 
	 * @private
	 */
	private add_listeners(): void
	{
		// http://javascriptplayground.com/blog/2012/04/javascript-variable-scope-this/
		let _this = this;

		// Add event listeners.
		this.canvas.addEventListener('click', function(e: Event){
			_this.on_board_left_click(e);

			return false;
		}, false);

		// http://stackoverflow.com/questions/4235426/how-can-i-capture-the-right-click-event-in-javascript
		this.canvas.addEventListener('contextmenu', function(e: Event){
			// http://stackoverflow.com/a/4236294/5415895
			e.preventDefault();
			_this.on_board_right_click(e);

			return false;
		}, false);
	}

	/**
	 * Handle left-clicks on the board.
	 * 
	 * @private
	 */
	private on_board_left_click(e: Event): void
	{
		let pt = this.get_mouse_pos(<MouseEvent>e);
		console.log(this.get_which_square(pt));
	}

	/**
	 * Handle right-clicks on the board.
	 * 
	 * @private
	 */
	private on_board_right_click(e: Event): void
	{
		let pt: [number, number] = this.get_mouse_pos(<MouseEvent>e);
		console.log(this.get_which_square(pt));
	}

	/**
	 * Place the mines.
	 * 
	 * @private
	 */
	private place_mines(): void
	{

	}

	/**
	 * Place the numbers.
	 * 
	 * @private
	 */
	private place_numbers(): void
	{

	}

	/**
	 * Find which square the mouse is in upon an event.
	 * http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
	 * 
	 * @private
	 * @param {Event} e
	 * @returns {[number, number]}
	 */
	private get_mouse_pos(e: MouseEvent): [number, number]
	{
		let rect = this.canvas.getBoundingClientRect();

		let point: [number, number] = [0,0];
		point[0] = Math.round((e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width);
		point[1] = Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height);
		
		return point;
	}

	/**
	 * Given a point on the canvas, 
	 * returns the indeces in this.board of the square the point is in.
	 * 
	 * @private
	 * @param {[number, number]} pt
	 * @returns {[number, number]}
	 */
	private get_which_square(pt: [number, number]): [number, number]
	{
		let indeces: [number, number] = [0,0];
		indeces[0] = Math.floor(pt[0] / this.SQUARE_SIDE);
		indeces[1] = Math.floor(pt[1] / this.SQUARE_SIDE);
		
		// Temporary return statement to prevent errors.
		return indeces;
	}
}