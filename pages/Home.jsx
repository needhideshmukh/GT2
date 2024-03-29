/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// pages/index.js
"use client"
import React, { useState, useRef, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { CCarousel, CCarouselItem } from "@coreui/react"
import "@coreui/coreui/dist/css/coreui.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  const [isToggled, setIsToggled] = useState(false)
  const [index, setIndex] = useState(0)

  const toggleImage = () => {
    setIsToggled(!isToggled)
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  //B2B carousel Content
  const carouselContent = [
    {
      imageUrl: "../images/Rectangle 55.png",
      captionHeader: "Battery Pack",
      captionDescription:
        "All types of certified Li-ion battery packs, available as combination with our customisable BMS and telematics ",
    },

    {
      imageUrl: "../images/Rectangle 56.png",
      captionHeader: "Battery Management System (BMS)",
      captionDescription:
        "Certified, Smart BMS with audio-visual integration, Bluetooth & CAN Communication ",
    },

    {
      imageUrl: "../images/Rectangle 57.png",
      captionHeader: "Telematics",
      captionDescription:
        "Smart, nex-gen telematics including remote-lock customization, instant accident alerts, live location tracking, fuel-gauge monitoring",
    },

    {
      imageUrl: "../images/Rectangle 55.png",
      captionHeader: "Analytics",
      captionDescription:
        "Insights for your e-mobility ecosystem with our analytics solutions including BMS & controller metrics, rider profiling, environmental impact tracking & data visualisation",
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
    const itemWidth = items[0].offsetWidth + 50 // Get width of one item + 50px gap
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
    {
      awardImage: "../images/Medal.svg",
      title: "Best Startup award ",
      description:
        "Conquest competition event organized by BITS PILANI in 2022 ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "most promising innovative Startup in India",
      description:
        "•	Won the FICCI award as the most promising innovative Startup in India, in 2022 ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "Ministry of Heavy Industries (Govt. of India)",
      description: "Financial Grant of US$ 300,000 ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "ARAI (Automotive Research Association of India) ",
      description: "Financial Grant of US$ 300,000 ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "IIM Bangalore and Alstom, France ",
      description: "Financial Grant of US$ 25,000 ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "Ministry of Electronics & IT (Govt. of India)",
      description: "Investment of US$ 15,000 ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "Part of",
      description:
        "BITS Pilani (PEIDS) and IIM Bangalore (NSRCEL) as well as NASSCOM Deep Tech Club",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "NASSCOM ",
      description: "NASSCOM ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "Ministry of Heavy Industries (MHI) ",
      description: "Ministry of Heavy Industries (MHI) ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "MEITY  ",
      description: "(Ministry of Electronics and Information Technology)  ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "Startup India  ",
      description: "Startup India  ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "NSRCELL IIM Bangalore  ",
      description: "NSRCELL IIM Bangalore  ",
    },
    {
      awardImage: "../images/Medal.svg",
      title: "Bajaj Motors ",
      description: "Bajaj Motors",
    },
  ]

  //Awards section auto Scrolling + mouse hover pause
  const containerRef2 = useRef(null)
  const itemWidthRef2 = useRef(0)
  const scrollIntervalRef2 = useRef(null)

  useEffect(() => {
    const container = containerRef2.current
    const items = container.querySelectorAll(".awardCards")
    const itemWidth = items[0].offsetWidth + 50 // Get width of one item + padding
    itemWidthRef2.current = itemWidth

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
    scrollIntervalRef2.current = setInterval(scrollToNextItem, 1000)

    // Pause auto-scrolling when the user interacts with the container
    const handleMouseEnter = () => {
      clearInterval(scrollIntervalRef2.current)
    }

    const handleMouseLeave = () => {
      scrollIntervalRef2.current = setInterval(scrollToNextItem, 1000)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      clearInterval(scrollIntervalRef2.current)
    }
  }, [])

  //Impact points

  const impactPointers = [
    {
      index: 1,
      title: "Roar of pioneering innovation, for all",
      description:
        "Bringing the world’s first electric and petrol hybrid 2-wheeler conversion kit to 28 crore 2-wheeler drivers of India",
    },
    {
      index: 2,
      title: "Championing sustainability",
      description:
        "Enabling sustainable transportation at scale with 3Rs (Reduce, Reuse, Recycle). Reuse and reduce scrappage by converting into hybrid or electric vehicles and recycle by extending their life. Enabled by green manufacturing & auditable trail of carbon footprint.",
    },
    {
      index: 3,
      title: "Accessible, economic & easy riding for all ",
      description:
        "Evolved, affordable and convenient rides for 28 Cr+ riders with i-Hybrid & Full EV conversion solutions. No need to replace your old 2-wheeler, just evolve it into a better, cheaper and cleaner ride.  ",
    },
    {
      index: 4,
      title: "	Evolving the servicing ecosystem",
      description:
        "Taking petrol & electric mobility together to secure, enable and positively transform the servicing ecosystem. Eliminating livelihood risk by going beyond immediate EV-only mobility. ",
    },
    {
      index: 5,
      title: "Job creation & Make In India",
      description:
        "Creating direct and indirect employment across Indian EV ecosystem through vehicle conversions, manufacturing & distribution of components. Also, working with institutions & government bodies on sustainable policymaking to benefit of industry & society at large.",
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
      {/* <Navbar id="navbar" /> */}
      <Navbar />
      <main>
        {/* ---------------------------------------- */}
        <div className="homeContainer">
          <div>
            {isToggled ? (
              <img
                className="play_buton"
                onClick={toggleImage}
                src="../images/toggle2.svg"
                alt=""
              />
            ) : (
              <img
                className="play_buton"
                onClick={toggleImage}
                src="../images/toggle1.svg"
                alt=""
              />
            )}
          </div>
          <div className="herContainer">
            <div className="rightHeroContainer">
              <div className="heading_content">
                <h3 className="reusable_heading">
                  The world’s first <br />{" "}
                  <span className="iHybridtext">I-Hybrid</span>
                  <br /> 2-wheeler upgrade <br />
                </h3>
                <p>
                  Evolve your ride to the best of both worlds. Upgrade your
                  petrol engine scooter to an efficient, eco-friendly electric
                  one with the petrol engine as backup. <br />
                  <br />
                  Evolve your ride to the best of both worlds. Upgrade your
                  petrol engine scooter to an efficient, eco-friendly electric
                  one with the petrol engine as backup.
                </p>
                <div>
                  <button className="button_pink">READ MORE</button>
                  <button className="button_white">CONFIGURE YOURS</button>
                </div>
              </div>

              {/* <div className="vehicle_element">
                <img src="../images/bike.png" alt="" srcset="" />
              </div> */}
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

              <div className="glass_tile_specs3">
                <div className="specificaions">
                  <p>
                    Approved by RTOs, ARAI and all competent authorities. <br />{" "}
                    Coming soon!{" "}
                  </p>
                </div>
                {/* <div className="specificaions">
                  <h3>Title1</h3>
                  <p>100 Km</p>
                </div> */}
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
              src="../images/arrows_background.svg"
              alt=""
              srcset=""
            />
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

          <div className="glassContainer">
            <h1 className="reusable_heading centerHeading">
              <span>EV</span>olve your petrol ride to an electric one <br />{" "}
            </h1>
            <div className="evComponents_specs_container">
              <div className=" evDiv1">
                <p>
                  Have an ageing petrol scooter or fleet of scooters with high
                  running costs?{" "}
                </p>
                <p>
                  Evolve your ride into one with convenience, longevity,
                  eco-friendliness and tech with our pure EV conversion. And,
                  unbeatable economics at 25p per km!{" "}
                </p>
              </div>
              <div className="batteryFeatures">
                <div className="glass_tile_specs">
                  <h3>Battery Subscription</h3>
                  <p className="greyText">
                    Cost of battery = 0! <br />
                    Just subscribe to the battery swapping service and swap
                    batteries in 2 minutes at a reasonable monthly fee.
                  </p>
                  <button
                    className="button_pink"
                    style={{ width: "fit-content" }}
                  >
                    Convert Now
                  </button>
                </div>
                <div className="glass_tile_specs">
                  <h3>Battery Ownership</h3>
                  <p className="greyText">
                    Own your batter from day 1. Charge the removable battery
                    anytime, anywhere
                  </p>
                  <button
                    className="button_pink"
                    style={{ width: "fit-content" }}
                  >
                    Convert Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------> B2B solution */}
        <div className="b2bContainer">
          <div className="centerHeading">
            <h1 className="reusable_heading">
              Evolving business of EV OEMs at scale, one solution at a time
              <br /> <span>B2B Mobility Solutions</span>{" "}
            </h1>
            <br />
            <p className="greyText">
              You are committed to clean, reliable, economical and evolved
              transportation.
              <br />
              We are mission is to evolve rides across India with innovative,
              efficient and best-in-class electric and hybrid transportation
              products and solutions at scale.
              <br />
              We must become allies. Several EV OEMs already are.
            </p>
          </div>

          <CCarousel controls>
            {carouselContent.map((carouselImage, index) => (
              <CCarouselItem key={index}>
                <div className="carouselContainer ">
                  <div>
                    <img
                      className="d-block carouselImage"
                      src={carouselImage.imageUrl}
                    />
                  </div>
                  <div className="captionContainer">
                    <h3 className="reusable_heading ">
                      {carouselImage.captionHeader}
                    </h3>
                    <p className="greyText">
                      {carouselImage.captionDescription}
                    </p>
                    <br />
                    <button className="button_pink">Know more</button>
                  </div>
                </div>
              </CCarouselItem>
            ))}
          </CCarousel>
        </div>

        {/* ----------------------------> Metrics */}
        <div className="metrics">
          <div className="metricText">
            <h3 className="reusable_heading ImpactHeading">
              Why Green Tiger Mobility Solutions
            </h3>
            <p>And why we can revolutionise e-mobility. Together.</p>
          </div>
          <div className="metricNumber_icons">
            <p className="greyText">
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p className="greyText">
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p className="greyText">
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p className="greyText">
              <span>
                <img src="../images/Vector.png" alt="" />
              </span>
              Lorem, ipsum dolor.
            </p>
            <p className="greyText">
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
              <span>Clients</span>
            </h1>
          </div>
          <div className="clientLogos" ref={containerRef}>
            {clients.map((logos, index) => (
              <div key={index}>
                <img className="clientTitles" src={logos} alt="" />
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
            <span> Awards & Association</span>
          </h3>
          <div className="awardsSubHeading" ref={containerRef2}>
            {awards.map((award, index) => (
              <div className="awardCards glass_tile_specs2" key={index}>
                <img src={award.awardImage} alt="" />
                <br />
                <h5>{award.title}</h5>
                <br />
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
            <br />
            <p className="greyText">
              We are reimagining mobility and transportation, with pioneering
              innovation in clean fuel-driven transportation technology.
            </p>
            <br />
            <img src="../images/imageDummy.svg" alt="" />
            <br /> <br />
            <button
              className="button_pink mobileStyle"
              style={{ width: "fit-content" }}
            >
              READ MORE
            </button>
          </div>
          <div className="impactPointers">
            {impactPointers.map((impact, index) => (
              <div className="pointerFlex" key={index}>
                <div className="pinterIndex">{impact.index} </div>
                <div className="impact_title_desc">
                  <h3 className="ImpactHeading">{impact.title}</h3>
                  <p className="greyText">{impact.description}</p>
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
                <br />
                <h3 className="ImpactHeading">{article.captionHeader}</h3>
                <p className="greyText">{article.captionDescription}</p>
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
