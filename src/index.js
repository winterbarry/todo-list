import './style.css';

import { user } from './account';
import { formVisibility } from './todo'
import { taskGenerator } from './task'
import { projectSwitcher, addNewProject } from './project'

user();
formVisibility();
taskGenerator();
projectSwitcher();
addNewProject();