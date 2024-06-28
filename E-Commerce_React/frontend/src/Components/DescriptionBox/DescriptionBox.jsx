import React from "react";
import "./DescriptionBox.scss";

function DescriptionBox(props) {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-nav">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          An e-commerce website is online platform that.... Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Adipisci obcaecati nostrum
          assumenda perspiciatis iusto minima quas. Dolore sint obcaecati
          tempore ex officia delectus at? Corporis nisi obcaecati, ea tempore
          similique, suscipit iusto libero minus voluptatum voluptates possimus
          magni consectetur aspernatur quos. Adipisci eos iure saepe magni
          voluptates voluptatum voluptatibus dignissimos!
        </p>
        <p>
          E-commerce websites typically display products or ..... Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Asperiores tempore
          dolorum impedit ratione doloribus! Expedita voluptas provident
          consectetur blanditiis inventore assumenda itaque illum excepturi
          mollitia sint a praesentium, tempore placeat hic? Deleniti similique
          ullam quam sunt sit, iste eaque ea maiores eius voluptatum dicta
          minima nobis accusamus, maxime facilis. Distinctio!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
