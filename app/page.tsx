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

// --- Helper Components ---

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

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-[101] p-3 rounded-xl bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-xl hover:border-indigo-500 transition-all shadow-lg"
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

const SocialIcon = ({ platform, className }: { platform: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
    linkedin: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    twitter: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    email: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    spotify: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.378 0 0 5.378 0 12s5.378 12 12 12 12-5.378 12-12S18.622 0 12 0zm5.503 17.31c-.223.359-.691.474-1.05.251-2.912-1.782-6.576-2.181-10.892-1.192-.408.093-.817-.158-.91-.566-.093-.408.158-.817.566-.91 4.725-1.079 8.76-.618 12.035 1.385.359.222.474.69.251 1.042zm1.441-3.258c-.281.458-.881.606-1.339.325-3.328-2.046-8.4-2.645-12.335-1.45-.515.158-1.053-.133-1.21-.648-.157-.514.133-1.052.648-1.21 4.498-1.365 10.09-.705 13.911 1.643.458.281.606.881.325 1.34zm.126-3.41c-4.01-2.378-10.611-2.6-14.437-1.438-.614.186-1.258-.168-1.444-.782-.186-.614.168-1.259.782-1.445 4.39-1.332 11.666-1.077 16.291 1.668.552.327.734 1.036.407 1.588-.327.552-1.036.734-1.588.408z"/></svg>
  };
  return icons[platform.toLowerCase()] || <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>;
};

const Navbar = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav className="fixed top-20 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center p-1 rounded-2xl bg-slate-100/80 dark:bg-black/80 backdrop-blur-xl border border-slate-300 dark:border-white/10 shadow-2xl transition-all duration-500 max-w-[95vw] overflow-x-auto scrollbar-hide">
      {['experience', 'education', 'projects', 'testimonials', 'interests', 'contact'].map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="px-3 md:px-4 py-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-500 dark:text-stone-400 hover:text-indigo-600 dark:hover:text-white transition-all capitalize whitespace-nowrap"
        >
          {id.split('-')[0]}
        </button>
      ))}
    </nav>
  );
};

const ItemCard = ({ item }: any) => (
  <div className="relative group mb-12 md:mb-16">
    <div className="absolute -left-[17px] md:-left-[33px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] z-10 border-2 md:border-4 border-slate-200 dark:border-[#020203]" />
    <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-[#0A0A0C] border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 flex-shrink-0 flex items-center justify-center p-2 border border-slate-200 dark:border-white/10 shadow-inner">
          <img src={item.logo} alt="" className="max-w-full max-h-full object-contain brightness-100 dark:brightness-125" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">{item.role.en}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm md:text-base">{item.name}</p>
              {item.subtitle?.en && <p className="text-slate-500 text-[10px] md:text-xs italic">{item.subtitle.en}</p>}
            </div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 w-fit">
              {item.timeline.en}
            </span>
          </div>
          <div className="space-y-3 md:space-y-4 pt-4 border-t border-slate-200 dark:border-white/5">
            {item.description.en.split(' || ').map((point: string, idx: number) => (
              <div key={idx} className="flex gap-3 md:gap-4 group/item">
                <span className="text-indigo-600 mt-1 flex-shrink-0">•</span>
                <p className="text-slate-600 dark:text-stone-400 text-xs md:text-sm leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: point.trim() }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Testimonial Components ---

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isAnonymous = testimonial.consent.toLowerCase().includes('anonymously');
  const name = isAnonymous ? 'Verified Professional' : testimonial.name;
  const role = testimonial.title || testimonial.relationship;

  const TEXT_LIMIT = 180;
  const isLong = testimonial.text.length > TEXT_LIMIT;
  const displayText = isExpanded || !isLong ? testimonial.text : `${testimonial.text.substring(0, TEXT_LIMIT)}...`;

  return (
    <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-[#0A0A0C] border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 shadow-sm flex flex-col gap-4 h-full">
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(testimonial.rating / 2) ? 'text-yellow-500' : 'text-slate-300 dark:text-slate-700'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="flex-1">
        <p className="text-slate-600 dark:text-stone-400 text-xs md:text-sm italic leading-relaxed">"{displayText}"</p>
        {isLong && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="mt-2 text-[10px] font-bold text-indigo-500 hover:text-indigo-400 uppercase tracking-wider transition-colors">
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
      <div className="pt-4 border-t border-slate-200 dark:border-white/5 mt-4">
        {testimonial.linkedin && !isAnonymous ? (
          <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="group/name inline-flex items-center gap-1.5 hover:text-indigo-500 transition-colors">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover/name:text-indigo-600 dark:group-hover/name:text-indigo-400">{name}</h4>
            <svg className="w-3.5 h-3.5 text-[#0A66C2] opacity-80 group-hover/name:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        ) : (
          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
        )}
        <p className="text-indigo-600 dark:text-indigo-400 text-[9px] font-semibold uppercase tracking-wider">{role}</p>
      </div>
    </div>
  );
};

const QuickPraiseCard = ({ review }: { review: any }) => {
  const isAnonymous = review.consent.toLowerCase().includes('anonymously');
  const name = isAnonymous ? 'Verified Colleague' : review.name;
  return (
    <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 whitespace-nowrap group hover:border-indigo-500/50 transition-all shadow-sm">
      <div className="flex flex-col">
        {review.linkedin && !isAnonymous ? (
          <a href={review.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
            {name}
            <svg className="w-2.5 h-2.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        ) : (
          <span className="text-[10px] font-black text-slate-900 dark:text-white">{name}</span>
        )}
        <span className="text-[8px] text-slate-400 dark:text-stone-500 font-bold uppercase tracking-tighter truncate max-w-[120px]">{review.title || review.relationship}</span>
      </div>
      <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />
      <div className="flex items-center gap-1.5 bg-indigo-500/10 px-2 py-0.5 rounded-lg">
        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400">{review.rating}/10</span>
        <svg className="w-2.5 h-2.5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      </div>
    </div>
  );
};

// --- Main Home Component ---

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [quickReviews, setQuickReviews] = useState<any[]>([]);

  const displayedProjects = showAllProjects ? projectsConfig.items : projectsConfig.items.slice(0, 6);

  useEffect(() => { setMounted(true); }, []);

  // Fetch and Process Testimonials from Stein API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('https://api.steinhq.com/v1/storages/695d0b39affba40a62363936/Form%20Responses%201');
        const data = await res.json();
        
        const consentKey = 'Do you agree to have a quote from your feedback (anonymized or attributed to your job title/relationship) included in my professional portfolio?';
        const descriptionKey = 'In your own words, describe a specific successful project or moment where you felt I made a significant difference.';
        const ratingKey = 'How would you rate my overall contribution to our shared goals/projects?';

        const allFeedback = data
          .filter((row: any) => row[consentKey] && row[consentKey].toLowerCase() !== 'no')
          .map((row: any) => ({
            name: row['First and Last Name'],
            relationship: row['What is your professional relationship with me?'],
            title: row['Current job title and company'],
            linkedin: row['LinkedIn Profile'],
            text: (row[descriptionKey] || '').trim(),
            consent: row[consentKey],
            rating: parseInt(row[ratingKey]) || 10
          }));

        // Split based on description presence
        setTestimonials(allFeedback.filter(f => f.text.length > 20));
        setQuickReviews(allFeedback.filter(f => f.text.length <= 20));
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };
    fetchTestimonials();
  }, []);

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
    <div className={`${theme === 'dark' ? 'bg-[#020203] text-stone-400' : 'bg-slate-200 text-slate-600'} min-h-screen transition-colors duration-500 selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden`}>
      <ScrollProgress />
      <ThemeToggle />
      <Navbar />

      <main className="max-w-4xl mx-auto px-5 md:px-12 relative z-10">
        {/* HERO SECTION */}
        <header className="pt-32 pb-16 md:pt-56 md:pb-32">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 text-center md:text-left">
            <div 
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 border-slate-300 dark:border-white/5 shadow-2xl group cursor-pointer transition-all flex-shrink-0"
              onMouseEnter={() => setIsHoveringName(true)}
              onMouseLeave={() => setIsHoveringName(false)}
            >
              <img src="/headshot.png" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110" />
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <h1 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-[1] mb-6 transition-colors duration-500`}>
                {profileConfig.greeting.en} {profileConfig.name.short}
                <span className="text-indigo-600 block md:inline overflow-hidden">{profileConfig.name.extraChars.slice(0, typedChars)}</span>
              </h1>
              <p className="text-base md:text-xl text-slate-500 max-w-lg font-medium mb-8 leading-relaxed mx-auto md:mx-0">
                {siteConfig.metadata.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                <a 
                  href="/Abhinav_Aditya_Resume.pdf"
                  download="Abhinav_Aditya_Resume.pdf"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>

                <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
                  {Object.entries(profileConfig.social).map(([platform, url]) => (
                    url && (
                      <a 
                        key={platform}
                        href={platform === 'email' ? `mailto:${url}` : (url as string)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 md:p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 transition-all duration-300 shadow-md"
                        aria-label={platform}
                      >
                        <SocialIcon platform={platform} className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-8 md:py-10">
          <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-indigo-500 whitespace-nowrap">Experience</h2>
            <div className={`h-px flex-1 bg-gradient-to-r ${theme === 'dark' ? 'from-indigo-500/50' : 'from-indigo-500/30'} to-transparent`} />
          </div>
          <div className="relative ml-4 md:ml-8 border-l border-slate-300 dark:border-white/10 pl-6 md:pl-12">
            {experienceConfig.current.items.map((item: any, i: number) => (
              <ItemCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-8 md:py-10">
          <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-indigo-500 whitespace-nowrap">Education</h2>
            <div className={`h-px flex-1 bg-gradient-to-r ${theme === 'dark' ? 'from-indigo-500/50' : 'from-indigo-500/30'} to-transparent`} />
          </div>
          <div className="relative ml-4 md:ml-8 border-l border-slate-300 dark:border-white/10 pl-6 md:pl-12">
            {experienceConfig.education.items.map((item: any, i: number) => (
              <ItemCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-12 md:py-20">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-indigo-500 whitespace-nowrap">Projects</h2>
            <div className={`h-px flex-1 bg-gradient-to-r ${theme === 'dark' ? 'from-indigo-500/50' : 'from-indigo-500/30'} to-transparent`} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {displayedProjects.map((project, i) => (
              <a 
                key={i} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative h-56 md:h-64 rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-[#0A0A0C] border border-slate-300 dark:border-white/5 overflow-hidden transition-all duration-500 shadow-md"
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 md:mb-6 shadow-inner">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-bold text-base md:text-lg mb-2 leading-tight`}>{project.name.en}</h3>
                  <p className="text-slate-500 text-xs md:text-sm line-clamp-2">{project.description?.en}</p>
                </div>

                <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-all duration-500 p-6 md:p-8 flex flex-col justify-center bg-slate-100/95 dark:bg-indigo-950/40 backdrop-blur-md border border-indigo-500/20 rounded-2xl md:rounded-3xl pointer-events-none md:pointer-events-auto">
                  <h3 className={`${theme === 'dark' ? 'text-white' : 'text-indigo-600'} font-bold text-base md:text-lg mb-3`}>About Project</h3>
                  <p className={`${theme === 'dark' ? 'text-stone-200' : 'text-slate-800'} text-xs md:text-sm leading-relaxed overflow-y-auto max-h-full pr-2`}>
                    {project.description?.en}
                  </p>
                  <div className="mt-4 text-indigo-600 dark:text-indigo-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                    Click to View →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {projectsConfig.items.length > 6 && (
            <div className="mt-8 md:mt-12 text-center">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl md:rounded-2xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-white/5 transition-all shadow-lg bg-slate-100 dark:bg-[#0A0A0C] text-sm md:text-base"
              >
                {showAllProjects ? 'Show Less' : `View All ${projectsConfig.items.length} Projects`}
              </button>
            </div>
          )}
        </section>

        {/* TESTIMONIALS SECTION */}
        {(testimonials.length > 0 || quickReviews.length > 0) && (
          <section id="testimonials" className="py-12 md:py-20">
            <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
              <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-indigo-500 whitespace-nowrap">Testimonials</h2>
              <div className={`h-px flex-1 bg-gradient-to-r ${theme === 'dark' ? 'from-indigo-500/50' : 'from-indigo-500/30'} to-transparent`} />
            </div>

            {/* Featured Testimonials */}
            {testimonials.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>
            )}

            {/* Quick Praise Highlights */}
            {quickReviews.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-stone-500">Quick Praise</h3>
                <div className="flex flex-wrap gap-3">
                  {quickReviews.map((review, i) => (
                    <QuickPraiseCard key={i} review={review} />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* INTERESTS SECTION */}
        <section id="interests" className="py-12 md:py-20">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-indigo-500 whitespace-nowrap">Interests</h2>
            <div className={`h-px flex-1 bg-gradient-to-r ${theme === 'dark' ? 'from-indigo-500/50' : 'from-indigo-500/30'} to-transparent`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {interestsConfig.items.map((interest: any, i: number) => (
              <div 
                key={i} 
                className="group relative h-[280px] md:h-[320px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-50 dark:bg-[#0A0A0C] border border-slate-300 dark:border-white/5 shadow-md transition-all duration-500"
              >
                {interest.playlistId ? (
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#1DB954] block mb-1 md:mb-2">{interest.category}</span>
                        <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-bold text-xl md:text-2xl`}>{interest.title.en}</h3>
                        <iframe
                          data-testid="embed-iframe"
                          style={{ borderRadius: "12px" }}
                          src="https://open.spotify.com/embed/playlist/1YolcgxPryjALXCWzyzjK9?utm_source=generator"
                          width="100%"
                          height="352" allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy">
                        </iframe>
                      </div>
                      <SocialIcon platform="spotify" className="w-5 h-5 md:w-6 md:h-6 text-[#1DB954]" />
                    </div>
                  </div>
                ) : (
                  <a href={interest.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img src={interest.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30 group-hover:scale-105 transition-all duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black via-black/40' : 'from-slate-200 via-slate-200/40'} to-transparent`} />
                    
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-left">
                      <div className="translate-y-4 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 block mb-1 md:mb-2">{interest.category}</span>
                        <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-bold text-xl md:text-2xl mb-2 md:mb-4 leading-tight`}>{interest.title.en}</h3>
                        <p className="text-slate-600 dark:text-stone-400 text-xs md:text-sm leading-relaxed opacity-0 md:group-hover:opacity-100 transition-all duration-500 max-h-0 md:group-hover:max-h-32 overflow-hidden">
                          {interest.description?.en}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-32">
          <div className="p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-indigo-600 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter leading-tight">Let's build <br/> the future.</h2>
              <a href={`mailto:${profileConfig.social.email}`} className="inline-block px-10 py-4 bg-black text-white font-bold rounded-xl md:rounded-2xl hover:scale-105 transition-all shadow-2xl text-sm md:text-base">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className="py-12 md:py-20 border-t border-slate-300 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">© 2026 {profileConfig.name.short}</p>
            <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-widest text-slate-400">{`Designed & Engineered with <3`}</p>
          </div>
          
          <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
            {Object.entries(profileConfig.social).map(([platform, url]) => (
              url && (
                <a 
                  key={platform} 
                  href={platform === 'email' ? `mailto:${url}` : (url as string)} 
                  className="group flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={platform} className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  <span className={`${theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-slate-900'} text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 transition-colors`}>
                    {platform}
                  </span>
                </a>
              )
            ))}
          </div>
        </footer>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${theme === 'dark' ? '#020203' : '#e2e8f0'}; }
        ::-webkit-scrollbar-thumb { background: ${theme === 'dark' ? '#1a1a1c' : '#cbd5e1'}; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}