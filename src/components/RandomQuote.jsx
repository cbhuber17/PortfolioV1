import { useCallback, useEffect } from "react";
import ParagraphHeader from "./ParagraphHeader";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react-refresh/only-export-components
const RandomQuote = () => {
  let quote = "";
  let author = "";
  let textPosition = 0;
  let getNewQuote = true;

  async function loadQuote() {
    const url = "https://api.quotable.io/random";

    await fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        quote = data.content;
        author = data.author;
      });
  }

  const typewriter = useCallback(async () => {
    let destination = document.getElementById("randomquote");
    if (getNewQuote) {
      await loadQuote();
      quote += " ";

      getNewQuote = false;
    }

    destination.innerHTML =
      quote.substring(0, textPosition) +
      "<span style='animation: blinker 1s linear infinite'>\u25AE</span>";

    if (textPosition++ != quote.length) {
      setTimeout(typewriter, 85);
    } else {
      destination.innerHTML =
        quote +
        "<span style='animation: blinker 1s linear infinite'>\u25AE</span>" +
        "<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-&nbsp" +
        author;
      setTimeout(typewriter, 30000);
      textPosition = 0;
      getNewQuote = true;
      quote = "";
      author = "";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("load", typewriter);
    typewriter();
  }, [typewriter]);

  return (
    <>
      <div className="my-6"></div>
      <ParagraphHeader pText="Useful messages" hText="Random Quotes." />

      <div
        id="randomquote"
        className=" tracking-[2px] text-[22px] text-[#00ffff] p-5;
        
  text-shadow: 0 0 10px #00ffff;"
      ></div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(RandomQuote);
