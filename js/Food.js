class Food {
  constructor() {
    this.foodStock = 0;
    this.image = loadImage("../images/Milk.png");
  }
  updateFoodStock(foodStock) {
    this.foodStock = foodStock;
  }

  deductFood() {
    if (this.foodStock > 0) {
      this.foodStock = this.foodStock - 1;
    }
  }

  getFoodStock() {
    return this.foodStock;
  }

  display() {
    var x = width / 3;
    var y = 200;
    imageMode(CENTER);
    if (this.foodStock != 0) {
      for (var i = 0; i < this.foodStock; i++) {
        if (i % 10 == 0) {
          x = width / 3;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
      }
    }
    if (lastFed !== undefined) {
      textSize(20);
      fill("white");
      //  ternary operator and template literals
      lastFed <= 12
        ? text(`LAST FED : ${lastFed} AM`, 200, 70)
        : text(`LAST FED : ${lastFed - 12} PM`, 200, 70);
    }
  }
  form() {
    feed = createButton("FEED DRAGO");
    feed.position(innerWidth / 2 - 200, 30);
    feed.style("background", "silver");
    feed.style("color", "white");
    feed.style("padding", "10px 28px");
    feed.style("text-align", "center");
    feed.style("border-radius", "10px");
    feed.mousePressed(() => {
      lastFed = hour();
      dog.addImage(dogimg2);
      if (foodobject.getFoodStock() !== 0) {
        foodobject.updateFoodStock(foodobject.getFoodStock() - 1);
        db.ref("/").update({
          Food: foodobject.getFoodStock(),
          FeedTime: lastFed,
        });
      }
    });

    add = createButton("ADD FOOD");
    add.position(innerWidth / 2 + 100, 30);
    add.style("background", "rgb(226, 193, 120)");
    add.style("color", "white");
    add.style("padding", "10px 28px");
    add.style("text-align", "center");
    add.style("border-radius", "10px");
    add.mousePressed(() => {
      position++;
      if (position <= 60) db.ref("/").update({ Food: position });
    });
  }
}
