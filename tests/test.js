var test = function() {
  gatherTests(arguments).forEach(function(userTest) {
    userTest();
    process.stdout.write(".");
  });

  console.log();
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
