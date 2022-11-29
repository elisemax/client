import devices from '../.././resource/devices.svg';
import doctors from '../.././resource/doctors.svg';
import insulin from '../.././resource/insulin.svg';
import medications from '../.././resource/medications.svg';
import insulinActive from '../.././resource/insulinWhite.svg'
import medicationsActive from '../.././resource/medicationsWhite.svg'
import doctorsActive from '../.././resource/doctorsWhite.svg'
import devicesActive from '../.././resource/devicesWhite.svg'
import chat from '../../resource/chat.svg'
import reports from '../../resource/reports.svg'
import today from '../../resource/today.svg'

import { filterState } from '../../types/filter';
import { createSlice } from "@reduxjs/toolkit";

const initialState: filterState = {
    filter:[  { id:'Today', src:today, srcActive:today, status:'active'},
              { id:'Reports', src:reports, srcActive:reports, status:'inactive'},
                { id:'Chat', src:chat, srcActive:chat, status:'inactive'},
                { id:'Doctors', src:doctors, srcActive:doctorsActive, status:'inactive'},
                { id:'Insulin', src:insulin, srcActive:insulinActive, status:'inactive'},
                { id:'Meds', src:medications, srcActive:medicationsActive, status:'inactive'},
                { id:'Devices', src:devices, srcActive:devicesActive, status:'inactive'}]
}
const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        changeFilter: (state, { payload }) => {
            state.filter.forEach((item) => {
                if(item.id === payload) {
                    item.status = 'active'
                } else {
                    item.status = 'inactive'
                }
            })
        }
    }
})
const { actions, reducer } = filterSlice;

export default reducer;

export const {
    changeFilter
} = actions;