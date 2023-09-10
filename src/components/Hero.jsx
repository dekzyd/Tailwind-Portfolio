/* eslint-disable react/no-unescaped-entities */
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-violet-200 py-24">
      <div className="align-element grid sm:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wide">I'm Oladayor</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="text-lg mt-2 text-slate-700 capitalize tracking-wide">
            Transforming ideas into interactive reality
          </p>
          <div className="flex mt-4 gap-x-4">
            <a href="#">
              <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="Hero Image" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
