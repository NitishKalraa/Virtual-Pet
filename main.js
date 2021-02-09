var db, dog, dog1, dog2;
var position;
var feed, add;
var foodobject;
var lastFed, temp;
var pointerImg, pointer;
var Name, t;
var st, state;
var bg;
function preload() {
  //loading  images
  dogimg1 = loadImage("images/Dog.png");
  dogimg2 = loadImage("images/happy dog.png");
  pointerImg = loadImage("images/pointer.png");
  bg = loadImage("images/bg2.jpg");
}

function setup() {
  createCanvas(1400, 800);
  db = firebase.database();

  var food = db.ref("Food");
  food.on("value", (data) => {
    position = data.val();
    foodobject.updateFoodStock(position);
  });

  temp = db.ref("FeedTime");
  temp.on("value", (time) => {
    lastFed = time.val();
  });

  t = db.ref("NAME");
  t.once("value", (n) => {
    Name = n.val();
  });

  dog = createSprite(width - width / 4, height / 2 - 100, 10, 10);
  dog.addImage(dogimg1);
  dog.scale = 0.2;

  pointer = createSprite(dog.x, dog.y - 100, 1, 1);
  pointer.addImage(pointerImg);
  pointer.scale = 0.09;

  st = db.ref("STATE");
  st.once("value", (loc) => {
    state = loc.val();
    alert(`${Name} is too from ${state} like you`);
  });

  foodobject = new Food();
  foodobject.form();
}

function draw() {
  background(bg);
  foodobject.display();
  fill("whitesmoke");
  textSize(30);
  if (Name !== undefined) text(Name, dog.x - 60, dog.y - 140);
  drawSprites();
}