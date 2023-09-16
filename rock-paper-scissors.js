// score variable
const score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0 ,
        losses : 0 ,
        ties : 0
      }
      // Calling User , Computer and Draw function
      userUpdateScore();
      computerUpdateScore();
      drawUpdateScore();



      // Updating the result function
    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Draw';
        } else if (computerMove === 'paper') {
          result = 'You Lose.';
        } else if (computerMove === 'scissors') {
          result = 'You Win';
        }


      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You Win';
        } else if (computerMove === 'paper') {
          result = 'Draw';
        } else if (computerMove === 'scissors') {
        result = 'You Lose';
        }


      } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You Lose';
        } else if (computerMove === 'paper') {
          result = 'You Win';
        } else if (computerMove === 'scissors') {
        result = 'Draw';
        }


      } 

      if (result === 'You Win') {
        score.wins += 1;
      } else if (result === 'You Lose') {
        score.losses += 1;
      } else if (result === 'Draw') {
        score.ties +=1;
      }


      localStorage.setItem('score' , JSON.stringify(score));
      
      // Calling User score updating function
      userUpdateScore();

      // Calling Computer score updating function
      computerUpdateScore();

      // Calling Draw updating function
      drawUpdateScore();

      // Calling Result updating function
      updateResult(result);

      // Calling Moves updating function 
      updateMoves(playerMove , computerMove);

    }

      // Result Updating function
      function updateResult(result) {
      document.querySelector('.js-result').innerHTML = result;
      }

      // The moves those selecting  his/him chance displaying function
      function updateMoves(playerMove , computerMove) {
      document.querySelector('.js-moves').innerHTML = `You Select ${playerMove} - Computer Select ${computerMove}`
      }
    
      // Computer score function
      function computerUpdateScore() {
        document.querySelector('.js-score-computer').innerHTML = `${score.losses}`;
      }

      // User score function
      function userUpdateScore() {
        document.querySelector('.js-score-user').innerHTML = `${score.wins}`;
      }

      // Draw score function
      function drawUpdateScore() {
        document.querySelector('.js-score-draw').innerHTML = `${score.ties}`;
      }
   
      // Computer random selecting js code
    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }


      return computerMove;
    }


    // The game click counting js code
let clickCount = 0;
let buttons = document.getElementsByClassName('clickable');
    
  for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            clickCount++;
            document.getElementById('clickCount').innerText = clickCount;
        });
  }


    // The reseting counting number js code
document.getElementById('resetButton').addEventListener('click', function() {
    clickCount = 0;
document.getElementById('clickCount').innerText = clickCount;
});    