import devices from '../.././resource/iconsMenu/devices.svg';
import doctors from '../.././resource/iconsMenu/doctors.svg';
import insulin from '../.././resource/iconsMenu/insulin.svg';
import medications from '../.././resource/iconsMenu/medications.svg';
import insulinActive from '../.././resource/iconsMenu/insulinWhite.svg'
import medicationsActive from '../.././resource/iconsMenu/medicationsWhite.svg'
import doctorsActive from '../.././resource/iconsMenu/doctorsWhite.svg'
import devicesActive from '../.././resource/iconsMenu/devicesWhite.svg'
import chat from '../../resource/iconsMenu/chat.svg'
import reports from '../../resource/iconsMenu/reports.svg'
import today from '../../resource/iconsMenu/today.svg'

import { filterState } from '../../types/filter';
import { createSlice } from "@reduxjs/toolkit";

const initialState: filterState = {
    filter:[  { id:'Today', src:today, srcActive:today, status:'active', },
              { id:'Reports', src:reports, srcActive:reports, status:'inactive'},
                { id:'Chat', src:chat, srcActive:chat, status:'inactive'},
                { id:'Doctors', src:doctors, srcActive:doctorsActive, status:'inactive', endpoint:['encounters','tests']},
                { id:'Insulin', src:insulin, srcActive:insulinActive, status:'inactive'},
                { id:'Meds', src:medications, srcActive:medicationsActive, status:'inactive',endpoint:['meds']},
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