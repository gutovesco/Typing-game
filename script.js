const RANDOM_QUOTE_API_URL = ("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {}
})
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.split('')
    const correctInput = true
    arrayQuote.forEach((character,index) => {
        const character = arrayValue[index]
        if(character == null){
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correctInput = false
        }
        else if(character === characterSpan.innerText){
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
        }
        else{
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correctInput = false
        }
    })
    if(correctInput) renderNewQuote()
})

function getRandomQuote(){
    fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}
function renderNewQuote(){
    const quote = await getNextQuote()
    quoteDisplayElement = quote
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
        
    });
    quoteInputElement.value = null
    startTimer()
}
let startTime
function startTimer(){
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}
function getTimerTime(){
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()