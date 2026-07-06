import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './educationSlice/educationSlice';
import skillsReducer from './skillsSlice/skillsSlice';
import experienceReducer from './experienceSlice/experienceSlice'

export const store = configureStore({
    reducer: {
        education: educationReducer,
        skills: skillsReducer,
        experience: experienceReducer,
    },
});


///dsfsdfsdfsdf