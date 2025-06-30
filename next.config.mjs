/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['https://earrings-machine-equation-soundtrack.trycloudflare.com'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
