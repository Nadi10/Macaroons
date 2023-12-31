import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'macaroons';
  public advantages = [
    {
      number: '1',
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      number: '2',
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      number: '3',
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      number: '4',
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о надлежащем соответствии',
    },
  ];

  public goods: ProductType[] = [
    {
      image: 'good1.png',
      title: 'Макарун с малиной',
      amount: '1 шт.',
      count: '1,70 руб.'
    },
    {
      image: 'good2.png',
      title: 'Макарун с манго',
      amount: '1 шт.',
      count: '1,70 руб.'
    },
    {
      image: 'good3.png',
      title: 'Макарун с ванилью',
      amount: '1 шт.',
      count: '1,70 руб.'
    },
    {
      image: 'good4.png',
      title: 'Макарун с фисташками',
      amount: '1 шт.',
      count: '1,70 руб.'
    },
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToOrd(good: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = good.title.toUpperCase();
  }
}
