import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleListComponent} from "./people-list/people-list.component";
import {CreatePeopleComponent} from "./create-people/create-people.component";
import {UpdatePeopleComponent} from "./update-people/update-people.component";
import {PeopleDetailsComponent} from "./people-details/people-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people-list', component: PeopleListComponent },
  { path: 'people-create', component: CreatePeopleComponent },
  { path: 'people-create', component: UpdatePeopleComponent },
  { path: 'people-details', component: PeopleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
