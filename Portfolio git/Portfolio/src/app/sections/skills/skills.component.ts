import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedTab: string = 'TECH';

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  isActiveTab(tab: string): boolean {
    return this.selectedTab === tab;
  }
}
