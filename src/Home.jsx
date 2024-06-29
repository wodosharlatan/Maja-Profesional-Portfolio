import React from "react";
import Typed from "typed.js";

export default function Home() {
  {
    /*--==================== TYPE JS ====================--*/
  }
  const TypedReact = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
      const options = {
        strings: [
          '<i class="uil uil-book-alt nav_icon"></i>Učitelka',
          'Volitelný text+ikona',
          'DALSI TEXT + ikona',
        ],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
      };

      typed.current = new Typed(el.current, options);
    });


    
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span class="auto-type" ref={el} />
        </div>
      </div>
    );
  };

  const zprava = "https://wa.me/420739708473?text=Na%20tuto%20zprávu%20neodpovídejte%2C%20je%20automaticky%20generovaná.%20"

  return (
    <>
      <main>
        {/*--==================== HOME ====================--*/}
        <section class="home section" id="home">
          <div class="home__container container grid">
            <div class="home__content grid">
              <div class="home__social">
                <a
                  href={zprava}
                  target="_blank"
                  class="home__social-icon"
                >
                  <i class="uil uil-whatsapp"></i>
                </a>
                <a
                  href="tel:+420739708473"
                  class="home__social-icon"
                >
                  <i class="uil uil-phone-alt"></i>
                </a>
              </div>

              <div class="home__img">
                <svg class="home__blob" viewBox="0 0 200 187">
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      class="home__blob-image"
                      x="-85"
                      y="-40"
                      href="RandomFoto.png"
                    />
                  </g>
                </svg>
              </div>

              <div class="home__data">
                <h1 class="home__title">Ahoj 👋, tady Mája</h1>
                <h3 class="home__subtitle">
                  <TypedReact />
                </h3>
                <p class="home__description">
                  "Nejaka motivacni veta, ktera bude vyzdvihovat tvoje schopnosti"
                </p>
                <a  
                  href={zprava}
                  target="_blank" 
                  class="button button--flex"
                >
                  Kontaktuj Mě 
                  <i class="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>

            <div class="home__scroll">
              <a href="#about" class="home__scroll-button button--flex">
                <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                <span class="home__scroll-name">Sjeď Dolů</span>
                <i class="uil uil-arrow-circle-down home__scroll-arrow"></i>
              </a>
            </div>


          </div>
        </section>
      </main>
    </>
  );
}
