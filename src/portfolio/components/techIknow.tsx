import React from "react";
import reactnative from "../assets/reactnative.webp";
import Tilt from "react-tilt";
import Typical from "react-typical";
import reactlogo from "../assets/React-icon.svg.png";
import JS from "../assets/JavaScript_Logo.webp";
import TS from "../assets/ts.webp";
import firebaselogo from "../assets/firebase.webp";
import Reduxlogo from "../assets/redux.webp";

function TechIknow() {
  return (
    <div>
      <div className="bg-black py-11  pt-40 pb-40 px-4  flex  justify-center">
        <div>
          <p
            id="TechIknow"
            className="text-right text-5xl font-mono text-white "
          >
            <Typical
              steps={[
                "",
                1000,
                "Tech",
                1000,
                "Tech I",
                1000,
                "Tech I Know",
                1000,
              ]}
              loop={1}
              wrapper="p"
            />
          </p>
          <div className="max-w-4xl  place-items-stretch  my-5 grid grid-rows-2 grid-flow-col gap-4 ">
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img className="p-5 " src={JS} alt={"JS"} />
                  <p className="text-center text-white  ">JavaScript</p>
                </a>
              </div>
            </Tilt>

            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://www.typescriptlang.org/">
                  <img className="p-4 " src={TS} alt={"TS"} />
                  <p className="text-center text-white  ">TypeScript</p>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://reactjs.org/">
                  <img className="p-5" src={reactlogo} alt={"React.js"} />
                  <p className="text-center text-white pt-7 ">React.JS</p>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://reactnative.dev/">
                  <img className="p-5" src={reactnative} alt={"RN"} />
                  <p className="text-center text-white pt-7 ">React Native</p>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://firebase.google.com/">
                  <img className="p-5" src={firebaselogo} alt={"Firebase"} />
                </a>
                <p className="text-center text-white pt-2.5 ">Firebase</p>
              </div>
            </Tilt>

            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://redux.js.org/">
                  <img className="p-5" src={Reduxlogo} alt={"Redux"} />
                  <p className="text-center text-white   pt-7">Redux</p>
                </a>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechIknow;
