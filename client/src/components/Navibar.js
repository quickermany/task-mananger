import React, {useContext, useState} from 'react';
import {Button, Container, Dropdown, Form, FormControl, Nav, Navbar,} from "react-bootstrap";
import Auth from "./modals/Auth";
import ThemesChoose from "./themes/ThemesChoose";
import {useTranslation} from "react-i18next";
import {Context} from "../context";

const NaviBar = () => {
    const [modalShow, setModalShow] = useState(false);
    const {t, i18n} = useTranslation();
    const [context, setContext] = useContext(Context);


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>Taskbook</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="/">{t("home")}</Nav.Link>
                        {context?.logged && <Nav.Link href="/account">{t("account")}</Nav.Link>}
                        {context?.logged && context.role === "admin" && <Nav.Link href="/admin">{t("admin")}</Nav.Link>}
                    </Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-success" className={"me-2"}>
                            {t("language")}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => i18n.changeLanguage("ru")}>RU</Dropdown.Item>
                            <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>EN</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-success" className="me-lg-5">
                            {t("theme.title")}
                        </Dropdown.Toggle>
                        <ThemesChoose></ThemesChoose>
                    </Dropdown>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder={t("search.placeholder")}
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="me-lg-2">{t("search.title")}</Button>
                    </Form>
                    <Auth/>
                    {context?.logged || <Button variant="outline-success" className="me-lg-2"
                            onClick={() => setModalShow(true)}>{t("logIn")}</Button>}
                    <Auth
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NaviBar;