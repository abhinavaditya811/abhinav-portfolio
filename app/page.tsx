'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import {
  siteConfig,
  profileConfig,
  experienceConfig,
  projectsConfig,
  blogsConfig,
} from '@/config';

// Floating particles component for background effect - always active, slow-moving
const FloatingParticles = () => {
  // Use deterministic positions for SSR compatibility
  const particles = [
    { w: 3, h: 3, l: 10, t: 15, delay: 0, duration: 18 },
    { w: 4, h: 4, l: 25, t: 30, delay: 2, duration: 22 },
    { w: 2, h: 2, l: 40, t: 10, delay: 1, duration: 20 },
    { w: 5, h: 5, l: 55, t: 45, delay: 3, duration: 25 },
    { w: 3, h: 3, l: 70, t: 20, delay: 0.5, duration: 19 },
    { w: 4, h: 4, l: 85, t: 60, delay: 2.5, duration: 21 },
    { w: 2, h: 2, l: 15, t: 70, delay: 1.5, duration: 23 },
    { w: 3, h: 3, l: 30, t: 85, delay: 4, duration: 17 },
    { w: 5, h: 5, l: 50, t: 75, delay: 0, duration: 24 },
    { w: 2, h: 2, l: 65, t: 90, delay: 3.5, duration: 20 },
    { w: 4, h: 4, l: 80, t: 35, delay: 1, duration: 22 },
    { w: 3, h: 3, l: 95, t: 50, delay: 2, duration: 18 },
    { w: 2, h: 2, l: 5, t: 40, delay: 4.5, duration: 26 },
    { w: 4, h: 4, l: 45, t: 55, delay: 0.5, duration: 21 },
    { w: 3, h: 3, l: 75, t: 80, delay: 3, duration: 19 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-10 animate-float"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            background: 'currentColor',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Theme toggle component with sun/moon icons
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-stone-800/50 light:bg-stone-200/80 backdrop-blur-md border border-white/20 dark:border-stone-700/50 light:border-stone-300/50 hover:scale-110 transition-all duration-300 group shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg 
          className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <svg 
          className="w-5 h-5 text-stone-700 group-hover:-rotate-12 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};

// Navigation bar component
const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'work-experience', label: 'Work' },
    { id: 'internships', label: 'Internships' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-6 left-6 z-50 flex items-center gap-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="px-3 py-2 text-xs font-medium text-stone-400 dark:text-stone-400 light:text-stone-600 hover:text-white dark:hover:text-white light:hover:text-stone-900 transition-colors duration-200 rounded-lg hover:bg-white/10 dark:hover:bg-stone-800/50 light:hover:bg-stone-200/80"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

// Collapsible Experience Card Component
const ExperienceCard = ({ item, index, isExpanded, onToggle }: {
  item: any;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className="group relative rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glassmorphism card */}
      <div 
        onClick={onToggle}
        className="relative p-4 rounded-2xl bg-white/5 dark:bg-stone-800/30 light:bg-white/80 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200 hover:bg-white/10 dark:hover:bg-stone-800/50 light:hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
      >
        <div className="flex items-start gap-4">
          {/* Logo */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-14 h-14 rounded-xl bg-white/10 dark:bg-stone-800/50 light:bg-stone-100 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-inner"
          >
            <img src={item.logo} alt={item.name} className="w-10 h-10 object-contain" />
          </a>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                {/* Role */}
                <h3 className="text-white dark:text-white light:text-stone-900 font-semibold text-base md:text-lg">
                  {item.role.en}
                </h3>
                {/* Organization Name */}
                <p className="text-stone-300 dark:text-stone-300 light:text-stone-600 text-sm font-medium">
                  {item.name}
                </p>
                {/* Location */}
                <p className="text-stone-500 dark:text-stone-500 light:text-stone-500 text-xs mt-0.5">
                  {item.subtitle.en}
                </p>
              </div>
              {/* Timeline Badge */}
              <span className="text-xs px-3 py-1 rounded-full bg-stone-800/50 dark:bg-stone-800/50 light:bg-stone-200 text-stone-400 dark:text-stone-400 light:text-stone-600 border border-stone-700/30 dark:border-stone-700/30 light:border-stone-300 whitespace-nowrap font-medium">
                {item.timeline.en}
              </span>
            </div>
            
            {/* Expandable Description */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-white/10 dark:border-stone-700/30 light:border-stone-200 pt-3">
                <ul className="space-y-2.5 list-none">
                  {item.description.en.split(' || ').filter((point: string) => point.trim()).map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-400 dark:text-stone-400 light:text-stone-600 text-sm leading-relaxed">
                      <span className="text-stone-500 mt-1 flex-shrink-0 text-xs">•</span>
                      <span 
                        className="text-justify flex-1 [&>b]:text-stone-200 [&>b]:font-semibold dark:[&>b]:text-stone-200 light:[&>b]:text-stone-800"
                        dangerouslySetInnerHTML={{ __html: point.trim() }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Expand/Collapse Icon */}
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card with Hover Popup
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 -mx-2 rounded-xl transition-all duration-300 hover:bg-white/5 dark:hover:bg-stone-800/30 light:hover:bg-stone-100 group"
      >
        <div className="flex items-center gap-3">
          {/* Code brackets icon */}
          <svg className="w-4 h-4 text-stone-500 group-hover:text-stone-300 light:group-hover:text-stone-700 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="text-stone-300 dark:text-stone-300 light:text-stone-700 text-sm group-hover:text-white dark:group-hover:text-white light:group-hover:text-stone-900 transition-colors font-medium">
            {project.name.en}
          </span>
        </div>
        <svg className="w-4 h-4 text-stone-600 group-hover:text-stone-400 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
      
      {/* Tooltip Popup */}
      {project.description && showTooltip && (
        <div className="absolute left-0 right-0 top-full z-50 animate-fadeIn">
          <div className="p-3 rounded-xl bg-stone-900/95 dark:bg-stone-800/95 light:bg-white/95 backdrop-blur-md border border-white/10 dark:border-stone-700/50 light:border-stone-200 shadow-2xl">
            <p className="text-stone-300 dark:text-stone-300 light:text-stone-600 text-xs leading-relaxed">
              {project.description.en}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});
  const [showAllProjects, setShowAllProjects] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const INITIAL_PROJECTS_COUNT = 8;

  const extraChars = profileConfig.name.extraChars;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isHovering && extraChars) {
      intervalRef.current = setInterval(() => {
        setTypedChars((prev) => {
          if (prev >= extraChars.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 80);
    } else {
      intervalRef.current = setInterval(() => {
        setTypedChars((prev) => {
          if (prev <= 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 60);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, extraChars]);

  const getDisplayName = () => {
    const greeting = profileConfig.greeting.en;
    const shortName = profileConfig.name.short;
    
    if (typedChars > 0 || isHovering) {
      return `${greeting} ${shortName}${extraChars.slice(0, typedChars)}`;
    }
    return `${greeting} ${shortName}`;
  };

  const toggleExpanded = (key: string) => {
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Clean minimal background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-stone-950 dark:bg-stone-950 light:bg-white"></div>
      </div>
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Navigation */}
      <Navbar />
      
      <main className="min-h-screen p-6 md:p-12 lg:p-16 relative z-10">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Hero Section with glassmorphism */}
          <header className="pt-12 md:pt-20 pb-12 md:pb-16">
            <div className="flex items-center gap-6 mb-6">
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-500 group-hover:scale-105 shadow-2xl">
                  <img
                    src="/headshot.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator with pulse */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-stone-900 dark:border-stone-900 light:border-white">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white light:text-stone-900 tracking-tight bg-clip-text">
                  {getDisplayName()}
                </h1>
                <p className="text-stone-400 dark:text-stone-400 light:text-stone-600 mt-2 text-sm md:text-base font-medium">
                  {siteConfig.metadata.description}
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {profileConfig.social.email && (
                <a
                  href={`mailto:${profileConfig.social.email}`}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 dark:bg-stone-800/50 light:bg-stone-100 text-stone-400 dark:text-stone-400 light:text-stone-600 hover:bg-white/10 dark:hover:bg-stone-700/50 light:hover:bg-stone-200 hover:text-white dark:hover:text-white light:hover:text-stone-900 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              )}
              {profileConfig.social.linkedin && (
                <a
                  href={profileConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 dark:bg-stone-800/50 light:bg-stone-100 text-stone-400 dark:text-stone-400 light:text-stone-600 hover:bg-white/10 dark:hover:bg-stone-700/50 light:hover:bg-stone-200 hover:text-white dark:hover:text-white light:hover:text-stone-900 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
              )}
              {profileConfig.social.github && (
                <a
                  href={profileConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 dark:bg-stone-800/50 light:bg-stone-100 text-stone-400 dark:text-stone-400 light:text-stone-600 hover:bg-white/10 dark:hover:bg-stone-700/50 light:hover:bg-stone-200 hover:text-white dark:hover:text-white light:hover:text-stone-900 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
                  </svg>
                </a>
              )}
              {profileConfig.social.twitter && (
                <a
                  href={profileConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 dark:bg-stone-800/50 light:bg-stone-100 text-stone-400 dark:text-stone-400 light:text-stone-600 hover:bg-white/10 dark:hover:bg-stone-700/50 light:hover:bg-stone-200 hover:text-white dark:hover:text-white light:hover:text-stone-900 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200"
                  aria-label="X (Twitter)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </header>

          {/* Content Sections */}
          <div className="space-y-16">
            
            {/* Work Experience Section */}
            <section id="work-experience" className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} scroll-mt-20`}>
              <div className="mb-6 group">
                <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 light:text-stone-400 inline-block">
                  {experienceConfig.current.title.en} <span className="text-stone-600 dark:text-stone-600 light:text-stone-500 font-medium">(2+ years)</span>
                </h2>
                <div className="h-px w-12 bg-stone-700 dark:bg-stone-700 light:bg-stone-300 mt-2 transition-all duration-500 group-hover:w-24"></div>
              </div>
              <div className="space-y-4">
                {experienceConfig.current.items.map((item, index) => (
                  <ExperienceCard
                    key={`work-${index}`}
                    item={item}
                    index={index}
                    isExpanded={expandedItems[`work-${index}`] || false}
                    onToggle={() => toggleExpanded(`work-${index}`)}
                  />
                ))}
              </div>
            </section>

            {/* Internships Section */}
            {experienceConfig.internships && experienceConfig.internships.items.length > 0 && (
              <section id="internships" className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} scroll-mt-20`}>
                <div className="mb-6 group">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 light:text-stone-400 inline-block">
                    {experienceConfig.internships.title.en} <span className="text-stone-600 dark:text-stone-600 light:text-stone-500 font-medium">(2+ Yrs)</span>
                  </h2>
                  <div className="h-px w-12 bg-stone-700 dark:bg-stone-700 light:bg-stone-300 mt-2 transition-all duration-500 group-hover:w-24"></div>
                </div>
                <div className="space-y-4">
                  {experienceConfig.internships.items.map((item, index) => (
                    <ExperienceCard
                      key={`intern-${index}`}
                      item={item}
                      index={index}
                      isExpanded={expandedItems[`intern-${index}`] || false}
                      onToggle={() => toggleExpanded(`intern-${index}`)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Education Section */}
            {experienceConfig.education && experienceConfig.education.items.length > 0 && (
              <section id="education" className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} scroll-mt-20`}>
                <div className="mb-6 group">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 light:text-stone-400 inline-block">
                    {experienceConfig.education.title.en}
                  </h2>
                  <div className="h-px w-12 bg-stone-700 dark:bg-stone-700 light:bg-stone-300 mt-2 transition-all duration-500 group-hover:w-24"></div>
                </div>
                <div className="space-y-4">
                  {experienceConfig.education.items.map((item, index) => (
                    <ExperienceCard
                      key={`edu-${index}`}
                      item={item}
                      index={index}
                      isExpanded={expandedItems[`edu-${index}`] || false}
                      onToggle={() => toggleExpanded(`edu-${index}`)}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Projects Section */}
            {projectsConfig.items.length > 0 && (
              <section id="projects" className={`transition-all duration-700 delay-[400ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} scroll-mt-20`}>
                <div className="mb-6 group">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 light:text-stone-400 inline-block">
                    {projectsConfig.title.en} <span className="text-stone-600 dark:text-stone-600 light:text-stone-500 font-medium">({projectsConfig.items.length})</span>
                  </h2>
                  <div className="h-px w-12 bg-stone-700 dark:bg-stone-700 light:bg-stone-300 mt-2 transition-all duration-500 group-hover:w-24"></div>
                </div>
                <div className="rounded-2xl bg-white/5 dark:bg-stone-800/20 light:bg-white/60 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200 overflow-hidden">
                  <div className="grid gap-1 p-4">
                    {(showAllProjects ? projectsConfig.items : projectsConfig.items.slice(0, INITIAL_PROJECTS_COUNT)).map((project, index) => (
                      <ProjectCard key={index} project={project} index={index} />
                    ))}
                  </div>
                  {projectsConfig.items.length > INITIAL_PROJECTS_COUNT && (
                    <button
                      onClick={() => setShowAllProjects(!showAllProjects)}
                      className="w-full py-3 px-4 text-sm font-medium text-stone-400 dark:text-stone-400 light:text-stone-600 hover:text-white dark:hover:text-white light:hover:text-stone-900 transition-colors duration-200 border-t border-white/10 dark:border-stone-700/30 light:border-stone-200 hover:bg-white/5 dark:hover:bg-stone-800/30 light:hover:bg-stone-100 flex items-center justify-center gap-2"
                    >
                      {showAllProjects ? (
                        <>
                          <span>Show Less</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Show All {projectsConfig.items.length} Projects</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </section>
            )}

            {/* Blogs Section */}
            {siteConfig.features.blogs && blogsConfig.items.filter(b => b.enabled).length > 0 && (
              <section className={`transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="mb-6 group">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-500 light:text-stone-400 inline-block">
                    {blogsConfig.title.en}
                  </h2>
                  <div className="h-px w-12 bg-stone-700 dark:bg-stone-700 light:bg-stone-300 mt-2 transition-all duration-500 group-hover:w-24"></div>
                </div>
                <div className="grid gap-2 p-4 rounded-2xl bg-white/5 dark:bg-stone-800/20 light:bg-white/60 backdrop-blur-sm border border-white/10 dark:border-stone-700/30 light:border-stone-200">
                  {blogsConfig.items
                    .filter((blog) => blog.enabled)
                    .map((blog) => (
                      <a
                        key={blog.id}
                        href={`/blogs/${blog.id}`}
                        className="group flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-white/5 dark:hover:bg-stone-800/30 light:hover:bg-stone-100"
                      >
                        <span className="text-stone-300 dark:text-stone-300 light:text-stone-700 text-sm md:text-base group-hover:text-white dark:group-hover:text-white light:group-hover:text-stone-900 transition-colors font-medium">
                          {blog.title.en}
                        </span>
                        <svg className="w-4 h-4 text-stone-600 group-hover:text-stone-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                </div>
              </section>
            )}

            {/* Footer */}
            <footer className="pt-8 pb-12 text-center">
              <p className="text-stone-600 dark:text-stone-600 light:text-stone-400 text-xs">
                Built with &lt;3 by Sam. Just like me, this page is ever-evolving :)
              </p>
            </footer>
          </div>
        </div>
      </main>
      
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}
