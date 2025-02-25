import React from 'react';
import Clients from '../components/Clients';
// import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Aftermovie from '../components/Aftermovie';
// import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
// import Timevenue from '../components/Timevenue';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            {/* <Timevenue /> */}
            <Aftermovie />
            <Services />
            {/* <Portfolio /> */}
            <Clients />
            {/* <Cta/> */}
            <Footer />
        </>

    )
}

export default Home;

