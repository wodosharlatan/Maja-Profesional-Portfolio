import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SevenSeconds = 7500;

  const portfolio = [
    {
      title: "Jan Novák",
      description:
        "Mája je skvělá učitelka, která mi pomohla s přípravou na maturitu z matematiky.",
      image: "ThisPersonDoesNotExist1.png",
      rating: 5,
    },
    {
      title: "Jiří Langer",
      description: "Obrázky lidí, kteří neexistují, jsou podle mě velmi fascinující.",
      image: "ThisPersonDoesNotExist2.png",
      rating: 4,
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
    }, SevenSeconds);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="uil uil-star"></i>);
      } else {
        stars.push(<i key={i} className="uil uil-star-not-rated"></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <main className="main">
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Recenze</h2>
          <span className="section__subtitle">Já z očí zákazníků</span>
          <div className="portfolio__container container">
            <div className="portfolio__content grid">
              <img
                src={portfolio[currentIndex].image}
                alt=""
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">
                  {portfolio[currentIndex].title}
                </h3>

                <p className="portfolio__description">
                  {portfolio[currentIndex].description}
                </p>

                <div className="portfolio__rating">
                  {renderStars(portfolio[currentIndex].rating)}
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
