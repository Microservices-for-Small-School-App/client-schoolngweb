import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    CommonModule,
    RouterLinkWithHref,
  ],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

}
