import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  constructor(private commonService: CommonService) {}
  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    this.commonService.addUser(form.value).subscribe((data) => {
      console.log('Data:', data);
    });
  }
}
