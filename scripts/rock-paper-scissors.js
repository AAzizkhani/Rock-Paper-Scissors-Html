
let score = JSON.parse(localStorage.getItem('score')) || {wins: 0 , loses: 0 , ties: 0};
//!score ? score = {wins: 0 , loses: 0 , ties: 0}:{};//another type of second psrt of code line 52

let randomNum=0 ;

function updateScoreTxt()
{
  document.querySelector('.jsScore').innerHTML = `Wins: ${score.wins} , Loses: ${score.loses} , Ties: ${score.ties}`;
} updateScoreTxt();

function makeComputerMove()
{
  let computerMove ='';

  computerMove = 1/3>randomNum && randomNum >=0 ? 'Rock' : 2/3>randomNum && randomNum >=1/3 ? 'Paper' : 'Scissors';

  return computerMove;
}

function getResult(input , computerMoveInput)
{
  let result ='';
  
  input ==='Rock'  ?result = computerMoveInput ==='Rock'    ?'It is a tie!':computerMoveInput ==='Paper'   ?'You lose!':'You win!'
  :input ==='Paper'?result = computerMoveInput ==='Paper'   ?'It is a tie!':computerMoveInput ==='Scissors'?'You lose!':'You win!'
                    :result = computerMoveInput ==='Scissors'?'It is a tie!':computerMoveInput ==='Rock'    ?'You lose!':'You win!';
  
  return result;
} 

function addScore(resultInput)
{
  resultInput === 'It is a tie!' ?++score.ties :resultInput === 'You lose!' ?++score.loses:++score.wins;
  localStorage.setItem('score' , JSON.stringify(score));
  updateScoreTxt();
  
  return resultInput;
}

function showMessage(input)
{
  document.querySelector('.jsResult'      ).innerHTML   = addScore(getResult(input , makeComputerMove()));
  document.querySelector('.jsMove'        ).innerHTML   = `You<img src="img/${input}.png" class="iconPic"><img src="img/${makeComputerMove()}.png" class="iconPic">Computer`;
}