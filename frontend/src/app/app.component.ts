import { Component } from '@angular/core';
import { filesScripsts, filesLinks } from 'src/app/global/files.template';
import { TemplateService } from "src/app/shared/service/template.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';


  constructor(private _templateService: TemplateService) {
    _templateService.loadScripts(filesScripsts);
    _templateService.loadLinks(filesLinks);
  }
}
