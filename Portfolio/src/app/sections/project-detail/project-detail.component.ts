import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from "../../Classes/Project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;
  projects: Project[] = [
    {
      id: 1,
      title: 'Internship: Brutax App (Assign)',
      description: 'As part of my internship, I was tasked with rewriting the outdated Brutax App, originally built with PHP and React, into a modern solution using ASP.NET and Angular, with a PostgreSQL database. The app is designed for managing international tax refunds, featuring extensive functionality such as login, translation, and data management. It includes adding, editing, and viewing detailed information across multiple pages, each handling complex data requirements. The robust backend ensures reliable processing of large datasets, while the frontend provides a seamless user experience styled with Bootstrap and SCSS. The project utilized modern tools like Azure DevOps, Cypress for end-2-end testing, and Docker for efficient deployment.',
      images: ['assets/BRUT/BRUT-login.png', 'assets/BRUT/BRUT-main.png', 'assets/BRUT/BRUT-taalcodes.png', 'assets/BRUT/BRUT-edit.png', 'assets/BRUT/BRUT-add.png', 'assets/BRUT/BRUT-complete.png', 'assets/BRUT/BRUT-backend.png', 'assets/BRUT/BRUT-frontend.png'],
      technologies: ['C#', 'ASP.NET', 'Entity Framework core', 'Angular', 'Typescript', 'PostgreSQL', 'Cypress', 'Agile', 'Azure DevOps', 'Azure Repo', 'Azure Pipelines', 'Bootstrap', 'SCSS', 'Docker'],
    }, {
      id: 2,
      title: 'IT Project: Be Active App (Bewire)',
      description: 'A collaborative project developed with fellow students for the company Bewire. The Be Active App enables employees to log in, create events, and join events organized by their colleagues. The frontend is built with React and styled with Bootstrap, while the backend is powered by Java Spring Boot with Spring Security for authentication and a MySQL database for data storage. Fully Docker-ready, the app is designed for seamless deployment and scalability, providing a feature-rich platform to enhance employee engagement.',
      images: ['assets/BEW/BEW-login.png', 'assets/BEW/BEW-home1.png', 'assets/BEW/BEW-home2.png', 'assets/BEW/BEW-events.png', 'assets/BEW/BEW-add.png', 'assets/BEW/BEW-detail1.png', 'assets/BEW/BEW-detail2.png', 'assets/BEW/BEW-C4L1.png', 'assets/BEW/BEW-C4L2.png', 'assets/BEW/BEW-C4L3.png'],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Swagger UI', 'Hibernate', 'Docker', 'CSS', 'Bootstrap', 'Chakra UI', 'Agile', 'SonarQube', 'Confluence', 'Jira', 'Github'],
    }, {
      id: 3,
      title: 'Research Project: PXLDefender',
      description: 'The PXLDefender App is a research project developed collaboratively with classmates to streamline the evaluation process for internship presentations. The application features a secure Java Spring Boot backend with Spring Security and a user-friendly Vue.js frontend styled with Bootstrap. Data is managed with a MySQL database, and the app is fully containerized using Docker, with deployment facilitated by Nginx. In the app, internship coordinators can upload student data via a CSV file, schedule rooms, dates, and timings, and create accounts for room managers through automated email invitations with confirmation links. During evaluations, participants can join by scanning a QR code, take notes, and provide ratings. The room manager oversees the schedule, manages evaluations, and finalizes results. The app combines advanced functionality with an efficient design, making the evaluation process seamless and effective.',
      images: ['assets/PXLD/PXLD-login.png', 'assets/PXLD/PXLD-home.png', 'assets/PXLD/PXLD-home2.png', 'assets/PXLD/PXLD-csv.png', 'assets/PXLD/PXLD-room.png', 'assets/PXLD/PXLD-add.png', 'assets/PXLD/PXLD-detail.png', 'assets/PXLD/PXLD-evaluation.png'],
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'Vue.js', 'JavaScript', 'Bootstrap', 'CSS', 'Docker', 'Agile', 'Nginx', 'SonarQube', 'Confluence', 'Jira', 'Github'],
    }, {
      id: 4,
      title: 'Hr Management System',
      description: 'A comprehensive HR management system with a Maui-based frontend and a .NET microservices backend. The system streamlines employee management, team formation, and training scheduling. Key features include an employee wallet system, team sandwich ordering using wallet coins, and HR-managed training sessions. The backend utilizes microservices (HumanResources, DevOps, Wallet, Sandwich, and Training) with RabbitMQ for communication and OpenID for secure authentication. Fully containerized with Docker for seamless deployment and integration.',
      images: ['assets/HR/HR-Architecture.png', 'assets/HR/HR-Maui.png', 'assets/HR/HR-Docker.png', 'assets/HR/HR-Backend.png'],
      technologies: ['C#', 'ASP.NET', 'Entity Framework core', 'Maui', 'Microservices', 'Microsoft SQL Server', 'RabbitMQ', 'OpenID', 'Swagger UI', 'Docker', 'Github'],
    }, {
      id: 5,
      title: 'Online Webshop',
      description: 'A e-commerce platform with a Angular frontend and a scalable Spring Cloud backend. The system supports two user roles: admins and regular users. Admins can manage the store by adding, editing, and removing products, as well as viewing logs for system activities. Regular users can log in, browse products, add items to a shopping cart, and place orders. Built with a microservices architecture using Spring Boot and RabbitMQ for seamless communication, the platform ensures high performance and scalability. Swagger UI is integrated for API documentation, and the entire application is containerized with Docker for efficient deployment.',
      images: ['assets/SHOP/SHOP-architecture.png', 'assets/SHOP/SHOP-admin-dashboard.png', 'assets/SHOP/SHOP-admin-logs.png', 'assets/SHOP/SHOP-user-dashboard.png', 'assets/SHOP/SHOP-user-shoppingcart.png', 'assets/SHOP/SHOP-docker.png', 'assets/SHOP/SHOP-backend.png'],
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Angular', 'TypeScript', 'Microservices', 'MySQL', 'RabbitMQ', 'CSS', 'Swagger UI', 'Hibernate', 'Docker', 'Github'],
    }, {
      id: 6,
      title: 'Roller Coaster Tycoon CLI App',
      description: 'The Roller Coaster Tycoon CLI App is a command-line game where players create and manage their own theme park. Built with Java, it features a dynamic backend that uses threads to simulate visitor behavior. Players can add attractions like roller coasters, shops, ATMs, and toilets, while managing park operations through commands. Visitors make decisions based on their state, such as hunger or thirst, and queue for attractions or facilities. The park operates in cycles, closing after a set period, with earnings used to improve the park. The game supports saving and loading parks using serialization, offering a robust and immersive simulation experience.',
      images: ['assets/RCT/RCT-1.png', 'assets/RCT/RCT-2.png', 'assets/RCT/RCT-code.png'],
      technologies: ['Java', 'Streams', 'Threads', 'Serializable', 'CLI', 'Github'],
    },  {
      id: 7,
      title: 'GameRator Mobile App',
      description: 'The GameRator App is an Android application built with Java and Android Studio. It features user authentication with Firebase for login and registration. The app fetches popular games via API calls, displaying them in a list view with detailed pages where users can add ratings. Additionally, it includes a profile page where users can view their information and toggle dark mode for a personalized experience. The app is structured with Gradle and uses XML for UI design, offering a sleek and responsive interface.',
      images: ['assets/GAM/GAM-login.png', 'assets/GAM/GAM-main.png', 'assets/GAM/GAM-main2.png', 'assets/GAM/GAM-detail.png', 'assets/GAM/GAM-profile.png', 'assets/GAM/GAM-profile2.png'],
      technologies: ['Java', 'Android Studio', 'FireBase', 'Gradle', 'XML', 'Github'],
    }, {
      id: 8,
      title: 'Miniputter Web App',
      description: 'The Miniputter Web App is a lightweight application designed to track hole counts for a game of minigolf, with a focus on utilizing design patterns. The frontend is built with Angular and styled using Bootstrap, while the backend is powered by ASP.NET. Key design patterns implemented include the Factory Pattern for handling different game types (varying numbers of holes) and the State Pattern for managing the game\'s lifecycle (starting, ongoing, or finished). This project demonstrates clean, scalable code architecture and effective use of design principles in a practical scenario.',
      images: ['assets/MINI/MINI-home.png', 'assets/MINI/MINI-game.png', 'assets/MINI/MINI-game2.png', 'assets/MINI/MINI-backend.png', 'assets/MINI/MINI-state.png', 'assets/MINI/MINI-factory.png'],
      technologies: ['C#', 'ASP.NET', 'Design Patterns', 'Angular', 'TypeScript', 'Azure Repo', 'Azure Pipelines', 'Bootstrap', 'CSS', 'Github'],
    }, {
      id: 9,
      title: 'Simple School Evaluation System',
      description: 'A school evaluation system where teachers can manage courses, add students, and record evaluations. Students can log in to view their evaluations for each course. Built with a Vue.js frontend styled using Bootstrap and a secure Express.js backend connected to a MongoDB database running on Docker.',
      images: ['assets/EXP/EXP-teacher.png', 'assets/EXP/EXP-student.png'],
      technologies: ['Vue.js', 'Express.js', 'Javascript', 'MongoDB', 'Mongoose', 'CSS', 'Bootstrap', 'Docker', 'Github'],
    },
  ]

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find((proj) => proj.id === id) as Project;
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
