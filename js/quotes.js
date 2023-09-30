const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "Jotn Lennon"
    },
    {
        quote: "The world is a book ane thoes who do not travel read only one page.",
        author: "Saint Augusttine"
    },
    {
        quote: "Life is either a daring adventure or nothing atall.",
        author: "Helen Keller"
    },
    {
        quote: "To Travel is to Live.",
        author: "Hans Christian Andersen"
    },
    {
        quote: " The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: " Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote: "Let me assert my firm belief that the only thing we have to fear is fear itself.",
        author: "F.D. Roosevelt"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "Sometimes even to live is an act of courage.",
        author: "Seneca"
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;