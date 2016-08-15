/**
 * A basic Stopwatch that counts up every second,
 * stopping at 999.
 * 
 * @export
 * @class Stopwatch
 */
export class Stopwatch
{
    // The current time.
    public current_time: number;

    // The element which will display the time.
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
     * Add 1 to the current_time,
     * until current_time is 999.
     * 
     * @private
     * @returns {void}
     */
    private add(): void
    {
        this.current_time++;
        this.display.value = String(this.current_time);

        // Stop at 999 seconds.
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