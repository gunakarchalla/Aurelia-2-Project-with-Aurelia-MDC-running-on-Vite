import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { AllConfiguration } from '@aurelia-mdc-web/all';
import sass from 'sass';

Aurelia.register(AllConfiguration).app(MyApp).start();
