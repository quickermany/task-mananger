import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import CreateTask from "../components/modals/CreateTask";
import {apiService} from "../App";
import AccountTable from "../components/tables/AccountTable";
import {useTranslation} from "react-i18next";

const Account = () => {
    const  {t} = useTranslation();
    const [tasks, setTasks] = useState([])
    const [createTask, setCreateTask] = useState(false)
    const [account, setAccount] = useState([])

    useEffect(async () => {
        const localStory = JSON.parse(localStorage.getItem("auth"));
        const accountResponse = await apiService.get(`/api/accounts/${localStory.accountId}`);
        const account = await accountResponse.json()
        setAccount(account);
    }, [])

    return (

            <Container className={"mt-2"} >
                <Row>
                    <Col md={3}>
                        <Card border={"success"} className={"w-75"}>
                            <Card.Img variant="top"
                                      src="https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg"/>
                            <Card.Body className={"card"}>
                                <Card.Title>{account.firstName}</Card.Title>
                            </Card.Body>
                            <ListGroup >
                                <ListGroupItem className={"card"}>{t("createdTask")} - {account.createdTask}</ListGroupItem>
                                <ListGroupItem className={"card"}>{t("resolvedTask")} - {account.resolvedTask}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button variant={"success"} onClick={() => setCreateTask(true)}>{t("createNewTask")}</Button>
                                <CreateTask
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    show={createTask}
                                    onHide={() => setCreateTask(false)}/>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col className={'ps-1'}>
                        <AccountTable
                           tasks={tasks}
                           setTasks={setTasks}
                            />
                    </Col>
                </Row>
            </Container>
    );
};

export default Account;