import devices from '.././resource/devices.svg';
import doctors from '.././resource/doctors.svg';
import insulin from '.././resource/insulin.svg';
import medications from '.././resource/medications.svg';
import insulinWhite from '.././resource/insulinWhite.svg'
import medicationsWhite from '.././resource/medicationsWhite.svg'
import doctorsWhite from '.././resource/doctorsWhite.svg'
import devicesWhite from '.././resource/devicesWhite.svg'
export const useResource = () => {
    return {images:[{id:1, name:'Doctors', src:doctors, srcWhite:doctorsWhite,status:'inactive'},
                    {id:2, name:'Insulin', src:insulin, srcWhite:insulinWhite,status:'inactive'},
                    {id:3, name:'Meds', src:medications, srcWhite:medicationsWhite,status:'inactive'},
                    {id:4, name:'Devices', src:devices, srcWhite:devicesWhite,status:'inactive'}]}
};

