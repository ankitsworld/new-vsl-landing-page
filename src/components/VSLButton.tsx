import React from 'react';

interface VSLButtonProps {
  text: string;
  accentColor: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  subText?: string;
}

export const VSLButton: React.FC<VSLButtonProps> = ({
  text,
  accentColor,
  href,
  onClick,
  className = '',
  subText,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // Tracking call mandated by Critical Instruction 4
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'AddToCart');
      }
    } catch {
      // Safe failover
    }

    if (onClick) {
      onClick();
    }
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: accentColor,
    color: '#1A1A2E',
    boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
  };

  const commonClasses = `
    inline-flex flex-col items-center justify-center text-center
    font-bold text-[16px] leading-tight
    rounded-[999px]
    px-[52px] py-[18px]
    w-full md:w-auto
    cursor-pointer
    transition-transform duration-200 ease-out
    hover:scale-[1.02] active:scale-[0.99]
    select-none
    ${className}
  `;

  if (href && href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        className={commonClasses}
        onClick={handleClick}
      >
        <span>{text}</span>
        {subText && (
          <span className="text-[11px] font-semibold opacity-75 mt-1">
            {subText}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      type="button"
      style={buttonStyle}
      className={commonClasses}
      onClick={handleClick}
    >
      <span>{text}</span>
      {subText && (
        <span className="text-[11px] font-semibold opacity-75 mt-1">
          {subText}
        </span>
      )}
    </button>
  );
};
