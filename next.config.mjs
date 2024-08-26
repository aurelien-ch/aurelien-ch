import { createRequire } from "module";

const require = createRequire(import.meta.url);
const i18n = require("./next-i18next.config.js").i18n;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: { styledComponents: true },
  i18n,
};

export default nextConfig;
