import {Routes} from '@angular/router';
import { CountryPage } from './pages/country-page/country-page';

export const countryRoutes :Routes = [

    {
        path: '',
        component: CountryPage,
        children: [
            {
                path: 'by-capital-page',
                loadComponent: () => import('./pages/by-capital-page/by-capital-page').then( m => m.ByCapitalPage ) 
            },
            {
                path: 'by-country-page',
                loadComponent: () => import('./pages/by-country-page/by-country-page').then( m => m.ByCountryPage )
            },
            {
                path: 'by-region-page',
                loadComponent: () => import('./pages/by-region-page/by-region-page').then( m => m.ByRegionPage)
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }

];
export default countryRoutes