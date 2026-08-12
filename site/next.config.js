/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'AtaraxiaSjel Zen Registry',
    description: 'Kasm Workspaces registry for Zen and Zen Mintcifra browsers (Firefox forks).',
    icon: '/img/logo.svg',
    listUrl: 'https://ataraxiasjel.github.io/kasm-workspaces-registry/',
    contactUrl: 'https://github.com/AtaraxiaSjel/kasm-workspaces-registry',
  },
  reactStrictMode: true,
  basePath: '/kasm-workspaces-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
