'use client'
import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import "../../../public/css/navbar.css";
import Section from '../Component/Section';
import Footer from '../Component/Footer';
import SectionTitle from '../Component/SectionTitle';
import ShowcaseCard from '../Component/ShowcaseCard';

const Showcase = () => {

    const Techs = {
        'html': 'HTML',
        'css': 'CSS',
        'bootstrap': 'Bootstrap',
        'md_bootstrap': 'MDBootstrap',
        'javascript': 'JS',
        'jquery': 'JQuery',
        'php': 'PHP',
        'mysql': 'MYSQL',
        'ajax': 'Ajax',
        'aos': 'AOS Animation',
        'animate': 'Animate CSS',
        'waypoint': 'Waypoint JS',
        'react': 'React JS',
        'figma': 'Figma',
        'swiper': 'Swiper JS',
        'owl_carousel': 'Owl Carousel JS',
        'material_ui': 'Material UI',
    }
    return (
        <div>
            <main>
                <section id="hero">
                    <Navbar />
                    <Section>
                        <div className='flex items-center gap-3 my-5'>
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-slate-100 text-3xl'>Showcase</h1>
                                <h1 className='text-slate-100 text-xs text-slate-400'>There are many websites & Web/App designs are present in showcase.</h1>
                            </div>
                        </div>
                        {/* <div className='mt-3'>
                            <input id="full_name" name="full_name" type="full_name" autoComplete="full_name" required placeholder='SEARCH | how to find fontawesome premium cdn link?' className="bg-zinc-900 placeholder:text-xs placeholder:text-zinc-500 text-sm w-full text-white border border-zinc-800 rounded-sm px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring focus:ring-teal-900" />
                        </div> */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  mb-4'>
                            <div>

                                <div className='md:p-4 rounded-md md:bg-zinc-950 mb-4'>
                                    <SectionTitle indicator={true} indicatorClr={'bg-red-500'} indicatorOverlay={'bg-red-500/20'} title='E-COMMERCE PROJECTs' containerClass={`mt-0 mb-4`} />
                                    <ShowcaseCard title={`TasteHub `} titleClr={`text-orange-400`} tagLine={`Food Delivery Platform`} pointShadow='bg-orange-500/20' pointBg='bg-orange-500' tags={[Techs['html'], Techs['css'], Techs['php'], Techs['mysql']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}, ${Techs['ajax']}, ${Techs['owl_carousel']}`} urlPath={`https://woochat.000webhostapp.com/`} imgPath={`/img/tastehub.png`} timeStamp={`1 years ago`} />
                                    <ShowcaseCard title={`BookMate `} titleClr={`text-pink-400`} tagLine={`Books Selling Platform`} pointShadow='bg-pink-500/20' pointBg='bg-pink-500' tags={[Techs['html'], Techs['css'], Techs['php'], Techs['mysql']]} libTags={`${Techs['jquery']}, ${Techs['md_bootstrap']}`} urlPath={`https://unappealable-engine.000webhostapp.com/index.php`} imgPath={`/img/bookmate.png`} timeStamp={`1 years ago`} />
                                    <ShowcaseCard title={`Zap Store`} titleClr={`text-blue-400`} tagLine={`Clothes Selling Platform`} pointShadow='bg-blue-500/20' pointBg='bg-blue-500' tags={[Techs['html'], Techs['css'], Techs['php'], Techs['mysql']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}, ${Techs['ajax']}`} urlPath={`http://webapplicationthrift.000webhostapp.com/index.php`} imgPath={`/img/zap-store.png`} timeStamp={`1 years ago`} />
                                    <ShowcaseCard title={`ChatUp`} titleClr={`text-blue-400`} tagLine={`Chatting Web Application `} pointShadow='bg-blue-500/20' pointBg='bg-blue-500' tags={[Techs['html'], Techs['css'], Techs['php'], Techs['mysql']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}`} urlPath={`https://simulant-appearance.000webhostapp.com/signin_up.php`} imgPath={`/img/chatup.png`} timeStamp={`1 years ago`} />

                                </div>
                                <div className='md:p-4 rounded-md md:bg-zinc-950 '>
                                    <SectionTitle indicator={true} indicatorClr={'bg-pink-500'} indicatorOverlay={'bg-pink-500/20'} title='WEB/APP DESIGNING' containerClass={`mt-0 mb-4`} />
                                    <ShowcaseCard title={`CARSNOW Webpage Design`} titleClr={`text-yellow-400`} tagLine={`Show Trade Deal Details of CarsNow App`} pointShadow='bg-yellow-500/20' pointBg='bg-yellow-500' tags={[Techs['figma']]} urlPath={`https://www.figma.com/file/iCx5MXtO8kkDYRNccTkrZT/CarsNow-webpage?type=design&node-id=0%3A1&mode=design&t=UmpFewNVNdZDxjHe-1`} imgPath={`/img/carsnow-half.png`} timeStamp={`1 months ago`} />
                                    <ShowcaseCard title={`CARSNOW APP Design`} titleClr={`text-yellow-400`} tagLine={`Show Trade Deal Details of CarsNow App`} pointShadow='bg-yellow-500/20' pointBg='bg-yellow-500' tags={[Techs['figma']]} urlPath={`https://www.figma.com/file/MlRPVLDFcDQUmAP7ciy0FA/CARS-NOW-APP?type=design&node-id=108%3A1731&mode=design&t=Zqkkjs02C3ry4wHm-1`} imgPath={`/img/carsnow-app.png`} timeStamp={`1 months ago`} />
                                    <ShowcaseCard title={`FMB Web Portal Design`} titleClr={`text-yellow-400`} tagLine={`Restaurant Management Platform`} pointShadow='bg-yellow-500/20' pointBg='bg-yellow-500' tags={[Techs['figma']]} urlPath={`https://www.figma.com/file/DBvkuKfDd9fQWYRLYjhesZ/fmb?type=design&node-id=4%3A2&mode=design&t=W0ZDZKDRLse34O41-1`} imgPath={`/img/fmb-web.jpg`} timeStamp={`3 months ago`} />
                                    <ShowcaseCard title={`FMB App Design`} titleClr={`text-yellow-400`} tagLine={`Restaurant Management Platform`} pointShadow='bg-yellow-500/20' pointBg='bg-yellow-500' tags={[Techs['figma']]} urlPath={`https://www.figma.com/file/Z2w6p0NV2HwIOs5qOeYXly/FMB-MOBILE-APP?type=design&node-id=17%3A621&mode=design&t=W0ZDZKDRLse34O41-1`} imgPath={`/img/fmb-app.png`} timeStamp={`3 months ago`} />
                                    <ShowcaseCard title={`NASL Web Portal Design`} titleClr={`text-red-400`} tagLine={`National Accident Support Line`} pointShadow='bg-red-500/20' pointBg='bg-red-500' tags={[Techs['figma']]} urlPath={`https://www.figma.com/file/SZXix0AOG6S1QxkUAfcplP/NASL-WEB-PROJECT?type=design&node-id=16%3A556&mode=design&t=UJG9bhWr058RiRCQ-1`} imgPath={`/img/nasl-web.png`} timeStamp={`4 months ago`} />
                                    <ShowcaseCard title={`NASL App Design`} titleClr={`text-red-400`} tagLine={`National Accident Support Line`} pointShadow='bg-red-500/20' pointBg='bg-red-500' tags={[Techs['figma']]} urlPath={`https://www.figma.com/file/NhcF2UupfNgdhbFz0D6Z5q/NASL-NEW-DASHBOARD?type=design&node-id=9%3A158&mode=design&t=UJG9bhWr058RiRCQ-1`} imgPath={`/img/nasl-logo.png`} timeStamp={`5 months ago`} />

                                </div>


                            </div>

                            <div className='md:p-4 pt-0 rounded-md md:bg-zinc-950 '>
                                <SectionTitle indicator={true} indicatorClr={'bg-blue-500'} indicatorOverlay={'bg-blue-500/20'} title='FRONTEND PROJECTs' containerClass={`mt-0 mb-4`} />


                                <ShowcaseCard title={`CARSNOW`} titleClr={`text-yellow-400`} tagLine={`Show Trade Deal Details of CarsNow App`} pointShadow='bg-yellow-500/20' pointBg='bg-yellow-500' tags={[Techs['react'], Techs['css']]} libTags={`${Techs['bootstrap']}`} imgPath={`/img/carsnow-half.png`} timeStamp={`1 months ago`} status={'private'} />

                                <ShowcaseCard title={`FMB Dublin`} titleClr={`text-yellow-400`} tagLine={`Restaurant Management Platform`} pointShadow='bg-yellow-500/20' pointBg='bg-yellow-500' tags={[Techs['react'], Techs['css']]} libTags={`${Techs['material_ui']}`} imgPath={`/img/fmb-web.jpg`} timeStamp={`2 months ago`} status={'private'} />

                                <ShowcaseCard title={`StarLight Marketing`} titleClr={`text-blue-400`} tagLine={`Designing Agency Website`} pointShadow='bg-blue-500/20' pointBg='bg-blue-500' tags={[Techs['html'], Techs['css']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}, ${Techs['swiper']}`} urlPath={`https://66099f6d079846e728d9c856--euphonious-otter-f43312.netlify.app/`} imgPath={`/img/starlight.png`} timeStamp={`1 months ago`} />

                                <ShowcaseCard title={`Weather Finder`} titleClr={`text-blue-400`} tagLine={`Find Todays Weather`} pointShadow='bg-blue-500/20' pointBg='bg-blue-500' tags={[Techs['html'], Techs['css']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}, ${Techs['ajax']}`} urlPath={`https://devrayyan.github.io/Simple-Weather-Application-For-Desktop-Using-HTML5-CSS3-Bootstrap5-Javascript/#`} imgPath={`/img/weather-app.png`} timeStamp={`1 years ago`} />

                                <ShowcaseCard title={`Portfolio V2`} titleClr={`text-emerald-400`} tagLine={`Second Portfolio`} pointShadow='bg-emerald-500/20' pointBg='bg-emerald-500' tags={[Techs['html'], Techs['css']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}`} urlPath={`https://rayyanportfolio.000webhostapp.com/`} imgPath={`/img/portfolio-v2.png`} timeStamp={`1 years ago`} />

                                <ShowcaseCard title={`WEB SECTIONs `} titleClr={`text-blue-400`} tagLine={`Styled Web Sections`} pointShadow='bg-blue-500/20' pointBg='bg-blue-500' tags={[Techs['html'], Techs['css']]} libTags={`${Techs['jquery']}`} urlPath={`https://devrayyan.github.io/Website-Components-Using-HTML-CSS-And-JQuery/`} imgPath={`/img/web-sections.png`} timeStamp={`1 years ago`} />

                                <ShowcaseCard title={`ZAPMART`} titleClr={`text-purple-400`} tagLine={`E-Commerce Platform`} pointShadow='bg-purple-500/20' pointBg='bg-purple-500' tags={[Techs['html'], Techs['css']]} libTags={`${Techs['jquery']}, ${Techs['aos']}`} urlPath={`https://zap-mart.netlify.app/`} imgPath={`/img/zap-mart-pic1.png`} timeStamp={`2 years ago`} />

                                <ShowcaseCard title={`Portfolio V1`} titleClr={`text-purple-400`} tagLine={`First Portfolio`} pointShadow='bg-purple-500/20' pointBg='bg-purple-500' tags={[Techs['html'], Techs['css']]} libTags={`${Techs['jquery']}, ${Techs['bootstrap']}, ${Techs['waypoint']}, ${Techs['animate']}`} urlPath={`https://portfoliorayyan.netlify.app/`} imgPath={`/img/portfolio-v1.png`} timeStamp={`2 years ago`} />

                                <ShowcaseCard title={`BEATZ`} titleClr={`text-pink-400`} tagLine={`Simple Music Player`} pointShadow='bg-pink-500/20' pointBg='bg-pink-500' tags={[Techs['html'], Techs['css'], Techs['javascript']]} urlPath={`https://devrayyan.github.io/Music-Player/`} imgPath={`/img/music-player.png`} timeStamp={`2 years ago`} />






                            </div>
                        </div>



                        <Footer />
                    </Section>
                </section>
            </main>
        </div>
    )
}

export default Showcase