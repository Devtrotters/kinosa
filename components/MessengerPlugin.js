import React, { useEffect } from 'react';

import useMessenger from '../../hooks/useMessenger';

const MessengerPlugin = (props) => {
    const { pageId, version, language, showDialog } = props;

    const { loadPlugin } = useMessenger({
        version,
        language
    });

    useEffect(() => loadPlugin());

    return (
        <>
            <div id="fb-root" />
            <div
                className="fb-customerchat"
                attribution="biz_inbox"
                page_id={pageId}
                greeting_dialog_display={showDialog ? 'show' : 'hide'}
            />
        </>
    );
};

export default MessengerPlugin;
