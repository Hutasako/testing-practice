// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(a, b=1) {
  if (a) {
		return a*b
	}
	return 0
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(0, 2);
  if (result !== 0) throw new Error('Expected product(0, 2) to be 0. Received: ' + result);

  var result = product(2, 0);
  if (result !== 0) throw new Error('Expected product(2, 0) to be 0. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(3, 2, 1);
  if (result !== 6) throw new Error('Expected product(3, 2, 1) to be 6. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = product(2);
  if (result !== 2) throw new Error('Expected product(2) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = product();
  if (result !== 0) throw new Error('Expected product() to be 0. Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
