import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../UsersManagemnt/table-list/table-list.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { RoleComponent } from 'app/settings/role/role.component';
import { ServiceComponent } from 'app/settings/service/service.component';
import { DirectionComponent } from 'app/settings/direction/direction.component';
import { AuthGuard } from 'app/services/AuthGuard';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuard],  data: {
        Role: ['admin','user']
      } },
    { path: 'table-list',     component: TableListComponent, canActivate: [AuthGuard] ,  data: {
        Role: ['admin']
      } },
    {path:'settings' , component: SettingsComponent , canActivate: [AuthGuard] ,  data: {
        Role: ['admin']
      },
        children :[{
            path:'role', component: RoleComponent
        },
    {
        path: 'service' , component :ServiceComponent
    },
{
    path :'direction' , component : DirectionComponent
}]
    }
];
