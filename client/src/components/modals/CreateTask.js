import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {apiService} from "../../App";
// import "../style/modalWindow.css";
import {Formik} from "formik";
import {useEffect, useState} from "react";
import {ValidationTaskFormSchemas} from "./ValidationsSchemas";
import {useTranslation} from "react-i18next";


const CreateTask = (props) => {
    const {t} = useTranslation();
    const [topics, setTopics] = useState([])

    const createNewTask = async (values) => {
        let body = JSON.stringify({
            title: values.title,
            conditionTask: values.conditionTask,
            formatingsId: 1,
            topicId: values.topic,
            accountId: JSON.parse(localStorage.getItem("auth")).accountId,
            solutions: [{textSolution: values.solution1}, {textSolution: values.solution2}, {textSolution: values.solution3}]
        })
        const req = await apiService.post('/api/tasks', body);
        const response = await req.json();
        props.tasks.push(response)

        props.onHide();
    }

    useEffect(async () => {
        const topicsResponse = await apiService.get("/api/topics");
        const topics = await topicsResponse.json();
        setTopics(topics);
    }, []);

    return (
        <Modal
            {...props}
            centered
        >
            <Formik
                validationSchema={ValidationTaskFormSchemas}
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
                    <Form onSubmit={handleSubmit} className={"form"}>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                className="position-relative"
                            >
                                <Form.Label>{t("topic")}</Form.Label>
                                <Form.Control as={"select"}
                                              options={topics}
                                              type={"text"}
                                              name="topic"
                                              value={values.topic}
                                              onChange={handleChange}
                                              isValid={touched.topic && !errors.topic}
                                >
                                    <option value={""}>{t("choose")}</option>
                                    {topics.map(topic => <option value={topic.id}> {topic.topicName}</option>)}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="6"
                                className="position-relative"
                            >
                                <Form.Label>{t("title")}</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}
                                    isInvalid={!!errors.title}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="12"
                                className="position-relative"
                            >
                                <Form.Label>{t("conditionTask")}</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="conditionTask"
                                    value={values.conditionTask}
                                    onChange={handleChange}
                                    isValid={touched.conditionTask && !errors.conditionTask}
                                    isInvalid={!!errors.conditionTask}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                className="position-relative"
                            >
                                <Form.Label>{t("solution")}</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="solution1"
                                    value={values.solution}
                                    onChange={handleChange}
                                    isValid={touched.solution1 && !errors.solution1}
                                    isInvalid={!!errors.solution1}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                className="position-relative"
                            >
                                <Form.Label>{t("solution")}</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="solution2"
                                    value={values.solution}
                                    onChange={handleChange}
                                    isValid={touched.solution2 && !errors.solution2}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                className="position-relative"
                            >
                                <Form.Label>{t("solution")}</Form.Label>
                                <Form.Control
                                    as={"textarea"}
                                    type="text"
                                    name="solution3"
                                    value={values.solution}
                                    onChange={handleChange}
                                    isValid={touched.solution3 && !errors.solution3}
                                />
                            </Form.Group>
                        </Row>
                        <Button variant={"outline-success"} type="submit">{t("create")}</Button>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default CreateTask;