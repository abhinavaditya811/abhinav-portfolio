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

const SocialIcon = ({ platform, className }: { platform: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
    linkedin: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    twitter: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    email: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    twitch: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57V4.714zm4.715 0H18v5.143h-1.714V4.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" /></svg>
  };
  return icons[platform.toLowerCase()] || <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>;
};

const Navbar = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center p-1 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
      {['experience', 'education', 'projects', 'interests', 'contact'].map((id) => (
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

const ItemCard = ({ item }: any) => (
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
              {item.subtitle?.en && <p className="text-stone-500 text-xs italic">{item.subtitle.en}</p>}
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
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-[3.5rem] overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(99,102,241,0.2)] group cursor-pointer"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
            >
              <img src="/headshot.png" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.8] mb-6">
                {profileConfig.greeting.en} {profileConfig.name.short}
                <span className="text-indigo-600 block md:inline">{profileConfig.name.extraChars.slice(0, typedChars)}</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-500 max-w-lg font-medium mb-8">
                {siteConfig.metadata.description}
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-4">
                {Object.entries(profileConfig.social).map(([platform, url]) => (
                  url && (
                    <a 
                      key={platform}
                      href={platform === 'email' ? `mailto:${url}` : (url as string)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-stone-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                      aria-label={platform}
                    >
                      <SocialIcon platform={platform} className="w-5 h-5" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* EXPERIENCE SECTION */}
        <section id="work-experience" className="py-10">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-500">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>
          <div className="relative ml-4 md:ml-8 border-l border-white/10 pl-8 md:pl-12">
            {experienceConfig.current.items.map((item: any, i: number) => (
              <ItemCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-10">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-500">Education</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </div>
          <div className="relative ml-4 md:ml-8 border-l border-white/10 pl-8 md:pl-12">
            {experienceConfig.education.items.map((item: any, i: number) => (
              <ItemCard key={i} item={item} />
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
              <a 
                key={i} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative h-64 rounded-3xl bg-[#0A0A0C] border border-white/5 overflow-hidden transition-all duration-500"
              >
                {/* Static Content (Always Visible) */}
                <div className="p-8 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{project.name.en}</h3>
                  <p className="text-stone-500 text-sm line-clamp-2">{project.description?.en}</p>
                </div>

                {/* Glassmorphism Overlay (Visible on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-center bg-indigo-500/10 backdrop-blur-md border border-white/20 rounded-3xl">
                  <div className="absolute inset-0 bg-black/40 -z-10" /> {/* Darkens background for readability */}
                  <h3 className="text-white font-bold text-lg mb-3">About Project</h3>
                  <p className="text-white text-sm leading-relaxed overflow-y-auto max-h-full pr-2">
                    {project.description?.en}
                  </p>
                  <div className="mt-4 text-indigo-300 text-[10px] font-black uppercase tracking-widest">
                    Click to View →
                  </div>
                </div>
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

        {/* INTERESTS */}
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
                className="group relative h-[320px] rounded-[2.5rem] overflow-hidden bg-[#0A0A0C] border border-white/5 hover:border-indigo-500/40 transition-all duration-500"
              >
                <img src={interest.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 block mb-2">{interest.category}</span>
                    <h3 className="text-white font-bold text-2xl mb-4">{interest.title.en}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                      {interest.description.en}
                    </p>
                  </div>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">Let's build <br/> the future.</h2>
              <a href={`mailto:${profileConfig.social.email}`} className="inline-block px-12 py-5 bg-black text-white font-bold rounded-2xl hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all shadow-2xl">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-600 mb-2">© 2026 {profileConfig.name.short}</p>
            <p className="text-[9px] font-medium uppercase tracking-widest text-stone-800">Designed & Engineered with &lt;3</p>
          </div>
          
          <div className="flex gap-8 text-stone-600">
            {Object.entries(profileConfig.social).map(([platform, url]) => (
              url && (
                <a 
                  key={platform} 
                  href={platform === 'email' ? `mailto:${url}` : (url as string)} 
                  className="group flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={platform} className="w-4 h-4 group-hover:text-indigo-500 transition-colors" />
                  <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                    {platform}
                  </span>
                </a>
              )
            ))}
          </div>
        </footer>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020203; }
        ::-webkit-scrollbar-thumb { background: #1a1a1c; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
      `}</style>
    </div>
  );
}