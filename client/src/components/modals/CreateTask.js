import {Button, Col, Form, Modal, Row} from "react-bootstrap";
// import {Form} from "react-bootstrap";
import {apiService} from "../../App";
import "../style/modalWindow.css"
import {Formik} from "formik";
import {useEffect, useState} from "react";


const CreateTask = (props) => {

    const createNewTask = async (values) => {
        let body = JSON.stringify({
            title: values.title,
            conditionTask: values.conditionTask,
            formatingsId: 1,
            topicId: 2,
            accountId: JSON.parse(localStorage.getItem("auth")).accountId,
            solutions: [{textSolution: values.solution1}, {textSolution: values.solution2}, {textSolution: values.solution3}]
        })
        const res = await apiService.post('/api/tasks', body);
        let response = await res.json()
        props.onHide();
    }

    const getTopics = async () => {
        const topicsResponse = await apiService.get("/api/topics");
        const topics = await topicsResponse.json();
        setTopics(topics);
    }
    const [topics, setTopics] = useState([])
    useEffect(async () => {
        await getTopics();
    }, []);

    return (
        <Modal
            {...props}
            centered
            contentClassName="custom-modal-style"
        >
            <Formik
                validationSchema={""}
                onSubmit={createNewTask}
                initialValues={{
                    topic: '',
                    title: '',
                    conditionTask: '',
                    solution1: '',
                    solution2: '',
                    solution3: '',
                }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationFormik101"
                                className="position-relative"
                            >
                                <Form.Label>Topic</Form.Label>
                                <Form.Control as={"select"} type={"text"}
                                              name="topic"
                                              value={values.topic}
                                              onChange={handleChange}
                                              isValid={touched.topic && !errors.topic}
                                >
                                    {topics.map(topic => <option>{topic.topicName}</option>)}

                                </Form.Control>
                                <Form.Control.Feedback tooltip></Form.Control.Feedback>


                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationFormik102"
                                className="position-relative"
                            >
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}
                                />
                                <Form.Control.Feedback tooltip></Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationFormik103"
                                className="position-relative"
                            >
                                <Form.Label>Condition Task</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="conditionTask"
                                    value={values.conditionTask}
                                    onChange={handleChange}
                                    isValid={touched.conditionTask && !errors.conditionTask}
                                />
                                <Form.Control.Feedback tooltip></Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>Solution</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="solution1"
                                    value={values.solution}
                                    onChange={handleChange}
                                    isValid={touched.solution1 && !errors.solution1}
                                />
                                <Form.Control.Feedback tooltip></Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>Solution</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="solution2"
                                    value={values.solution}
                                    onChange={handleChange}
                                    isValid={touched.solution2 && !errors.solution2}
                                />
                                <Form.Control.Feedback tooltip></Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>Solution</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="solution3"
                                    value={values.solution}
                                    onChange={handleChange}
                                    isValid={touched.solution3 && !errors.solution3}
                                />
                                <Form.Control.Feedback tooltip></Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button variant={"outline-success"} type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default CreateTask;