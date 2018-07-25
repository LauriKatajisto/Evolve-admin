import { Component, OnInit } from '@angular/core';

import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-listworkouts',
  templateUrl: './listworkouts.component.html',
  styleUrls: ['./listworkouts.component.css']
})
export class ListworkoutsComponent implements OnInit {
  workouts: Workout[];
  displayedColumns: string[] = ['id', 'name', 'tags'];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts().subscribe(workouts => this.workouts = workouts);
  }

}
