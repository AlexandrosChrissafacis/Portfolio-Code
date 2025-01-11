import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from "../../Classes/Project";
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;

  constructor(private route: ActivatedRoute,private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
  }

  navigateToMain(fragment: string) {
    this.router.navigate(['/']).then(() => {
      this.router.navigate([], {fragment});
    });
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    setTimeout(() => {
      if (this.menuOpen) {
        this.menuOpen = false;
      }
    }, 3000);
  }

  currentSlide: number = 0;
  isModalOpen: boolean = false;
  modalImage: string | null = null;

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.project.images.length) % this.project.images.length;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.project.images.length;
  }

  openModal(): void {
    this.modalImage = this.project.images[this.currentSlide];
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalImage = null;
  }
}
