function getQuote(){
	const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

	fetch(endpoint)
	.then(response => response.json())
	.then(data => {
		displayQuote(`"${data.message}"`);
	})
	.catch(() => console.log('An error has occurred'));
}

//displays the quote
function displayQuote(quote) {
	const quoteText = document.querySelector('.quote-text');
	quoteText.textContent = quote; // .textContent removes the previous quote

	const tweetButton = document.querySelector('.tweet');
	tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`); //` `back ticks interpolate values & Strings
}

//Selects the New Quote when the button is selected
const newQuoteButton = document.querySelector('.new-quote');

//We can detect when the newQuoteButton is pressed using addEventListener method
newQuoteButton.addEventListener('click', getQuote);

getQuote();