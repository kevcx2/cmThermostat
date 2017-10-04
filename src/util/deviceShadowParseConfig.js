// Describes how to parse the device shadow value list:
//{[value index]: 'value meaning'}

export const STAT_PARSE_LIST = {
  1: 'lockStatus',
  2: 'currentTemp',
  3: 'occupiedCool',
  4: 'occupiedHeat',
  5: 'unoccupiedCool',
  6: 'unoccupiedHeat',
  8: 'mondayOccupiedHour',
  9: 'mondayOccupiedMinute',
  10: 'mondayOccupiedAmPm',
  11: 'mondayUnoccupiedHour',
  12: 'mondayUnoccupiedMinute',
  13: 'mondayUnoccupiedAmPm',
  14: 'tuesdayOccupiedHour',
  15: 'tuesdayOccupiedMinute',
  16: 'tuesdayOccupiedAmPm',
  17: 'tuesdayUnoccupiedHour',
  18: 'tuesdayUnoccupiedMinute',
  19: 'tuesdayUnoccupiedAmPm',
  20: 'wednesdayOccupiedHour',
  21: 'wednesdayOccupiedMinute',
  22: 'wednesdayOccupiedAmPm',
  23: 'wednesdayUnoccupiedHour',
  24: 'wednesdayUnoccupiedMinute',
  25: 'wednesdayUnoccupiedAmPm',
  26: 'thursdayOccupiedHour',
  27: 'thursdayOccupiedMinute',
  28: 'thursdayOccupiedAmPm',
  29: 'thursdayUnoccupiedHour',
  30: 'thursdayUnoccupiedMinute',
  31: 'thursdayUnoccupiedAmPm',
  32: 'fridayOccupiedHour',
  33: 'fridayOccupiedMinute',
  34: 'fridayOccupiedAmPm',
  35: 'fridayUnoccupiedHour',
  36: 'fridayUnoccupiedMinute',
  37: 'fridayUnoccupiedAmPm',
  38: 'saturdayOccupiedHour',
  39: 'saturdayOccupiedMinute',
  40: 'saturdayOccupiedAmPm',
  41: 'saturdayUnoccupiedHour',
  42: 'saturdayUnoccupiedMinute',
  43: 'saturdayUnoccupiedAmPm',
  44: 'sundayOccupiedHour',
  45: 'sundayOccupiedMinute',
  46: 'sundayOccupiedAmPm',
  47: 'sundayUnoccupiedHour',
  48: 'sundayUnoccupiedMinute',
  49: 'sundayUnoccupiedAmPm',
	52: 'vacationEnabled',
  53: 'zoneStatus',
  54: 'zoneCall',
  56: 'standaloneThermostat',
	57: 'leavingAir',
	58: 'returnAir',
	59: 'humidity',
  60: 'occupiedStatus',
};

export const DIAGNOSTIC_PARSE_LIST = {
  1: 'leavingAir',
  2: 'returnAir',
  3: 'outsideAir',
  4: 'errorCodeZone1',
  5: 'errorCodeZone2',
  6: 'errorCodeZone3',
  7: 'errorCodeZone4',
  8: 'errorCodeZone5',
  9: 'errorCodeZone6',
  10: 'errorCodeZone7',
  11: 'errorCodeZone8',
  12: 'errorCodeZone9',
  13: 'errorCodeZone10',
  14: 'errorCodeZone11',
  15: 'errorCodeZone12',
  16: 'errorCodeZone13',
  17: 'errorCodeZone14',
  18: 'errorCodeZone15',
  19: 'errorCodeZone16',
  20: 'errorCodeZone17',
  21: 'errorCodeZone18',
  22: 'errorCodeZone19',
  23: 'errorCodeZone20',
  24: 'systemStatus',
}
