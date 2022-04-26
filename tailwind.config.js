module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["Herr Von Muellerhoff"],
      display: ["Fira Sans"],
      headers: ["Noticia Text"],
      body: ["Telex"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Fira Sans",
            "--tw-prose-headings": "var(--color-text-title)",
            "--tw-prose-body": "var(--color-text-primary)",
            "--tw-prose-links": "var(--color-text-primary)",
            h1: {
              fontFamily: "Fira Sans",
            },
            h2: {
              fontFamily: "Noticia Text",
            },
            h3: {
              fontFamily: "Noticia Text",
            },
            h4: {
              fontFamily: "Noticia Text",
            },
            p: {
              fontFamily: "Telex"
            },
            li: {
              fontFamily: "Telex"
            },
            a: {
              fontFamily: "Telex"
            }
          },
        },
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        title: "var(--color-text-title)",
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
