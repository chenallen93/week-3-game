var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var win = 0;
      var loss = 0;
      var guessesLeft = 10;
      var guess = [];

      function result () {
      	var overwrite = document.querySelector("#psych");
      	var text = '<p> Wins: ' + win + '</p>';
      	text +='<p> Losses: ' + loss + '</p>';
      	text +='<p> Guesses Left: ' + guessesLeft + '</p>';
      	text += '<p> Your guesses so far: ' + guess + '</p>';
      		if (guessesLeft == 0) {
      				guessesLeft = 10
      				loss++
      				guess = [];
      		}
      	overwrite.innerHTML = text;
          }

      document.onkeyup = function(event){
        var key = event.key;

        var compute = letters[Math.floor(Math.random()*letters.length)];
        console.log(compute);

         if (key == compute) {
        	    win++;
        	    guessesLeft = 10
              guess = [];
        	    result();

        } else if (key !== compute) {
        	guessesLeft--;
        	guess.push(" " + key);
        	result();
        }

     }
