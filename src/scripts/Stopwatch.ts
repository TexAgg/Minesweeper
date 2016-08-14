export class Stopwatch
{
    public current_time: number;
    private display: HTMLElement;

    constructor(display: HTMLElement)
    {
        this.current_time = 0;
        this.display = display;
    }

    private add(): void
    {
        this.current_time++;
        this.display.value = String(this.current_time);

        if (this.current_time == 999)
            return;

        this.time();
    }

    public time(): void
    {
        // https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
        setTimeout(() => this.add(), 1000);
    }
}