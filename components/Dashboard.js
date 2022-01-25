import { React, useState, useEffect, useCallback } from 'react';
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
    const [userEvents, setUserEvents] = useState([])

    const userID = user.id

    // NOTE: CREATING NEW EVENTS
    // const [events, setEvents] = useState([
    //   { title: 'event 1', date: '2022-01-23' },
    //   { title: 'event 2', date: '2022-01-24' }
    // ])

    // function handleUpdateState() {
    //   console.log('ADD');
    //   const calendarApi = calendarRef.current.getApi()
    //   // calendarApi.unselect()

    //   let newEvents = [...events, { title: 'event 3', date: '2022-01-25' }]

    //   setEvents(newEvents)
    // }

    const fetchTasks = useCallback(async () => {
        const response = await axios.post(retrieveTasks, { 'userID': userID })
        
        const newTasks = response.data

        setTasks(prevTasks => ({...prevTasks, ...newTasks}))
        
        const newUserEvents = []

        for (const [key, value] of Object.entries(response.data)) {
            const newEvent = {}
            for (const [key2, value2] of Object.entries(value)) {
                if (key2 == 'title') {
                    newEvent['title'] = value2;
                } else if (key2 == 'date') {
                    newEvent['date'] = value2.slice(0, 10)
                } else if (key2 == 'details') {
                    newEvent['description'] = value2
                }
            }
            newUserEvents.push(newEvent)

        }
        setUserEvents(prevUserEvents => ([...prevUserEvents, ...newUserEvents]))
    }, [userID])

    useEffect(() => {

        fetchTasks()

    }, [userID, fetchTasks])
    console.log(userEvents);


    return (
        <div>
            <div>
                <Sidebar userName={user.username} />
            </div>
            <div>
                <div>
                    <div className="flex w-1/3">
                        <DailyView userEvents = {userEvents} />
                    </div>
                    <div className="flex w-1/3">
                        <MonthlyView userEvents = {userEvents} />
                    </div>
                </div>
                <div>
                    <div>
                        <WeeklyView userEvents = {userEvents} />
                    </div>
                    <div>
                        <TasksView />
                    </div>
                </div>
            </div >
        </div>
    );
}
