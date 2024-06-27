import React from "react";

export default function About() {
  return (
    <>
      <main class="main">
        {/* --==================== ABOUT ====================-- */}
        <section class="about section" id="about">
          <h2 class="section__title">O mě</h2>
          <span class="section__subtitle">něco málo o mě</span>

          <div class="about__container container grid">
            <img src="RandomFoto.png" class="about__img" alt="" />

            <div class="about__data">
              <p class="about__description">
                Ahoj 👋! Tady Mája.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus quam aperiam consequatur ad voluptas a praesentium assumenda non quibusdam odit fugiat officiis veritatis iusto ratione mollitia dolores, laboriosam quasi.
              </p>
              <div class="about__info">
                <div>
                  <span class="about__info-title">10</span>
                  <span class="about__info-name">
                    Let <br /> zkušeností
                  </span>
                </div>
                <div>
                  <span class="about__info-title">3</span>
                  <span class="about__info-name">
                    Velké <br /> projekty
                  </span>
                </div>
                <div>
                  <span class="about__info-title">100+</span>
                  <span class="about__info-name">
                    Spokejených <br /> studentů
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
