import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PostItem {
  id: number;
  src: string;
  fallbackSrc: string;
  alt: string;
}

const POSTS: PostItem[] = [
  {
    id: 1,
    src: '/posts/post_1.jpg',
    fallbackSrc: 'https://i.postimg.cc/fyDL1MF0/nowtechsolar-1761591525-3752824171211645765-49900550983.jpg',
    alt: 'Post 1 NowTech Solar - Energia Solar Inteligente'
  },
  {
    id: 2,
    src: '/posts/post_2.jpg',
    fallbackSrc: 'https://i.postimg.cc/zD7XVZ6T/nowtechsolar-1770215976-3825169452200001437-49900550983.jpg',
    alt: 'Post 2 NowTech Solar - Economia e Sustentabilidade'
  },
  {
    id: 3,
    src: '/posts/post_3.jpg',
    fallbackSrc: 'https://i.postimg.cc/dt71XNNx/nowtechsolar-1777299410-3884591464559023415-49900550983.jpg',
    alt: 'Post 3 NowTech Solar - Projetos e Homologação'
  },
  {
    id: 4,
    src: '/posts/post_4.jpg',
    fallbackSrc: 'https://i.postimg.cc/dVkqH71j/nowtechsolar-1758561818-3727409151447328428-49900550983.jpg',
    alt: 'Post 4 NowTech Solar - Soluções Fotovoltaicas'
  }
];

export const PostsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % POSTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + POSTS.length) % POSTS.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play interval: advances every 4 seconds (4000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide, currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current;
      if (deltaX > 45) {
        nextSlide();
      } else if (deltaX < -45) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto mb-12 px-2">
      {/* Discrete header badge */}
      <div className="flex items-center justify-between gap-2 mb-3 px-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          <span>Destaques no Instagram</span>
        </div>
        <a
          href={COMPANY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>{COMPANY_INFO.instagramHandle}</span>
        </a>
      </div>

      {/* Main Carousel Frame */}
      <div
        className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/5] select-none group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div className="relative w-full h-full overflow-hidden">
          {POSTS.map((post, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={post.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                    : 'opacity-0 scale-95 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  onError={(e) => {
                    // Fallback to external url if local file fails
                    const target = e.currentTarget;
                    if (target.src !== post.fallbackSrc) {
                      target.src = post.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-contain bg-slate-950"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrow: Previous */}
        <button
          onClick={prevSlide}
          aria-label="Post anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/60 hover:bg-slate-900/90 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Navigation Arrow: Next */}
        <button
          onClick={nextSlide}
          aria-label="Próximo post"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/60 hover:bg-slate-900/90 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Controls Bar: Indicators & Counter */}
        <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-between px-4 pointer-events-none">
          {/* Indicators Dots */}
          <div className="flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-auto">
            {POSTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => goToSlide(dotIdx)}
                aria-label={`Ir para post ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIdx === currentIndex
                    ? 'w-6 bg-orange-500 shadow-sm shadow-orange-500/50'
                    : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter Pill */}
          <div className="text-[11px] font-mono font-bold text-white/90 bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {currentIndex + 1} / {POSTS.length}
          </div>
        </div>
      </div>
    </div>
  );
};
