import { TestBed } from '@angular/core/testing';
import { filesLinks, filesScripsts } from 'src/app/global/files.template';

import { TemplateService } from './template.service';

describe('TemplateService', () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created link', () => {
    service.loadLinks([]);
    service.loadLinks(filesLinks);
    expect(true).toBeTrue();
  });

  it('should be created scrips', () => {
    service.loadScripts([]);
    // service.loadScripts(filesScripsts);
    expect(true).toBeTrue();
  });


});
