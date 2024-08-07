import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {

  public nameLower: string = 'german'
  public nameUpper: string = 'GERMAN'
  public fullName: string = 'gErMaN'

  public customDate: Date = new Date();


}
