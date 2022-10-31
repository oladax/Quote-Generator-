//grabbing all the functional tags
alert('hi,its oladax,click on lord shiva to change the app mode.')
let quotes = document.getElementById('quote')
let btn = document.getElementById('button')
let img = document.getElementById('img')
let audio = document.getElementById('audio')
let  author = document.querySelector('.author')
let body = document.querySelector('body')
let toggle = document.querySelector('.toggle')
let source = document.querySelector('.source')
let button = document.querySelector('.button')
let Audios = document.querySelector('.Audios')


img.onclick = () => {
	img.classList.toggle('active')
	body.classList.toggle('active')
	quotes.classList.toggle('active')
	toggle.classList.toggle('active')
	author.classList.toggle('active')
	source.classList.toggle('active')
	button.classList.toggle('active')
	Audios.classList.toggle('active')

}

//error alternative

let quote = ['The easiest way to destroy atheism in seconds is by proving that god exists empirically or else,you are just blabbing.',
	'If you want  to know more about life,reality and our universe,then I suggest you should value philosophy,psychology and physics more than anything else.',
	'Religion does nothing but hijacks intelligence and rationalism.',
	'Always enjoy your life at every slightest chance,because you wouldnt access to another one.']
				
   let Random = Math.floor(Math.random()*quote.length)
   let both = quote[Random]		
//the logic behind the app

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(json => {quotes.innerText = `${json.content}`
                   author.innerText = `${json.author}`})
	

	.catch(() => {
		quotes.innerText = both
        author.innerText = 'Oladax'

	})
};

//eventlistener
btn.onclick = () => {
	getQuote();
//storing the quotes'S innertext as a variable for audio implementation
}


//storing the quotes'S innertext as a variable for audio implementation
audio.onclick = () =>{
	const value = (quotes.innerText)
	const Author = (author.innerText)

	var speech = new SpeechSynthesisUtterance();

    // defing speech properties
    speech.lang =  "en-NG";
    speech.text = `${value}` + `${Author}`;
    speech.volume = 30;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech)
	img.classList.toggle('active')

}



