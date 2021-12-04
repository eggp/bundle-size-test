Ez a kod annak vizsgalatara szuletett hogy megnezzuk a fordito veglegesen mit general ...

Test kod:

```ts
  constructor() {
    if (environment.production === false) {
      console.log('uzike1');
    }
  }

  x() {
    console.log('uzike2');
  }
```

### Evlaras
Abban az esetben ha environment.production === true, akkor a bundle-be mar nem szabad bekerulni az if-nek

### Esetek

Test1: sima env
Test2: env Readonly interface-vel van megjelolve
Test3: env egy Object.freeze-vel van korulveve


### Build parancs:
npx nx run-many --target=build --all
