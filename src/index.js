import './style.css';

import { user } from './account';
import { formVisibility } from './todo'
import { taskGenerator } from './task'
import { initializeProjects } from './project'
import { storeName, storeProject, loadData } from './local'

document.addEventListener('DOMContentLoaded', loadData);

user();
formVisibility();
taskGenerator();
initializeProjects();