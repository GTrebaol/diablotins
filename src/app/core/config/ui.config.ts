import {InjectionToken} from "@angular/core";

export let UI_CONFIG = new InjectionToken('app.config');

export const UIConfig = {
  routes: {
    accueil: '/accueil',
    col_hiver: '/col-hiver',
    contact: '/contact',
    error_404: '/404'
  },
  endpoints: {}
};
