function Footer() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center w-screen bg-gray-light min-h-auto sm:border-t-2 sm:border-black/100 ">
        <div className="flex flex-col items-center justify-center w-[90vw] h-auto max-w-[77.5rem]">
          {/* newsletter */}
          <div className="absolute bg-black top-[-20%] left-[50%] px-[15px] py-4  translate-x-[-50%] h-[300px] w-9/10 rounded-2xl flex flex-col items-center justify-center md:flex-row sm:py-[0px] md:px-[5%] max-w-[77.5rem]">
            <h1 className="text-heading-sm text-white font-bold leading-[32px] my-2 mx-auto sm:text-[45px] h-4/10  sm:leading-[40px] md:leading-[45px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <form
              action=""
              className="flex flex-col justify-around w-full gap-[10%] h-4/10 "
            >
              {" "}
              <div className="relative w-full border-none rounded-full focus:border-none focus:outline-none">
                <input
                  type="email"
                  alt=""
                  placeholder="              Enter your email address"
                  className="relative w-full px-4 py-3 text-base bg-white border-none rounded-full cursor-pointer font-secondary text-black/40 h1/2 focus:border-none focus:outline-none"
                />
                <img
                  src="/src/assets/Images/Icons/mail.png"
                  className="absolute left-[5%] top-[50%] translate-y-[-50%]"
                />
              </div>
              <button className="w-full px-4 py-3 text-sm text-black bg-white rounded-full hover:">
                {" "}
                Subscribe to Newsletter
              </button>
            </form>
          </div>


          {/* bottom nav */}
          <div className="flex items-end w-full justify-end h-[670px] border-b  border-black/20  md:h-[500px]  ">
            <div className="flex flex-col justify-between items-center h-[500px] w-full md:h-[400px] md:flex-row ">
              <div className="flex flex-col justify-around item-start h-[180px]  w-full md:w-1/4   md:h-[180px] md:translate-y-[50px]">
                <img
                  src="/src/assets/Images/Icons/SHOP.CO.png"
                  alt=""
                  className="h-[20px] w-[145px] object-contain ml-[-10px]"
                />
                <p className="text-sm text-black/60 font-secondary leading-[20px]  ">
                  We have clothes that suits your style and which you're proud
                  to wear. From women to men.
                </p>
                <div className="flex w-full gap-3">
                  <img
                    src="/src/assets/Images/Icons/twitter.png"
                    alt=""
                    className="hover:invert"
                  />
                  <img
                    src="/src/assets/Images/Icons/facebook.png"
                    alt=""
                    className="invert hover:invert-0"
                  />
                  <img
                    src="/src/assets/Images/Icons/insta.png"
                    alt=""
                    className=" hover:invert"
                  />
                  <img
                    src="/src/assets/Images/Icons/github.png"
                    alt=""
                    className="hover:invert"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center w-full h-full item-start md:w-3/4 md:flex-row md:flex-nowrap md:h-[280px] md:items-end md:justify-end">
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px]  font-semibold font-secondary uppercase tracking-[3px]">
                      Company
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      About{" "}
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Features
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      {" "}
                      Works
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      {" "}
                      Career
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px] font-secondary  font-semibold uppercase tracking-[3px]">
                      HELP
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Customer Support
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Delivery Details
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      {" "}
                      Terms & Conditions
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      {" "}
                      Privacy Policy
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px] font-secondary  font-semibold uppercase tracking-[3px]">
                      FAQ
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Account
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Manage Deliveries
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Orders
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Payment
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col items-center justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px] font-secondary font-semibold uppercase tracking-[3px] ">
                      {" "}
                      RESOURCES
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Free eBook
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      {" "}
                      Development Tutorial{" "}
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      {" "}
                      How to Blog
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">
                      Youtube Playlist
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

    
          {/* footer bottom */}
          <div className="flex flex-col items-center w-full justify-center gap-3 h-[135px]  text-sm text-black/60 w-font-secondary md:flex-row md:justify-between">
            <p>
              Shop.co © 2025 , Coded by
              <a
                href="https://startbootstrap-personal.vercel.app/"
                className="font-bold hover:underline hover:text-black/80 in-hover:translate-x-[10px] ml-1"
              >
                 Olajire Joel
              </a>
              .
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/src/assets/Images/Icons/visa.png"
                alt=""
                className="w-1/6"
              />
              <img
                src="/src/assets/Images/Icons/mastercard.png"
                alt=""
                className="w-1/6"
              />
              <img
                src="/src/assets/Images/Icons/paypal.png"
                alt=""
                className="w-1/6"
              />
              <img
                src="/src/assets/Images/Icons/apple-pay.png"
                alt=""
                className="w-1/6"
              />
              <img
                src="/src/assets/Images/Icons/google-pay.png"
                alt=""
                className="w-1/6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
