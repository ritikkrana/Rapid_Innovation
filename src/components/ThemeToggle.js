import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../slice/themeSlice';
import styles from '../styles/ThemeToggle.module.css'

const ThemeToggle = () => {
    const dispatch = useDispatch();
    // const theme = useSelector((state) => state.theme.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        // <button onClick={handleToggle}>
        //   {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        // </button>
        <>
        <label id={styles.toggle}>
            <input type="checkbox" onClick={handleToggle}></input>
            <span id={styles.slider}></span>
        </label>
        </>
    );
};

export default ThemeToggle;
