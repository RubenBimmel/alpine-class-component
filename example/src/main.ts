import { Alpine } from '../../src';
import './style.css';

import Dropdown from './components/dropdown';
import RemoveRef from './components/remove-ref';
import Person from './components/person';

Alpine.data('dropdown', Dropdown);
Alpine.data('removeRef', RemoveRef);
Alpine.data('person', Person);

Alpine.start();