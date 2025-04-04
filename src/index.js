import './style.css';

import { user } from './account';
import { formVisibility } from './todo'
import { taskGenerator } from './task'
import { initializeProjects } from './project'
import { storeData, loadData } from './local'

user();
document.addEventListener('DOMContentLoaded', loadData);
storeData();

formVisibility();
taskGenerator();
initializeProjects();