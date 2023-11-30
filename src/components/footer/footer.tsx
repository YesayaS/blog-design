import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left-section">
          <div className="footer__left-section__brandname">BlogTalk</div>
          <div className="footer__left-section__main-text">Some Motto Sentence Here</div>
          <div className="footer__left-section__description">
            Description about Garage talk Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
          </div>
        </div>
        <div className="footer__right-section">
            <div className="footer__right-section__sub-left">About Blog</div>
            <div className="footer__right-section__sub-right">Contact Us</div>
            <div className="footer__right-section__list-left">
                <a href="#">About Us</a>
                <a href="#">Our Vision</a>
                <a href="#">Teams</a>
            </div>
            <div className="footer__right-section__list-right">
                <a href="#">Email</a>
                <a href="#">Our Vision</a>
                <a href="#">Teams</a>
            </div>
            {/* <div className="footer__line"></div> */}
            <div className="footer__credit">Image from Pexel</div>
        </div>
      </div>
    </footer>
  );
}
