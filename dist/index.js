"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
// DOMUSTO
const DomustoLogger_1 = require("domusto/src/domusto/DomustoLogger");
// import DomustoDevice from 'domusto/src/domusto/DomustoDevice';
// INTERFACES
const EventType_1 = require("domusto/src/domusto/interfaces/events/EventType");
/**
 * DOMUSTO event logger to txt files in log folder
 *
 * @author Bas van Dijk
 * @class DomustoLoggerTxt
 */
class DomustoLoggerTxt {
    constructor() { }
    /**
     * Logs device event
     *
     * @param {any} device input/output device
     * @param {any} data data to log;
     * @memberof DomustoLoggerTxt
     */
    newEvent(eventType, device, data) {
        console.log('NEW EVENT', eventType, device, data);
        if (eventType === EventType_1.default.output || eventType === EventType_1.default.timer || eventType === EventType_1.default.error) {
            let logStream = fs.createWriteStream(`./logs/${eventType}.log`, { 'flags': 'a' });
            logStream.end(DomustoLogger_1.default.getLogDate() + '   ' + device.name + ' (' + device.id + ') - ' + data + '\n');
        }
        else if (eventType === EventType_1.default.input && device.type === 'temperature') {
            console.log(device.data.temperature, device.data.humidity);
        }
    }
}
exports.default = DomustoLoggerTxt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixVQUFVO0FBQ1YscUVBQThEO0FBQzlELGlFQUFpRTtBQUVqRSxhQUFhO0FBQ2IsK0VBQXdFO0FBR3hFOzs7OztHQUtHO0FBQ0g7SUFFSSxnQkFBZSxDQUFDO0lBRWhCOzs7Ozs7T0FNRztJQUNILFFBQVEsQ0FBQyxTQUFvQixFQUFFLE1BQVcsRUFBRSxJQUFVO1FBRWxELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLG1CQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsS0FBSyxtQkFBUyxDQUFDLEtBQUssSUFBSSxTQUFTLEtBQUssbUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25HLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLFNBQVMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbEYsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBYSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDOUcsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssbUJBQVMsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0wsQ0FBQztDQUVKO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==