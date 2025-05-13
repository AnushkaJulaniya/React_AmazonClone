import "./Footer.css";

function Footer(){
    return (
        <>
          <div className="footer">
            <div className="footerContent">
              <div className="footerContentDivs">
                <h3 className="footerContentDivsTitle">Get To Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>press Releases</p>
                <p>Amazon Science</p>
              </div>

              <div className="footerContentDivs" >
                <h3 className="footerContentDivsTitle">Contact With Us</h3>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
              </div>
              <div className="footerContentDivs">
                <h3 className="footerContentDivsTitle">Make Money With Us</h3>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selpng</p>
                <p>Become an Affilate</p>
                <p>Fdivfillment by Amazon</p>
              </div>
              <div className="footerContentDivs">
                <h3 className="footerContentDivsTitle">Lets Us Help You</h3>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
              </div>
            </div>

            <div className="amazonImg">
              <img className="amazonImgFooter" src="src/Assets/amazonLogo.svg" alt="" />
            </div>

          </div>
        </>
    )
}
export default Footer;