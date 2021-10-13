import React, {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme, GlobalStyles} from "./StyleThemes";
import {Dropdown} from "react-bootstrap";
import {useTranslation} from "react-i18next";


function ThemesChoose() {
    const [theme, setTheme] = useState("light");
    const {t} = useTranslation();
    const setMode = mode => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setMode("dark")}>{t("theme.dark")}</Dropdown.Item>
                <Dropdown.Item onClick={() => setMode("light")}>{t("theme.light")}</Dropdown.Item>
            </Dropdown.Menu>
        </ThemeProvider>
    );
}

export default ThemesChoose;