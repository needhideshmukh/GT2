/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// pages/index.js
import React, { useState, useRef, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
// import { useClient } from "next/client"

export default function Home() {
  //-----
  // useClient()

  const [isToggled, setIsToggled] = useState(false)
  const [index, setIndex] = useState(0)

  const toggleImage = () => {
    setIsToggled(!isToggled)
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  //Pure EV features
  const features = [
    "Feature 1 Lorem ipsum dolor sit dolorem ullam, fuga distinctio nostrum,",
    "Feature 2 amet consectetur adipisicing elit. ",
    "Feature 3  Consectetur illum nulla iusto dolorum",
    "Feature 4 dolorem ullam, fuga distinctio nostrum,",
  ]

  //B2B carousel Content
  const carouselContent = [
    {
      imageUrl: "../images/Rectangle 55.png",
      captionHeader: "First slide label",
      captionDescription:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

    {
      imageUrl: "../images/Rectangle 56.png",
      captionHeader: "Second slide label",
      captionDescription:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

    {
      imageUrl: "../images/Rectangle 57.png",
      captionHeader: "Third slide label",
      captionDescription:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ]

  //Clients section logos
  const clients = [
    "../images/Rectangle 55.png",
    "../images/Rectangle 56.png",
    "../images/Rectangle 57.png",
    "../images/Rectangle 55.png",
    "../images/Rectangle 56.png",
    "../images/Rectangle 57.png",
    "../images/Rectangle 55.png",
    "../images/Rectangle 56.png",
    "../images/Rectangle 57.png",
  ]

  //Clients section auto Scrolling + mouse hover pause
  const containerRef = useRef(null)
  const itemWidthRef = useRef(0)
  const scrollIntervalRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const items = container.querySelectorAll(".clientTitles")
    const itemWidth = items[0].offsetWidth // Get width of one item
    itemWidthRef.current = itemWidth

    // Function to scroll the container to the next item
    const scrollToNextItem = () => {
      container.scrollLeft += itemWidth // Scroll one item width

      // Reset scroll position to the beginning if reached the end
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0
      }
    }

    // Auto-scroll every 3 seconds
    scrollIntervalRef.current = setInterval(scrollToNextItem, 1000)

    // Pause auto-scrolling when the user interacts with the container
    const handleMouseEnter = () => {
      clearInterval(scrollIntervalRef.current)
    }

    const handleMouseLeave = () => {
      scrollIntervalRef.current = setInterval(scrollToNextItem, 1000)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      clearInterval(scrollIntervalRef.current)
    }
  }, [])

  //Awards content

  const awards = [
    { title: "Title 1", description: "Lorem ipsum dolor sit amet. " },
    { title: "Title 2", description: "Lorem ipsum dolor sit amet. " },
    { title: "Title 3", description: "Lorem ipsum dolor sit amet. " },
    { title: "Title 4", description: "Lorem ipsum dolor sit amet. " },
    { title: "Title 5", description: "Lorem ipsum dolor sit amet. " },
  ]

  //Impact points

  const impactPointers = [
    { index: 1, title: "Title 1", description: "Lorem ipsum dolor sit amet. " },
    {
      index: 2,
      title: "Title 2",
      description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. ",
    },
    { index: 3, title: "Title 3", description: "Lorem ipsum dolor sit amet. " },
    { index: 4, title: "Title 4", description: "Lorem ipsum dolor sit amet. " },
    {
      index: 5,
      title: "Title 5",
      description:
        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. ",
    },
  ]

  const pressArticles = [
    {
      imageUrl: "../images/Rectangle 55.png",
      captionHeader: "First slide label",
      captionDescription:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

    {
      imageUrl: "../images/Rectangle 56.png",
      captionHeader: "Second slide label",
      captionDescription:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },

    {
      imageUrl: "../images/Rectangle 57.png",
      captionHeader: "Third slide label",
      captionDescription:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ]

  // ----------------> return
  return (
    <div>
      <Navbar />
      <main>
        {/* ---------------------------------------- */}
        <div className="homeContainer">
          <img
            className="play_buton"
            onClick={toggleImage}
            src="../images/Play button.png"
            alt=""
          />

          <div className="herContainer">
            <div className="rightHeroContainer">
              <div className="heading_content">
                <h1 className="reusable_heading">
                  World’s 1st Dual Power Mode <br />
                  <span>I-HYBRID</span>
                </h1>
                <br />
                <p>
                  Green Tiger’s i-Hybrid is the world’s first EV with a backup
                  of petrol engine.
                </p>
                <div>
                  <button className="button_pink">READ MORE</button>
                  <button className="button_white">CONFIGURE YOURS</button>
                </div>
              </div>

              <div className="vehicle_element">
                <img src="../images/bike.png" alt="" srcset="" />
                <div className="clients">
                  <p>Client 1</p>
                  <p>Client 2</p>
                </div>
              </div>
            </div>
            <div className="leftHeroContainer">
              <div>
                {/* <img src="../images/green-power.png" alt="" /> */}
                <img
                  src={
                    isToggled
                      ? "../images/green-power.png"
                      : "../images/petrol.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------> Pure EV */}
        <div className="pureEVContainer">
          <div className="components_uplift">
            <img
              className="arrowsBackground"
              src="../images/arrows_background.svg"
              alt=""
              srcset=""
            />
            <img
              className="arrowsBackground"
              src="../images/arrows_background2.svg"
              alt=""
              srcset=""
            />
            <img
              className="arrowsBackground"
              src="../images/arrows_background.svg"
              alt=""
              srcset=""
            />
          </div>

          <div>
            <h1 className="reusable_heading heading_right">
              Green Tiger converts your ride to <br /> <span>PURE EV</span>
            </h1>

            <div className="evComponents_specs_container">
              <div>
                <img src="../images/BOLT-Electric.png" alt="" />
              </div>

              <div className="glass_tile_specs">
                <h3>Features</h3>
                {features.map((feature, index) => (
                  <li key={index}>
                    &#9889; <span> {feature}</span>
                  </li>
                ))}
                <br />
                <button className="button_pink">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------> B2B solution */}
        <div className="b2bContainer">
          <div className="centerHeading">
            <h1 className="reusable_heading">
              Green Tiger facilitates other companies in <br />{" "}
              <span>B2B solutions</span>{" "}
            </h1>
            <br />
            <p>
              Several EV OEMs incorporate our products and components, a
              testament to the exceptional quality of our system. (Manufactured
              by us)
            </p>
          </div>
          {/* carousel */}
          <Carousel fade>
            {carouselContent.map((content, index) => (
              <Carousel.Item className="carousel_flex" key={index}>
                <div>
                  <img
                    className="d-block carouselImage"
                    src={content.imageUrl} // Replace "/image1.jpg" with the path to your first image
                    alt="First slide"
                  />
                </div>
                <div>
                  <Carousel.Caption>
                    <h3 className="reusable_heading ">
                      {content.captionHeader}
                    </h3>
                    <p>{content.captionDescription}</p>
                    <br />
                    <button className="button_pink">Know more</button>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          {/* carousel */}
        </div>

        {/* ----------------------------> Metrics */}
        <div className="metrics">
          <div className="metricText">
            <h3 className="reusable_heading">Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              temporibus! Dignissimos deserunt totam perferendis aperiam quam
              nam aspernatur tempora iste.
            </p>
          </div>
          <div className="metricNumber_icons">
            <p>
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p>
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p>
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p>
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p>
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        {/* ----------------------------> Clients */}

        <div className="ourClients">
          <div className="centerHeading">
            <h1 className="reusable_heading">
              Trusted by Industry Leading
              <span>Clients</span>{" "}
            </h1>
            <br />
            <p>
              Several EV OEMs incorporate our products and components, a
              testament to the exceptional quality of our system. (Manufactured
              by us)
            </p>
          </div>
          <div className="clientLogos" ref={containerRef}>
            {clients.map((logos, index) => (
              <div className="clientTitles" key={index}>
                <img src={logos} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------> Awards & Associations */}

        <div className="awardsContainer">
          <div className="waveDiv">
            <img
              className="waveBackground"
              src="../images/Green Wave.svg"
              alt=""
            />
          </div>

          <h3 className="awardsHeading reusable_heading">
            Awards & Association
          </h3>
          <div className="awardsSubHeading">
            {awards.map((award, index) => (
              <div className="awardCards glass_tile_specs2" key={index}>
                <img src="../images/Medal.svg" alt="" />
                <br />
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------> Impact */}
        <div className="impactConainer">
          <div className="image_desc">
            <h3 className="reusable_heading">
              We create an <span> IMPACT</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              temporibus cupiditate laudantium distinctio tempora minus numquam
              quam fugiat, aliquid sed obcaecati laboriosam, ullam
              exercitationem blanditiis itaque? Blanditiis repellat explicabo at
              laboriosam. Fuga, quod officia rem mollitia impedit illum odit
              modi, perspiciatis vitae, quaerat dignissimos facilis ipsum nisi
              beatae repellendus rerum?
            </p>
            <img src="../images/imageDummy.svg" alt="" />
            <br />
            <button className="button_pink" style={{ width: "fit-content" }}>
              READ MORE
            </button>
          </div>
          <div className="impactPointers">
            {impactPointers.map((impact, index) => (
              <div className="pointerFlex" key={index}>
                <div className="pinterIndex">{impact.index}</div>
                <div className="impact_title_desc">
                  <h3 className="ImpactHeading">{impact.title}</h3>
                  <p>{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------> press release */}
        <div className="pressContainer">
          <h3 className="reusable_heading pressHeading">
            Press Release{" "}
            <span>
              <img src="../images/pressArrow.svg" alt="" />
            </span>
          </h3>

          <div className="articleContainer">
            {pressArticles.map((article, index) => (
              <div className="articleCard" key={index}>
                <img src={article.imageUrl} alt="" srcset="" />
                <h3 className="ImpactHeading">{article.captionHeader}</h3>
                <p>{article.captionDescription}</p>
                <button
                  className="button_pink"
                  style={{ width: "fit-content" }}
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* ---------------------------------------- */}
      </main>
      <Footer />
    </div>
  )
}
