import { Alpine } from '../../dist';
import './style.css';

import Dropdown from './components/dropdown';
import InputValidation from './components/inputValidation';
import RemoveRef from './components/removeRef';
import Person from './components/person';

Alpine.data('dropdown', Dropdown);
Alpine.data('inputValidation', InputValidation);
Alpine.data('person', Person);
Alpine.data('removeRef', RemoveRef);

Alpine.start();