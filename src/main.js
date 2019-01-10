import './main.scss';
import './app/app';
import mainHtmlContent from './main.html';
import run from './app/app';
import {AlertService} from "./app/alert.service";
import {ComponentService} from "./app/components.service";

document.body.innerHTML = mainHtmlContent;

// initialize services after dom is ready
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
