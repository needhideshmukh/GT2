import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/home.css"
import "../style/miscellaneous.css"

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="contact-section">
          <div className="container">
            <div className="contact-info">
              <div>
                <h2>Contact Us</h2>
              </div>
              <div>
                <h3>i-Hybrid Experience Centers</h3>
                <p>
                  We believe in ‘Show, don’t tell’. Visit one of our experience
                  centers, take a i-Hybrid test ride, get queries addressed by
                  our experts and evolve your ride into a i-Hybrid.
                </p>
                <button className="button_pink">
                  {" "}
                  <a href="#">Register here</a>
                </button>
              </div>
              <div>
                <h3>EV Conversion</h3>
                <p>
                  Are you a petrol 2-wheeler fleet owner or operator? Get in
                  touch with us
                </p>
                <p>Are you a petrol 2-wheeler owner? Get in touch with us</p>
              </div>
              <div>
                <h3>B2B Mobility Solutions</h3>
                <p>
                  Are you an EV OEM? Get in touch with us on phone or write to
                  us at
                </p>
              </div>
              <div>
                <h3>Partners/Dealers/Franchisees</h3>
                <p>
                  Are you interested in building our network or partnering with
                  us as a supplier? Get in touch with us
                </p>
              </div>
              <div>
                <h3>Careers</h3>
                <p>
                  Keen on evolving your career in a pioneering, high growth EV
                  company? Let’s talk
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
