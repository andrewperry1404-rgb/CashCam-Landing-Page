import { Smartphone, Zap, Search, Users, TrendingUp, DollarSign, Clock, AlertTriangle, CheckCircle, Camera, ArrowRight, Star } from 'lucide-react';
import React from 'react';

export const HERO_COPY = {
  headline: "Stop Guessing. Start Flipping. Your Phone Is Now An ATM.",
  subheadline: "Turn clutter into cash with instant appraisals, sell-through rate analysis, AI listings and more. Know the real price and sell with confidence.",
  cta: "Download CashCam",
};

export const PAIN_POINTS = [
  {
    id: 1,
    icon: <Search className="w-8 h-8 text-red-400" />,
    title: "Is this even worth selling?",
    description: "You're standing in the thrift store aisle, frozen. Indecisiveness and pricing uncertainty creates hesitation, and hesitation kills profit. Don't gamble on pricing that disappoints.",
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8 text-yellow-400" />,
    title: "How long will I be stuck with this?",
    description: "Liquidity risk is real. A $100 item isn't an asset if it sits in a forgotten corner of your room for 12 months. Without sell-through rate data, you're just hoarding indefinitely.",
  },
  {
    id: 3,
    icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
    title: "Listing takes forever",
    description: "Photos, titles, descriptions, specs, etc. The hassle of listing causes 'Death Pile Accumulation', resulting in unrealised opportunity simply due to people not having enough time to work on selling their items.",
  }
];

export const FEATURES = [
  {
    id: 1,
    title: "Sold Data Supremacy",
    benefit: "Price with Confidence",
    description: "CashCam uses AI-powered market research to analyze real-world pricing data and give you accurate sell estimates instantly.",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    id: 2,
    title: "Liquidity Score Traffic Light",
    benefit: "Sell Smart, Not Stuck",
    description: "Stop guessing if an item will move. Our visual Sell-Through Rate (STR) calculator gives you a Red, Yellow, or Green light immediately. Green means it flies off the shelf; Red means it won't.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-400",
  },
  {
    id: 3,
    title: "AI Listing Automation",
    benefit: "List in 30 Seconds",
    description: "Gemini vision analyses your photos to generate SEO-optimized titles and engaging descriptions automatically. Cut your listing time by 90% and banish the \"death pile\" forever.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    id: 4,
    title: "Cross-Platform Bridge",
    benefit: "Sell Everywhere",
    description: "One-tap copy & deep link. CashCam copies your listing and opens the marketplace app instantly. Just paste and you're live in seconds.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-400",
  }
];

export const TEEN_HUSTLE_COPY = {
  title: "Family Hustle Mode",
  benefit: "Teen Hustlers Welcome",
  description: "Most platforms ban users under 18. CashCam's Family Mode solves this. 'Scouts' (teens) find and scan inventory, while 'Merchants' (parents) can approve and manage the final sale.",
  icon: <CheckCircle className="w-6 h-6" />,
  color: "bg-purple-500/10 text-purple-400"
};

export const SOCIAL_PROOF = {
  stat: "10,000+ items appraised in the last 30 days",
  testimonial: {
    text: "I used to spend 20 minutes researching one pair of sneakers. CashCam tells me the price and sell-through rate in 3 seconds. I made $450 my first weekend just clearing out my closet.",
    author: "Jordan T.",
    role: "Part-time Reseller, 19"
  }
};

export const STEPS = [
  {
    step: "01",
    action: "Scan It",
    description: "Simply take a photo. Our visual recognition AI identifies items instantly and accurately."
  },
  {
    step: "02",
    action: "Know It",
    description: "Get real-time market valuations and a Green/Yellow/Red liquidity score immediately."
  },
  {
    step: "03",
    action: "List It",
    description: "One tap generates your title and description. Post to every marketplace in seconds."
  }
];

export const FINAL_CTA = {
  headline: "The Market Doesn't Wait. Why Should You?",
  subheadline: "Join the early access wave. The highest rewards go to the fastest sellers.",
  button: "Download CashCam",
  risk_reversal: "100% Free to Download. No Payment Required."
};