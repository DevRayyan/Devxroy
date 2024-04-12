// pages/index.js
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import "../../public/css/navbar.css";
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import Marquee from './Component/Marquee';
import SectionTitle from './Component/SectionTitle';
import Section from './Component/Section';
import Card from './Component/Card';
import Footer from './Component/Footer';

let slides = [
  "/img/banner-03.png",
  "/img/music-player.png",
  "/img/banner-02.jpg",
  "/img/mountain.jpg",
];

export default function Home() {
  const [modal, setModal] = useState(true)

  return (
    <div>
      {modal &&
        <div id="modal" className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-md">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="modal-container w-11/12 md:max-w-md bg-slate-900 mx-auto relative rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-2 text-left px-2">
                <div className="flex justify-center items-center py-3">
                  <button onClick={() => setModal(false)} id="close-modal" className="text-gray-500 absolute right-3 top-3 hover:text-gray-700">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <img className=' rounded-md h-[200px]' src='/img/img-modal.png' alt='modal image' />
                </div>
                <p className='text-center text-slate-300'>Development of Portfolio Is In Progress</p>
                <p className='text-center text-teal-500 text-xs mb-4 font-medium'>STAY TUNED</p>
              </div>
            </div>
          </div>
        </div>
      }
      <main>
        <section id="hero">
          <Navbar />
          <Carousel slides={slides} />

          <Section>
            <Marquee />
            <SectionTitle indicator={true} title='SPECs. OVERVIEW' para='Everything you need is right here, buddy.' />
            <div className='category-track-container'>
              <div className='category-track'>
                <Card title='FRONTEND LANG.' subTitle='HTML, CSS, JS' textColor='text-teal-500' />
                <Card title='BACKEND LANG.' subTitle='CORE PHP' textColor='text-blue-500' />
                <Card title='FRAMEWORKS' subTitle='REACTJS, NEXTJS, LARAVEL' textColor='text-pink-500' />
                <Card title='DATABASE' subTitle='MYSQL, SQL YOG' textColor='text-indigo-500' />
                <Card title='LIBRARY' subTitle='JQUERY, BOOTSTRAP, TAILWIND' textColor='text-fuchsia-500' />
                <Card title='VERSION CONTROL' subTitle='GIT & GITHUB' textColor='text-red-500' />
                <Card title='DESIGNING TOOLs' subTitle='PHOTOSHOP, FIGMA' textColor='text-amber-500' />
              </div>
            </div>


            <SectionTitle indicator={true} title='OTHER SOURCEs' para='Multiple features is like walking on a tightrope.' />
            <div className='category-track-container'>
              <div className='category-track'>
                <Card title='CHATGPT 3.5' subTitle={`Incorporate artificial intelligence within your life to drive optimized and efficient solutions, I personally use chatgpt for getting clean and optimized code.`} textColor='text-teal-500' />
                <Card title='FONTAWESOME ICONs' subTitle='Simplifying web design with a vast collection of scalable vector icons. The fist and last icons library in my thinking. That was great!' textColor='text-blue-500' />
                <Card title='CANVA PRO' subTitle=' Effortless graphic design platform for stunning visuals, suitable for beginners and experts alike. Highly recommended for my professional presence in short projects.' textColor='text-pink-500' />
                <Card title='IMAGE SOURCEs' subTitle={`I personally use Pinterest and Dribbble for design inspiration whether it\'s for website pages or mobile screen. They keep me up-to-date with trendy designs in the market.`} textColor='text-indigo-500' />
                <Card title='DOCUMENTATION' subTitle='Thorough documentation is essential for understanding programming languages, offering clear explanations, examples, and usage guidelines. It serves as a valuable resource for developers.' textColor='text-fuchsia-500' />
              </div>
            </div>
            <SectionTitle indicator={true} title='EDUCATION PROPs.' para='Limitless potential.' />
            <div className='category-track-container'>
              <div className='category-track'>

                <Card title='UNIVERSITY' subTitle='Bachelor In Software Engineer' anotherLine='Iqra University, Pakistan' textColor='text-teal-500' present={true} />
                <Card title='HIGHER DIPLOMA' subTitle='Dilpoma In Full Stack Web Devloper' anotherLine={'APTECH IT LEARNING CENTER'} textColor='text-blue-500' />
                <Card title='COLLEGE' subTitle='HSSC in Pre Engineering' anotherLine={'DJ SINDH GOVERNMENT SCIENCE COLLEGE'} textColor='text-pink-500' />
                <Card title='SCHOOL' subTitle={'SSC In Computer Science'} anotherLine={`THE EDUCATORS PROFESSIONAL'\s`} textColor='text-indigo-500' />
              </div>
            </div>
            <SectionTitle indicator={true} title='ROUTINE' para='That was Unstoppable.' />
            <div className='category-track-container'>
              <div className='category-track'>

                <Card title='HYBRID JOB' subTitle='As a Full Stack Web Developer & Designer.' anotherLine={'BHARMAL SYSTEM DESIGNER'} textColor='text-teal-500' present={true} presentTag='9 months have passed.' />
                <Card title='HEALTH & FITNESS' subTitle='People work, others hit the gym.' anotherLine='GARDEN & GYM' textColor='text-blue-500' present={true} presentTag='Workout daily' />
                <Card title='ATTEND LECTUREs' subTitle='Education matters, but applying it in the life is crucial.' anotherLine={'IN IQRA UNIVERSITY'} textColor='text-pink-500' present={true} presentTag='Several days' />
                <Card title='PREPARE FOR NEXT LVL' subTitle='Learn different technologies, libraries, ideas, logics ' anotherLine={'YOUTUBE VIDEOS'} textColor='text-indigo-500' />
              </div>
            </div>

            <SectionTitle indicator={true} title='WORKING POTENTIAL' para={'Accoeding to github performance.'} />

            <div >
              <div className=" grid grid-cols-1 md:grid-cols-2 flex  gap-6 min-h-full flex-col justify-center">
                <div>
                  <div className='text-teal-500 text-sm'>Activity overview</div>
                  <div className='text-slate-400 text-xs mt-3'>Contributed to <span className='text-slate-300'>46+</span> Projects in 9 months with perfect scalability.</div>
                  <div className='text-slate-400 text-xs'>I Owned <span className='text-slate-300'>17+</span> repositories on various technologies.</div>

                  <a href='https://github.com/DevRayyan' className='inline-block px-6 py-2.5 bg-zinc-900  border-0 text-white text-xs rounded-sm hover:bg-zinc-800 mt-4'><i className='fa-brands fa-github'></i> Visit Github Profile</a>

                </div>
                <div ><img src='/img/github-performance.png' alt='github performance' className='rounded-md' /></div>
              </div >
            </div >


            <SectionTitle indicator={true} title='CONTACT SOURCEs' para={'Various Methods to contact with us'} />
            <div >
              <div className=" grid grid-cols-1 md:grid-cols-2 flex  gap-6 min-h-full flex-col justify-center">

                <div className="sm:w-full md:max-w-md md:py-7 rounded-lg">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label htmlFor="email_addr" className="block text-sm font-normal leading-6 text-slate-400">Email address</label>
                      <div className="mt-2">
                        <input id="email_addr" name="email_addr" type="email_addr" autoComplete="email_addr" required style={{ background: '#000' }} className=" w-full text-white border border-gray-800 rounded-sm px-4 py-2 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-900" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-normal leading-6 text-slate-400">Full Name</label>
                      <div className="mt-2">
                        <input id="full_name" name="full_name" type="full_name" autoComplete="full_name" required style={{ background: '#000' }} className=" w-full text-white border border-gray-800 rounded-sm px-4 py-2 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-900" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-normal leading-6 text-slate-400">Note</label>
                      <div className="mt-2">
                        <textarea id="full_name" name="full_name" type="full_name" autoComplete="full_name" required style={{ background: '#000' }} className=" w-full text-white border border-gray-800 rounded-sm px-4 py-2 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-900">
                        </textarea>
                      </div>
                    </div>

                    <div>
                      <button type="submit" className="flex w-full justify-center rounded-sm bg-teal-700 px-3 py-2 text-sm font-normal leading-6 text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Send Message</button>
                    </div>
                  </form>

                </div>
                <div className="sm:w-full md:max-w-md  rounded-lg">
                  <SectionTitle indicator={true} title='Social Media Presence' />
                  <div className='grid grid-cols-2 gap-4 '>
                    <div className=' bg-zinc-950 border border-zinc-900 rounded-md p-5'>
                      <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-green-700 mx-auto'>
                        <i className='fa-brands fa-whatsapp fa-2x text-white '></i>

                      </div>
                      <div className='text-center mt-4 text-slate-300'>WhatsApp</div>
                      <div className='text-center  text-slate-500 text-xs'>+92 3170666298</div>
                      <a href="https://wa.me/03170666298" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full mt-4 py-2.5 bg-green-800 border-0 text-white text-xs rounded-sm hover:bg-green-700">
                        Start Chat
                      </a>
                    </div>
                    <div className=' bg-zinc-950 border border-zinc-900 rounded-md p-5'>
                      <div className='w-[70px] h-[70px] flex justify-center items-center  rounded-full bg-blue-600 mx-auto'>

                        <i className='fa-brands fa-linkedin-in fa-2x text-white '></i>
                      </div>
                      <div className='text-center mt-4 text-slate-300'>LinkedIn</div>
                      <div className='text-center  text-slate-500 text-xs'>Rayyan Ali</div>
                      <a href="https://www.linkedin.com/in/rayyan-ali-48385b244/" target="_blank" className="flex justify-center items-center w-full mt-4 py-2.5 bg-blue-600 border-0 text-white text-xs rounded-sm hover:bg-blue-500">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <SectionTitle indicator={true} title='Personal Email Address' para={'alirayyan.dev@gmail.com'} />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 align-center my-5 bg-green-500/30  rounded-sm p-10'>
              <div>
                <h6 className='text-green-300 text-lg'>Ready to explore my work.</h6>
                <p className='text-slate-100 font-light text-xs'>Here you'll discover excellent projects and designs.</p>
                {/* <p className='text-slate-100 font-light text-xs'>there are 50+ code collections are waiting for you</p> */}
              </div>
              <div className='flex items-center justify-end'>
                <Link href={'/showcase'} className='px-5 py-2 bg-green-700 border-0 text-white text-sm rounded-sm hover:bg-green-600'>Visit Showcase</Link>
              </div>
            </div>

            <Footer />
          </Section>
        </section>
      </main>
    </div>
  );
}
