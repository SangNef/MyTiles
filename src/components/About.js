import React from 'react';
import './css/about.css'

const About = () => {
    return (
      <section className="about" id="about-us">
        {/* <h2>
          about <span>us</span>
        </h2> */}
        <div className="description">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/6489095/pexels-photo-6489095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="content">
            <h3>What Makes Our Wall Tiles Special?</h3>
            <p>
              We Offer A Wide Variety Of Tiles In Different Styles, Sizes, And
              Colors To Suit Any Taste Or Budget. Whether You Are Looking For
              Traditional Ceramic Tiles, Sleek Glass Tiles, Or Rustic Stone
              Tiles, We Have Something For Everyone. We Also Offer Installation
              Services, So You Can Have Your New Tiles Installed With Confidence
              By Our Team Of Professionals.
            </p>
            <p>
              Thank You For Choosing Wall Tiles Shop. We Look Forward To Working
              With You And Helping You Transform Your Space With Beautiful,
              Durable Tiles.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="who-we-are">
          <div className="video">
            <iframe
              width="720"
              height="582"
              src="https://www.youtube.com/embed/N8PRnzksJbw"
              title="Royal Group Introduction 2022"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content">
            <h3>WHO WE ARE</h3>
            <p>
              MyTiles was established in 2001 by a group of friends who share the
              same passion in tiles.
            </p>{" "}
            <br />
            <p>
              After 22 years of development, Royal has grown to proudly become
              one of the leading corporations in the industry in Vietnam,
              producing annually millions square meters of covering products.
            </p>{" "}
            <br />
            <p>- Owning three factories for Tiles & Quartz;</p> <br />
            <p>- Joint venturing for two SPC factories;</p> <br />
            <p>– Employing a workforce of over 2500 employees;</p> <br />
            <p>
              – At 14 subsidiaries worldwide, three of which located in the USA;
            </p>{" "}
            <br />
            <p>
              – Creating a domestic distribution network with 14 warehouses and
              over 3000 agents across Vietnam.
            </p>{" "}
            <br />
            <p>
              – Exported to over 14 countries in the world (USA, Taiwan, Korea,
              Japan, Australia, etc)
            </p>
          </div>
        </div>
      </section>
    );
};

export default About;