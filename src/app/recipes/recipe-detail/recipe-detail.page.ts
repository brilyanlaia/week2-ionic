import { Component, OnInit } from '@angular/core';
import { RecipesService} from '../recipes.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  constructor(private rs:RecipesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.rs.getRecipe(id);
    });
  }

}
