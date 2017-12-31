const fs = require('fs');

// DOMUSTO
import DomustoLogger from 'domusto/src/domusto/DomustoLogger';
// import DomustoDevice from 'domusto/src/domusto/DomustoDevice';

// INTERFACES
import EventType from 'domusto/src/domusto/interfaces/events/EventType';
import { DeviceType } from 'domusto/src/domusto/interfaces/device/DeviceType';

/**
 * DOMUSTO event logger to txt files in log folder
 *
 * @author Bas van Dijk
 * @class DomustoLoggerTxt
 */
class DomustoLoggerTxt {

    constructor() {}

    /**
     * Logs device event
     *
     * @param {any} device input/output device
     * @param {any} data data to log;
     * @memberof DomustoLoggerTxt
     */
    newEvent(eventType: EventType, device: any, data?: any) {

        console.log('NEW EVENT', eventType, device, data);

        if (eventType === EventType.output || eventType === EventType.timer || eventType === EventType.error) {
            let logStream = fs.createWriteStream(`./logs/${eventType}.log`, { 'flags': 'a' });
            logStream.end(DomustoLogger.getLogDate() + '   ' + device.name + ' (' + device.id + ') - ' + data + '\n');
        } else if (eventType === EventType.input && device.type === 'temperature') {
            console.log(device.data.temperature, device.data.humidity);
        }
    }

}

export default DomustoLoggerTxt;