import React from "react";
import HeroImg from '../../assets/img/hero-img.png';
const Hero = () => {
    return (
        <div className='relative flex items-center bg-cover flext-start bg-center text-left h-svh w-full' style={{backgroundImage
        : `url(${HeroImg})`}}>
            <div className='absolute top-0 right-0 bottom-0 left-0'></div>
                <main className='px-10 lg:px-24 z-10'>
                    <div className='text-left'>
                        <h2 className='text-2xl text-zinc-600'>Peças no Precinho</h2>
                    </div>
                    <p className='mt-3 text-zinc-400 sm:mt-5 sm:max-w-xl text-6xl'>
                    Promo fim de ano!
                    </p>
                    <p className='mt-3 text-zinc-600 sm:mt-5 sm:max-w-xl text-2xl'>
                    Bom / Bonito / Barato
                    </p>
                    <button className='border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-44 h-12'>
                        Comprar Agora
                    </button>
                </main>
            
        </div>
      )
}

export default Hero;