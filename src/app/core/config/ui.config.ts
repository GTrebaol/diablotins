import {InjectionToken} from "@angular/core";
import {MenuEntry} from './ui.models'

export let UI_CONFIG = new InjectionToken('app.config');

export const UIConfig = {
  routes: {
    accueil: '/accueil',
    col_hiver: '/col-hiver',
    contact: '/contact',
    error_404: '/404'
  },
  endpoints: {},
  menuEntries: [
    new MenuEntry('/accueil', 'Accueil'),
    new MenuEntry('/col-hiver', 'Collection Hiver'),
    new MenuEntry('/contact', 'Contact')]
};
