import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Post } from '../post';

@NgModule({
  declarations: [
    Post,
  ],
  imports: [
    IonicModule.forRoot(Post),
  ],
  exports: [
    Post
  ]
})
export class PostModule {}
