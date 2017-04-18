import { Component } from '@angular/core';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';
import { PostPage } from '../post/post';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PostPage;

  constructor() {

  }
}
