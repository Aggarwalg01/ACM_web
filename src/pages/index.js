//Components
import * as React from "react";
import Head from "utils/helmet";
import Layout from "components/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,EffectCards } from "swiper";
import axios from "axios";
import Hero from "components/HomePage/Hero";
//Styles and Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "./animations.css";


// Constants, JSONs and Assests
import { projectURL } from "utils/routes";
const visionData = require("./VisionData.json");
const projects = require("./ProjectData.json");

const data = [
  "/images/carousel/11.jpg",
  "/images/carousel/44.jpg",
  "/images/carousel/33.jpg",
  "/images/carousel/11.jpg",
  "/images/carousel/44.jpg",
  "/images/carousel/33.jpg",
];
const writeup = (
  <p className="text-justify lg:col-span-3">
    <span className="font-bold">ACM</span> is being run under the aegis
    of the Electronics and Communication Department, chitkara. We at{" "}
    <span className="font-bold">ACM</span>, organize various events,
    workshops, and competitions to pique the scientific temperament of the
    students. The society is reputed for conducting a national level hackathon:{" "}
    <span className="font-bold">ELECTROTHON</span>, one of the most
    ingenious and diverse hackathon. It also conducts its yearly technical fest,{" "}
    <span className="font-bold">ACM</span> covering advancements and
    marvels of the tech world."
  </p>
);


const About = () => {
  return (
    <React.Fragment>
      <div className="font-monty max-w-5xl xl:max-w-full h-full relative">
        <div className="top-8 w-full shadow test-bg relative">
          <div className="relative xl:left-2/3 left-3 pr-8 pl-6 pb-3 xl:w-1/3 text-gray-300 text-md md:text-xl xl:text-base leading-loose md:leading:normal">
            <div className="mx-auto p-6 text-center">
              <h1 className="text-5xl font-outfit text-white">
                Who <span className="">WE</span> are
              </h1>
              <div className="mx-auto pt-3 border-b-2 w-4/5 border-yellow-500 opacity-25"></div>
            </div>
            {writeup}
          </div>
          <div className="xl:w-2/3 flex justify-center pb-4 space-x-2 md:space-x-4 text-white">
            <a
              href="https://www.facebook.com/profile.php?id=61550724242499&mibextid=LQQJ4d"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/company/chitkara-acm-student-chapter/"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a
              href=""
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/acm_cuiet?igsh=MTY2MzdkeWRzODNocA=="
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center xl:absolute z-10 xl:left-1 md:pl-6 lg:pl-16 pt-12 md:pt-20 xl:w-10/16 xl:-top-20">
        <div className="w-full md:w-4/5 lg:w-full">
          <Swiper
            modules={[Pagination,EffectCards,Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
            loop={true}
            autoplay={{ delay: 3500 }}
            spaceBetween={0}
            slidesPerView={1}
            effect={"cards"}
          >
            {data.map((image, index) => {
              return (
                <SwiperSlide key={index + Math.random()}>
                  <img src={image} className="" alt="carousel img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="text-gray-200 text-center max-w-sm px-4 test-bg pb-6 px-3 rounded-3xl shadow-lg">
      <h4 className="pt-4 px-4 text-xl font-semibold uppercase leading-tight truncate">
        {project.title}
      </h4>
      <div className="mx-auto pt-3 border-b-2 w-4/5 border-yellow-500 opacity-25"></div>
      <div className="mt-4 pb-2 relative">
        <span className="text-md px-2 md:px-4 mb-8 block font-semibold">
          {project.content}
        </span>
        {/* <span className="p-2 px-4 border-2 border-gray-500 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black">
              Explore
            </span> */}
        {/* <img className={"h-36 absolute "+(project.class)} src={project.image} alt="project-vector"/>           */}
        <picture>
          <source srcSet={project.webp} type="image/webp" />
          <img
            className={"h-32 absolute " + project.class}
            src={project.image}
            alt="project-vector"
          />
        </picture>
      </div>
    </div>
  );
};




const VisionCard2 = ({ vision }) => {
  return (
  <div className="h-auto md:w-1/2 items-center flex flex-col sm:flex-row md:flex-col lg:flex-row bg-transparent">
    <div className="lg:w-2/5 w-full h-full flex items-center justify-center">
      <picture className="flex items-center justify-center">
        <source srcSet={vision.webp} type="image/webp" />
        <img
          src={vision.image}
          className="rounded-none object-cover lg:rounded-lg shadow-2xl block h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem] lg:h-[16rem] lg:w-[16rem]"
          alt="vision-photo"
        />
      </picture>
    </div>
    
    <div className="lg:w-4/5 h-full text-white lg:leading-loose md:py-3 lg:mt-10  p-10 pt-4 lg:py-6 lg:px-8 text-sm lg:text-md text-center">
    <p className="text-2xl HeroText font-semibold">{vision.name}</p>
    <p className="text-lg mb-2">{vision.post}</p>
     <p> {vision.content}</p>
    </div>
  </div>
  )}
class Home extends React.Component {
  state = {
    data: [],
    pathName: this.props.location.pathname.split("/").pop(),
  };
  componentDidMount() {
    axios
      .get(projectURL)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const slider2 = (
     <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {visionData.map((element, index) => {
          return (
        
              <VisionCard2 vision={element} />
           
          );
        })}
      </div>
    );
    return (
      <>
        <Head title="Home" />
        <Layout curLocation={this.state.pathName}>
        <Hero />
        <div className="shade top-[63rem] left-[68rem] w-[80rem] h-[80rem]"></div>
          <div className="relative">
            <div className="mt-24">
              <div className="max-w-7xl mx-auto pt-6 sm:px-6 lg:px-8">
                <About />
              </div>
            </div>
            <div className="mt-40 relative">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-outfit text-center text-white">
                  What <span className="">WE</span> do?
                </h1>
              </div>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
                <div className="px-4 py-6 sm:px-0 rounded-lg h-auto grid gap-x-12 lg:gap-x-24 gap-y-36 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                  {projects.map((element, index) => (
                    <ProjectCard
                      key={index + Math.random()}
                      project={element}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-32">
              <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-outfit text-center text-white">
                  <span className="">Our</span> Team
                </h1>
              </div>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">  
                {slider2}
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
export default Home;
