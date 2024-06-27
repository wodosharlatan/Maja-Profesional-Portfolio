import React from "react";

export default function FrontEndModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div class="services__modal">
        <div class="services__modal-content">
          <h4 class="services__modal-title">
            Frontend <br /> Developer
          </h4>
          <i onClick={onClose} class="uil uil-times services__modal-close"></i>

          <ul class="services__modal-services grid">
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Web page development.</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>I develop the user interface.</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>I create Ui layouts.</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>I manage visual design.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
