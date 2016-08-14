/**
 * A basic Stopwatch that counts up every second,
 * stopping at 999.
 * 
 * @export
 * @class Stopwatch
 */
export class Stopwatch
{
    public current_time: number;

    private display: HTMLElement;

    /**
     * Creates an instance of Stopwatch.
     * 
     * @param {HTMLElement} display
     */
    constructor(display: HTMLElement)
    {
        this.current_time = 0;
        this.display = display;
    }

    /**
     * Add 1 to the current_time.
     * 
     * @private
     * @returns {void}
     */
    private add(): void
    {
        this.current_time++;
        this.display.value = String(this.current_time);

        if (this.current_time == 999)
            return;

        // Recursively call itself, after 1 second.
        this.time();
    }

    /**
     * Starts the Stopwatch.
     */
    public time(): void
    {
        // https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
        setTimeout(() => this.add(), 1000);
    }
}