module.exports = {
    async headers() {
        return [
            {
                source: '/*',
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
