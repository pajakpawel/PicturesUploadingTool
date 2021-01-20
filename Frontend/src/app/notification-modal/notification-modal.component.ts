import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationModalManagementService } from '../services/notification-modal-management/notification-modal-management.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.css']
})
export class NotificationModalComponent implements OnInit {
  displayNotificationModal: Observable<boolean> = of(false);
  notificationMessage: Observable<string> = of('');

  constructor(private notificationModalManagement: NotificationModalManagementService) {
  }

  ngOnInit(): void {
    this.displayNotificationModal = this.notificationModalManagement.observeNotificationModalDisplay();
    this.notificationMessage = this.notificationModalManagement.observeNotificationMessage();
  }

  closeNotificationModal(): void {
    this.notificationModalManagement.closeNotificationModal();
  }

}
