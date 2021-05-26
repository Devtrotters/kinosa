const useMessenger = (props) => {
    const { xfbml = true, version = '10.0', language = 'fr_FR' } = props;

    const loadPlugin = () => {
        window.fbAsyncInit = function () {
            // eslint-disable-next-line no-undef
            FB.init({
                xfbml,
                version: `v${version}`
            });
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = `https://connect.facebook.net/${language}/sdk/xfbml.customerchat.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    };

    return { loadPlugin };
};

export default useMessenger;
