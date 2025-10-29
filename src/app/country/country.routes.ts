import {Routes} from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';

export const countryRoutes :Routes = [

    {
        path: '',
        component: ByCapitalPage,
    },
    {
        //path: 'country',
        //loadChildren: ()=> import('./country/country.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }

];
export default countryRoutes