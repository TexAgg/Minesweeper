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
        this.display.innerHTML = String(this.current_time);

        this.time();
    }

    public time(): void
    {
        //let _this = this;
        setTimeout(this.add, 1000);
    }
}