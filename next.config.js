/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  webpack: () => {

  },
}

const plugins = [
  withImages(),
  withVideos(),
]

module.exports = withPlugins(plugins, nextConfig)
