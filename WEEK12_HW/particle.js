class particle {
  constructor(id, pos) {
    this.id = id;
    this.pos = pos;
    this.velocity = createVector(0, 0);
  }

  drawParticle(radius) {
    noStroke();
    rectMode(CENTER);
    ellipse(this.pos.x, this.pos.y, radius, radius);

    this.pos.x += (noise(this.id, sin(millis() * 0.001)) - 0.5) * 10;
    this.pos.y += (noise(this.id, cos(millis() * 0.001))) * 2;

    if (this.pos.y > height) {
      this.pos.y = 0;
      this.pos.x = random(width);
    }
  }
}
