class Form {
  constructor() {
    this.input = createInput("PET NAME");
    this.submit = createButton("SUBMIT");

    // greeting in accordance with the time
    var d = new Date();
    var hours = d.getHours();
    if (hours >= 4 && hours <= 11) alert("GOOD MORNING FROM VIRTUAL PET");
    else if (hours >= 12 && hours < 16) alert("GOOD AFTERNOON FROM VIRTUAL PET");
    else if (hours >= 16 && hours < 20) alert("GOOD EVENING FROM VIRTUAL PET");
    else alert("GOOD NIGHT FROM VIRTUAL PET");

    //   heart gif

    heart = createImg("../images/heart.gif");
    heart.position(width / 2, height - 100);
    heart.size(30, 30);
  }

  display() {
    // styling input button

    this.input.position(width / 2 - 70, height / 2 - 40);
    this.input.style("padding", "15px 32px");
    this.input.style("border", "5px solid crimson");
    this.input.style("border-radius", "10px");

    // styling submit button

    this.submit.position(width / 2, height / 2 + 50);
    this.submit.style("background", "rgb(234, 218, 160)");
    this.submit.style("color", "white");
    this.submit.style("padding", "10px 28px");
    this.submit.style("text-align", "center");
    this.submit.style("border-radius", "10px");

    // header and footer

    textFont(font);
    textSize(100);
    fill("crimson");
    text("WELCOME TO VIRTUAL PET", width / 4, height / 6);
    fill(120);
    textSize(30);
    text("MADE WITH", width / 2 - 100, height - 75);
    text("BY NITISH KALRA", width / 2 + 35, height - 75);

    this.submit.mousePressed(() => {
      // learnt new concept that the browser window is an object and conatins a lot of useful function like window.location.reload,navigator.language
      db.ref("/").update({ NAME: this.input.value() });
      // redirecting to main page
      window.location.replace("../main.html");
    });
  }
}
