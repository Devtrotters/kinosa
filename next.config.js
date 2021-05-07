module.exports = {
    async headers() {
        return [
            {
                source: 'https://www.facebook.com/',
                headers: [
                    {
                        key: 'frame-ancestors',
                        value: 'self'
                    }
                ]
            }
        ];
    }
};
