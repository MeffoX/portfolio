import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  
  constructor(private scrollService:ScrollService){}


  scrollTo(section:string) {
    this.scrollService.scrollToElement(section);
}

  skills: {imageUrl: string; description:string} [] = [
    {imageUrl: 'assets/img/skills/angular.png', description: 'Angular'},
    {imageUrl: 'assets/img/skills/typescript.png', description: 'Typescript'},
    {imageUrl: 'assets/img/skills/javascript.png', description: 'Javascript'},
    {imageUrl: 'assets/img/skills/html.png', description: 'HTML'},
    {imageUrl: 'assets/img/skills/css.png', description: 'CSS'},
    {imageUrl: 'assets/img/skills/firebase.png', description: 'Firebase'},
    {imageUrl: 'assets/img/skills/git.png', description: 'Git'},
    {imageUrl: 'assets/img/skills/scrum.png', description: 'Scrum'},
    {imageUrl: 'assets/img/skills/api.png', description: 'Rest-Api'},
    {imageUrl: 'assets/img/skills/materiald.png', description: 'Material Design'}
  ]

}
