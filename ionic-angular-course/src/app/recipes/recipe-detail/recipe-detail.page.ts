import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';

import { RecipesService } from './../recipes.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

    loadedRecipe: Recipe = {
        id: 0,
        title: '',
        ingredients: [],
        imageUrl: ''
    };

    subscription: Subscription = new Subscription();

    constructor(
        private route: ActivatedRoute,
        private recipesService: RecipesService
    ) {
    }

    ngOnInit() {
        // console.log('paramMap: ', this.route.paramMap);
        // console.log('params: ', this.route.params);

        this.subscription = this.route.params.subscribe(
            (params: any) => {
                // Usando brackets notation:
                // const id: string = params['recipeId'];
                // O ES Lint gosta da dot notation:
                const id: string = params.recipeId;
                if (id == null || id === ''){
                    return;
                }
                this.loadedRecipe = this.recipesService.getRecipe(parseInt(id, 10));
            }
        );
    }
}
