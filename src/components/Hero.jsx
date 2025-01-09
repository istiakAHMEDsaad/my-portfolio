/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import rmvBg from '../assets/rmv-bg.png'
import {ButtonPrimary, ButtonOutline} from './Button'


const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">

      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        
        {/* 1 */}
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src="https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/415494624_2094001837607094_5453205653557107494_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGl0Y6ZDESFRhiSjnFmH3pupCMOfTNfEP6kIw59M18Q_smndNVTd1jGM88g1Oh2-YkOaktFlOp0_54jLv3uYS3G&_nc_ohc=eIwmwA8swHwQ7kNvgEKWLeb&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=A_QvbR7yYzRCxftFAbTX10B&oh=00_AYCxjxnTqfTHrWMeurSq5vnx6cxnjgYZr9AG9q6Eoo25PQ&oe=6785B087" 
              width={40} 
              height={40} 
              className="img-cover"
              alt="image" />
            </figure>

            {/* Active status */}
            <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              Available for coding 👨‍💻
            </div>
          </div>
          
          <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>Building Scalable Modern Application for the future</h2>

          <div className='flex items-center gap-3'>
            {/* Primary button */}
            <ButtonPrimary 
            label='Download CV'
            icon="download"
            />
            
            {/* Button outline */}
            <ButtonOutline 
            href="#about"
            label='Scroll down'
            icon='arrow_downward'
            />
          </div>
        </div>

        <div className='hidden lg:block'>
          <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-amber-950 via-25% via-amber-950/40 to-65% rounded-[60px] overflow-hidden'>
            <img src={rmvBg} 
            width={656} 
            height={800} 
            alt="Saad image" 
            className='w-full' />
          </figure>
        </div>
      
      </div>

    </section>
  )
}

export default Hero