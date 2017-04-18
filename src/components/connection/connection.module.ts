import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ConnectionComponent } from './connection';

@NgModule({
  declarations: [
    ConnectionComponent,
  ],
  imports: [
    IonicModule.forRoot(ConnectionComponent),
  ],
  exports: [
    ConnectionComponent
  ]
})
export class ConnectionModule {}
