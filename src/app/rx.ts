import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


Observable.create(function (Observer: any) {
  Observer.next(1);
  Observer.next(2);
  Observer.next(3);
  Observer.next(10);
  Observer.next(20);
  Observer.next(30);
  Observer.complete();
})
  .map(x => x * 10)
  .filter(x => x <= 100)
  .concat(Observable.of([1, 2, 3]))
  .subscribe(x => console.log(x));

// from
Observable.from([1, 2, 3, 4]).subscribe(x => console.log(x));

// of
Observable.of([1, 2, 3, 4]).subscribe(x => console.log(x));

// from = of + map
Observable.of(1, 2, 3, 4).map(x => x).subscribe(x => console.log(x));

// do
const source = Observable.of(1, 2, 3, 4, 5);
const example = source
  .do(val => console.log(`BEFORE: ${val}`))
  .map(val => val + 10)
  .do(val => console.log(`AFTER: ${val}`));
const subscribe = example.subscribe(val => console.log(val));

// two-Observable
const a = Observable.from([1, 2, 3]);
const b = Observable.from(['a', 'b', 'c']);

// zip
Observable.zip(a, b, (a, b) => `${a}-${b}`).
  subscribe(x => console.log(x));

// combineLatest
Observable.combineLatest(a, b, (a, b) => `${a}-${b}`).
  subscribe(x => console.log(x));

// merge - ab進行，誰先到就先處理誰
Observable.merge(a, b).
  subscribe(x => console.log(x));

// concat - a 先做完再做 b。
a.concat(b).subscribe(x => console.log(x));

// forkJoin - 取最後一個
Observable.forkJoin(a, b).
  subscribe(x => console.log(x));

// mergeMap
Observable.of([1, 2, 3, 4, 5])
  .mergeMap(i => a, (x, y) => {
    y = y * 10;
    x = x.map(q => q + 11);
    return { x, y };
  })
  .subscribe(val => console.log(val));
