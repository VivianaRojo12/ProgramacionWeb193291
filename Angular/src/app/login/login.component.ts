import { Component} from '@angular/core';
import { ServiceService} from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private serviceService : ServiceService) { }

  Google() {
    this.serviceService.getAuthGoogle();
  }
}
