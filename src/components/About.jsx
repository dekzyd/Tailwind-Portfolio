import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about image" className="w-full h-64" />
        <article>
          <SectionTitle text="about oladayor" />
          <p className="text-slate-600 mt-8 leading-loose">
            Motivated Front-End Developer with experience creating and
            implementing innovative interactive web designs and user
            experiences.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
