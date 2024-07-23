/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd13xymm0hzzbsd.cloudfront.net'
            },
            {
                protocol: 'https',
                hostname: 'd3fvqmu2193zmz.cloudfront.net'
            }
        ]
    }
};

export default nextConfig;
