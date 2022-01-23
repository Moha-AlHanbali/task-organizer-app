import { React, useState, useEffect } from 'react';
import DailyView from './DailyView';
import MonthlyView from './MonthlyView';
import WeeklyView from './WeeklyView';
import TasksView from './TasksView';
import Sidebar from './Sidebar';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const retrieveTasks = baseUrl + '/tasks/get/';

export default function Dashboard({ user }) {

    const [tasks, setTasks] = useState()
    const userID = user.id

    useEffect(() => {

        const response = axios.post(retrieveTasks, { 'userID': userID }).then(console.log(response))

    }, [userID])

    return (
        <div>
            <div>
                <Sidebar userName = {user.username}/>
            </div>
            <div>
                <div>
                    <div className="flex w-1/3">
                        <DailyView />
                    </div>
                    <div className="flex w-1/3">
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
        </div>
    );
}
