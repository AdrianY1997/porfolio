import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/projects/portfolio-page/portfolio-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DiscordBotPageComponent } from './pages/projects/discord-bot-page/discord-bot-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'project/portfolio', component: PortfolioPageComponent },
  {path: 'project/uraraka-ochaco-discord-bot', component: DiscordBotPageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
