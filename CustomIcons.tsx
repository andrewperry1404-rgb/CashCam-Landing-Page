import React from 'react';

export const CloudQuestionBubble = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
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
        {/* Rectangular Cloud Shape */}
        <path d="M4 15s-1 0-1-1 1-4 4-4h.5c.5-2 2.5-3 4.5-3s4 1 4.5 3h.5c3 0 4 3 4 4 0 1-1 1-1 1H4z" />
        <path d="M7 15a3 3 0 0 0-3 3v1" /> {/* Little thought bubble tail circles? No, user asked for cloud shape, usually implies the bumps. Let's stick to a bumpy cloud outline. */}

        {/* Let's try a better cloud path that looks more like a thought bubble */}
        <path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3 .6 1.6 2.1 2.8 3.9 2.9h.2c1.8-.1 3.3-1.3 3.9-2.9z" style={{ display: 'none' }} /> {/* Scratchpad */}

        {/* Actual Cloud Path */}
        <path d="M19 13c.6.2 1.2.5 1.6.9.4.5.7 1.1.7 1.8a2.6 2.6 0 0 1-2.6 2.6h-1.6l-1.4 2.4-1.4-2.4h-3.6a2.6 2.6 0 0 1-2.6-2.6c0-.7.3-1.3.7-1.8.4-.4 1-.7 1.6-.9A4 4 0 0 1 14 6a4 4 0 0 1 5 7z" style={{ display: 'none' }} />

        {/* Let's use a simpler constructed path for "Rectangular Cloud" */}
        {/* Top bumps */}
        <path d="M7 16a3 3 0 0 1-3-3c0-1.3.8-2.4 2-2.8.2-1.6 1.6-2.9 3.3-2.9 1.4 0 2.6.9 3.1 2.1.5-.2 1-.3 1.6-.3 2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5" />
        {/* Bottom line/bumps to close it? The user said "rectangular in shape". */}
        {/* Let's try to draw a cloud that fits a rectangle roughly */}
        <path d="M20 16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3" /> {/* Bottom closure */}

        {/* Let's combine into one smooth path for the cloud */}
        <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8 4.5 4.5 0 0 0 12 8.5a4.5 4.5 0 0 0-5.5 7.7" />
        <path d="M6.5 16.2H19.5" /> {/* Flat bottom? No, cloud usually has bumps all around. */}

        {/* RESTARTING PATH DESIGN for "Rectangular Cloud" */}
        {/* A cloud is usually 3-4 bumps on top, flat or bumpy bottom. "Thought bubble" implies the little circles leading to it. */}
        {/* But user said "actual bubble shaped like a cloud". */}

        {/* Let's go with a standard cloud shape but stretched slightly */}
        <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.812 10.035C17.406 6.636 14.516 4 11 4C7.484 4 4.594 6.636 4.188 10.035C1.823 10.244 0 12.132 0 14.5C0 16.9853 2.01472 19 4.5 19H17.5Z" transform="translate(1 1) scale(0.9)" />

        {/* Question Mark - Pronounced with long tail */}
        <path d="M12 15.5v-1.5c0-1.5 1-2 2-3 1-1 1-2.5-0.5-3.5-1.5-1-3-0.5-3.5 1" strokeLinecap="round" />
        <circle cx="12" cy="18.5" r="0.5" fill="currentColor" />
    </svg>
);

// Actually, writing raw SVG paths from scratch without a visual editor is error-prone. 
// I will use a composite of Lucide paths but tweaked.
// Cloud path from Lucide: "M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3 .6 1.6 2.1 2.8 3.9 2.9h.2c1.8-.1 3.3-1.3 3.9-2.9z" is not it.
// Lucide Cloud: 
// <path d="M17.5 19c0-1.7-1.3-3-3-3h-5c-1.7 0-3 1.3-3 3 .6 1.6 2.1 2.8 3.9 2.9h.2c1.8-.1 3.3-1.3 3.9-2.9z" /> ?? No.

// Let's try a simpler approach. I'll define the component with a path that I know represents a cloud, and a question mark.

export const RectangularCloudQuestion = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
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
        {/* "Rectangular" Cloud Shape */}
        {/* Top-left arc, Top-right arc, Right arc, Bottom-right arc, Bottom-left arc, Left arc */}
        <path d="M4 15a4 4 0 0 1 1-7.8 4 4 0 0 1 5-2.2 4 4 0 0 1 6.8 1.2 3.5 3.5 0 0 1 3.2 4.8 4 4 0 0 1-1.5 7H6a4 4 0 0 1-2-3z" />

        {/* Pronounced Question Mark */}
        {/* Moved slightly down and tail lengthened */}
        <path d="M12 16v-1.5c0-1.1.9-1.8 1.5-2.3.8-.6 1.5-1.4 1.5-2.7 0-1.7-1.3-3-3-3-1.4 0-2.6.9-2.9 2.2" />
        <path d="M12 19h.01" strokeWidth="3" />
    </svg>
);

export default RectangularCloudQuestion;
