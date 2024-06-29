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
          <h2 class="section__title">Služby</h2>
          <span class="section__subtitle">co nabízím</span>

          <div class="services__container container grid">
            {/*=================== SERVICE 1 ====================*/}
            <div class="services__content">
              <div>
                <i class="uil uil-web-grid services__icon"></i>
                <h3 class="services__title">
                  Doučovaní <br /> Matematiky
                </h3>
              </div>

              <span
                onClick={() => OpenFrontEnd(true)}
                class="button button--flex button--small button--link services__button"
              >
                Číst dále
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
                Doučovaní <br /> Informatiky
                </h3>
              </div>

              <span
                onClick={() => OpenBackEnd(true)}
                class="button button--flex button--small button--link services__button"
              >
                Číst dále
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
