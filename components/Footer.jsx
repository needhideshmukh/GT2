import "../style/footer.css"
import "../src/app/globals.css"

const Footer = () => {
  // Define the link categories
  const categories = [
    {
      title: "User focused",
      links: [
        "Contact Us",
        "Home",
        "i-Hybrid",
        "Pure EV",
        "Mobility Solution",
        "About",
        "Insights",
        "Disclaimer",
        "Terms & Conditions",
        "Privacy Policy",
      ],
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
    <section>
      <hr />
      <footer className="footer">
        <div className="content">
          {/* Map over the categories array to render categories */}
          {categories.map((category, index) => (
            <div key={index} className="linksColumn">
              <h3>{category.title}</h3>
              <ul>
                {/* Map over the links in each category to render links */}
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <a className="" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Newsletter Subscription */}
          <div className="newsletter ">
            <h3>Newsletter Subscription</h3>
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Enter your message"></textarea>
            <button className="button_pink ">SUBMIT</button>
          </div>
        </div>
      </footer>
      <hr />
    </section>
  )
}

export default Footer
