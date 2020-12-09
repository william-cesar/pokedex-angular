import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number = 0;
  limit: number = 8;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService
      .getPokemons(this.limit, this.page * this.limit - this.limit)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((pokemon: any) => {
          this.dataService
            .getExtraData(pokemon.name)
            .subscribe((uniquePokemon: any) => {
              this.pokemons.push(uniquePokemon);
            });
        });
      });
  }
}
