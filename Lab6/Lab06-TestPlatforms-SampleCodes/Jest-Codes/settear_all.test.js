let cityDb=null;

function initializeCityDatabase() {
  //initialize city database
  cityDb = ['Vienna','San Juan'];  
  console.log("init city db")
}

function clearCityDatabase() {
  //delete database object
  console.log("clean city db")
}


function isCity(c) {
	//Mock: search if city in cityDb
	let found = cityDb.find(function(element) { 
	  return element==c; 
	}); 
	return found;
}

beforeAll(() => {
  initializeCityDatabase();
});

afterAll(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});