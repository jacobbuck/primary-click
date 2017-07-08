var expect = require("expect");
var isPrimaryClick = require("../lib").isPrimaryClick;
var onPrimaryClick = require("../lib").onPrimaryClick;

describe("isPrimaryClick", function() {
  it("returns false when any modifier key is pressed", function() {
    expect(isPrimaryClick({ altKey: true, buttons: 1 })).toBe(false);
    expect(isPrimaryClick({ ctrlKey: true, buttons: 1 })).toBe(false);
    expect(isPrimaryClick({ metaKey: true, buttons: 1 })).toBe(false);
    expect(isPrimaryClick({ shiftKey: true, buttons: 1 })).toBe(false);
  });

  it("returns true when buttons is 1", function() {
    expect(isPrimaryClick({ buttons: 1 })).toBe(true);
  });

  it("returns true when button is 0 if buttons is unset", function() {
    expect(isPrimaryClick({ button: 0 })).toBe(true);
  });

  it("returns false when buttons is not 1", function() {
    expect(isPrimaryClick({ buttons: -1 })).toBe(false);
    expect(isPrimaryClick({ buttons: 2 })).toBe(false);
    expect(isPrimaryClick({ buttons: false })).toBe(false);
    expect(isPrimaryClick({ buttons: "hello" })).toBe(false);
  });

  it("returns false when button is not 0 if buttons is unset", function() {
    expect(isPrimaryClick({ button: -1 })).toBe(false);
    expect(isPrimaryClick({ button: 1 })).toBe(false);
    expect(isPrimaryClick({ button: false })).toBe(false);
    expect(isPrimaryClick({ button: "hello" })).toBe(false);
  });

  it("ignores button if buttons is present", function() {
    expect(isPrimaryClick({ buttons: 0, button: 0 })).toBe(false);
    expect(isPrimaryClick({ buttons: 3, button: 0 })).toBe(false);
    expect(isPrimaryClick({ buttons: 5, button: 0 })).toBe(false);
    expect(isPrimaryClick({ buttons: 7, button: 0 })).toBe(false);
  });
});

describe("onPrimaryClick", function() {
  it("calls fn if isPrimaryClick returns true", function() {
    var spy = expect.createSpy();
    onPrimaryClick(spy)({ buttons: 1 });
    expect(spy).toHaveBeenCalled();
  });

  it("doesn't call fn if isPrimaryClick returns false", function() {
    var spy = expect.createSpy();
    onPrimaryClick(spy)({ ctrlKey: true, buttons: 2 });
    expect(spy).toNotHaveBeenCalled();
  });

  it("returns the value fn returns if called", function() {
    var spy = expect.createSpy().andReturn("lol");
    expect(onPrimaryClick(spy)({ buttons: 1 })).toBe("lol");
  });

  it("returns `true` if fn doesn't get called", function() {
    var spy = expect.createSpy().andReturn("lol");
    expect(onPrimaryClick(spy)({ ctrlKey: true, buttons: 2 })).toBe(true);
  });

  it("passes down arguments to fn", function() {
    var spy = expect.createSpy();
    var mockEvent = { buttons: 1 };
    onPrimaryClick(spy)(mockEvent, "goodbye", 420);
    expect(spy).toHaveBeenCalledWith(mockEvent, "goodbye", 420);
  });
});
