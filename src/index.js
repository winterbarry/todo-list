import './style.css';

import { user } from './account';
import { taskGenerator } from './task'
import { initializeProjects } from './project'
import { loadData } from './local'
import { formVisibility } from './taskView'

document.addEventListener('DOMContentLoaded', loadData);

formVisibility();
user();
taskGenerator();
initializeProjects();