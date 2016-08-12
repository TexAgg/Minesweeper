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
	// The number of squares on each side.
	private NUM_SQUARES = 15;

	/**
	 * Creates an instance of Minesweeper.
	 * 
	 * @param {HTMLCanvasElement} canvas
	 * @param {number} num_mines
	 */
	constructor(canvas: HTMLCanvasElement, num_mines: number)
	{
		// http://stackoverflow.com/questions/23790509/proper-use-of-errors-in-typescript
		try {
			// We can't have more mines than squares.
			if (num_mines > Math.pow(this.NUM_SQUARES,2))
				throw new RangeError();
			
			this.canvas = canvas;
			this.num_mines = num_mines;

			this.create_board();
			this.add_listeners();
			this.place_mines();
			this.place_numbers();
		}
		catch(e)
		{
			if (e instanceof RangeError)
			{
				console.error('Out of range');
			}
		}
	}

	/**
	 * Create the squares and push them into the array.
	 * 
	 * @private
	 */
	private create_board(): void
	{
		// Initialize the board as an empty Array.
		this.board = [];
		
		// http://stackoverflow.com/questions/30144580/typescript-multidimensional-array-initialization
		for (var i = 0; i < this.NUM_SQUARES; i++)
		{
			// Create empty Array.
			this.board[i] = [];
			// Fill up the Array.
			for (var j = 0; j < this.NUM_SQUARES; j++)
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
		let index = this.get_which_square(pt);
		this.board[index[0]][index[1]].square_clicked();

		//console.log(index);
	}

	/**
	 * Handle right-clicks on the board.
	 * 
	 * @private
	 */
	private on_board_right_click(e: Event): void
	{
		let pt: [number, number] = this.get_mouse_pos(<MouseEvent>e);
		let index = this.get_which_square(pt);
		this.board[index[0]][index[1]].square_marked();

		//console.log(index);
	}

	/**
	 * Place the mines.
	 * 
	 * @private
	 */
	private place_mines(): void
	{
		let counter: number = this.num_mines;
		while (counter > 0)
		{
			let rando: number = Math.floor(Math.random() * this.NUM_SQUARES * this.NUM_SQUARES -1);
			let row: number = Math.floor(rando / this.NUM_SQUARES);
			let col: number = rando % this.NUM_SQUARES;

			if (!this.board[row][col].state)
			{
				this.board[row][col].state = true;
				counter--;
			}
		}
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
		let indices: [number, number] = [0,0];

		indices[0] = Math.floor(pt[0] / this.SQUARE_SIDE);
		indices[1] = Math.floor(pt[1] / this.SQUARE_SIDE);
		
		// Temporary return statement to prevent errors.
		return indices;
	}

	/**
	 * Given the indices of a square, 
	 * return its neighbor indices.
	 * 
	 * @param {[number, number]} index
	 * @returns {Array<[number, number]>}
	 */
	public get_neighbors(index: [number, number]): Array<[number, number]>
	{
		let neighbors = [];

		// Top.
		if (index[1] == 0)
		{
			// Top left: three surrounding squares.
			if (index[0] == 0)
			{
				// The square right below it.
				neighbors.push([index[0], index[1] + 1]);
				// The square southeast diagonal to it.
				neighbors.push([index[0] + 1, index[1] + 1]);
				// The square on the right.
				neighbors.push(index[0] + 1, index[1]);
			}
			// Top right: three surrounding squares.
			else if (index[0] == this.NUM_SQUARES -1)
			{
				// The square right below it.
				neighbors.push([index[0], index[1] + 1]);
				// The square southwest diagonal to it.
				neighbors.push([index[0] - 1, index[1] + 1]);
				// The square on the left.
				neighbors.push([index[0] - 1, index[1]]);
			}
			// Top middle: five surrounding squares.
			else
			{
				// The square right below.
				neighbors.push([index[0], index[1] + 1]);
				// On the right.
				neighbors.push([index[0] + 1, index[1]]);
				// On the left.
				neighbors.push([index[0] - 1, index[1]]);
				// Southeast diagonal.
				neighbors.push([index[0] + 1, index[1] + 1]);
				// Southwest diagonal.
				neighbors.push([index[0] - 1, index[1] + 1]);
			}
		}
		// Bottom.
		else if (index[1] == this.NUM_SQUARES - 1)
		{
			// Bottom left: three surrounding squares.
			if (index[0] == 0)
			{
				// Right.
				neighbors.push([index[0] + 1, index[1]]);
				// Above.
				neighbors.push([index[0], index[1] - 1]);
				// Northwest.
				neighbors.push([index[0] + 1, index[1] - 1]);
			}
			// Bottom right: three surrounding squares.
			else if (index[0] == this.NUM_SQUARES -1)
			{
				// Left.
				neighbors.push([index[0] - 1, index[1]]);
				// Above.
				neighbors.push([index[0], index[1] - 1]);
				// Northeast.
				neighbors.push([index[0] - 1, index[1] - 1]);		
			}
			// Bottom middle: five surrounding squares.
			else
			{
				// Left.
				neighbors.push([index[0] - 1, index[1]]);
				// Right.
				neighbors.push([index[0] + 1, index[1]]);
				// Above.
				neighbors.push([index[0], index[1] - 1]);
				// Northwest.
				neighbors.push([index[0] + 1, index[1] - 1]);
				// Northeast.
				neighbors.push([index[0] - 1, index[1] - 1]);												
			}
		}
		// Somewhere in the middle,
		else 
		{
			// Middle left: five surrounding squares.
			if (index[0] == 0)
			{
				// Right.
				neighbors.push([index[0] + 1, index[1]]);
				// Above.
				neighbors.push([index[0], index[1] - 1]);
				// Below.
				neighbors.push([index[0], index[1] + 1]);
				// Southeast.
				neighbors.push([index[0] + 1, index[0] + 1]);
				// Northeast.
				neighbors.push([index[0] + 1, index[1] - 1])
			}
			// Middle right: five surrounding squares.
			else if (index[0] == this.NUM_SQUARES -1)
			{
				// Left.
				neighbors.push([index[0] - 1, index[1]]);				
				// Above.
				neighbors.push([index[0], index[1] - 1]);
				// Below.
				neighbors.push([index[0], index[1] + 1]);
				// Northwest.
				neighbors.push([index[0] - 1, index[1] - 1]);
				// Southwest.
				neighbors.push([index[0] - 1, index[1] + 1]);												
			}
			// Middle middle: eight surrounding squares.
			else
			{
				// Left.
				neighbors.push([index[0] - 1, index[1]]);
				// Right.
				neighbors.push([index[0] + 1, index[1]]);
				// Above.
				neighbors.push([index[0], index[1] - 1]);
				// Below.
				neighbors.push([index[0], index[1] + 1]);				
				// Northwest.
				neighbors.push([index[0] + 1, index[1] - 1]);
				// Northeast.
				neighbors.push([index[0] - 1, index[1] - 1]);
				// Southwest.
				neighbors.push([index[0] - 1, index[1] + 1]);
				// Southeast.
				neighbors.push([index[0] + 1, index[0] + 1]);							
			}
		}

		return neighbors;
	}

	/**
	 * Return the number of remaining mines.
	 * 
	 * @returns {number}
	 */
	public get_remaining_mines(): number
	{
		return this.num_mines;
	}
}