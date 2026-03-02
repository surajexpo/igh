/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "/Users/gs/Documents/igh/src/**/*.{html,ts}",
        "/Users/gs/Documents/igh/src/app/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-blue': '#00d4ff',
                'cosmic-purple': '#7b2ff7',
                'space-black': '#0B0F19',
                'midnight-blue': '#0D1B2A',
                'electric-cyan': '#00F5D4',
                'deep-violet': '#560BAD',
                'earth-blue': '#1B3A4B',
                'global-cyan': '#00B4D8',
                'diplomatic-gold': '#F4A261'
            },
        },
    },
    plugins: [],
}
