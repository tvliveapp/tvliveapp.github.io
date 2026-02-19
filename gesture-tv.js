// gesture-tv.js
export class GestureController {
  constructor({
    maxIncrement = 20,
    minInterval = 750,
    maxInterval = 1500,
    resetDelay = 3000,
    indicator,
    timerLabel,
    onKey = ()=>{},
    colorTransition = true
  } = {}) {
    this.maxIncrement = maxIncrement;
    this.minInterval = minInterval;
    this.maxInterval = maxInterval;
    this.resetDelay = resetDelay;
    this.indicator = indicator; // un solo indicador
    this.timerLabel = timerLabel;
    this.onKey = onKey;
    this.colorTransition = colorTransition;

    this.reset();
    this.attachMouse();
    this.updateTimerUI();
  }

  reset() {
    this.startY = null;
    this.startX = null;
    this.startTime = null;
    this.firstDirection = null;
    this.waitingSecond = false;
    this.timer = null;
    this.indicator.textContent = '';
    this.indicator.style.background = 'gray';
    this.indicator.style.opacity = 1;
  }

  attachMouse() {
    document.addEventListener("mousemove", e => this.handleMove(e));
  }

  handleMove(e) {
    if(this.startX === null) this.startX = e.clientX;
    if(this.startY === null) this.startY = e.clientY;

    const deltaX = e.clientX - this.startX;
    const deltaY = e.clientY - this.startY;
    const now = Date.now();

    let direction = null;
    let distance = 0;

    if(Math.abs(deltaX) > Math.abs(deltaY)) {
      distance = Math.abs(deltaX);
      direction = deltaX > 0 ? 'right' : 'left';
    } else {
      distance = Math.abs(deltaY);
      direction = deltaY > 0 ? 'down' : 'up';
    }

    // Descartar movimientos grandes
    if(distance > this.maxIncrement) {
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.startTime = now;
      return;
    }

    if(!this.firstDirection) {
      // Primer movimiento válido
      this.firstDirection = direction;
      this.waitingSecond = true;
      this.startTime = now;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.indicator.textContent = this.getArrowIcon(direction);
      this.setIndicatorColor('orange');
      this.startTimer();

      return;
    }

    if(this.waitingSecond) {
      // Validar segundo movimiento
      const elapsed = now - this.startTime;

      // Intervalo válido
      if(elapsed >= this.minInterval && elapsed <= this.maxInterval) {
        // Dirección debe coincidir
        if(direction === this.firstDirection) {
          this.setIndicatorColor('green');
          this.onKey(this.getArrowKey(direction));
          // Reiniciar tras delay
          setTimeout(()=>this.reset(), this.resetDelay);
        } else {
          // Direcciones mezcladas → anular
          this.reset();
        }
      } else if(elapsed > this.maxInterval) {
        // Timeout → reiniciar
        this.reset();
      }
    }

    this.startX = e.clientX;
    this.startY = e.clientY;
  }

  startTimer() {
    if(!this.timerLabel) return;
    let startTime = Date.now();
    this.timerInterval = setInterval(()=>{
      let elapsed = ((Date.now() - startTime)/1000).toFixed(1);
      this.timerLabel.textContent = `Tiempo: ${elapsed}s`;

      // Gradualmente desvanecer indicador
      if(this.colorTransition && this.waitingSecond){
        const percent = Math.min((Date.now() - this.startTime)/this.maxInterval,1);
        const r = 255;
        const g = Math.floor(165 + (255-165)*(percent)); // de naranja a verde
        const b = 0;
        this.indicator.style.background = `rgb(${r},${g},${b})`;
      }
    },100);
  }

  setIndicatorColor(color) {
    if(this.indicator) this.indicator.style.background = color;
  }

  getArrowIcon(dir) {
    switch(dir){
      case 'up': return '↑';
      case 'down': return '↓';
      case 'left': return '←';
      case 'right': return '→';
      default: return '';
    }
  }

  getArrowKey(dir) {
    switch(dir){
      case 'up': return 'ArrowUp';
      case 'down': return 'ArrowDown';
      case 'left': return 'ArrowLeft';
      case 'right': return 'ArrowRight';
      default: return '';
    }
  }
}
