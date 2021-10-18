import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import React, {useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {apiService} from "../../App";
import {useTranslation} from "react-i18next";


const AccountTable = (props) => {
    const {t} = useTranslation();

    useEffect(async () => {
        const tasksResponse = await apiService.get('/api/tasks');
        const tasks = await tasksResponse.json()
        props.setTasks(tasks);
    }, []);


    const handleDelete = async (id) => {
        let body = [id]
        await apiService.delete('/api/tasks', JSON.stringify(body));
        const taskUpdate = await apiService.get('/api/tasks');
        const tasks = await taskUpdate.json()
        props.setTasks(tasks)
    }


    const columns = [{
        dataField: 'topic.topicName',
        text: 'Topic',
        headerStyle: { width: '150px' },
        sort: true,
    }, {
        dataField: 'title',
        text: 'Title',
        style: { overflowWrap: "break-word" },
        sort: true,
    }, {
        dataField: 'conditionTask',
        text: 'Condition',
        style: { overflowWrap: "break-word" },
        editable: true,
        sort: true,
    },
        {
            dataField: "id",
            text: "Action",
            editable: false,
            formatter: (cellContent, row) => {
                return (
                    <button
                        className="btn btn-danger btn-xs"
                        onClick={() => handleDelete(row.id)}
                    >
                        {t("delete")}
                    </button>
                );
            },
        },
    ];

    return (
        <BootstrapTable bootstrap4 keyField='id'
                        data={props.tasks}
                        columns={columns}
                        defaultSortDirection="asc"
                        bordered
        />

    );
};

export default AccountTable;