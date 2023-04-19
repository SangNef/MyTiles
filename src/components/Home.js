import React from 'react';
import './css/home.css';
import './css/contact.css';
import './css/footer.css';

const Home = () => {
    return (
      <div>
        <section className="home-page">
          <div className="home">
            <div className="home-bg">
              <div className="home-content">
                <h2 className="title">My tiles</h2>
                <button className="contact-btn">Contact Us</button>
              </div>
            </div>
          </div>
          <div className="gallery">
            <h2>
              Out <span>Collecter</span>
            </h2>
            <div className="gallery-list">
              <div className="item zoom">
                <img
                  src="https://images.pexels.com/photos/6373535/pexels-photo-6373535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="content">
                  <h3 className="title">Pink Bathroom</h3>
                  <p className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item zoom">
                <img
                  src="https://images.pexels.com/photos/6373485/pexels-photo-6373485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="content">
                  <h3 className="title">Rounded Corridor</h3>
                  <p className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item zoom">
                <img
                  src="https://images.pexels.com/photos/4915554/pexels-photo-4915554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="content">
                  <h3 className="title">Bright Livingroom</h3>
                  <p className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item zoom">
                <img
                  src="https://images.pexels.com/photos/6186825/pexels-photo-6186825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="content">
                  <h3 className="title">Modern Bathroom</h3>
                  <p className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item zoom">
                <img
                  src="https://images.pexels.com/photos/4915593/pexels-photo-4915593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="content">
                  <h3 className="title">Classic Tiles</h3>
                  <p className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item zoom">
                <img
                  src="https://images.pexels.com/photos/6585753/pexels-photo-6585753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="content">
                  <h3 className="title">Veined Tiles</h3>
                  <p className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;