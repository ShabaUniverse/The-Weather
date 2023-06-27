import {configureStore} from '@reduxjs/toolkit';
import search from './searchSlice';
import data from './dataSlice';
import digit from './digitSlice';
import recent from './recentSlice';


const store = configureStore ({
    reducer: {
        search,
        data,
        digit,
        recent
    }
});

export default store;