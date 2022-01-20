import { React, useState, useEffect } from 'react';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';
import WeeklyView from './WeeklyView';
import TasksView from './TasksView';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const retrieveTasks = baseUrl + '/tasks/get/';

export default function Dashboard({ user }) {

    const [tasks, setTasks] = useState()
    const userID = user.id

    useEffect(() => {
        console.log((userID));
        const response = axios.post(retrieveTasks, { 'userID': userID }).then(console.log(response))


    }, [userID])

    return (
        <div>
            <div>
                <div>
                    <DailyView />
                </div>
                <div>
                    <MonthlyView />
                </div>
            </div>
            <div>
                <div>
                    <WeeklyView />
                </div>
                <div>
                    <TasksView />
                </div>
            </div>
        </div >
    );
}
