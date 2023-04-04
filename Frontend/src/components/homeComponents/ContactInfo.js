import React from "react";
import "./contact.css";
const ContactInfo = () => {
  return (
    <>
      <div className="container pt-4  ">
        <h2 className="section-title px-5">
          <span className="px-2">WATCH NEWS</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="images/WATCHNEWS1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Đồng hồ nam mặt chữ nhật Orient giá bao nhiêu, mua ở đâu?
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between ">
                <small className="text-muted">Last updated 1 month ago</small>
                <a className="card-link  text-primary " href="#">
                  Đọc tiếp
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="images/WATCHNEWS2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  7 Cách Kiểm Tra Đồng Hồ Orient Chính Hãng Đơn Giản Nhất
                </h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between ">
                <small className="text-muted">Last updated 5 day ago</small>
                <a className="card-link  text-primary " href="#">
                  Đọc tiếp
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="images/WATCHNEWS3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Cách lên dây cót đồng hồ cơ Orient đúng và đủ cho người mới
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between ">
                <small className="text-muted">Last updated 5 day ago</small>
                <a className="card-link  text-primary " href="#">
                  Đọc tiếp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 text-contact">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Contact Queries</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5 ">
            <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
            <p>
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
              duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et
              erat clita ipsum justo sed.
            </p>
            <div className="d-flex flex-column mb-3 mt-2">
              <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>137
                Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng 550000, Việt
                Nam
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>
                goldentime@gmail.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
                67890
              </p>
            </div>
            <div className="d-flex flex-column">
              <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>137
                Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng 550000, Việt
                Nam
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>
                goldentime@gmail.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
                67890
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <iframe
                    loading="lazy"
                    title="Đồng Hồ Orient"
                    width="1170"
                    height="658"
                    src="https://www.youtube.com/embed/videoseries?list=PLYNNji2ShyuAgr92B8LPsrNBv3G6zniqI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    data-rocket-lazyload="fitvidscompatible"
                    className="img-fluid rounded-start lazyloaded"
                    data-ll-status="loaded"
                  ></iframe>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">VIDEO INSTRUCTIONS FOR USE</h5>
                    <p className="card-text">
                      Đồng hồ Bambino là 1 dòng sản phẩm nổi tiếng của Orient
                      Nhật Bản kiểu dáng Hoài cổ khi được trang bị kính cong tạo
                      nên hiệu ứng thị giác đẹp mắt.Mời bạn tham khảo 5 sản phẩm
                      đồng hồ kính cong Bambino{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <iframe
                    className="img-fluid rounded-start"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.802446510125!2d108.16775494970574!3d16.075738143480606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218e6e07b1c3f%3A0x459e4bf5a2af323e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1677693695249!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Store address on the map</h5>
                    <p className="card-text">
                      137 Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng
                      550000, Việt Nam
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
{
  /*
<iframe loading="lazy" title="Đồng Hồ Orient" width="1170" height="658" src="https://www.youtube.com/embed/videoseries?list=PLYNNji2ShyuAgr92B8LPsrNBv3G6zniqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-rocket-lazyload="fitvidscompatible" className="lazyloaded" data-ll-status="loaded"></iframe>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.802446510125!2d108.16775494970574!3d16.075738143480606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218e6e07b1c3f%3A0x459e4bf5a2af323e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1677693695249!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/
}
export default ContactInfo;
