const quotes = [
    {
        quote: "god",
        author: "one",
    },
    {
        quote: "good",
        author: "two",
    },
    {
        quote: "goood",
        author: "three",
    },
    {
        quote: "gooood",
        author: "four",
    },
    {
        quote: "goooood",
        author: "five",
    },
    {
        quote: "gooooood",
        author: "six",
    },
    {
        quote: "goooooood",
        author: "seven",
    },
    {
        quote: "gooooooood",
        author: "eight",
    },
    {
        quote: "goooooooood",
        author: "nine",
    },
    {
        quote: "gooooooooood",
        author: "ten",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;