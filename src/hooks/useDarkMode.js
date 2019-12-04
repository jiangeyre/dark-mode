import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (key, initialValue) => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage(key, initialValue);

    const darkModeToggle = e => {
        e.preventDefault();

        return darkModeOn ? setDarkModeOn(false): setDarkModeOn(true);
    }

    useEffect(() => {
        if(darkModeOn === true){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    }, [darkModeOn]);

    return [darkModeOn, setDarkModeOn, darkModeToggle];
};

export default useDarkMode;
