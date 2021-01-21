import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationModalManagementService } from '../services/notification-modal-management/notification-modal-management.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private notificationModalManagement: NotificationModalManagementService) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/upload-picture').then(result => {
        this.notificationModalManagement.showNotificationModal('Page not found');
      }
    );
  }

}
