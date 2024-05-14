/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { "my-image": "url('blog images/Mountain.jpg')" },
    },
  },
  plugins: [],
};
