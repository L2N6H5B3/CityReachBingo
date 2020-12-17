$(function() {


  //Populate
  const entries = [
        "Timon Preaches", //0
        "Timon changes song to one not practiced",
        "Timon spontaneously joins the worship team",
        "Timon moves out of the camera view",
		"Riley Hosts",
        "Intro/Outro run accidentally", //5
        "The microphone gets hit",
        "Camera Not Focused / crooked",
        "Luke Quit / Fired joke",
        "Linus Drops Something",
        "A Wild LTT'r Appears!", //10
        "Special Guest (non-ltt)",
		"Forgets what they were originally talking about",
        "Savage Jerky!",
        "Synergy 2!",
		"LTX News!", //15
		"MOS Backpacks!",
        "Squarespace!",
        "Spectrum Glasses!",
        "Madrinas Coffee!",
        "No outro", //20
		"Private Internet Access!",
		"No intro",
		"Colton fired joke",
        "James saying Frecschbuuks",
        "Linus eats hot jerky", //25
		"Linus on the left, Luke on the Right",
        "Floatplane!", 
        "Nvidia News!",
        "AMD News!",
        "Intel News!", //30
        "Apple News!",
        "Microsoft News!",
		"Nintendo News!",
		"Fortnite News!",
        "New Sponsor!",  //35
        "News comes from the forums! Heck yeah!",
        "Video output not connected to laptop",
        "Console Topic for the peasantry",
        "Luke Laughs REALLY hard about something",
        "Someone messes with the set",
        "'We've got a great show for you today!'", //40
		"'Same bat time, same bat channel!'",
        "Linus says 'Interesting'",
        "Bingo is mentioned (how meta)"
  ];

  let spaces = [];
  for (let i = 0; i < 25; i++) {
    if (i === 12) {
      spaces[i] = "***Free Space*** \n\n T";
    } else {
      const choice = Math.floor(Math.random() * entries.length);
      spaces[i] = entries[choice];
      entries.splice(choice, 1);
    }
  }
    // Draw the board
    const board = $("#board");
    for (let i = 0; i < spaces.length; i++) {
        const boardTile = document.createElement('div');
        boardTile.classList.add('item');
        const tileText = document.createElement('p');
        tileText.innerText = spaces[i];
        boardTile.appendChild(tileText);
        if (i === 12) {
            boardTile.classList.add('clicked');
        }
        board.append(boardTile);
    }

  //Change the Color

  $(".item").click(function() {
    $(this).toggleClass("clicked");
      //Just watching some data for a bit. I'm working on a way to detect actual players from trolls and need some sample data.
      const msg = $(this).children().html() + " : " + $(this).hasClass("clicked");

    //check for winner! There is probably an algo for this...
      const check = $("#board").children();

      function checkTiles(numbers) {
          let count = 0;
          // ... spreads the numbers from the array to be individual parameters
          numbers.forEach(function (currentNumber) {
              if ($(check[currentNumber]).hasClass("clicked")) {
                  count++;
              }
          });
          if (count === numbers.length) {
            debugger;
              return true;
          }
          return false;
      }

      //ROWS
      if (checkTiles([0, 1, 2, 3, 4])) {
          winner();
      } else if (checkTiles([5, 6, 7, 8, 9])) {
          winner();
      } else if (checkTiles([10, 11, 12, 13, 14])) {
          winner();
      } else if (checkTiles([15, 16, 17, 18, 19])) {
          winner();
      } else if (checkTiles([20, 21, 22, 23, 24])) {
          winner();
      }
      //COLUMNS!
      else if (checkTiles([0, 5, 10, 15, 20])) {
          winner();
      } else if (checkTiles([1, 6, 11, 16, 21])) {
          winner();
      } else if (checkTiles([2, 7, 12, 17, 22])) {
          winner();
      } else if (checkTiles([3, 8, 13, 18, 23])) {
          winner();
      } else if (checkTiles([4, 9, 14, 19, 24])) {
          winner();
      }
      //CRISS CROSS, POSTAGESTAMP, 4 CORNERS
      else if (checkTiles([0, 6, 12, 18, 24])) {
          winner();
      } else if (checkTiles([4, 8, 12, 16, 20])) {
          winner();
	  } else if (checkTiles([3, 4, 8, 9])) {
		  winner();
	  } else if (checkTiles([0, 4, 20, 24])) {
		  winner();
      } else {
          loser();
      }
  });

  function loser() {
    $("#winner").addClass("hidden");
  }

  function winner() {
    $("#winner").removeClass("hidden");
  }

});
