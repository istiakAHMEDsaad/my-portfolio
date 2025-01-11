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
            
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h1 className="headline-1 mb-8 lg:max-w-[90%]">Let&apos;s code together today!</h1>

                    <ButtonPrimary href="mailto:istiakahmedsaad.official@gmail.com" label="Get started" icon="chevron_right" />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href}, idx)=>(
                                <li key={idx}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>

                        <ul>
                            {socials.map(({label, href}, idx)=>(
                                <li key={idx}>
                                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="">
                    <img src="/white.png" height={40} width={40} alt="logo" />
                </a>

                <p className="text-zinc-500 text-sm">
                    &copy; 2025 <span className="text-zinc-200">istiakAHMEDsaad</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer