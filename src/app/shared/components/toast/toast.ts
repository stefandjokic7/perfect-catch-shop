import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast implements OnInit {
  toasts: any[] = [];

  constructor(private toastService: ToastService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(toast => {
      this.toasts.push(toast);

      // Auto-hide posle delay
      setTimeout(() => {
        this.toasts.shift(); // ukloni prvi toast
        this.cd.detectChanges();
      }, toast.delay || 1500);
    });
  }
}