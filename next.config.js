module.exports = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'frame-ancestors',
                        value: 'https://www.facebook.com/'
                    }
                ]
            }
        ];
    }
};
