import {Component} from '@angular/core';
import {Project} from "../../Classes/Project";
import {Router} from "@angular/router";
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [ ]

  constructor(private router: Router, private projectService: ProjectService) {
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/projects', id]);
  }

  currentProjects: Project[] = [];
  startIndex: number = 0;
  animate: boolean = false;
  intervalId: any;

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.updateCurrentProjects();
    this.startAutoRotation();
  }

  updateCurrentProjects(): void {
    this.animate = false; // Reset animation
    setTimeout(() => {
      this.currentProjects = this.projects.slice(this.startIndex, this.startIndex + 3);
      this.animate = true; // Trigger animation
    }, 50); // Slight delay to allow animation reset
  }

  showNextProjects(): void {
    this.startIndex += 3;

    // If the startIndex exceeds the project length, reset to 0
    if (this.startIndex >= this.projects.length) {
      this.startIndex = 0;
    }

    this.updateCurrentProjects();
  }

  showPreviousProjects(): void {
    this.startIndex -= 3;

    // If the startIndex goes below 0, set it to the start of the last group
    if (this.startIndex < 0) {
      this.startIndex = Math.max(this.projects.length - (this.projects.length % 3 || 3), 0);
    }

    this.updateCurrentProjects();
  }

  startAutoRotation(): void {
    this.intervalId = setInterval(() => this.showNextProjects(), 5000);
  }

  stopAutoRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onHoverStart(): void {
    this.stopAutoRotation();
  }

  onHoverEnd(): void {
    this.startAutoRotation();
  }

  onSwipeLeft(): void {
    this.showNextProjects();
  }

  onSwipeRight(): void {
    this.showPreviousProjects();
  }
}
