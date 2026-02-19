// gesture-tv.js
export class GestureController {
  constructor(config = {}) {
    // --- Configurable parameters
    this.maxIncrement = config.maxIncrement || 20; // px máximo para movimiento corto
    this.minInterval = config.minInterval || 500;  // ms mínimo entre primer y segundo
    this.maxInterval = config.maxInterval || 1000; // ms máximo entre primer y segundo
    this.resetDelay = config.resetDelay || 3000;   // ms bloqueo después de acción

    // --- Internal state
    this.gestureStart = null;
    this.firstMoveTime = null;
    this.firstMoveDelta = 0;
    this.waitingSecond = false;
    this.gestureLocked = false;

    // --- Callback for "key press"
    this.onKey = config.onKey || ((key) => { console.log("Key simulated:", key); });

    // --- Optional visual elements
    this.indicator = config.indicator || null;
    this.timerLabel = config.timerLabel || null;

    this.timerInterval = null;
    this.visualInterval = null;

    // --- Bind event
    document.addEventListener("mousemove", this.handleMove.bind(this));
  }

  handleMove(e) {
    if (this.gestureLocked) return;

    if (!this.gestureStart) {
      this.gestureStart = { x: e.clientX, y: e.clientY };
      return;
    }

    const dx = e.clientX - this.gestureStart.x;
    const dy = e.clientY - this.gestureStart.y;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    // Detect horizontal or vertical dominant
    let delta, direction, axis;
    if (absY > absX) {
      delta = dy; axis = "vertical"; 
      direction = dy < 0 ? "up" : "down";
    } else {
      delta = dx; axis = "horizontal";
      direction = dx < 0 ? "left" : "right";
    }

    // Update start for next move
    this.gestureStart = { x: e.clientX, y: e.clientY };

    // Ignore long movements
    if (Math.abs(delta) > this.maxIncrement) {
      this.resetGesture();
      return;
    }

    const now = Date.now();

    if (!this.waitingSecond) {
      // primer movimiento válido
      this.firstMoveTime = now;
      this.firstMoveDelta = delta;
      this.waitingSecond = true;
      if (this.indicator) {
        this.indicator.style.background = "orange";
        this.indicator.style.opacity = 1;
      }

      if (this.timerLabel) {
        const start = now;
        this.timerInterval = setInterval(()=>{
          this.timerLabel.textContent = `Tiempo desde primer gesto: ${((Date.now()-start)/1000).toFixed(1)}s`;
        },100);
      }

      // Visual transition naranja → verde → desvanecer
      if (this.indicator) {
        this.visualInterval = setInterval(()=>{
          const elapsed = Date.now() - this.firstMoveTime;
          if (elapsed >= this.minInterval && elapsed <= this.maxInterval){
            this.indicator.style.background = "green";
            const opacity = 1 - (elapsed - this.minInterval)/(this.maxInterval - this.minInterval);
            this.indicator.style.opacity = opacity;
          } else if (elapsed > this.maxInterval) {
            this.resetGesture();
          }
        },50);
      }

    } else {
      // Segundo movimiento: validar tiempo y dirección
      const elapsed = now - this.firstMoveTime;
      if (elapsed >= this.minInterval && elapsed <= this.maxInterval && Math.sign(delta) === Math.sign(this.firstMoveDelta)){
        // movimiento válido → disparar "tecla"
        let keyMap = {up:"ArrowUp", down:"ArrowDown", left:"ArrowLeft", right:"ArrowRight"};
        const key = keyMap[direction] || null;
        if(key) this.onKey(key);

        if(this.indicator){
          this.indicator.style.background = "green";
          this.indicator.style.opacity = 1;
        }

        // bloquear gestos
        this.gestureLocked = true;
        setTimeout(()=>{
          this.gestureLocked = false;
          this.resetGesture();
        }, this.resetDelay);
      } else if(elapsed > this.maxInterval){
        this.resetGesture();
      }
    }
  }

  resetGesture() {
    this.waitingSecond = false;
    this.firstMoveTime = null;
    this.firstMoveDelta = 0;
    if (this.indicator) { this.indicator.style.background = "gray"; this.indicator.style.opacity = 1; }
    if (this.timerLabel) { clearInterval(this.timerInterval); this.timerInterval = null; this.timerLabel.textContent="Tiempo desde primer gesto: 0s"; }
    if (this.visualInterval) { clearInterval(this.visualInterval); this.visualInterval = null; }
  }
}
