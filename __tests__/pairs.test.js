import { cons, car, cdr } from '../pairs';

describe('Pairs', () => {
  it('pair 1', () => {
    const pair1 = cons(10, 100);

    const actualCar = car(pair1);
    const expectedCar = 10;
    expect(actualCar).toBe(expectedCar);

    const actualCdr = cdr(pair1);
    const expectedCdr = 100;
    expect(actualCdr).toBe(expectedCdr);
  });

  it('pair 2', () => {
    const pair2 = cons(-5, 'hello');

    const actualCar = car(pair2);
    const expectedCar = -5;
    expect(actualCar).toBe(expectedCar);

    const actualCdr = cdr(pair2);
    const expectedCdr = 'hello';
    expect(actualCdr).toBe(expectedCdr);
  });
});
