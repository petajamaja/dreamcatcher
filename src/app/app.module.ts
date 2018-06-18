import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data.service';
import { MyDreamsComponent } from './components/my-dreams/my-dreams.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RadarComponent } from './components/radar/radar.component';
import { DreamCreatorComponent } from './components/dream-creator/dream-creator.component';
import { DreamCreatorMiniComponent} from './components/dream-creator/dream-creator-mini.component'
import { QuotesMiniComponent } from './components/quotes/quotes-mini.component';
import { MyDreamsMiniComponent } from './components/my-dreams/my-dreams-mini.component';
import { RadarMiniComponent } from './components/radar/radar-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MyDreamsComponent,
    MyDreamsMiniComponent,
    QuotesComponent,
    QuotesMiniComponent,
    ChatbotComponent,
    RadarComponent,
    RadarMiniComponent,
    DreamCreatorComponent,
    DreamCreatorMiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
