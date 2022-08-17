const theme = require("./theme.js");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true }]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

module.exports = nextConfig;
