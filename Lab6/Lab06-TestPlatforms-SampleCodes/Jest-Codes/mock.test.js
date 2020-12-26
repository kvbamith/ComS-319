//Source: https://jestjs.io/docs/en/mock-functions

//////////////////////////////////
// Testing Implementaion of forEach function
// mock function for callback
//////////////////////////////////////
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

test('The mock function is called twice', () => {
  // The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(2);
});

test('The first argument of the first call to the function was 0', () => {
  // The first argument of the first call to the function was 0
   expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test('The first argument of the second call to the function was 1', () => {
  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('The return value of the first call to the function was 42', () => {
  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});


///////////////////////////
//Testing .mock property
///////////////////////////
const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);

///////////////////////////////
// Mock Return Values
// To Inject test values
//////////////////////////////
console.log(myMock());
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true


///////////////////////////////////
// Mock Function implementations
////////////////////////////////////
const myMockFn1 = jest.fn(cb => cb(null, true));

myMockFn1((err, val) => console.log(val));
// > true

const myMockFn2 = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn2(), myMockFn2(), myMockFn2(), myMockFn2());
// > 'first call', 'second call', 'default', 'default'

///////////////////////////////////
// Mock Function module
////////////////////////////////////
