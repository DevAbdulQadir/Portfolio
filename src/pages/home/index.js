import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UnityIcon from "../../assets/Logo/Unity.png";
import BlenderIcon from "../../assets/Logo/Blender.png";
import ChatgptIcon from "../../assets/Logo/Chatgpt.png";
import GithubIcon from "../../assets/Logo/Github.png";
import HtmlIcon from "../../assets/Logo/Html.png";
import OfficeIcon from "../../assets/Logo/Office.png";
import PhotoIcon from "../../assets/Logo/Photoshop.png";
import PythonIcon from "../../assets/Logo/Python.png";
import VSIcon from "../../assets/Logo/VScode.png";
import WebglIcon from "../../assets/Logo/Webgl.png";


export const Home = () => {
  
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{backgroundSize:600,backgroundRepeat: "no-repeat" , backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.forth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      Proficiency
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <a
                    href="/AbdulQadir_Cv.pdf"
                    download
                    className="text_2"
                    onClick={() => {
                      toast.success("📄 Downloading CV now!", {
                        position: "bottom-center", 
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark", 
                      });
                    }}
                  >
                    <div id="button_cv" className="ac_btn btn mt-3">
                      Download CV
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <ToastContainer 
                    toastStyle={{ borderRadius: "10px" }}
                    style={{ bottom: "150px" }} 
                    />
                    <div className="mt-5 pt-4 text-center">
                      <img src={UnityIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={BlenderIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={PhotoIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={WebglIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={OfficeIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={VSIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={PythonIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={HtmlIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={ChatgptIcon} alt="Unity Logo" className="tool-icon" />
                      <img src={GithubIcon} alt="Unity Logo" className="tool-icon" />
                    </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
