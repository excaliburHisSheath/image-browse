import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GalleryPage} from '../gallery/gallery';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  siteInput: string = 'safebooru.org';

  constructor(private nav: NavController) {}

  submit() {
    // TODO: Validate url input before sending it to gallery page.
    this.nav.push(GalleryPage, {
      'hostname': this.siteInput,
      'options': {},
    });
  }

  collectState() : any {
    return {
      siteInput: this.siteInput,
    };
  }
}
