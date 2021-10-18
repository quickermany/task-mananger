import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import {apiService} from "../../App";
import {useToasts} from "react-toast-notifications";
import {useTranslation} from "react-i18next";
import Rating from "../../rating/Rating";


const Answer = (props) => {
    const {addToast} = useToasts()
    const {t} = useTranslation();
    const createAnswer = async (values) => {
        let body = JSON.stringify({
            solution: values.answer.trim()
        })
        const req = await apiService.post(`/api/tasks/${props.task.id}`, body);
        const res = await req.json();
        if (res.answer) {
            props.tasks.find(task => props.task.id ===task.id).account_solution = true;
            props.setTasks([...props.tasks])
        }

        res.answer ? addToast('Correct Answer', {
            appearance: 'success',
            autoDismiss: true,
            placementtype: 'bottom-left'
        }) : addToast('Wrong Answer', {
            appearance: 'error',
            autoDismiss: true
        })
    }

    return (
        <Formik
            onSubmit={createAnswer}
            initialValues={{
                answer: " "
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  touched,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-4">
                        <Form.Group
                            as={Col}
                            className="position-relative"
                        >
                            <Form.Label>{t("input")}</Form.Label>
                            <Form.Control
                                type="text"
                                name="answer"
                                value={values.answer}
                                onChange={handleChange}
                                isValid={touched.answer && !errors.answer}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant={"outline-success"} type="submit">{t("answer")}</Button>
                        </Col>
                        <Col md={{span: 5}}>
                            <Rating/>
                        </Col>
                    </Row>

                </Form>

            )}
        </Formik>

    );
};

export default Answer;