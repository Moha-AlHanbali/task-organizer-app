import { React, useState, useEffect, useCallback } from 'react';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';
import WeeklyView from './WeeklyView';
import TasksView from './TasksView';
import AddTaskModal from './AddTaskModal';
import ModifyTaskModal from './ModifyTaskModal';
import Sidebar from './Sidebar';
import axios from 'axios';
import moment from 'moment';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const manageTask = baseUrl + '/tasks/';
const retrieveTasks = baseUrl + '/tasks/get/';
const LOCAL_STORAGE_KEY = 'taskOrganizerApp.auth.token'


export default function Dashboard({ user }) {

    const [tasks, setTasks] = useState();
    const [userEvents, setUserEvents] = useState([]);
    const [activeDate, setActiveDate] = useState();
    const [activeTask, setActiveTask] = useState();
    const [taskModal, showTaskModal] = useState(false);
    const [modifyModal, showModifyModal] = useState(false);

    const userID = user.id;

    const openTaskModal = () => {
        if (modifyModal === true) closeModifyModal()
        showTaskModal(true);
    }
    const closeTaskModal = () => {
        showTaskModal(false);
        setActiveDate()
    }
    const openModifyModal = () => {
        if (taskModal === true) closeTaskModal()
        showModifyModal(true);
    }
    const closeModifyModal = () => {
        showModifyModal(false);
        setActiveTask()
    }


    const dateClickHandler = (info) => {
        const date = `${moment(info.date.toISOString()).utcOffset(0, true).format().slice(0, 16)}`;
        if (taskModal === true) closeTaskModal()
        setActiveDate(date)
        openTaskModal()
    }

    const eventClickHandler = (info) => {
        const task = tasks[info.event.id]
        task['id'] = info.event.id
        if (modifyModal === true) closeModifyModal()
        setActiveTask(task)
        openModifyModal()
    }


    const addTaskHandler = async (event) => {
        event.preventDefault()

        const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))['access']
        const task = {
            'title': event.target.title.value,
            'details': event.target.details.value,
            'date': event.target.date.value,
            'complete': event.target.complete.checked,
        }

        const response = await axios.post(manageTask, task, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        closeTaskModal()
        fetchTasks()
    }

    const updateTaskHandler = async (event) => {
        event.preventDefault()

        const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))['access']
        const taskID = activeTask.id
        const task = {
            'title': event.target.title.value,
            'details': event.target.details.value,
            'date': event.target.date.value,
            'complete': event.target.complete.checked,
        }

        const response = await axios.put(manageTask + taskID + '/',task,  {
            headers: { "Authorization": `Bearer ${token}` }
        })
        closeModifyModal()
        fetchTasks()
    }

    const removeTaskHandler = async () => {
        const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))['access']
        const taskID = activeTask.id

        const response = await axios.delete(manageTask + taskID + '/', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        closeModifyModal()
        fetchTasks()
    }

    
    const customButtons = {
        addButton: {
            text: "Add a Task",
            click: function () {
                openTaskModal()
            }
        }
    }


    const fetchTasks = useCallback(async () => {
        const response = await axios.post(retrieveTasks, { 'userID': userID })

        const newTasks = response.data

        setTasks(prevTasks => ({ ...prevTasks, ...newTasks }))

        const newUserEvents = []

        for (const [key, value] of Object.entries(response.data)) {
            const newEvent = []
            for (const [key2, value2] of Object.entries(value)) {
                newEvent['id'] = key
                if (key2 == 'title') {
                    newEvent['title'] = value2;
                } else if (key2 == 'date') {
                    newEvent['date'] = value2
                } else if (key2 == 'details') {
                    newEvent['description'] = value2
                }
            }
            newUserEvents.push(newEvent)
        }

        setUserEvents([...newUserEvents])

    }, [userID])

    useEffect(() => {

        fetchTasks()

    }, [userID, fetchTasks])



    return (
        <div>
            <div>
                <Sidebar userName={user.username} />
            </div>
            <div>
                <div>
                    <div className="flex w-1/3">
                        <DailyView userEvents={userEvents} customButtons={customButtons} dateClickHandler={dateClickHandler} eventClickHandler={eventClickHandler} />
                    </div>
                    <div className="flex w-1/3">
                        <MonthlyView userEvents={userEvents} customButtons={customButtons} dateClickHandler={dateClickHandler} eventClickHandler={eventClickHandler} />
                    </div>
                </div>
                <div>
                    <div>
                        <WeeklyView userEvents={userEvents} customButtons={customButtons} dateClickHandler={dateClickHandler} eventClickHandler={eventClickHandler} />
                    </div>
                    <div>
                        <TasksView />
                    </div>
                </div>
            </div >
            <div>
                <AddTaskModal taskModal={taskModal} addTaskHandler={addTaskHandler} closeTaskModal={closeTaskModal} activeDate={activeDate} />
            </div>
            <div>
                <ModifyTaskModal modifyModal={modifyModal} updateTaskHandler = {updateTaskHandler} removeTaskHandler={removeTaskHandler} closeModifyModal={closeModifyModal} activeTask = {activeTask}/>
            </div>

        </div>
    );
}
