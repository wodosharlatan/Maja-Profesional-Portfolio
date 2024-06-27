import React from "react";

export default function BackEndModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div class="services__modal">
        <div class="services__modal-content">
          <h4 class="services__modal-title">
            Backend <br /> Developer
          </h4>
          <i onClick={onClose} class="uil uil-times services__modal-close"></i>

          <ul class="services__modal-services grid">
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Web page development.</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>I troubleshoot and debug.</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>I manage web data.</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>I build and maintain websites.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
