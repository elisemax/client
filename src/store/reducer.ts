export function reducerBut(state:any, action:any) {
  switch (action.type) {
    case 'Doctors':
      return {id: 1, name: 'Doctors'};
    case 'Insulin':
          return {id:2, name: 'Insulin'};
    case 'Meds':
          return { id:3, name: 'Meds'};
    case 'Devices':
          return {id:4, name: 'Devices'};
    case 'Today':
          return {id:5, name: 'Today'};
    case 'Reports':
          return { id:6, name: 'Reports'};
    case 'Chat':
          return {id:7, name: 'Chat'};
    default:
      return state;
  }
}