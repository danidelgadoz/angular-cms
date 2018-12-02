import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Client } from '../models/client';
import {PagedData} from '../models/paged-data';
import {Page} from '../models/page';

@Injectable()
export class ClientService {
  private clientUrl = 'http://192.168.1.210:8080/api/v1/clients';

  constructor(private httpc: HttpClient) { }

  list(page: Page): Observable<PagedData<Client>> {
    const listUrl = `${this.clientUrl}/?page=${page.pageNumber + 1}&limit=${page.size}`;
    return this.httpc.get(listUrl)
    .pipe(
      map((res: any) => {
        const pagedData = new PagedData<Client>();
        const data = res.data;
        page.totalElements = data.total;
        page.totalPages = data.last_page;
        pagedData.page = page;
        pagedData.data = data.data;
        return pagedData;
      })
    );
  }

  show(id: number): Observable<Client> {
    return this.httpc.get(`${this.clientUrl}/${id}`)
      .pipe(
        map((res: any) => res.data)
      );
  }

  create(_client): Observable<Client> {
    return this.httpc
      .post(this.clientUrl, _client)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  update(_id, _client): Observable<Client> {
    return this.httpc
        .put(`${this.clientUrl}/${_id}`, _client)
        .pipe(
          map((res: any) => {
            return res.data;
          })
        );
  }

  delete(id: number): Observable<Client> {
    return this.httpc.delete(`${this.clientUrl}/${id}`)
      .pipe(
        map((res: any) => res.data)
      );
  }
}
