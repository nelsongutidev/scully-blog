```javascript
@Component({
  selector: "keyvalue-pipe",
  template: `<span>
    <p>Object</p>
    <div *ngFor="let item of object | keyvalue">
      {{ item.key }}:{{ item.value }}
    </div>
    <p>Map</p>
    <div *ngFor="let item of map | keyvalue">
      {{ item.key }}:{{ item.value }}
    </div>
  </span>`,
})
export class KeyValuePipeComponent {
  object: { [key: number]: string } = { 2: "foo", 1: "bar" };
  map = new Map([
    [2, "foo"],
    [1, "bar"],
  ]);
}
```
