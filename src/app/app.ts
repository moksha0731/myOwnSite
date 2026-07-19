import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Letter } from './components/letter/letter';

import { Welcome } from './components/welcome/welcome';
import { Hero } from './components/hero/hero';
import { Gallery } from './components/gallery/gallery';
import { Reasons } from './components/reasons/reasons';
import { Timeline } from './components/timeline/timeline';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Letter,Welcome,Hero,Gallery,Reasons,Timeline,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Happy Bithday Charani');
}
