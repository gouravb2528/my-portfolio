import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills'; 
import { Projects } from './projects/projects';
import { Education } from './education/education';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Education,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
