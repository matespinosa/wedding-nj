import type { RefObject } from 'react';

type Props = {
  trRef: RefObject<HTMLDivElement | null>;
  tlRef: RefObject<HTMLDivElement | null>;
  blRef: RefObject<HTMLDivElement | null>;
  brRef: RefObject<HTMLDivElement | null>;
};

export function HeroFlorals({ trRef, tlRef, blRef, brRef }: Props) {
  return (
    <>
      <div ref={trRef} className="hero-floral-tr">
  <svg viewBox="0 0 400 400" fill="none" >
    <g opacity="0.85">
      
      <path d="M400 0 Q350 60 320 140 Q310 100 330 50 Q350 20 400 0Z" fill="#6B8064" opacity="0.6"/>
      <path d="M380 20 Q340 80 300 160 Q295 110 310 70 Q330 35 380 20Z" fill="#5C6B4F" opacity="0.55"/>
      <path d="M360 60 Q320 110 280 180 Q280 130 295 90 Q315 60 360 60Z" fill="#7A9470" opacity="0.5"/>

      
      <path d="M320 30 Q305 50 290 80 L295 48 Q305 30 320 30Z" fill="#8A9A7B" opacity="0.5"/>
      <path d="M340 15 Q330 35 320 60 L325 35 Q332 18 340 15Z" fill="#9DAE8F" opacity="0.4"/>
      <path d="M285 70 Q270 90 260 120 L268 90 Q275 72 285 70Z" fill="#8A9A7B" opacity="0.45"/>

      
      <ellipse cx="330" cy="100" rx="40" ry="35" fill="#F5F0E8" opacity="0.9" transform="rotate(-20 330 100)"/>
      <ellipse cx="310" cy="90" rx="36" ry="30" fill="#FDFBF5" opacity="0.85" transform="rotate(-40 310 90)"/>
      <ellipse cx="350" cy="90" rx="32" ry="28" fill="#F8F4EC" opacity="0.8" transform="rotate(10 350 90)"/>
      <ellipse cx="325" cy="115" rx="34" ry="28" fill="#FAF8F0" opacity="0.85" transform="rotate(-10 325 115)"/>
      <ellipse cx="340" cy="110" rx="30" ry="25" fill="#FFFFFF" opacity="0.75" transform="rotate(15 340 110)"/>
      
      <circle cx="330" cy="100" r="10" fill="#E8DCC8" opacity="0.6"/>
      <circle cx="330" cy="100" r="5" fill="#D4B76A" opacity="0.4"/>

      
      <ellipse cx="280" cy="60" rx="22" ry="18" fill="#F5F0E8" opacity="0.8" transform="rotate(-30 280 60)"/>
      <ellipse cx="270" cy="55" rx="20" ry="16" fill="#FDFBF5" opacity="0.75" transform="rotate(-50 270 55)"/>
      <ellipse cx="290" cy="55" rx="18" ry="15" fill="#FAF8F0" opacity="0.7" transform="rotate(5 290 55)"/>
      <circle cx="280" cy="58" r="6" fill="#E8DCC8" opacity="0.5"/>
      <circle cx="280" cy="58" r="3" fill="#D4B76A" opacity="0.35"/>

      
      <ellipse cx="370" cy="45" rx="8" ry="13" fill="#F0EBE0" opacity="0.7" transform="rotate(-15 370 45)"/>
      <ellipse cx="258" cy="35" rx="6" ry="10" fill="#EDE7DA" opacity="0.6" transform="rotate(20 258 35)"/>
      <path d="M370 35 Q372 42 370 50" stroke="#8A9A7B" strokeWidth="1" opacity="0.4" fill="none"/>
      <path d="M258 28 Q260 32 258 38" stroke="#8A9A7B" strokeWidth="1" opacity="0.4" fill="none"/>

      
      <ellipse cx="380" cy="65" rx="7" ry="9" fill="#9DAE8F" opacity="0.4" transform="rotate(30 380 65)"/>
      <ellipse cx="395" cy="50" rx="6" ry="8" fill="#8A9A7B" opacity="0.35" transform="rotate(20 395 50)"/>
      <ellipse cx="255" cy="100" rx="8" ry="10" fill="#9DAE8F" opacity="0.35" transform="rotate(-10 255 100)"/>

      
      <circle cx="345" cy="70" r="2" fill="#D4B76A" opacity="0.4"/>
      <circle cx="300" cy="40" r="1.5" fill="#D4B76A" opacity="0.3"/>
      <circle cx="365" cy="30" r="1.5" fill="#D4B76A" opacity="0.35"/>
    </g>
  </svg>
      </div>

      <div ref={tlRef} className="hero-floral-tl">
  <svg viewBox="0 0 300 380" fill="none" >
    <g opacity="0.75">
      
      <path d="M0 0 Q60 80 90 200 Q95 220 100 250" stroke="#6B8064" strokeWidth="2.5" fill="none" opacity="0.6"/>

      
      <path d="M10 20 Q25 50 40 70 Q20 55 5 30Z" fill="#5C6B4F" opacity="0.6"/>
      <path d="M18 45 Q35 75 52 100 Q30 85 15 55Z" fill="#6B8064" opacity="0.55"/>
      <path d="M25 70 Q45 100 62 135 Q38 115 22 80Z" fill="#7A9470" opacity="0.5"/>
      <path d="M35 100 Q55 130 72 165 Q48 145 32 110Z" fill="#5C6B4F" opacity="0.55"/>
      <path d="M45 130 Q65 160 80 195 Q58 175 42 140Z" fill="#8A9A7B" opacity="0.45"/>
      <path d="M55 160 Q75 190 88 220 Q68 200 52 170Z" fill="#6B8064" opacity="0.5"/>
      <path d="M65 190 Q82 215 92 245 Q76 225 62 195Z" fill="#7A9470" opacity="0.45"/>

      
      <path d="M20 30 Q50 40 75 55 Q45 50 18 38Z" fill="#6B8064" opacity="0.55"/>
      <path d="M30 55 Q60 68 88 85 Q55 78 28 62Z" fill="#7A9470" opacity="0.5"/>
      <path d="M40 82 Q70 95 100 115 Q65 105 38 90Z" fill="#5C6B4F" opacity="0.55"/>
      <path d="M50 110 Q80 125 110 145 Q75 135 48 118Z" fill="#8A9A7B" opacity="0.45"/>
      <path d="M60 140 Q88 155 118 178 Q84 165 58 148Z" fill="#6B8064" opacity="0.5"/>
      <path d="M70 168 Q95 182 120 205 Q90 192 68 175Z" fill="#7A9470" opacity="0.45"/>

      
      <path d="M0 60 Q30 90 50 140" stroke="#8A9A7B" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <ellipse cx="15" cy="72" rx="6" ry="10" fill="#9DAE8F" opacity="0.35" transform="rotate(-30 15 72)"/>
      <ellipse cx="28" cy="92" rx="5" ry="9" fill="#8A9A7B" opacity="0.3" transform="rotate(-20 28 92)"/>
      <ellipse cx="38" cy="112" rx="5" ry="8" fill="#9DAE8F" opacity="0.3" transform="rotate(-15 38 112)"/>
      <ellipse cx="46" cy="130" rx="4" ry="7" fill="#8A9A7B" opacity="0.25" transform="rotate(-10 46 130)"/>

      
      <path d="M8 22 Q15 18 20 22" fill="#8B7B60" opacity="0.2"/>
      <path d="M48 135 Q55 130 58 136" fill="#8B7B60" opacity="0.15"/>
    </g>
  </svg>
      </div>

      <div ref={blRef} className="hero-floral-bl">
  <svg viewBox="0 0 360 360" fill="none" >
    <g opacity="0.8">
      
      <path d="M0 360 Q30 300 70 250 Q50 290 20 340Z" fill="#5C6B4F" opacity="0.55"/>
      <path d="M20 340 Q50 280 95 230 Q75 270 40 320Z" fill="#6B8064" opacity="0.5"/>
      <path d="M50 360 Q70 310 110 265 Q90 300 60 345Z" fill="#7A9470" opacity="0.45"/>
      <path d="M80 360 Q95 320 125 280 Q110 310 88 350Z" fill="#5C6B4F" opacity="0.5"/>

      
      <path d="M30 310 Q20 290 15 270 L22 285 Q28 300 30 310Z" fill="#8A9A7B" opacity="0.4"/>
      <path d="M55 330 Q45 308 40 290 L48 305 Q53 320 55 330Z" fill="#9DAE8F" opacity="0.35"/>
      <path d="M100 320 Q110 300 125 285 L115 298 Q105 312 100 320Z" fill="#8A9A7B" opacity="0.4"/>

      
      <ellipse cx="80" cy="300" rx="42" ry="36" fill="#F5F0E8" opacity="0.9" transform="rotate(15 80 300)"/>
      <ellipse cx="60" cy="295" rx="38" ry="32" fill="#FDFBF5" opacity="0.85" transform="rotate(-5 60 295)"/>
      <ellipse cx="100" cy="295" rx="34" ry="30" fill="#F8F4EC" opacity="0.8" transform="rotate(30 100 295)"/>
      <ellipse cx="75" cy="315" rx="36" ry="28" fill="#FAF8F0" opacity="0.85" transform="rotate(10 75 315)"/>
      <ellipse cx="90" cy="310" rx="30" ry="26" fill="#FFFFFF" opacity="0.7" transform="rotate(20 90 310)"/>
      <circle cx="82" cy="302" r="11" fill="#E8DCC8" opacity="0.6"/>
      <circle cx="82" cy="302" r="5" fill="#D4B76A" opacity="0.4"/>

      
      <ellipse cx="130" cy="320" rx="24" ry="20" fill="#F5F0E8" opacity="0.75" transform="rotate(25 130 320)"/>
      <ellipse cx="120" cy="318" rx="20" ry="17" fill="#FDFBF5" opacity="0.7" transform="rotate(5 120 318)"/>
      <ellipse cx="138" cy="316" rx="18" ry="15" fill="#FAF8F0" opacity="0.65" transform="rotate(40 138 316)"/>
      <circle cx="130" cy="318" r="7" fill="#E8DCC8" opacity="0.45"/>
      <circle cx="130" cy="318" r="3.5" fill="#D4B76A" opacity="0.3"/>

      
      <ellipse cx="40" cy="280" rx="7" ry="12" fill="#F0EBE0" opacity="0.6" transform="rotate(20 40 280)"/>
      <ellipse cx="150" cy="340" rx="6" ry="10" fill="#EDE7DA" opacity="0.55" transform="rotate(-10 150 340)"/>

      
      <circle cx="60" cy="275" r="2" fill="#D4B76A" opacity="0.35"/>
      <circle cx="110" cy="290" r="1.5" fill="#D4B76A" opacity="0.3"/>
      <circle cx="145" cy="305" r="1.5" fill="#D4B76A" opacity="0.3"/>
    </g>
  </svg>
      </div>

      <div ref={brRef} className="hero-floral-br">
  <svg viewBox="0 0 300 340" fill="none" >
    <g opacity="0.7">
      <path d="M300 340 Q270 280 240 230 Q260 270 285 320Z" fill="#5C6B4F" opacity="0.55"/>
      <path d="M280 340 Q250 285 215 240 Q240 275 265 330Z" fill="#6B8064" opacity="0.5"/>
      <path d="M260 350 Q235 300 200 255 Q225 290 248 340Z" fill="#7A9470" opacity="0.45"/>
      <path d="M300 300 Q280 260 250 225 Q275 255 295 290Z" fill="#8A9A7B" opacity="0.4"/>

      
      <path d="M275 310 Q285 290 295 275 L290 290 Q282 305 275 310Z" fill="#8A9A7B" opacity="0.4"/>
      <path d="M260 330 Q270 312 280 298 L275 310 Q268 325 260 330Z" fill="#9DAE8F" opacity="0.35"/>

      
      <ellipse cx="235" cy="260" rx="8" ry="10" fill="#9DAE8F" opacity="0.35" transform="rotate(15 235 260)"/>
      <ellipse cx="258" cy="248" rx="7" ry="9" fill="#8A9A7B" opacity="0.3" transform="rotate(25 258 248)"/>
      <ellipse cx="220" cy="280" rx="6" ry="8" fill="#9DAE8F" opacity="0.3"/>

      
      <path d="M292 275 Q298 270 300 275" fill="#8B7B60" opacity="0.2"/>
    </g>
  </svg>
      </div>
    </>
  );
}
