import { graphql } from 'gatsby';
import $ from 'jquery';
import React, { Component } from 'react';

import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
// import Testimonials from "../components/Testimonials";

import '../assets/css/main.scss';

class IndexPage extends Component {
  componentDidMount() {
    const buttons = $('.smoothscroll');

    buttons.each((i, button) => {
      $(button).on('click', function (e) {
        const height = $(`#${button.href.split('#')[1]}`).offset().top;
        const mobileBtn = $('.mobile-btn');
        const diff = mobileBtn.is(':visible') ? 0 : $('#nav-wrap').height();
        const heightToScroll = height - diff;

        $('html, body').animate(
          { scrollTop: heightToScroll < 0 ? 0 : heightToScroll },
          1200,
        );
      });
    });
  }

  render() {
    const formatQueriedImages = (edges) =>
      edges.reduce((acc, e) => {
        const node = e.node.childImageSharp.fluid;
        const name = node.originalName.split('.')[0];

        return {
          ...acc,
          [name]: node.src,
        };
      }, {});

    const techstack = formatQueriedImages(this.props.data.techstack.edges);
    const portfolio = formatQueriedImages(this.props.data.portfolio.edges);

    return (
      <Layout>
        <div>
          <Header
            backgroundImage={
              this.props.data.background.childImageSharp.fluid.src
            }
          />
          <About />
          <Resume techstack={techstack} />
          <Portfolio portfolio={portfolio} />
          {/* <Testimonials /> */}
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    background: file(relativePath: { eq: "header-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 70) {
          src
        }
      }
    }
    techstack: allFile(filter: { relativePath: { glob: "tech/*.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 60, quality: 70) {
              originalName
              src
            }
          }
        }
      }
    }
    portfolio: allFile(filter: { relativePath: { glob: "portfolio/*.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 250, quality: 70) {
              originalName
              src
            }
          }
        }
      }
    }
  }
`;
