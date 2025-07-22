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
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// UPSC Guide Custom Colors
				navy: 'hsl(var(--navy))',
				orange: 'hsl(var(--orange))',
				'orange-hover': 'hsl(var(--orange-hover))',
				'light-gray': 'hsl(var(--light-gray))',
				'text-gray': 'hsl(var(--text-gray))',
				'text-black': 'hsl(var(--text-black))',
				'success-green': 'hsl(var(--success-green))',
				'fresh-blue': 'hsl(var(--fresh-blue))',
				teal: 'hsl(var(--teal))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-1px)' },
					'75%': { transform: 'translateX(1px)' }
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(90deg)' }
				},
				'ring': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-2deg)' },
					'20%, 40%, 60%, 80%': { transform: 'rotate(2deg)' }
				},
				'openMail': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'openMailPulse': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-1px)' }
				},
				'highlight': {
					'0%': { 'stroke-width': '2' },
					'50%': { 'stroke-width': '3' },
					'100%': { 'stroke-width': '2' }
				},
				'play': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'bubble': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'check': {
					'0%': { 'stroke-dasharray': '0 20', 'stroke-dashoffset': '0' },
					'100%': { 'stroke-dasharray': '20 20', 'stroke-dashoffset': '0' }
				},
				'draw': {
					'0%': { 'stroke-dasharray': '0 100', 'stroke-dashoffset': '0' },
					'100%': { 'stroke-dasharray': '100 100', 'stroke-dashoffset': '0' }
				},
				'write': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(2px)' }
				},
				'sway': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(2deg)' },
					'75%': { transform: 'rotate(-2deg)' }
				},
				'slideRight': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(3px)' }
				},
				'slide': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'rotate': 'rotate 0.5s ease-in-out',
				'ring': 'ring 2s ease-in-out infinite',
				'openMail': 'openMail 1s ease-in-out forwards',
				'openMailPulse': 'openMailPulse 2s ease-in-out infinite',
				'highlight': 'highlight 1s ease-in-out',
				'play': 'play 1s ease-in-out infinite',
				'bubble': 'bubble 1s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'check': 'check 0.5s ease-in-out',
				'draw': 'draw 1.5s ease-in-out',
				'write': 'write 1.5s ease-in-out infinite',
				'sway': 'sway 2s ease-in-out infinite',
				'slideRight': 'slideRight 1s ease-in-out infinite',
				'slide': 'slide 1s ease-in-out',
				'blink': 'blink 1s ease-in-out infinite'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'card-hover': 'var(--shadow-card-hover)',
				'button': 'var(--shadow-button)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
