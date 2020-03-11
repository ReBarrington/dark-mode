import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react';

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key);

    useEffect(() => {
        const body = document.querySelector('body');
        // check to see if the value from useLocalStorage is true or false.
        if (someValue) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
        // If it's true, add the class dark-mode to the body element.
        // If it's false, remove the class from the body element.
    }, [someValue])
    
    return [someValue, setSomeValue];
};