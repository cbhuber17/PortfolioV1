import { useCallback, useEffect, useRef } from "react";
import ParagraphHeader from "./ParagraphHeader";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../contexts/LanguageContext";
import { useOnScreen } from "../hooks/useOnScreen";

const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

const vnQuotes = [
  {
    quote:
      "Chính lòng yêu nước, chứ không phải lý tưởng cộng sản, là nguồn cảm hứng cho tôi.",
    author: "Hồ Chí Minh",
  },
  {
    quote:
      "Không có hoàn cảnh nào tuyệt vọng, chỉ có người tuyệt vọng vì hoàn cảnh.",
    author: "Khuyết Danh",
  },
  {
    quote: "Hành động của tôi nói lên tôi là ai.",
    author: "Thích Nhất Hạnh",
  },
  {
    quote:
      "Các vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước.",
    author: "Hồ Chí Minh",
  },
  {
    quote: "Nơi lạnh nhất không phải là Bắc cực mà là nơi không có tình người.",
    author: "Khuyết Danh",
  },
  {
    quote: "Hãy mỉm cười, hít thở và đi từ từ.",
    author: "Thích Nhất Hạnh",
  },
  {
    quote: "Trẻ em như búp trên cành; biết ăn ngủ, biết học hành là ngoan.",
    author: "Hồ Chí Minh",
  },
  {
    quote: "Không có ai thực sự hiểu sự ưu sầu hay nỗi vui mừng của kẻ khác.",
    author: "Khuyết Danh",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
const RandomQuote = () => {
  const { isForeign } = useLanguage();
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  let quote = "";
  let author = "";
  let textPosition = 0;
  let getNewQuote = true;

  // async function loadQuote() {
  //   const url = "https://api.quotable.io/random";

  //   await fetch(url)
  //     .then((response) => {
  //       if (response.ok) return response.json();
  //     })
  //     .then((data) => {
  //       quote = data.content;
  //       author = data.author;
  //     });
  // }

  const typewriter = useCallback(async () => {
    let destination = document.getElementById("randomquote");
    if (getNewQuote) {
      if (isForeign) {
        const randomVnQuote =
          vnQuotes[Math.floor(Math.random() * vnQuotes.length)];
        quote = randomVnQuote.quote;
        author = randomVnQuote.author;
      } else {
        // await loadQuote();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote = randomQuote.quote;
        author = randomQuote.author;
      }
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
  }, [isForeign]);

  useEffect(() => {
    window.addEventListener("load", typewriter);
    {
      isOnScreen ? typewriter() : null;
    }
  }, [isOnScreen, typewriter]);

  return (
    <>
      <div className="my-6"></div>
      {isForeign ? (
        <ParagraphHeader
          pText="Thông điệp hữu ích"
          hText="Báo Giá Ngẫu Nhiên."
        />
      ) : (
        <ParagraphHeader pText="Useful messages" hText="Random Quotes." />
      )}

      <div
        id="randomquote"
        ref={elementRef}
        className=" tracking-[2px] text-[22px] text-[#00ffff] p-5;
                    text-shadow: 0 0 10px #00ffff;"
      ></div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(RandomQuote);
