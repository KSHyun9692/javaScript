const quotes = [
    {
        quote: " 가나다",
        author: "가나다",
    },
    {
        quote: " 가나다라",
        author: "가나다라",
    },
    {
        quote: " 가나다라마",
        author: "가나다라마",
    },
    {
        quote: " 가나다라마바",
        author: "가나다라마바",
    },
    {
        quote: " 가나다라가가",
        author: "가나다라가가",
    },
    {
        quote: " 가나다라나나",
        author: "가나다라나나",
    },
    {
        quote: " 가나다라라라라",
        author: "가나다라라라라",
    },
    {
        quote: " 가나다라바바바",
        author: "가나다라바바바",
    },
    {
        quote: " 가나다라하하하",
        author: "가나다라하하하",
    },
    {
        quote: " 가나다라하하바바바바",
        author: "가나다라하하하하바바",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;