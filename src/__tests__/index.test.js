import { isPrimaryClick, onPrimaryClick } from '../';

describe('isPrimaryClick', () => {
  test.each(
    ['alt', 'ctrl', 'meta', 'shift'],
    'returns false when %s modifier key is pressed',
    (mod) => {
      expect(isPrimaryClick({ [`${mod}Key`]: true, button: 0 })).toBe(false);
    }
  );

  test('returns true when event.button is 0 and event.buttons isn’t set', () => {
    [null, undefined].forEach((buttons) => {
      expect(isPrimaryClick({ button: 0, buttons })).toBe(true);
    });
  });

  test('returns true when event.button is 0 and event.buttons is 0 or 1', () => {
    [0, 1].forEach((buttons) => {
      expect(isPrimaryClick({ button: 0, buttons })).toBe(true);
    });
  });

  test('returns false when event.button is not 0', () => {
    [1, 3, -1, false, 'hello'].forEach((button) => {
      expect(isPrimaryClick({ button })).toBe(false);
    });
  });

  test('returns false when event.buttons is not 0 or 1', () => {
    [2, 8, -1, false, 'hello'].forEach((buttons) => {
      expect(isPrimaryClick({ button: 0, buttons })).toBe(false);
    });
  });

  test('uses event.which if event.button is not present', () => {
    expect(isPrimaryClick({ which: 1 })).toBe(true);
    [0, 2, 3].forEach((which) => {
      expect(isPrimaryClick({ which })).toBe(false);
    });
  });
});

describe('onPrimaryClick', () => {
  test('calls fn if isPrimaryClick returns true', () => {
    const spy = jest.fn();
    onPrimaryClick(spy)({ button: 0 });
    expect(spy).toHaveBeenCalled();
  });

  test('doesn’t call fn if isPrimaryClick returns false', () => {
    const spy = jest.fn();
    onPrimaryClick(spy)({ ctrlKey: true, button: 1 });
    expect(spy).not.toHaveBeenCalled();
  });

  test('returns the value fn returns if called', () => {
    const spy = jest.fn().mockReturnValue('hi');
    expect(onPrimaryClick(spy)({ button: 0 })).toBe('hi');
  });

  test('returns undefined if fn doesn’t get called', () => {
    const spy = jest.fn().mockReturnValue('hi');
    expect(onPrimaryClick(spy)({ ctrlKey: true, button: 1 })).toBeUndefined();
  });

  test('passes down additional arguments to fn', () => {
    const spy = jest.fn();
    const event = { button: 0 };
    onPrimaryClick(spy)(event, 'goodbye', 420);
    expect(spy).toHaveBeenCalledWith(event, 'goodbye', 420);
  });
});
