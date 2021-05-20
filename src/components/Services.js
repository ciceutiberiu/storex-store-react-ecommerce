import React from "react";
import { services } from "../utils/constants";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="services-header">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dicta officia aut culpa asperiores repellat sequi, reiciendis
            maiores itaque laborum, magni doloribus, et quod ex facere quas
            nobis consectetur animi impedit expedita ipsa sed illo. Placeat
            officia eaque veniam dolorum?
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, text, icon, title } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--main-green);
  padding: 5rem 0;

  .services-header {
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  .services-header h2 {
    margin-bottom: 1.25rem;
  }

  .services-center {
    display: grid;
    gap: 2rem;
    margin-top: 3.5rem;
  }

  .service {
    background: var(--dark-green);
    padding: 2.5rem 2rem;
    border-radius: 5px;
    text-align: center;

    p {
      font-size: 1.1rem;
      color: var(--white);
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--white);
    }
    svg {
      font-size: 1.8rem;
      color: var(--white);
    }
    span {
      width: 3.5rem;
      height: 3.5rem;
      display: grid;
      margin: 0 auto;
      place-items: center;
      margin-bottom: 1rem;
      border-radius: 50%;
      background: var(--main-green);
    }
  }

  @media screen and (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Services;
