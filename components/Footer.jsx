/* eslint-disable @next/next/no-img-element */
import "../style/footer.css"
import "../src/app/globals.css"

import React from "react"

const Footer = () => {
  const footerCTA = [
    {
      icon: "../images/Vector.png",
      title: "Find us",
      text: "1010 Avenue, sw 54321, Bangaore",
    },
    {
      icon: "../images/Vector.png",
      title: "Call us",
      text: "9876543210 0",
    },
    {
      icon: "../images/Vector.png",
      title: "Mail us",
      text: "mail@info.com",
    },
  ]

  const footerContent = [
    {
      heading: "Useful Links",
      //colums increase
      links: [
        { url: "#", label: "Home" },
        { url: "#", label: "About" },
        { url: "#", label: "Services" },
        { url: "#", label: "Portfolio" },
        { url: "#", label: "Contact" },
        { url: "#", label: "About us" },
        { url: "#", label: "Our Services" },
        { url: "#", label: "Expert Team" },
        { url: "#", label: "Contact us" },
        { url: "#", label: "Latest News" },
      ],
    },
  ]

  const footerMenu = [
    { url: "#", label: "Home" },
    { url: "#", label: "Terms" },
    { url: "#", label: "Privacy" },
    { url: "#", label: "Policy" },
    { url: "#", label: "Contact" },
  ]

  const categories = [
    {
      title: "User focused",
      links: ["Contact Us", "Home", "i-Hybrid", "Pure EV"],
    },
    {
      title: "Business focused",
      links: ["Contact Us", "Home", "i-Hybrid", "Pure EV"],
    },
    {
      title: "GT Expansion focused",
      links: ["Mobility Solution", "About", "Insights", "Disclaimer"],
    },
    {
      title: "GT Careers",
      links: ["Terms & Conditions", "Privacy Policy"],
    },
  ]

  return (
    <footer className="footer-section">
      <hr />
      <div className="container">
        <div className="footer-cta">
          <div className="ctaFlex">
            {/* Footer CTA Items */}
            {footerCTA.map((cta, index) => (
              <div className="" key={index}>
                <div className="single-cta">
                  <img src={cta.icon} alt=" "></img>
                  <div className="cta-text">
                    <h4>{cta.title}</h4>
                    <span>{cta.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="footer-content">
          <div className="row">
            {/* Footer Content Items */}
            {footerContent.map((content, index) => (
              <div className="" key={index}>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>{content.heading}</h3>
                  </div>
                  <ul className="linksFlex">
                    {content.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                  <div className="socialmedia">
                    <img src="../images/socials/Discord.svg" alt="Discord" />
                    <img src="../images/socials/Facebook.svg" alt="Discord" />
                    <img src="../images/socials/Google.svg" alt="Discord" />
                    <img src="../images/socials/Instagram.svg" alt="Discord" />
                    <img src="../images/socials/LinkedIn.svg" alt="Discord" />
                    <img src="../images/socials/Medium.svg" alt="Discord" />
                    <img src="../images/socials/Threads.svg" alt="Discord" />
                    <img src="../images/socials/Tweeter.svg" alt="Discord" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="copyright-area">
          <div className="subfooter">
            <div className="">
              <div className="copyright-text">
                <p>Copyright &copy; 2024, All Right Reserved Green Tiger</p>
              </div>
            </div>
            {/* Footer Menu */}
            <div className="row">
              <div className="footer-menu">
                <ul>
                  {footerMenu.map((menu, index) => (
                    <li key={index}>
                      <a href={menu.url}>{menu.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
