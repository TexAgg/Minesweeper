/**
 * A Minesweeper square.
 * 
 * @export
 * @class Square
 */
export class Square
{
	// Whether or not the square has a mine or not.
	public state: boolean;
	// If it is revealed, the player has opened up a zone.
	public revealed: boolean;
	// Whether or not the player has marked the square.
	public marked: boolean;
	// The number on the square.
	public value: number;

	// Location of the top-left corner of the square.
	private cor: [number, number];
	// Length of each side in pixels.
	private side: number;
	private ctx: CanvasRenderingContext2D;

	/**
	 * Creates an instance of Square.
	 * 
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {[number, number]} point
	 * @param {number} side
	 */
	constructor(ctx: CanvasRenderingContext2D, point: [number, number], side: number)
	{
		this.ctx = ctx;
		this.cor = point;
		this.side = side;

		this.revealed = false;
		this.marked = false;

		this.draw();
	}

	/**
	 * Lets you know whether or not a point is in the square.
	 * Does not count the edge as in.
	 * I'm not sure this function is needed,
	 * since Minesweeper has functions to return which square was clicked.
	 * 
	 * @deprecated
	 * @param {[number, number]} point
	 * @returns {boolean}
	 */
	public is_in_square(point: [number, number]): boolean
	{
		let p2 = [this.cor[0] + this.side, this.cor[1] + this.side];
		if (point[0] > this.cor[0] && point[0] < p2[0] && point[1] > this.cor[1] && point[1] < p2[1])
			return true;
		else
			return false;
	}

	/**
	 * Draw the square.
	 */
	public draw(): void
	{
		// Clear the rectangle first.
		this.ctx.clearRect(this.cor[0], this.cor[1], this.side, this.side);

		/*
			Change the filling color depending on the square.
			Use the fillStyle property.
			https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
		*/
		this.ctx.strokeStyle = 'black';
		this.ctx.fillStyle = 'gray';

		// Fill in a rectangle.
		// http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/
		this.ctx.rect(this.cor[0], this.cor[1], this.side, this.side);
		this.ctx.fill();
		this.ctx.stroke();

		if (this.marked)
		{
			// http://stackoverflow.com/questions/10791610/javascript-html5-using-image-to-fill-canvas
			let img = new Image();
			img.src = '../media/flag.png';
			this.ctx.drawImage(img, this.cor[0], this.cor[1]);
		}
	}

	/**
	 * Called when a square is left-clicked.
	 */
	public square_clicked(): void
	{
		// If it's already been revealed, just return.
		if (this.revealed)
			return;
		
		// Open the square if there is no mine there.
		if (!this.state)
		{
			this.open_square();
		}
		else
		{
			if (!this.marked)
			{
				// Game over!
			}
		}

		this.draw();
	}

	public square_marked(): void
	{
		if (this.revealed)
			return;
		
		if (!this.marked)
			this.marked = true;
		else 
			this.marked = false;

		this.draw();
	}

	private open_square(): void
	{
		if (!this.marked && !this.revealed)
		{
			this.revealed = true;
		}

		this.draw();
	}
}