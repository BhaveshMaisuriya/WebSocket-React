import { socket } from './config';

export const onGetTab1Data = async () => {
    let temp = [];
    socket.on('tab1', data => {       
        temp.push(data);
    });
    return temp;
};

export const onGetTab2Data = async () => {
    socket.on('tab2', data => {
        return data;
    });
};
