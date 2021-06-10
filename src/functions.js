import moment from 'moment';

export function timestampToDateTimeString(value) {
    var dateTimeString = moment.unix(value).format('llll');
    return dateTimeString
}
