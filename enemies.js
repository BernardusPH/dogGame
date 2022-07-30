class Enemy {
  constructor() {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 2000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
  }
  update(deltaTime) {
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    if (this.x + this.width < 0) this.markedForDeletion = true;
  }
  draw(context) {

    if(this.game.debug) context.strokeRect(this.x, this.y,this.width,this.height);
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export class FlyingEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 60;
    this.height = 44;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() + 1;
    this.speedY = 0;
    this.maxFrame = 5;
    this.image = enemy_fly;
    this.angle = 0;
    this.va = Math.random() * 0.1 + 0.1;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.va;
    this.y += Math.sin(this.angle);
  }
}

export class Marie extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 60;
    this.height = 60;
    this.x = this.game.width + Math.random() * this.game.width * 0.5;
    this.y = Math.random() * this.game.height * 0.5;
    this.speedX = Math.random() + 1;
    this.speedY = 0;

    this.image = marie;
    this.angle = 0;
    this.va = Math.random() * 0.1 + 0.1;
  }
  update() {
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
    this.angle += this.va;
    this.y += Math.sin(this.angle);
  }
  draw(context) {
    super.draw(context);
    context.drawImage(
      this.image,

      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export class GroundEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 60;
    this.height = 87;
    this.x = this.game.width;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.image = enemy_plant;
    this.speedX = 0;
    this.speedY = 0;
    this.maxFrame = 1;
  }
}

export class Simi extends Enemy {
    constructor(game) {
      super();
      this.game = game;
      this.width = 75;
      this.height = 75;
      this.x = this.game.width;
      this.y = this.game.height - this.height - this.game.groundMargin;
      this.image = simi;
      this.speedX = 0;
      this.speedY = 0;
     
    }
    update(){
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
    }
    draw(context) {
        super.draw(context);
        context.drawImage(
          this.image,
    
          this.x,
          this.y,
          this.width,
          this.height
        );
  }


}


export class ClimbingEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.width = 120;
    this.height = 144;
    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.5;
    this.image = enemy_spider_big;
    this.speedX = 0;
    this.speedY = Math.random() > 0.5 ? 1 : -1;
    this.maxFrame = 5;
  }
  update(deltaTime) {
    super.update(deltaTime);
    if (this.y > this.game.height - this.height - this.game.groundMargin)
      this.speedY *= -1;
    if (this.y < -this.height) this.markedForDeletion = true;
  }
  draw(context) {
    super.draw(context);
    context.beginPath();
    context.moveTo(this.x + this.width / 2, 0);
    context.lineTo(this.x + this.width / 2, this.y + 50);
    context.stroke();
  }
}

export class Matt extends Enemy {
    constructor(game) {
      super();
      this.game = game;
      this.width = 60;
      this.height = 60;
      this.x = this.game.width + Math.random() * this.game.width * 0.5;
      this.y = Math.random() * this.game.height * 0.5;
      this.speedX = Math.random() + 1;
      this.speedY = 0;
  
      this.image = matt;
      this.angle = 0;
      this.va = Math.random() * 0.1 + 0.1;
    }
    update() {
      this.x -= this.speedX + this.game.speed;
      this.y += this.speedY;
      this.angle += this.va;
      this.y += Math.sin(this.angle);
    }
    draw(context) {
        super.draw(context);
      context.drawImage(
        this.image,
  
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }


