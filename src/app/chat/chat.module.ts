import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {chatRoutes} from './chat.routes';
import {MainComponent} from './components/main/main.component';
import {NavComponent} from './components/nav/nav.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { MessageAreaComponent } from './components/message-area/message-area.component';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    TextAreaComponent,
    MessageAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(chatRoutes)
  ]
})
export class ChatModule {
}
