const loadQuote = () =>{
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
     .then(date => displayQuote(date))
}

const displayQuote = (quote) =>{
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerText = quote.quote;

}