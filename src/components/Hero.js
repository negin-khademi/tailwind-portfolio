import { FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa';

import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <div className="bg-blue-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wide">I'm Negin</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">Front-End Developer</p>
          <p className="mt-2 text-lg capitalize text-slate-700 tracking-wide">turning ideas into intractive reality</p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/negin-khademi">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/negin-khademi-959844161/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://t.me/neginkhademi">
              <FaTelegram className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96 " />
        </article>
      </div>
    </div>
  );
};

export default Hero;
