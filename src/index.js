import './style.css';

import { user } from './account';
import { formVisibility } from './todo'
import { taskGenerator } from './task'
import { initializeProjects } from './project'

user();
formVisibility();
taskGenerator();
initializeProjects();