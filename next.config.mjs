/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: 'https://edu.eclab.me/api/:path*',
            },
        ];
    }
};

export default nextConfig;
