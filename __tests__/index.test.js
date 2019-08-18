import flatArray from '../index.js';


describe('flatten array', () => {
  test('[[1,2,[4,5,9],[3]],4] array should be flat', () => {
    const arr = [[1,2,[4,5,9],[3]],4];

    const example = [1,2,4,5,9,3,4];

    const myArray = flatArray();
    const result = myArray.flat(arr);

    expect(result).toEqual(example);

  });

  test('test a already flat array', () => {
    const arr = [1,2,3,4];

    const example = [1,2,3,4];

    const myArray = flatArray();
    const result = myArray.flat(arr);

    expect(result).toEqual(example);
  });

  test(' [[[4],[[1]]],[]] array should be flat', () => {
    const arr = [[[4],[[1]]],[]];

    const example = [4,1];


    const myArray = flatArray();
    const result = myArray.flat(arr);

    expect(result).toEqual(example);
  });

  test(" [['apple'], [['bannana']]] should be flat", () => {
    const arr = [['apple'], [['bannana']]];
    const example = ['apple', 'bannana'];

    const myArray = flatArray();
    const result = myArray.flat(arr);

    expect(result).toEqual(example);
  });

  test('should be able to flatten an array of objects', () =>{
    const arr = [[{one: 1}, {two: 2}], [[{three: 3}, {four: 4}]]];
    const example = [ {one: 1}, {two: 2}, {three: 3}, {four: 4}];

    const myArray = flatArray();
    const result = myArray.flat(arr);

    console.log('result: ', result);

    expect(result).toEqual(example);
  });
});
