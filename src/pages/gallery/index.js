// Components
import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import { Link } from "gatsby";
import Head from "utils/helmet";

// Icons and Styles
import "./gallery.css";

// Constants, JSONs, and Assets

export default class GallerySecondary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Head title="Gallery" />
        <Layout>
          <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">
            Gallery
          </h1>
          <div className="mx-16 mt-28 grid gap-4 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-2xl font-bold xl:text-3xl">
            <div
              className="w-58 h-120 lg:h-120 lg:row-span-2 bg-gray-400 object-center gallery-main-boxes"
              style={{ backgroundImage: 'url(`2.jpg`)' ,

              }}
            >
              <Link
                to="https://chitkara.acm.org/gallery"
                className="w-1/1 h-1/1 flex gallery-link k justify-center items-center bg-gray-800 bg-opacity-40 hover:bg-opacity-20 duration-200 ease-in-out"
              >
                <div className="gallay-mainpage-inner">
                  <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                    <h3>ECOCRAFT</h3>
                  </button>
                </div>
              </Link>
            </div>

            <div
              className="w-58 h-60 bg-gray-400 object-scale-down gallery-main-boxes"
              style={{
                backgroundImage: `url('1.jpg')`,
              }}
            >
              <Link
                to="https://chitkara.acm.org/gallery"
                className="w-1/1 h-1/1 flex gallery-link k justify-center items-center bg-gray-800 bg-opacity-40 hover:bg-opacity-20 duration-200 ease-in-out"
              >
                <div className="gallay-mainpage-inner">
                  <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                    <h3>CODATHON</h3>
                  </button>
                </div>
              </Link>
            </div>
            <div
              className="w-58 h-60 lg:col-span-2 bg-gray-400 object-cover gallery-main-boxes"
              style={{ backgroundImage: `url('3.jpg')` }}
            >
              <Link
                to="https://chitkara.acm.org/gallery"
                className="w-1/1 h-1/1 flex gallery-link justify-center items-center bg-gray-800 bg-opacity-40 hover:bg-opacity-20 duration-200 ease-in-out"
              >
                <div className="gallay-mainpage-inner">
                  <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                    <h3>DESIFN-O-TECH</h3>
                  </button>
                </div>
              </Link>
            </div>
            <div
              className="w-58 h-60 lg:col-span-3  object-cover gallery-main-boxes "
              style={{ backgroundImage: `url('4.jpg')` }}
            >
              <Link
                to="https://chitkara.acm.org/gallery"
                className="w-1/1 h-1/1 flex gallery-link k justify-center items-center bg-gray-800 bg-opacity-40 hover:bg-opacity-20 duration-200 ease-in-out"
              >
                <div className="gallay-mainpage-inner">
                  <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                    <h3>PIXEL-FUSION</h3>
                  </button>
                </div>
              </Link>
            </div>
            <div className="mt-10"></div>
          </div>
        </Layout>
      </>
    );
  }
}
