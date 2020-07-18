import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:5001/api/";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    })
  }

  public sendGetFavoriteBooks(url){
    return this.httpClient.get(this.REST_API_SERVER + url);
  }

  public sendGetBook(filtro){
    return this.httpClient.get("https://www.googleapis.com/books/v1/volumes?q="+filtro);
  }

  public postBook(url,book){
    return this.httpClient.post(this.REST_API_SERVER + url, book).subscribe({
      error: error => console.error('There was an error!', error)
  });
  }
  
  public deleteBook(url,book){
    return this.httpClient.delete(this.REST_API_SERVER + url + book.id, this.httpOptions).subscribe({
      error: error => console.error('There was an error!', error)
  });
  }
}
