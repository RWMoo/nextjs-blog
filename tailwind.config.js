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
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Fira Sans",
            "--tw-prose-headings": "var(--color-text-headers)",
            "--tw-prose-body": "var(--color-text-body)",
            "--tw-prose-bullets": "var(--color-text-body)",
            "--tw-prose-links": "var(--color-text-primary)",
            "--tw-prose-pre-bg": "var(--color-bg-secondary)",
            h1: {
              fontFamily: "Fira Sans",
              color: "var(--color-text-h1)",
            },
            h2: {
              fontFamily: "Noticia Text",
              color: "var(--color-text-h2)",
            },
            h3: {
              fontFamily: "Noticia Text",
              color: "var(--color-text-h3)",
            },
            h4: {
              fontFamily: "Noticia Text",
            },
            p: {
              fontFamily: "Telex",
            },
            li: {
              fontFamily: "Telex",
            },
            a: {
              fontFamily: "Telex",
            },
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
        body: "var(--color-text-body)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
