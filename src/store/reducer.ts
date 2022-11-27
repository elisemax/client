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
    default:
      return state;
  }
}