import { React, useState, useEffect, useCallback } from 'react';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';
import WeeklyView from './WeeklyView';
import TasksView from './TasksView';
import AddTaskModal from './AddTaskModal';
import ModifyTaskModal from './ModifyTaskModal';
import Sidebar from './Sidebar';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const manageTask = baseUrl + '/tasks/';
const retrieveTasks = baseUrl + '/tasks/get/';
const LOCAL_STORAGE_KEY = 'taskOrganizerApp.auth.token'


export default function Dashboard({ user }) {

    const [tasks, setTasks] = useState();
    const [userEvents, setUserEvents] = useState([]);
    const [date, setDate] = useState();
    const [activeTask, setActiveTask] = useState();
    const [taskModal, showTaskModal] = useState(false);
    const [modifyModal, showModifyModal] = useState(false);

    const userID = user.id;

    function openTaskModal() {
        showTaskModal(true);
    }
    function closeTaskModal() {
        showTaskModal(false);
    }
    function openModifyModal() {
        showModifyModal(true);
    }
    function closeModifyModal() {
        showModifyModal(false);
        setActiveTask()
    }
    console.log(activeTask);

    const addTaskHandler = async (event) => {
        event.preventDefault()

        const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))['access']
        const task = {
            'title': event.target.title.value,
            'details': event.target.details.value,
            'date': event.target.date.value,
            'complete': event.target.complete.value,
        }
        const response = await axios.post(manageTask, task, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        closeTaskModal()
        fetchTasks()
    }

    const removeTaskHandler = async () => {
        const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))['access']
        const task = activeTask
    
        const response = await axios.delete(manageTask + task + '/', {
            headers: { "Authorization": `Bearer ${token}` }
        })
        closeModifyModal()
        fetchTasks()
    }

    const customButtons = {
        addButton: {
            text: "Add a Task",
            click: function () {
                addTaskHandler()
            }
        }
    }


    const fetchTasks = useCallback(async () => {
        const response = await axios.post(retrieveTasks, { 'userID': userID })
        console.log(response.data);

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
                        <DailyView userEvents={userEvents} />
                    </div>
                    <div className="flex w-1/3">
                        <MonthlyView userEvents={userEvents} customButtons={customButtons} setDate={setDate} setActiveTask={setActiveTask} openModifyModal = {openModifyModal}/>
                    </div>
                </div>
                <div>
                    <div>
                        <WeeklyView userEvents={userEvents} />
                    </div>
                    <div>
                        <TasksView />
                    </div>
                </div>
            </div >
            <div>
                <AddTaskModal taskModal={taskModal} openTaskModal={openTaskModal} addTaskHandler={addTaskHandler} closeTaskModal={closeTaskModal} />
            </div>
            <div>
                <ModifyTaskModal modifyModal={modifyModal} openModifyModal={openModifyModal} removeTaskHandler={removeTaskHandler} closeModifyModal={closeModifyModal} />
            </div>
        </div>
    );
}
