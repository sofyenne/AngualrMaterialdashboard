import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { SettingsComponent } from 'app/settings/settings.component';
import { RoleComponent } from 'app/settings/role/role.component';
import { ServiceComponent } from 'app/settings/service/service.component';
import { DirectionComponent } from 'app/settings/direction/direction.component';
import { RoleModalComponent } from 'app/settings/role/role-modal/role-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TableListComponent } from 'app/UsersManagemnt/table-list/table-list.component';
import { DirectionModalComponent } from 'app/settings/direction/direction-modal/direction-modal.component';
import { ServiceModalComponent } from 'app/settings/service/service-modal/service-modal.component';
import { UserModalComponent } from 'app/UsersManagemnt/user-modal/user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule
    


    
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    SettingsComponent,
    RoleComponent,
    ServiceComponent,
    DirectionComponent,
    RoleModalComponent,
    DirectionModalComponent,
    ServiceModalComponent,
    UserModalComponent
  ]
})

export class AdminLayoutModule {}
