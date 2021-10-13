import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {apiService} from "../App";


const Main = () => {
    const [tasks, setTasks] = useState([])
    useEffect(async () => {
        const tasksResponse =  await apiService.get('/api/tasks');
        const tasks = await tasksResponse.json()
        setTasks(tasks);
    }, [])

    return (
        <Container fluid className={"pt-2"}>
            <Row className={""}>
                <Col className={" mx-2"}>
                    <header className={"h1"}>Latest added tasks</header>
                    {tasks.map(i => <Card className={"mt-3 mb-3"}>
                        <Card.Header>{i.topicId}</Card.Header>
                        <Card.Body>
                            <Card.Title>{i.title}</Card.Title>
                            <Card.Text>
                                {i.conditionTask}
                            </Card.Text>
                            <Button variant="primary">Open</Button>
                        </Card.Body>
                    </Card>)}
                </Col>
                <Col className={" align-self-start"}>
                    <header className={"h1"}>Highest rating</header>
                    <Card className={"mt-3 mb-3"}>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Open</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
        ;
};

export default Main;