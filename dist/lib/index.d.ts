import EventType from 'domusto/src/domusto/interfaces/events/EventType';
/**
 * DOMUSTO event logger to txt files in log folder
 *
 * @author Bas van Dijk
 * @class DomustoLoggerTxt
 */
declare class DomustoLoggerTxt {
    constructor();
    /**
     * Logs device event
     *
     * @param {any} device input/output device
     * @param {any} data data to log;
     * @memberof DomustoLoggerTxt
     */
    newEvent(eventType: EventType, device: any, data?: any): void;
}
export default DomustoLoggerTxt;
