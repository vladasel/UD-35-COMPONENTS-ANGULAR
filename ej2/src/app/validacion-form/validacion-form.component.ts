import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-validacion-form',
  templateUrl: './validacion-form.component.html',
  styleUrls: ['./validacion-form.component.css']
})
export class ValidacionFormComponent implements OnInit {

  constructor() { }
  @Input() info: any;
  ngOnInit(): void {
  }

}
