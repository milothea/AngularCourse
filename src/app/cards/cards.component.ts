import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardsContent = [
    {
      title: 'Remember Angular basics',
      items: [
        'Project structure',
        'Components creation',
        'Styling components',
        'Components usage',
        'Data and event binding',
        'Directives'
      ]
    },
    {
      title: 'Build first easy app demo',
      items: [
        'Add header',
        'Add grid',
        'Add cards',
        'Add lists',
        'Add input + button'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
