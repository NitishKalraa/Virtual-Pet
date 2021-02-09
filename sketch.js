var bg, font, form;
var db;
var heart;
function preload() {
  bg = loadImage("images/bg.png");
  font = loadFont("fonts/font.otf");
  locate();
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  db = firebase.database();
  form = new Form();
}
function draw() {
  background(bg);
  form.display();
}
function locate() {
  //  learnt new concept reverse geocoding and template literals
  navigator.geolocation.getCurrentPosition(async (position) => {
    var requestUrl = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
    );
    var response = await requestUrl.json();
    // updating state
    state = response.principalSubdivision;
    db.ref("/").update({ STATE: response.principalSubdivision });
  });
}
