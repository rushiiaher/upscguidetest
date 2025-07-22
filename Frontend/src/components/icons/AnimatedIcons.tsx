import React from 'react';

// Animated Star Icon
export const AnimatedStarIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-[spin_4s_linear_infinite]">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" className="group-hover:animate-[pulse_2s_ease-in-out_infinite]" />
    </svg>
  </div>
);

// Animated Trophy Icon
export const AnimatedTrophyIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-[bounce_1s_ease-in-out]">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M8 2h8" />
      <path d="M12 2v4" />
      <path d="M17 6H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10Z" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite]" />
    </svg>
  </div>
);

// Animated Wifi Icon
export const AnimatedWifiIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M5 13a10 10 0 0 1 14 0" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite_0.1s]" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite_0.2s]" />
      <path d="M2 8.82a15 15 0 0 1 20 0" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite]" />
      <line x1="12" y1="20" x2="12" y2="20" className="group-hover:animate-[blink_1s_ease-in-out_infinite]" />
    </svg>
  </div>
);

// Animated NotebookPen Icon
export const AnimatedNotebookPenIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M8 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0H8v0Z" />
      <path d="M8 10h8" />
      <path d="M8 14h4" />
      <path d="M16 14v4" className="group-hover:animate-[write_1.5s_ease-in-out_infinite]" />
      <style jsx>{`
        @keyframes write {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(2px); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated SearchCheck Icon
export const AnimatedSearchCheckIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="m8 11 2 2 4-4" className="group-hover:animate-[check_0.5s_ease-in-out]" />
      <circle cx="11" cy="11" r="8" className="group-hover:animate-[pulse_2s_ease-in-out_infinite]" />
      <path d="m21 21-4.3-4.3" />
      <style jsx>{`
        @keyframes check {
          0% { stroke-dasharray: 0 20; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 20 20; stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Users Icon
export const AnimatedUsersIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className="group-hover:animate-[slide_1s_ease-in-out]" />
      <circle cx="9" cy="7" r="4" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite]" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" className="group-hover:animate-[slide_1s_ease-in-out_0.2s]" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite_0.2s]" />
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Award Icon
export const AnimatedAwardIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <circle cx="12" cy="8" r="6" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite]" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" className="group-hover:animate-[sway_2s_ease-in-out_infinite]" />
      <style jsx>{`
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Target Icon
export const AnimatedTargetIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <circle cx="12" cy="12" r="10" className="group-hover:animate-[grow_1.5s_ease-in-out_infinite]" />
      <circle cx="12" cy="12" r="6" className="group-hover:animate-[grow_1.5s_ease-in-out_infinite_0.2s]" />
      <circle cx="12" cy="12" r="2" className="group-hover:animate-[grow_1.5s_ease-in-out_infinite_0.4s]" />
    </svg>
  </div>
);

// Animated ArrowRight Icon
export const AnimatedArrowRightIcon = ({ className = "w-5 h-5", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[slideRight_1s_ease-in-out_infinite]">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
      <style jsx>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated CheckCircle Icon
export const AnimatedCheckCircleIcon = ({ className = "w-5 h-5", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" className="group-hover:animate-[draw_1.5s_ease-in-out]" />
      <path d="m9 11 3 3L22 4" className="group-hover:animate-[check_0.5s_ease-in-out_0.5s]" />
      <style jsx>{`
        @keyframes draw {
          0% { stroke-dasharray: 0 100; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 100 100; stroke-dashoffset: 0; }
        }
        @keyframes check {
          0% { stroke-dasharray: 0 30; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 30 30; stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Globe Icon
export const AnimatedGlobeIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_10s_linear_infinite]">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  </div>
);

// Animated Play Icon
export const AnimatedPlayIcon = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <circle cx="12" cy="12" r="10" className="group-hover:animate-[pulse_1.5s_ease-in-out_infinite]" />
      <polygon points="10 8 16 12 10 16 10 8" className="group-hover:animate-[play_1s_ease-in-out_infinite]" />
    </svg>
  </div>
);

// Animated Menu Icon (Hamburger)
export const AnimatedMenuIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
      <line x1="3" y1="12" x2="21" y2="12" className="animate-[wiggle_1s_ease-in-out_infinite]"></line>
      <line x1="3" y1="6" x2="21" y2="6" className="animate-[wiggle_1s_ease-in-out_infinite_0.2s]"></line>
      <line x1="3" y1="18" x2="21" y2="18" className="animate-[wiggle_1s_ease-in-out_infinite_0.4s]"></line>
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-1px); }
          75% { transform: translateX(1px); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Close Icon (X)
export const AnimatedCloseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[rotate_0.5s_ease-in-out]">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(90deg); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Phone Icon
export const AnimatedPhoneIcon = ({ className = "w-5 h-5", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" className="animate-[ring_2s_ease-in-out_infinite]"></path>
      <style jsx>{`
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-2deg); }
          20%, 40%, 60%, 80% { transform: rotate(2deg); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Map Pin Icon
export const AnimatedMapPinIcon = ({ className = "w-5 h-5", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  </div>
);

// Animated Mail Icon
export const AnimatedMailIcon = ({ className = "w-5 h-5", color = "currentColor" }: { className?: string, color?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group animate-pulse">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6" className="group-hover:animate-[openMail_1s_ease-in-out_forwards] animate-[openMailPulse_2s_ease-in-out_infinite]"></polyline>
      <style jsx>{`
        @keyframes openMail {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        @keyframes openMailPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Instagram Icon
export const AnimatedInstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" className="group-hover:animate-[pulse_1s_ease-in-out]"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" className="group-hover:animate-[spin_2s_linear_infinite]"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" className="group-hover:animate-[blink_1s_ease-in-out_infinite]"></line>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </svg>
  </div>
);

// Animated LinkedIn Icon
export const AnimatedLinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" className="group-hover:animate-[pulse_1s_ease-in-out]"></path>
      <rect x="2" y="9" width="4" height="12" className="group-hover:animate-[grow_1s_ease-in-out]"></rect>
      <circle cx="4" cy="4" r="2" className="group-hover:animate-[pulse_1s_ease-in-out]"></circle>
      <style jsx>{`
        @keyframes grow {
          0% { transform: scaleY(0.8); }
          50% { transform: scaleY(1.1); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Facebook Icon
export const AnimatedFacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" className="group-hover:animate-[highlight_1s_ease-in-out]"></path>
      <style jsx>{`
        @keyframes highlight {
          0% { stroke-width: 2; }
          50% { stroke-width: 3; }
          100% { stroke-width: 2; }
        }
      `}</style>
    </svg>
  </div>
);

// Animated Youtube Icon
export const AnimatedYoutubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="group-hover:animate-[play_1s_ease-in-out_infinite]"></polygon>
      <style jsx>{`
        @keyframes play {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated WhatsApp Icon
export const AnimatedWhatsAppIcon = ({ className = "w-6 h-6", fillColor = "white" }: { className?: string, fillColor?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fillColor} stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="group">
      <path fill={fillColor} d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" className="group-hover:animate-[bubble_1s_ease-in-out_infinite]"></path>
      <style jsx>{`
        @keyframes bubble {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </svg>
  </div>
);

// Animated ChevronUp Icon
export const AnimatedChevronUpIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[bounce_1s_infinite]">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
);