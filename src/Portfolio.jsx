import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const TenSeconds = 7500;

  const portfolio = [
    {
      title: "Talker",
      description:
        "Talker is a chatting / file-sharing application that I build using PHP, MySql, and JavaScript",
      image: "Talker.png",
      demo: "https://github.com/wodosharlatan/Talker",
    },
    {
      title: "Tic Tac Toe",
      description: "My take on the Tic Tac Toe game using Assembly 8051",
      image: "Tic-Tac-Toe.jpg",
      demo: "https://github.com/wodosharlatan/Assembly-8051-Tic-Tac-Toe",
    },
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex => {
      if (currentIndex === portfolio.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, TenSeconds);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main class="main">
        <section class="portfolio section" id="portfolio">
          <h2 class="section__title">Recenze</h2>
          <span class="section__subtitle">Já z očí zákazníků</span>

          <div class="portfolio__container container">
            <div class="portfolio__content grid">
              <img
                src={portfolio[currentIndex].image}
                alt=""
                class="portfolio__img"
              />

              <div class="portfolio__data">
                <h3 class="portfolio__title">
                  {portfolio[currentIndex].title}
                </h3>
                <p class="portfolio__description">
                  {portfolio[currentIndex].description}
                </p>

                <a
                  href={portfolio[currentIndex].demo}
                  target="_blank"
                  class="button button--flex button--small portfolio__button"
                >
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
