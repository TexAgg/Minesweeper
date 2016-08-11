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

	constructor(ctx: CanvasRenderingContext2D, point: [number, number], side: number)
	{
		this.ctx = ctx;
		this.cor = point;
		this.side = side;

		this.revealed = false;
		this.marked = false;

		this.draw();
	}

	public draw(): void
	{
		// Change the filling color depending on the square.

		// Fill in a rectangle.
		this.ctx.strokeRect(this.cor[0], this.cor[1], this.side, this.side);
	}
}