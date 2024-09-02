/** @type {import('next').NextConfig} */
const nextConfig = {
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
