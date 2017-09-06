import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

Observable.create(function (Observer: any) {
  Observer.next(1);
  Observer.next(2);
  Observer.next(3);
  Observer.complete();
  Observer.error(99);
}).subscribe(x => console.log(x));

// of
Observable.of([1, 2, 3, 4]).subscribe(x => console.log(x));
Observable.of(1, 2, 3).map(x => x + '!!!').subscribe(x => console.log(x));

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

// merge
Observable.merge(a, b).
  subscribe(x => console.log(x));

// forkJoin
Observable.forkJoin(a, b).
  subscribe(x => console.log(x));

