import '../App.css'

export default function Card () {
    return(
        <div className="card-one">
            <h1>Bubble</h1>
            <h4>A simple website design using javascript</h4>
            <header>
                <nav>
                    <ul>
                       <li> <link to ="/"></link> Home</li>
                       <li> <link to="/about"></link>About</li>
                       <li> <link to="/find jobs"></link>Find Jobs</li> 
                       <li> <link to="/practice"></link>Practice</li> 

                    </ul>
                </nav>
            
            <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        </header>
    
    <section className="hero">
      <h2>Website design for Architectural Studio</h2>
      <p>We focus on beautiful design solutions.</p>
      <button>Get a Quote</button>
    </section>

    <section className="about">
      <h3>About Us</h3>
      <p>Using Javascript is fun and more fun with react which is an open soource library</p>
    </section>

    <section className="services">
      <h3>Our Services</h3>
      <ul>
        <li>Architectural Design</li>
        <li>Interior Design</li>
        <li>Project Management</li>
        <li>Sustainability Consulting</li>
      </ul>
    </section>
    import React from 'react';


    <section className="portfolio">
      <h3>Our Portfolio</h3>
      {/* Add logic to display portfolio items */}
    </section>
   
    <section className="contact">
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
<footer>
    <ul>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Cookies</li>
    </ul>
    <ul>
        <li>Designers</li>
        <li>Jobs</li>
        <li>Resources</li>
        <li>Places</li>
    </ul>
</footer>

        </div>
    
        
    )
}

