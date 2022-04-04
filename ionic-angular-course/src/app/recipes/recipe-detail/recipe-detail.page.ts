import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';

import { RecipesService } from './../recipes.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {

    loadedRecipe: Recipe = {
        id: 0,
        title: '',
        ingredients: [],
        imageUrl: ''
    };

    subscription: Subscription = new Subscription();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private recipesService: RecipesService,
        private alertCtrl: AlertController
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
                if (id == null || id === '') {
                    return;
                }
                this.loadedRecipe = this.recipesService.getRecipe(parseInt(id, 10));
            }
        );
    }

    onDeleteRecipe() {
        this.alertCtrl.create({
            animated: true,
            buttons: [{
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Delete',
                handler: () => {
                    this.recipesService.deleteRecipe(this.loadedRecipe.id);
                    this.router.navigate(['/recipes']);
                }
            }],
            header: 'Are you sure?',
            message: 'Do you really want to delete the recipe?'
        }).then(alertElement => {
            alertElement.present();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
