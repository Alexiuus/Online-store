import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  characters: Character[] | undefined;
  charactersCopy: Character[] | undefined;

  apiUrl: String = "https://rickandmortyapi.com/api/character/?page=19";

  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData() {
    this.http.get<any>(this.apiUrl + "/characters")
    .subscribe((res) => {
      console.log(res);
      this.characters = res.results.map(
        ({id, name, status, image, species}: Character) => {
          return {
            id: id,
            name: name,
            image: image,
            status: status,
            species: species,
          };
        });

      this.charactersCopy = this.characters;
    });
  }

  filter(e: any) {
    const search: string = e.target.value;
     this.characters = this.charactersCopy?.filter(({ name }: Character) => {
      return name.toLowerCase().includes(search.toLowerCase());
     });
  }
}