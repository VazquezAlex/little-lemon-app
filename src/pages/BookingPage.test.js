import { defaultTimes, initializeTimes, updateTimes } from "./BookingPage";

test('initializeTimes returns the expected values', () => {
    const result = initializeTimes();
    expect(result).toEqual(defaultTimes);
});

test('updateTimes returns the expected values', () => {
    const result = updateTimes();
    expect(result).toEqual(defaultTimes);
});