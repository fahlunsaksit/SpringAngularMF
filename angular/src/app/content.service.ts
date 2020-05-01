import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUrl = 'http://localhost:8080/api/content';

  constructor(private http: HttpClient) { }

  getContent(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createContent(content: Object): Observable<Content> {
    return this.http.post<Content>(`${this.baseUrl}/addContent`, content);
  }

  updateContent(id: number, value: any): Observable<Content> {
    return this.http.put<Content>(`${this.baseUrl}/${id}`, value);
  }

  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
}
