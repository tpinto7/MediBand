import { Component } from '@angular/core'
import { TextfileConverterService } from './textfile-converter.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-profile-widget';
}
