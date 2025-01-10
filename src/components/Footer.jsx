/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/istiakAHMEDsaad/'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/istiakahmedsaad/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/IstiakSaad'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/saad_ishigami/'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/saad_senpai'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            
            <div className="">
                <div className="">
                    <h1 className="headline-1">Let&apos;s codding together today!</h1>

                    <ButtonPrimary href="mailto:istiakahmedsaad.official@gmail.com" label="Get started" icon="chevron_right" />
                </div>

                <div className="">
                    <div>
                        <p className="">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href}, idx)=>(
                                <li key={idx}>
                                    <a href={href} className="">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="">Socials</p>

                        <ul>
                            {socials.map(({label, href}, idx)=>(
                                <li key={idx}>
                                    <a href={href} target="_blank" className="">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="">
                <a href="" className="">
                    <img src="/white.png" height={40} width={40} alt="logo" />
                </a>

                <p className="">
                    &copy; 2025 <span className="">istiakAHMEDsaad</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer