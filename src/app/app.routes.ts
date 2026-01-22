import { Routes } from '@angular/router';
import { About } from './about/about';
import { Listcustomer } from './listcustomer/listcustomer';
import { Listcustomer2 } from './listcustomer2/listcustomer2';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { Listproduct } from './listproduct/listproduct';
import { Notfound } from './notfound/notfound';
import { Productdetail } from './productdetail/productdetail';

export const routes: Routes = [
    
    { path: 'gioi-thieu', component: About },
    { path: 'khach-hang-1', component: Listcustomer },
    { path: 'khach-hang-2', component: Listcustomer2 },
    { path: 'khach-hang-3', component: Listcustomer3 },
    {path: "san-pham-1", component: Listproduct},
    { path: "san-pham-1/:id", component: Productdetail },
    {path:"**", component:Notfound}
];