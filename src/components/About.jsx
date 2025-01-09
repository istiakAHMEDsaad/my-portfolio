/**
 * @copyright 2025 istiakAHMEDsaad
 * @license Apache-2.0
 */

function About() {
  const aboutItems = [
    {
      label: 'Project done',
      number: 30,
    },
    {
      label: 'Years of experience',
      number: 1,
    },
  ];

  return (
    <section id='about' className='section'>
      <div className='container'>

        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] xl:max-w-full">
                I&apos;m a MERN stack developer with a focus on building robust and scalable web applications. I have a strong foundation in JavaScript, React, and Node.js, and I&apos;m proficient in using MongoDB for data management. I&apos;m passionate about clean code, best practices, and creating user-friendly interfaces. I&apos;m eager to contribute my skills to a challenging and rewarding role.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({label, number},index)=>(
                    <div key={index}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))}

                <img src="/white.png" width={30} height={30} alt="logo" className="ml-auto md:w-[40px] md:h-[40px]" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
