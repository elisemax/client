import devices from '../.././resource/iconsMenu/devices.svg';
import doctors from '../.././resource/iconsMenu/doctors.svg';
import insulin from '../.././resource/iconsMenu/insulin.svg';
import medications from '../.././resource/iconsMenu/medications.svg';
import insulinActive from '../.././resource/iconsMenu/insulinWhite.svg'
import medicationsActive from '../.././resource/iconsMenu/medicationsWhite.svg'
import doctorsActive from '../.././resource/iconsMenu/doctorsWhite.svg'
import devicesActive from '../.././resource/iconsMenu/devicesWhite.svg'
import baby from '../../resource/iconsMenu/baby.svg'
import reports from '../../resource/iconsMenu/reports.svg'
import today from '../../resource/iconsMenu/today.svg'
import babyActive from '../../resource/iconsMenu/babyActive.svg'
import reportsActive from '../../resource/iconsMenu/reportsActive.svg'
import todayActive from '../../resource/iconsMenu/todayActive.svg'
import woman from '../../resource/iconsMenu/woman.svg'
import womanActive from '../../resource/iconsMenu/womanActive.svg'
import man from '../../resource/iconsMenu/man.svg'
import { filterState } from '../../types/filter';
import { createSlice } from "@reduxjs/toolkit";

const initialState: filterState = {
    filter:[  { id:'Today', src:today, srcActive:todayActive, status:'active',endpoint:['today']},
              { id:'Reports', src:reports, srcActive:reportsActive, status:'inactive',endpoint:['reports']},
                { id:'Baby journal', src:baby, srcActive:babyActive, status:'inactive',endpoint:['babyJournal']},
                { id:'Doctors', src:doctors, srcActive:doctorsActive, status:'inactive', endpoint:['encounters']},
                { id:'Insulin', src:insulin, srcActive:insulinActive, status:'inactive', endpoint:['insulin']},
                { id:'Meds', src:medications, srcActive:medicationsActive, status:'inactive',endpoint:['meds']},
                { id:'Devices', src:devices, srcActive:devicesActive, status:'inactive', endpoint:['devices']},
            {id:'Patient1',src:woman,srcActive:womanActive,status:'inactive',endpoint:['patient1']},
        {id:'Patient2',src:woman,srcActive:womanActive,status:'inactive',endpoint:['patient2']},
    {id:'Patient3',src:woman,srcActive:womanActive,status:'inactive',endpoint:['patient3']},
{id:'Patient4',src:man,srcActive:womanActive,status:'inactive',endpoint:['patient4']}],
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