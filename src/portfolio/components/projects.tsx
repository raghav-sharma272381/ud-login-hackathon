import React, { useEffect } from "react";
import "../App.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/insta.png";
import project3 from "../assets/restraunt.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";
import mail from "../assets/mail.png";
import express from "../assets/Expressjs.png";
import reactnative from "../assets/reactnative.webp";
import Supabase from "../assets/Supabase.png";

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="bg-violet-800 ">
        <div className="relative">
          <div class="custom-shape-divider-bottom-1644379361">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <p
            id="ProjectsImade"
            className="text-left text-4xl text-white font-mono px-5  "
          >
            <Typical
              steps={[
                "",
                1000,
                "Projects",
                1000,
                "Projects I've",
                1000,
                "Projects I've made",
                1000,
              ]}
              loop={1}
              wrapper="p"
            />
          </p>
          <div className=" px-7 bg-violet-800 gird  grid-flow-row py-8  md:grid grid-rows-1 gap-80 overflow-hidden place-items-center md:py-80 ">
            <a href="https://github.com/raghav-sharma272381/restaurantsapp">
              <div
                data-aos="fade-up-right"
                data-aos-duration="3000"
                className="  p-9  bg-black grid grid-cols-1 backdrop-filter backdrop-blur-xl bg-opacity-50  shadow-lg rounded-3xl my-5 md:flex justify-between max-w-4xl md:mr-80  "
              >
                <div>
                  <img
                    className="p-3 w-full min-h-[70%]  "
                    src={project3}
                    alt={"Trendly"}
                  />
                </div>
                <div className=" md:grid grid-flow-row  ">
                  <div className="order-first ">
                    <p className="text-center p-5  text-3xl font-mono text-white  ">
                      Restraunt Search App
                    </p>
                    <p className="text-center p-5 text-xl font-mono text-white   ">
                      I made this app using yelp api, which searches for diffent
                      restraunt within San francisco area, within different
                      price ranges.
                    </p>
                  </div>
                  <div>
                    <p className="text-center p-5  text-3xl font-mono text-white   ">
                      Tech Used
                    </p>
                    <div className="flex place-content-center">
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={express}
                        alt={"express js"}
                      />
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={reactnative}
                        alt={"react native"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://github.com/raghav-sharma272381/instagram-clone">
              <div
                data-aos="fade-up-left"
                data-aos-duration="3000"
                className="  p-9  bg-black grid grid-cols-1 backdrop-filter backdrop-blur-xl bg-opacity-50  shadow-lg rounded-3xl my-2 md:flex justify-between max-w-4xl md:ml-80  "
              >
                <div>
                  <img
                    className="p-3 min-h-[70%]"
                    src={project2}
                    alt={"Trendly"}
                  />
                </div>
                <div className=" md:grid grid-flow-row  ">
                  <div className="order-first ">
                    <p className="text-center p-5  text-3xl font-mono  text-white   ">
                      Instagram Clone
                    </p>
                    <p className="text-center p-5 text-xl font-mono text-white   ">
                      This is the clone I made of instagram using react native,
                      redux and firebase. It has all the CRUD functionality in
                      it, all the data is being fetched in real time from
                      firebase servers.
                    </p>
                  </div>
                  <div>
                    <p className="text-center p-5  text-3xl font-mono text-white   ">
                      Tech Used
                    </p>
                    <div className="flex place-content-center">
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={reactnative}
                        alt={"mail"}
                      />
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={
                          "https://img.search.brave.com/RwJ4K9OTApOXXAR4ZTDHc6VsLb_wruKzXz1-YBtFpY8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tcnROUlZNM2FJ/dkkvWEpYX1UwN1ot/SUkvQUFBQUFBQUFK/WFkvWXBkT280OTBG/VGdkS094TTRxREct/Mi1FemNORkFXa0tB/Q0s0QkdBWVlDdy9z/MTYwMC9sb2dvJTJC/ZmlyZWJhc2UlMkJp/Y29uLnBuZw"
                        }
                        alt={"mail"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://apps.apple.com/in/app/trendly-events-near-you/id1607744954">
              <div
                data-aos="flip-left"
                data-aos-duration="3000"
                className="  p-9  bg-black grid grid-cols-1 backdrop-filter backdrop-blur-xl bg-opacity-50  shadow-lg rounded-3xl my-2 md:flex justify-between max-w-4xl  "
              >
                <div>
                  <img className="p-3 " src={project1} alt={"Trendly"} />
                </div>
                <div className=" md:grid grid-flow-row text-white   ">
                  <div className="order-first ">
                    <p className="text-center py-5  text-3xl font-mono   ">
                      TREND
                      <span className="text-red-400 font-extrabold">ly</span>
                    </p>
                    <p className="text-center py-5 text-xl font-mono text-white   ">
                      I was one of the developer who worked on the frontend of
                      trendly app. Which is a event finding app I made with my
                      friends. We used supabase as backend database and firebase
                      for auth.
                    </p>
                  </div>
                  <div>
                    <p className="text-center py-5  text-3xl font-mono text-white  ">
                      Tech Used
                    </p>
                    <div className="flex place-content-center">
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={Supabase}
                        alt={"mail"}
                      />
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={
                          "https://img.search.brave.com/RwJ4K9OTApOXXAR4ZTDHc6VsLb_wruKzXz1-YBtFpY8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tcnROUlZNM2FJ/dkkvWEpYX1UwN1ot/SUkvQUFBQUFBQUFK/WFkvWXBkT280OTBG/VGdkS094TTRxREct/Mi1FemNORkFXa0tB/Q0s0QkdBWVlDdy9z/MTYwMC9sb2dvJTJC/ZmlyZWJhc2UlMkJp/Y29uLnBuZw"
                        }
                        alt={"mail"}
                      />
                      <img
                        className="p-3 max-h-16 md:max-h-32 "
                        src={reactnative}
                        alt={"mail"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="relative">
          <div class="custom-shape-divider-top-1644379734">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
