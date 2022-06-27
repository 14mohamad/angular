import Person from '../Person';
import EventData from './EventData';

export const EVENTS = [
  new EventData(
    'music',
    333,
    70,
    new Person('859417629', 'omer ', 40, true, '', 'haifa')
  ),
  new EventData(
    'a party',
    456,
    15,
    new Person('833823085', 'eden ben zaken ', 36, false, '')
  ),
  new EventData(
    'dance',
    700,
    2000,
    new Person('417464016', 'shakira', 39, true, '', 'barazil')
  ),
  new EventData(
    'a party',
    666,
    30,
    new Person('420837371', 'yazan ', 46, false, '', 'ashdod')
  ),
  new EventData(
    'Dj',
    624,
    20,
    new Person('371305222', 'eden', 44, true, '', 'tel-aviv')
  ),
  new EventData(
    'mix party',
    529,
    980,
    new Person('286029725', 'aiel', 69, true, '', 'afola')
  ),
  new EventData(
    'Dj',
    439,
    1400,
    new Person('373439074', 'Dj.snake', 50, true, '')
  ),
  new EventData(
    'new years party',
    468,
    5000,
    new Person('799431956', 'ravevo', 47, false, '', 'natanya')
  ),
];
