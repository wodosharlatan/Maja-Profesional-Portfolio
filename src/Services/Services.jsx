import React, { useState } from "react";
import BackEndModal from "./BackEndModal";
import FrontEndModal from "./FrontEndModal";

export default function Services() {
  const [openFront, OpenFrontEnd] = useState(false);
  const [openEnd, OpenBackEnd] = useState(false);

  return (
    <>
      <main class="main">
        {/*==================== SERVICES ====================*/}
        <section class="services section" id="services">
          <h2 class="section__title">Services</h2>
          <span class="section__subtitle">What I offer</span>

          <div class="services__container container grid">
            {/*=================== SERVICE 1 ====================*/}
            <div class="services__content">
              <div>
                <i class="uil uil-web-grid services__icon"></i>
                <h3 class="services__title">
                  Frontend <br /> Developer
                </h3>
              </div>

              <span
                onClick={() => OpenFrontEnd(true)}
                class="button button--flex button--small button--link services__button"
              >
                View More
                <i class="uil uil-arrow-right button__icon"></i>
              </span>

              <FrontEndModal
                open={openFront}
                onClose={() => OpenFrontEnd(false)}
              />
            </div>

            {/*==================== SERVICE 2 ====================*/}
            <div class="services__content">
              <div>
                <i class="uil uil-cog services__icon"></i>
                <h3 class="services__title">
                  Backend <br /> Developer
                </h3>
              </div>

              <span
                onClick={() => OpenBackEnd(true)}
                class="button button--flex button--small button--link services__button"
              >
                View More
                <i class="uil uil-arrow-right button__icon"></i>
              </span>

              <BackEndModal open={openEnd} onClose={() => OpenBackEnd(false)} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
