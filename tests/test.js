var test = function() {
  runTests(gatherTests(arguments));
};

var runTests = function(userTests) {
  if (userTests.length === 0) {
    console.log();
    process.exit();
  } else {
    var testDone = function() {
      process.stdout.write(".");
      runTests(userTests.slice(1));
    };

    if (userTests[0].length === 1) {
      testAsync(userTests[0], testDone);
    } else {
      testSync(userTests[0], testDone);
    }
  }
};

var testSync = function(userTest, testDone) {
  userTest();
  testDone();
};

var testAsync = function(userTest, testDone) {
  var timeout = setTimeout(function() {
    throw "Failed: done() never called in async test.";
  }, 1000);

  userTest(function() {
    clearTimeout(timeout);
    testDone();
  });
};

test.isEqual = function(a, b) {
  if (a !== b) {
    throw a + " and " + b + " are not equal";
  }
};

var gatherTests = function(testArgs) {
  return Array.prototype.slice.call(testArgs).filter(function(x, i) {
    return i % 2 === 1;
  });
};

module.exports = test;
