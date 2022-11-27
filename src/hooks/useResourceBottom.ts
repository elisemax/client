import chat from '../resource/chat.svg'
import reports from '../resource/reports.svg'
import today from '../resource/today.svg'

export const useResourceBottom = () => {
    return {imagesBottom:[{id:5, name:'Today', src:today, srcWhite:today,status:'inactive'},
                    {id:6, name:'Reports', src:reports, srcWhite:reports,status:'inactive'},
                    {id:7, name:'Chat', src:chat, srcWhite:chat,status:'inactive'},
                    ]}
};

