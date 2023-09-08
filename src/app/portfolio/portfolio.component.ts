import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    {
      picture: 'assets/img/projects/join.png',
      headline: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: '',
      livetest: ''
    },
    {
      picture: 'assets/img/projects/elpolloloco.png',
      headline: 'El-Pollo-Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach.',
      github: '',
      livetest: ''
    },
    {
      picture: 'assets/img/projects/pokedex.png',
      headline: 'Ring of Fire',
      technologies: 'Angular | Firebase | Material Design',
      description: 'A simple Card-Game created with Angular and Firebase',
      github: '',
      livetest: ''
    },
    {
      picture: 'assets/img/projects/portfolio.png',
      headline: 'My Portfolio',
      technologies: 'Angular | HTML | SCSS',
      description: 'My personal Website created with Angular and SCSS.',
      github: '',
      livetest: ''
    }
  ]

}
