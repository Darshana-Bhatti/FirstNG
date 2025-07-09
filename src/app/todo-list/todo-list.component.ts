import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    task: any = {
    name: '',
    description: '',
    priority: '',
    startDate: '',
    endDate: '',
    status: 'Pending'
  };

  taskList: any[] = [];
  isEditMode: boolean = false;
  editIndex: number = -1;

  today: string = '';
  minEndDate: string = '';

  ngOnInit() {
    this.setTodayDate();
  }

  setTodayDate() {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
    this.minEndDate = this.today;
  }

  onStartDateChange(event: any) {
    const selectedDate = event.target.value;
    this.minEndDate = selectedDate;
    // If endDate is less than new startDate, reset endDate
    if (this.task.endDate && this.task.endDate < selectedDate) {
      this.task.endDate = '';
    }
  }

  addTask() {
    if (this.task.name && this.task.priority && this.task.startDate && this.task.endDate) {
      const newTask = { ...this.task };
      this.taskList.push(newTask);
      this.resetForm();
    }
  }

  editTask(index: number) {
    this.task = { ...this.taskList[index] };
    this.isEditMode = true;
    this.editIndex = index;
    this.minEndDate = this.task.startDate;
  }

  updateTask() {
    if (this.editIndex > -1) {
      this.taskList[this.editIndex] = { ...this.task };
      this.resetForm();
    }
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
    this.resetForm();
  }

  toggleStatus(index: number) {
    this.taskList[index].status =
      this.taskList[index].status === 'Pending' ? 'Completed' : 'Pending';
  }

  resetForm() {
    this.task = {
      name: '',
      description: '',
      priority: '',
      startDate: '',
      endDate: '',
      status: 'Pending'
    };
    this.isEditMode = false;
    this.editIndex = -1;
    this.setTodayDate();
  }
}
