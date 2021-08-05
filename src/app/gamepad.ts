class GamePad {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  public GamePad(canvasId: string="cvs") {
    let canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    let context = canvas.getContext("2d");

    if(context === null) {
      return;
    }

    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    this.canvas = canvas;
    this.ctx = context;
  }

  start() {

  }
}