import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Piece } from 'src/app/core/models/piece';
import { SharedModule } from 'src/app/shared/shared.module';

import { PieceServiceService } from './piece-service.service';

describe('PieceServiceService', () => {
  let service: PieceServiceService;
  let httpClientSpy: {get:jasmine.Spy, post:jasmine.Spy,delete:jasmine.Spy,put:jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post','get','delete','put']);
    service = new PieceServiceService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get a piece',(done:DoneFn) => {
    const mockResult:Piece = {id:1, name: ''}
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.getPieceById(1)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Filter piece by id',(done:DoneFn) => {
    const mockResult:Piece = {id:1, name: ''}
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.getPiece(1)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Register a new piece',(done:DoneFn) => {
    const mockResult:Piece = {id:1, name: ''}
    const data:Piece = {id:1, name:''}
    httpClientSpy.post.and.returnValue(of(mockResult));
    service.savePiece(data)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Update a piece',(done:DoneFn) => {
    const mockResult:Piece = {id:1, name: ''}
    const data:Piece = {id:1, name:''}
    httpClientSpy.put.and.returnValue(of(mockResult));
    service.saveUpdate(data)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Add in stock for a piece',(done:DoneFn) => {
    const mockResult={

    };
    const data= {
        id:0,
        stock:2,
        cost:2
    }
    httpClientSpy.post.and.returnValue(of(mockResult));
    service.postProvidePiece(data)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Remove from stock',(done:DoneFn) => {
    const mockResult={

    };
    const data= {
        id:0,
        amount:2
    }
    httpClientSpy.post.and.returnValue(of(mockResult));
    service.postRemovePiece(data)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })
});
