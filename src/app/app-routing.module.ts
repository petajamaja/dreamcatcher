import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'; 
import { MyDreamsComponent } from './components/my-dreams/my-dreams.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dreams',
    component: MyDreamsComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: 'chatbot',
    component: ChatbotComponent
  },
  {
    path: 'radar',
    component: RadarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
