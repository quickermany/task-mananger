import React, {useContext, useEffect, useState} from 'react';
import {Accordion,Card, Col, Container, Row} from "react-bootstrap";
import {apiService} from "../App";
import Answer from "../components/checkAnswer/Answer";
import {useTranslation} from "react-i18next";
import {Context} from "../utils/context";
import {ToastProvider} from "react-toast-notifications";


const Main = () => {
    const [context, setContext] = useContext(Context);
    const  {t} = useTranslation();
    const [tasks, setTasks] = useState([])
    useEffect(async () => {
        const tasksResponse = await apiService.get('/api/tasks/all');
        const tasks = await tasksResponse.json()
        setTasks(tasks);
    }, [])

    return (
        <Container  className={"pt-2"}>
            <Row>
                <Col className={" mx-2"}>
                    <header className={"h1"}>{t("latestAddedTask")}</header>
                    {tasks.map(i => <Card border={"success"} className={"mt-3 mb-3 w-75"}>
                        <Card.Header  className={"h3"}>{i.topic.topicName}</Card.Header>
                        <Card.Body>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text>
                                {i.conditionTask}
                            </Card.Text>
                            {context?.logged && <Accordion >
                                <Accordion.Item  eventKey="0">
                                    <Accordion.Header>{t("tryToSolveTask")}</Accordion.Header>
                                    <Accordion.Body className="accordion">
                                        <ToastProvider placement='top-center'>
                                            {!i.account_solution && <Answer
                                        task = {i}
                                        tasks={tasks}
                                        setTasks={setTasks}
                                        />}
                                        </ToastProvider >
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>}
                        </Card.Body>
                    </Card>)}
                </Col>
                <Col className={" align-self-start"}>
                    <header className={"h1"}>{t("highestRating")}</header>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;