module.exports = {
    presets: [require("@felipage/tailwind-feli")],
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/\\@felipage/react-ui/**/*.{js,ts,jsx,tsx}",
    ],
};
