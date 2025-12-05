import React from 'react';

export const ThreeQuestionMarks = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <g transform="translate(12, 12) scale(0.75) translate(-12, -12)">
            {/* Center Question Mark */}
            <g transform="translate(0, -1)">
                <path d="M12 16v-1.5c0-1.1.9-1.8 1.5-2.3.8-.6 1.5-1.4 1.5-2.7 0-1.7-1.3-3-3-3-1.4 0-2.6.9-2.9 2.2" />
                <path d="M12 19h.01" strokeWidth="3" />
            </g>

            {/* Left Question Mark - Moved left, ensuring no clipping */}
            <g transform="translate(-8.5, 3) rotate(-25, 6, 12) scale(0.85)">
                <path d="M6 16v-1.5c0-1.1.9-1.8 1.5-2.3.8-.6 1.5-1.4 1.5-2.7 0-1.7-1.3-3-3-3-1.4 0-2.6.9-2.9 2.2" />
                <path d="M6 19h.01" strokeWidth="3" />
            </g>

            {/* Right Question Mark - Bigger and moved right */}
            <g transform="translate(9, 2) rotate(25, 18, 12) scale(0.95)">
                <path d="M18 16v-1.5c0-1.1.9-1.8 1.5-2.3.8-.6 1.5-1.4 1.5-2.7 0-1.7-1.3-3-3-3-1.4 0-2.6.9-2.9 2.2" />
                <path d="M18 19h.01" strokeWidth="3" />
            </g>
        </g>
    </svg>
);

export default ThreeQuestionMarks;
