import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteList = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetFavoriteBooks("FavoriteBooks").subscribe((data: any[])=>{
      console.log(data);
      this.favoriteList = data
    });
  }

  delete(booklist){
    this.dataService.deleteBook("FavoriteBooks/",booklist);
    alert("Livro removido dos favoritos.");
    document.location.reload(true);
  }

}
