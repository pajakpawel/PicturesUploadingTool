import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationModalManagementService {
  private displayNotificationModal = new BehaviorSubject(false);
  private notificationMessage = new BehaviorSubject('Blank');

  constructor() {
  }

  observeNotificationModalDisplay(): Observable<boolean> {
    return this.displayNotificationModal.asObservable();
  }

  observeNotificationMessage(): Observable<string> {
    return this.notificationMessage.asObservable();
  }

  showNotificationModal(message: string): void {
    this.notificationMessage.next(message);
    this.displayNotificationModal.next(true);
  }

  closeNotificationModal(): void {
    this.notificationMessage.next('');
    this.displayNotificationModal.next(false);
  }
}
