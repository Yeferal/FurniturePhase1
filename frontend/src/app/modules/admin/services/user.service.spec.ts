import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { User } from 'src/app/core/models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: {get:jasmine.Spy, post:jasmine.Spy,delete:jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post','get','delete']);
    service = new UserService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get all the users', (done:DoneFn) => {
    const mockResult = {}
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.getAllUsers(0)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Filter a user',(done:DoneFn) => {
    const mockResult = {}
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.getFilterAllUsers(0,'',0)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Register a new user',(done:DoneFn)=>{
    const mockResult:User = {
      rol:0,
      username:"",
    }
    const data:User = {
      rol:0,
      username:"",
    }
    httpClientSpy.post.and.returnValue(of(mockResult));
    service.registerUser(data)
    .subscribe(result=>{
      expect(result).toEqual(mockResult)
      done();
    })
  })

  it('Remove an user',(done:DoneFn)=>{
    let res = new HttpResponse(
      {
        status: 200,
      }
    );

    httpClientSpy.delete.and.returnValue(of(res));
    service.deleteUser(1)
    .subscribe(result=>{
      expect(result).toEqual(res);
      done();
    })
  })

});
