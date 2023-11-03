const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/az',
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
};

module.exports = withContentlayer(nextConfig)
