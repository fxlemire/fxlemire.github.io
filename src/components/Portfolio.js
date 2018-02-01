import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

const Portfolio = ({ portfolio }) => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Publicly Available Work.</h1>

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.eprintit.mobileprint">
                <img alt="ePRINTit" src={portfolio.eprintit} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>ePRINTit</h5>
                    <p>Mobile App Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" href="https://gitlab.com/fxlemire/trumpet-fingering">
                <img alt="Trumpet Fingering" src={portfolio.trumpetfingering} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Trumpet Fingering</h5>
                    <p>React Native (Ongoing)</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" href="https://github.com/fxlemire/pair-matching">
                <img alt="Secret Santa" src={portfolio.secretsanta} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Secret Santa</h5>
                    <p>Java CLI</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" href="https://github.com/fxlemire/adventofcode">
                <img alt="Advent of Code" src={portfolio.adventofcode} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Advent of Code</h5>
                    <p>CS Challenges</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" href="https://www.cartagene.qc.ca/">
                <img alt="CARTaGENE" src={portfolio.cartagene} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>CARTaGENE</h5>
                    <p>Project Management</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
