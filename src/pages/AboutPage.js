import React from "react";
import Image from "../utils/images/about.png";
import { Hero } from "../components";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <section>
      <Hero page="About" />
      <Wrapper className="page section section-center">
        <img src={Image} alt="" className="about-img" />
        <article>
          <div className="title">
            <h2>About US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              iusto nam quis hic molestiae ipsa consequatur facilis velit
              accusantium ab, iure itaque dolores ad nulla voluptatibus cum
              libero laudantium in reprehenderit facere quaerat possimus animi
              dicta. Amet harum a corrupti odit, voluptatum reiciendis assumenda
              incidunt maxime! Perferendis eum dolorum labore!
            </p>
          </div>
        </article>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  background: #fff;

  .about-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }

  .title {
    margin-top: 5rem;
  }

  .title h2 {
    margin-bottom: 1rem;
    text-align: left;
    letter-spacing: var(--letter-spacing);
  }

  .title p {
    line-height: 2;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
