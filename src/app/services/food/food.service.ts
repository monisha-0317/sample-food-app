import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food';
import { Tag } from 'src/app/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }


  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'chips',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'pan cake',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food3.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'fish',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food4.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'vegetables',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food5.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'noodles',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food6.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'pasta',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
