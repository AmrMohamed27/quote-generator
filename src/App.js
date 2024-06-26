import "./App.css";
import React, { useState } from "react";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa6";
import { FaTelegram as TelegramIcon } from "react-icons/fa6";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const twitterURL = "https://twitter.com/intent/tweet?text=";
  const whatsappURL = "https://api.whatsapp.com/send?text=";
  const telegramURL = "https://t.me/share/url?url=Quote:&text=";
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="share-container">
          <div className="share">
            <TwitterIcon className="icon" />
            <a
              className=""
              href={encodeURI(
                `${twitterURL}${quote.author} once said: ${quote.content}`
              )}
            >
              Share to X
            </a>
          </div>
          <div className="share">
            <WhatsappIcon className="icon" />
            <a
              className=""
              href={encodeURI(
                `${whatsappURL}${quote.author} once said: ${quote.content}`
              )}
              target="_blank"
              rel="noreferrer"
            >
              Send in WhatsApp
            </a>
          </div>
          <div className="share">
            <TelegramIcon className="icon" />
            <a
              className=""
              href={encodeURI(
                `${telegramURL}${quote.author} once said: ${quote.content}`
              )}
              target="_blank"
              rel="noreferrer"
            >
              Send via Telegram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
