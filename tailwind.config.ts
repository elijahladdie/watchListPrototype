
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
				watchlist: {
					purple: {
						50: '#f3e8ff',
						100: '#e9d5ff',
						200: '#d8b4fe',
						300: '#c084fc',
						400: '#a855f7',
						500: '#9333ea',
					},
					blue: {
						50: '#eff6ff',
						100: '#dbeafe',
						200: '#bfdbfe',
						300: '#93c5fd',
						400: '#60a5fa',
						500: '#3b82f6',
					},
				},
			},
			boxShadow: {
				'3d-sm': 'var(--shadow-3d-sm)',
				'3d': 'var(--shadow-3d)',
				'3d-lg': 'var(--shadow-3d-lg)',
				'3d-xl': 'var(--shadow-3d-xl)',
				'card': 'var(--shadow-card)',
			},
			borderRadius: {
				'card': 'var(--radius-card)',
			},
			spacing: {
				'mobile-padding': 'var(--spacing-mobile-padding)',
				'mobile-margin': 'var(--spacing-mobile-margin)',
				'mobile-gap': 'var(--spacing-mobile-gap)',
				'card-padding': 'var(--spacing-card-padding)',
			},
			transitionDuration: {
				'fast': 'var(--animate-duration-fast)',
				'normal': 'var(--animate-duration-normal)',
				'slow': 'var(--animate-duration-slow)',
			},
			animation: {
				'bounce-gentle': 'bounce-gentle 2s infinite',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
			},
			keyframes: {
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-5px)',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			screens: {
				'mobile': { 'max': '640px' },
				'tablet': { 'min': '641px', 'max': '1024px' },
				'desktop': { 'min': '1025px' },
			},
			backgroundImage: {
				'watchlist-gradient': 'linear-gradient(135deg, var(--color-watchlist-purple-50) 0%, var(--color-watchlist-blue-50) 100%)',
				'watchlist-gradient-dark': 'linear-gradient(135deg, var(--color-watchlist-purple-900) 0%, var(--color-watchlist-blue-900) 100%)',
				'button-gradient': 'linear-gradient(135deg, var(--color-watchlist-purple-500) 0%, var(--color-watchlist-blue-500) 100%)',
				'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['var(--font-size-xs)', { lineHeight: '1.4' }],
				'sm': ['var(--font-size-sm)', { lineHeight: '1.5' }],
				'base': ['var(--font-size-base)', { lineHeight: '1.5' }],
				'lg': ['var(--font-size-lg)', { lineHeight: '1.5' }],
				'xl': ['var(--font-size-xl)', { lineHeight: '1.4' }],
				'2xl': ['var(--font-size-2xl)', { lineHeight: '1.3' }],
				'3xl': ['var(--font-size-3xl)', { lineHeight: '1.2' }],
				'4xl': ['var(--font-size-4xl)', { lineHeight: '1.1' }],
			},
		},
	},
	// plugins: [require("tailwindcss-animate")],
	plugins: [],
} satisfies Config;
