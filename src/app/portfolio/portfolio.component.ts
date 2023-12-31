import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    {
      picture: 'assets/img/projects/join_board.png',
      number: '01/04,',
      headline: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/MeffoX/Join',
      livetest: 'https://join.stefanroth.dev/index.html'
    },
    {
      picture: 'assets/img/projects/elpolloloco.png',
      number: '02/04,',
      headline: 'El-Pollo-Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach.',
      github: 'https://github.com/MeffoX/el_pollo_locco',
      livetest: 'https://el-pollo-loco.stefanroth.dev/index.html'
    },
    {
      picture: 'assets/img/projects/ringoffire.png',
      number: '03/04,',
      headline: 'Ring of Fire',
      technologies: 'Angular | Firebase | Material Design',
      description: 'A simple Card-Game created with Angular and Firebase',
      github: 'https://github.com/MeffoX/ringoffire',
      livetest: 'https://ring-of-fire-c9dda.web.app/'
    },
    {
      picture: 'assets/img/projects/dabubble.png',
      number: '04/04,',
      headline: 'DA-Bubble',
      technologies: 'Angular | Typescript | Firebase | SCSS',
      description: 'Chat application inspired by Slack. Register, write messages or add new channels in the workspace',
      github: 'https://github.com/MeffoX/portfolio',
      livetest: 'https://dabubble.stefanroth.dev/'
    }
  ]

}
