import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { UnderConstructionComponent } from './section/under-construction/under-construction.component';
import { ContactComponent } from './section/contact/contact.component';
import { NavComponent } from './static/nav/nav.component';
import { HomeComponent } from './section/home/home.component';
import { AboutComponent } from './section/about/about.component';
import { ServicesComponent } from './section/services/services.component';
import { PortfolioComponent } from './section/portfolio/portfolio.component';
import { PricingComponent } from './section/pricing/pricing.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/projects/portfolio-page/portfolio-page.component';
import { DiscordBotPageComponent } from './pages/projects/discord-bot-page/discord-bot-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UnderConstructionComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    HomePageComponent,
    PortfolioPageComponent,
    DiscordBotPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
