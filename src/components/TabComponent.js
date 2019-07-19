import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

import VisibleWorkoutList from "../containers/VisibleWorkoutList";
import FilterableExerciseList from "../containers/FilterableExerciseList";
import SearchBar from "../containers/SearchBar";

export const TabComponent = () => (
    <Tabs>
        <TabList>
            <Tab>
                Current Workout
            </Tab>
            <Tab>
                All Exercises
            </Tab>
            <Tab>
                Saved Workouts
            </Tab>
        </TabList> 
        <TabPanel>
            <VisibleWorkoutList />
        </TabPanel>
        <TabPanel>
            <div>
                <SearchBar />
                <FilterableExerciseList />
            </div>
        </TabPanel>
        <TabPanel>
            <h1 style={{ color: "#282C34" }}>Coming Soon</h1>
        </TabPanel>
    </Tabs>
);