'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import {
  siteConfig,
  profileConfig,
  experienceConfig,
  projectsConfig,
  blogsConfig,
  interestsConfig,
} from '@/config';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const scrollTip = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth((scrollTip / height) * 100);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-[3px] bg-indigo-500 z-[100] shadow-[0_0_15px_rgba(99,102,241,1)]" style={{ width: `${width}%` }} />
  );
};

const Navbar = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center p-1 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
      {['work-experience', 'projects', 'interests', 'contact'].map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-all capitalize"
        >
          {id.split('-')[0]}
        </button>
      ))}
    </nav>
  );
};

const ExperienceCard = ({ item }: any) => (
  <div className="relative group mb-16">
    <div className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] z-10 border-4 border-[#020203]" />
    <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/5 hover:border-indigo-500/30 transition-all duration-500">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex-shrink-0 flex items-center justify-center p-2 border border-white/10">
          <img src={item.logo} alt="" className="max-w-full max-h-full object-contain brightness-125" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.role.en}</h3>
              <p className="text-indigo-400 font-semibold">{item.name}</p>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              {item.timeline.en}
            </span>
          </div>
          <div className="space-y-4 pt-4 border-t border-white/5">
            {item.description.en.split(' || ').map((point: string, idx: number) => (
              <div key={idx} className="flex gap-4 group/item">
                <span className="text-indigo-600 mt-1.5">•</span>
                <p className="text-stone-400 text-sm leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: point.trim() }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projectsConfig.items : projectsConfig.items.slice(0, 8);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    let interval: any;
    if (isHoveringName && typedChars < (profileConfig.name.extraChars?.length || 0)) {
      interval = setInterval(() => setTypedChars(p => p + 1), 50);
    } else if (!isHoveringName && typedChars > 0) {
      interval = setInterval(() => setTypedChars(p => p - 1), 30);
    }
    return () => clearInterval(interval);
  }, [isHoveringName, typedChars]);

  if (!mounted) return null;

  return (
    <div className="bg-[#020203] min-h-screen text-stone-400 selection:bg-indigo-500 selection:text-white font-sans">
      <ScrollProgress />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* HERO */}
        <header className="pt-40 pb-24 md:pt-56 md:pb-32">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(99,102,241,0.2)] group cursor-pointer"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
            >
              <img src="/headshot.png" alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.8] mb-6">
                {profileConfig.greeting.en} {profileConfig.name.short}
                <span className="text-indigo-600 block md:inline">{profileConfig.name.extraChars.slice(0, typedChars)}</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-500 max-w-lg font-medium">{siteConfig.metadata.description}</p>
            </div>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section id="work-experience" className="py-20">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-500">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>
          <div className="relative ml-4 md:ml-8 border-l border-white/10 pl-8 md:pl-12">
            {experienceConfig.current.items.map((item, i) => (
              <ExperienceCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-500">Selected Work</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((project, i) => (
              <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl bg-[#0A0A0C] border border-white/5 hover:border-indigo-500/30 transition-all duration-500">
                <div className="flex justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-400 transition-colors">{project.name.en}</h3>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">{project.description?.en}</p>
              </a>
            ))}
          </div>
          {projectsConfig.items.length > 8 && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-4 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
              >
                {showAllProjects ? 'Show Less' : `View All ${projectsConfig.items.length} Projects`}
              </button>
            </div>
          )}
        </section>

        {/* INTERESTS - DESCRIPTION ON HOVER + REDIRECT */}
        <section id="interests" className="py-20">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-500">Interests</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interestsConfig.items.map((interest, i) => (
              <a 
                key={i} 
                href={interest.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative h-[300px] rounded-3xl overflow-hidden bg-[#0A0A0C] border border-white/5 hover:border-indigo-500/40 transition-all duration-500 ${i === 0 || i === 3 ? 'sm:col-span-1' : 'sm:col-span-1'}`}
              >
                {/* Background Image with Overlay */}
                <img src={interest.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 block mb-2">{interest.category}</span>
                    <h3 className="text-white font-bold text-2xl mb-3">{interest.title.en}</h3>
                    
                    {/* Description - Slides up on hover */}
                    <p className="text-stone-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                      {interest.description.en}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32">
          <div className="p-12 md:p-20 rounded-[4rem] bg-indigo-600 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Let's build <br/> the future.</h2>
              <a href={`mailto:${profileConfig.social.email}`} className="inline-block px-12 py-5 bg-black text-white font-bold rounded-2xl hover:scale-110 transition-transform shadow-2xl">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center opacity-30">
          <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 {profileConfig.name.short} — Built with Love</p>
        </footer>
      </main>
    </div>
  );
}