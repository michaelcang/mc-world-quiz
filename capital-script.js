var answerList = ['jakarta', 'brasilia', 'canberra', 'tokyo', 'beijing', 'paris', 'berlin',
 'new delhi', 'hanoi', 'seoul'];
var score = 0;
var answer = '';
var temp = ''
var scoreText = document.getElementById('score')
var submit = document.getElementById('submit')

function validate () {
	submit.disabled = true;
	for (var i = 0; i < answerList.length; i++) {
		answer = document.getElementsByClassName('answer')[i]
		answerText = answer.value.toLowerCase()
		console.log(answerText)
		if (answerList[i] === answerText) {
			score += 1;
			answer.style.backgroundColor = '#ccff99';
		} else {
			answer.style.backgroundColor = '#cc0000';
		}
	}
	if (score > 9) {scoreText.innerHTML = 'Perfect! Your score is ' + score * 10 + '! You are a master of capital cities.'
	} else if (score > 7) {scoreText.innerHTML = 'Not bad! Your score is ' + score * 10 + '! Try again next time for your perfect score.'
	} else if (score > 4) {scoreText.innerHTML = 'You got more than half right! Your score is ' + score * 10 + '! Refresh and try again for a better score.'
	} else if (score >= 0) {scoreText.innerHTML = 'Too bad! Your score is ' + score * 10 + '! Better learn some more and try again for a better score.'
	}
	scoreText.scrollIntoView();
}
