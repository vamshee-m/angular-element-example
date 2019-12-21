import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sample-element',
  template: `
    <ng-template #noUrl>
      {{ name }}
    </ng-template>

    <span [style.font-size.em]="size">
      App created to demonstrate
      <ng-container *ngIf="url && url.length > 0; else noUrl">
        <a [attr.href]="url" target="_blank">{{ name }}</a>
      </ng-container>
      <sample-heart></sample-heart>
    </span>
  `,
  styleUrls: ['./sample-element.component.css']
})
export class SampleElementComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public url: string;

  @Input()
  public color: string = 'red';

  @Input()
  public size: number = 1;

  ngOnInit() {
    if(!this.name || this.name.length === 0) {
      console.error(`Name attribute must be provided!`);
    }
  }
}