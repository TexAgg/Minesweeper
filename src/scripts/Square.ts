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
	 * 
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
	}
}