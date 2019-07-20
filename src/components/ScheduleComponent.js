import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import AddDayContainer from "../containers/AddDayContainer";
import VisibleWorkoutList from "../containers/VisibleWorkoutList";

export const ScheduleComponent = ({ schedule }) => (
    <Tabs>
        <TabList>
            {schedule.map(day => <Tab key={day.name}>{day.name}</Tab>)}
            <Tab>+</Tab>
        </TabList>
        {schedule.map((day, index) => (<TabPanel key={day.name}>
            <VisibleWorkoutList workout={day.workout} index={index}/>
        </TabPanel>))}
        <TabPanel>
            < AddDayContainer />
        </TabPanel>
    </Tabs>
);

export default ScheduleComponent;