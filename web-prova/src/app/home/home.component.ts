import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  booksList = []
  
  filtro = this.filtro;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if(this.filtro == undefined){
      this.filtro = "Harrypotter"
    }
    this.dataService.sendGetBook(this.filtro).subscribe((data: any[])=>{
      console.log(data);
      this.booksList = data.items
      console.log(this.booksList);
    })  
  }

  sendBook(){
    this.dataService.sendGetBook(this.filtro).subscribe((data: any[])=>{
      console.log(data);
      this.booksList = data.items
      console.log(this.booksList);
    })  
  }
  save(booklist){
    console.log("alo")
    let book = {
      book_title: "",
      book_description: "",
      id_google: "",
    }

    book.book_title = booklist.volumeInfo.title
    book.book_description = booklist.volumeInfo.description
    book.id_google = booklist.volumeInfo.imageLinks.thumbnail
    
    this.dataService.postBook("FavoriteBooks",book);
    alert("Livro adicionado a sua lista de favoritos.");
  }


}
