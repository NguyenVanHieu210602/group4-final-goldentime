import React from "react";
import "./contact.css";
const ContactInfo = () => {
  return (
    <>
      <div className="container pt-4  " id="Watchnews">
        <h2 class="section-title px-5">
          <span class="px-2">WATCH NEWS</span>
        </h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="images/w1.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  6 Facts You Should Know Before Owning An Orient Watch
                </h5>
                <p class="card-text">
                  If you are looking for a high-quality and affordable watch, an
                  Orient Watch will be a perfect choice for you. Before getting
                  an Orient watch on hand, you may need to know a few things
                  more about Orient watches.
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <small class="text-muted">Last updated 1 month ago</small>
                <a
                  className="card-link  text-primary "
                  href="https://bestwatch.sg/blog/watchguide/orient-watch/"
                >
                  Continue reading...
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="images/w2.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Luxury Watches: Top 20 Luxury Watch Brands & Their Collections
                </h5>
                <p class="card-text">
                  Discover the world of luxury watches like never before.
                  Explore the top 20 luxury watch brands & each of their
                  collections.
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <small class="text-muted">Last updated 5 day ago</small>
                <a
                  className="card-link  text-primary "
                  href="https://wristadvisor.com/luxury-watches-top-watch-brands/"
                >
                  Continue reading...
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="images/w3.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  20 Couple Watch Idea to Buy for Yourself or to Gift on
                  Someone's Wedding
                </h5>
                <p class="card-text">
                  Couple watch is the best thing to gift to your friend or
                  family. And even a couple can also buy branded couple watch
                  set for their own wedding. To make it easy for you we have
                  made a collection of some of the luxurious couple watches and
                  some from affordable ranges.
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <small class="text-muted">Last updated 5 day ago</small>
                <a
                  className="card-link  text-primary "
                  href="https://www.bookeventz.com/blog/couple-watch-wedding-gift-ideas/"
                >
                  Continue reading...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5 text-contact" id="Contact">
        <div class="text-center mb-4">
          <h2 class="section-title px-5">
            <span class="px-2">Contact Queries</span>
          </h2>
        </div>
        <div class="row px-xl-5">
          <div class="col-lg-7 mb-5">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div class="control-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <textarea
                    class="form-control"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    class="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-5 mb-5 ">
            <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
            <p>
              Our store has only one branch. See our contact information below!
            </p>
            <div class="d-flex flex-column mb-3 mt-2">
              <p class="mb-2">
                <i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Le
                Duan Street, Hai Chau 2, Hai Chau, Da Nang 550000, Vietnam
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope text-primary mr-3"></i>
                goldentime@gmail.com
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt text-primary mr-3"></i>+84 788 030 999
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <iframe
                    loading="lazy"
                    title="Top 10 Most Expensive Watches in the World 2022"
                    width="1170"
                    height="658"
                    src="https://www.youtube.com/embed/rHWZXRctYEY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                    data-rocket-lazyload="fitvidscompatible"
                    class="img-fluid rounded-start lazyloaded"
                    data-ll-status="loaded"
                  ></iframe>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">VIDEO INSTRUCTIONS FOR USE</h5>
                    <p class="card-text">
                      We are proud to present the official 2022 most expensive
                      watches in the world list, verified by Alux. If you were a
                      billionaire, would you buy one of the most expensive
                      watches in the world?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <iframe
                    className="img-fluid rounded-start"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.905858788116!2d108.21347841468402!3d16.070374288880224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183674fc0b27%3A0xe637b39e717fb0f3!2zMTIzIMSQLiBMw6ogRHXhuqluLCBI4bqjaSBDaMOidSAyLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1680259102133!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Store address on the map</h5>
                    <p class="card-text">
                      123 Le Duan Street, Hai Chau 2, Hai Chau, Da Nang 550000,
                      Vietnam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
