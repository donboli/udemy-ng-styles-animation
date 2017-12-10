import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import { markedTrigger, newProjectTrigger, slideStateTrigger } from './animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    newProjectTrigger,
    slideStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  displayedProjects = new Array<Project>();
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          this.displayedProjects.push(prj[0]);
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.push(project);
  }

  onItemAnimated(animationEvent: AnimationEvent, lastPrjId: number) {
    if (animationEvent.fromState !== 'void') {
      return;
    }
    if (this.projects.length > lastPrjId + 1) {
      this.displayedProjects.push(this.projects[lastPrjId + 1]);
    }
  }
}
