import { useState } from 'react';

const useNotification = () => {
    const [ notification, setNotification ] = useState(null);

    const displayNotfication = (message, isError) => {
        setNotification({
            content: message, 
            isError: isError ? isError : false,
        });

        setTimeout(() => {
            removeNotification()
        }, 3000);
    };

    const removeNotification = () => {
        setNotification(null);
    };

    return [ notification, displayNotfication ];
}

export default useNotification;