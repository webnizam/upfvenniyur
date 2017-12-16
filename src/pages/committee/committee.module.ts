import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommitteePage } from './committee';

@NgModule({
  declarations: [
    CommitteePage,
  ],
  imports: [
    IonicPageModule.forChild(CommitteePage),
  ],
})
export class CommitteePageModule {}
