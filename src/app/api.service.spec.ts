import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return short link', async ()=> {
    const url = 'https://www.google.com';
    const api = new ApiService()
    const result = await api.getShortLinks(url)
    const expectedResult = 'https://shorturl.ac/7arzr'
    expect(result).toBe(expectedResult)
  })
});
