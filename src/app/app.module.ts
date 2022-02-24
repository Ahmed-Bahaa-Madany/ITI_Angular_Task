import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './task1/header/header.component';
import { AboutComponent } from './task1/about/about.component';
import { SkillsComponent } from './task1/skills/skills.component';
import { PortfolioComponent } from './task1/portfolio/portfolio.component';
import { FooterComponent } from './task1/footer/footer.component';
import { T2HeaderComponent } from './task2/t2-header/t2-header.component';
import { T2CarouselComponent } from './task2/t2-carousel/t2-carousel.component';
import { T2NavbarComponent } from './task2/t2-navbar/t2-navbar.component';
import { T2ContentComponent } from './task2/t2-content/t2-content.component';
import { T2FooterComponent } from './task2/t2-footer/t2-footer.component';
import { T3NavbarComponent } from './task3/t3-navbar/t3-navbar.component';
import { T3ContentComponent } from './task3/t3-content/t3-content.component';
import { T3TodoComponent } from './task3/t3-todo/t3-todo.component';
import { ProductCardComponent } from './task3/t3-content/product-card/product-card.component';
import { PipecountPipe } from './pipecount.pipe';
import { Header3Component } from './task3/t3-todo/header3/header3.component';
import { Body3Component } from './task3/t3-todo/body3/body3.component';
import { LoginComponent } from './task4/login/login.component';
import { RegComponent } from './task4/reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    T2HeaderComponent,
    T2CarouselComponent,
    T2NavbarComponent,
    T2ContentComponent,
    T2FooterComponent,
    T3NavbarComponent,
    T3ContentComponent,
    T3TodoComponent,
    ProductCardComponent,
    PipecountPipe,
    Header3Component,
    Body3Component,
    LoginComponent,
    RegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
