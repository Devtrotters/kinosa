module.exports = {
    target: 'serverless',
    async headers() {
        return [
            {
                source: '/(.*)',
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
