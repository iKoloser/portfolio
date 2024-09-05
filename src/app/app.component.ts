import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { inject } from "@vercel/analytics"

import { HttpClientModule } from '@angular/common/http';


inject();


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ProjectsComponent, FooterComponent, HttpClientModule, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [] 
})
export class AppComponent {
  title = 'website';
}

