import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { TargetIndustryComponent } from './target-industry/target-industry.component';
import { WhyBytescareComponent } from './why-bytescare/why-bytescare.component';
import { ProductsComponent } from './products/products.component';
import { UspClientComponent } from './usp-client/usp-client.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroPageComponent,
    TargetIndustryComponent,
    WhyBytescareComponent,
    ProductsComponent,
    UspClientComponent,
    TestimonialsComponent,
    FooterInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
