/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/student',
                permanent: true,
            },
        ];
    },
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
