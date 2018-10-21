import { isPrimaryClick, onPrimaryClick } from '../';

describe('isPrimaryClick', () => {
  it('returns false when any modifier key is pressed', () => {
    expect(isPrimaryClick({ altKey: true, button: 0 })).toBe(false);
    expect(isPrimaryClick({ ctrlKey: true, button: 0 })).toBe(false);
    expect(isPrimaryClick({ metaKey: true, button: 0 })).toBe(false);
    expect(isPrimaryClick({ shiftKey: true, button: 0 })).toBe(false);
  });

  it("returns true when button is 0 and buttons isn't set", () => {
    expect(isPrimaryClick({ button: 0 })).toBe(true);
    expect(isPrimaryClick({ button: 0, buttons: undefined })).toBe(true);
  });

  it('returns true when button is 0 if buttons is set', () => {
    expect(isPrimaryClick({ button: 0, buttons: 0 })).toBe(true);
    expect(isPrimaryClick({ button: 0, buttons: 1 })).toBe(true);
  });

  it('returns false when button is not 0', () => {
    expect(isPrimaryClick({ button: 1 })).toBe(false);
    expect(isPrimaryClick({ button: 3 })).toBe(false);
    expect(isPrimaryClick({ button: -1 })).toBe(false);
    expect(isPrimaryClick({ button: false })).toBe(false);
    expect(isPrimaryClick({ button: 'hello' })).toBe(false);
  });

  it('returns false when buttons is not 0 or 1', () => {
    expect(isPrimaryClick({ button: 0, buttons: 2 })).toBe(false);
    expect(isPrimaryClick({ button: 0, buttons: 8 })).toBe(false);
    expect(isPrimaryClick({ button: 0, buttons: -1 })).toBe(false);
    expect(isPrimaryClick({ button: 0, buttons: false })).toBe(false);
    expect(isPrimaryClick({ button: 0, buttons: 'hello' })).toBe(false);
  });

  it('uses which if button is not present', () => {
    expect(isPrimaryClick({ which: 0 })).toBe(false);
    expect(isPrimaryClick({ which: 1 })).toBe(true);
    expect(isPrimaryClick({ which: 2 })).toBe(false);
    expect(isPrimaryClick({ which: 3 })).toBe(false);
  });
});

describe('onPrimaryClick', () => {
  it('calls fn if isPrimaryClick returns true', () => {
    var spy = expect.createSpy();
    onPrimaryClick(spy)({ button: 0 });
    expect(spy).toHaveBeenCalled();
  });

  it("doesn't call fn if isPrimaryClick returns false", () => {
    var spy = expect.createSpy();
    onPrimaryClick(spy)({ ctrlKey: true, button: 1 });
    expect(spy).toNotHaveBeenCalled();
  });

  it('returns the value fn returns if called', () => {
    var spy = expect.createSpy().andReturn('lol');
    expect(onPrimaryClick(spy)({ button: 0 })).toBe('lol');
  });

  it("returns `true` if fn doesn't get called", () => {
    var spy = expect.createSpy().andReturn('lol');
    expect(onPrimaryClick(spy)({ ctrlKey: true, button: 1 })).toBe(true);
  });

  it('passes down arguments to fn', () => {
    var spy = jest.createSpy();
    var mockEvent = { button: 0 };
    onPrimaryClick(spy)(mockEvent, 'goodbye', 420);
    expect(spy).toHaveBeenCalledWith(mockEvent, 'goodbye', 420);
  });
});
