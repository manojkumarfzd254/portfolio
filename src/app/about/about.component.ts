import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    dob : "25 April 1998",
    age : 25,
    website : "www.manojsingh.com",
    degree : "BCA",
    phone : "+91 9045912548",
    email : "manojkumarfzd254@gmail.com",
    city : "Noida, India",
    freelance : "Available"
  }
}
