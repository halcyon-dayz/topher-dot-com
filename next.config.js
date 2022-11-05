/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { appDir: true },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'scontent-sea1-1.xx.fbcdn.net',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
