```html
<p [ngPlural]="items.length">
  <ng-template ngPluralCase="=0">No items on the cart</ng-template>
  <ng-template ngPluralCase="=1">One item added to the cart</ng-template>
  <ng-template ngPluralCase="other">{{items.length}} added to the cart</ng-template>
</p>
```
