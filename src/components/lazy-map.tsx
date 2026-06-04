'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const MAP_SRC =
  'https://www.google.com/maps?q=Laxmi+Market+near+Gorakhpur+Airport+Sainik+Kunj+Nanda+Nagar+Gorakhpur+Uttar+Pradesh+273008&output=embed';

export default function LazyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '200px' } // Start loading slightly before it enters viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-48 sm:h-56 md:h-72 rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm bg-gray-100">
      {loaded ? (
        <iframe
          src={MAP_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arastu Classes Location"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="size-10 text-arastu-orange mx-auto mb-2" />
            <p className="font-semibold text-arastu-dark">Loading Map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
