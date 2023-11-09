import { useState } from "react";
import "./App.css";
import images from "./assets/images/index";
import { motion } from "framer-motion";

const App = () => {
  const[sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <div className="nav-logo">
            <img src={images.logo} />
          </div>
          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">New</div>
            <div className="nav-item">Popular</div>
            <div className="nav-item">Trending</div>
            <div className="nav-item">Categories</div>
          </div>
        </div>

        <div className="nav-mobile">
          <div className="navlogo"><img src={images.logo}/></div>
          <div className="menu" onClick={()=>{setSidebar(true)}}><img src={images.icon_menu} alt="" /></div>
          {
            sidebar && <>
                <motion.div className="sidebar"
                whileInView={{x: [80, 0]}}
                transition={{duration: 0.40, ease:'easeInOut'}}
                >
                <div className="sidebar-close" onClick={()=>{setSidebar(false)}}><img src={images.icon_menu_close}/></div>
                <div className="sidebar-item">Home</div>
                <div className="sidebar-item">New</div>
                <div className="sidebar-item">Popular</div>
                <div className="sidebar-item">Trending</div>
                <div className="sidebar-item">Categories</div>
              </motion.div>
            </>
          }
        </div>
        
        <main className="main">
          <div className="main-left">
            <div className="main-left-upper"><img src={images.image_web_3_desktop} alt="" /></div>
            <div className="main-left-upper-mobile"><img src={images.image_web_3_mobile} alt="" /></div>
            <div className="main-left-bottom">
              <div className="main-left-bottom-left">
                the bright future of web 3.0?
              </div>
              <div className="main-left-bottom-right">
                <div className="main-left-bottom-right-top">
                  We dive into the next evolution of web that claims to put the power of the platform back into the hands of the people. But is it really fulfilling its promise?
                </div>
                <div className="main-left-bottom-right-bottom">
                  <div className="read-more-btn">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="main-right-heading">New</div>
            <div className="main-right-card">
              <div className="main-right-card-heading">Hydrogen vs Electric Cars</div>
              <div className="main-right-card-info">Will Hydrogen powered cars ever catch up to EVs?</div>
            </div>
            <div className="main-right-card">
              <div className="main-right-card-heading">The Downsides of AI Artistry</div>
              <div className="main-right-card-info">What are the possible adverse effects of on-demand AI image generation?</div>
            </div>
            <div className="main-right-card">
              <div className="main-right-card-heading">Is VC Funding Drying Up?</div>
              <div className="main-right-card-info">Private funding by VC firms is down 50% YOY. We take a look at what that means</div>
            </div>
          </div>
        </main>

        <div className="bottom-box">
          <div className="bottom-box-card">
            <div className="bottom-box-card-left"><img src={images.image_retro_pcs} alt="" /></div>
            <div className="bottom-box-card-right">
              <span>01</span><span>Retrieving Retro PCs</span><span>What happens when old PCs are given modern upgrades?</span>
            </div>
          </div>
          <div className="bottom-box-card">
            <div className="bottom-box-card-left"><img src={images.image_top_laptops}/></div>
            <div className="bottom-box-card-right">
              <span>02</span><span>Top 10 Laptops of 2022</span><span>Our best picks for various needs and budgets</span>
            </div>
          </div>
          <div className="bottom-box-card">
            <div className="bottom-box-card-left"><img src={images.image_gaming_growth} alt="" /></div>
            <div className="bottom-box-card-right">
              <span>03</span><span>The Growth of Gaming</span><span>How the pandemic has sparked fresh opportunities?</span>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default App;
