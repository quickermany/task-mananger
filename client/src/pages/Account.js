import React, {useState} from 'react';
import {Button, Card, Col, Container, Form,  ListGroup, ListGroupItem, Row} from "react-bootstrap";
import CreateTask from "../components/modals/CreateTask";

const Account = () => {
    const[createTask, setCreateTask] = useState(false)
    return (
      <Container fluid className={"mt-2 bg-light"}>
            <Row>
                <Col>
                    <Card className={"w-25"}>
                        <Card.Img className={""} variant="top" src="https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg" />
                        <Card.Body>
                            <Card.Title>Name User</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Created task</ListGroupItem>
                            <ListGroupItem>Resolved task</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button variant={"outline-success"} onClick={()=>setCreateTask(true)}>Create new task</Button>
                            <CreateTask
                                show={createTask}
                                onHide={() => setCreateTask(false)}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
      </Container>
    );
};

export default Account;