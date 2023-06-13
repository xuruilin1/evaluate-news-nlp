import { checkForName } from "../src/client/js/nameChecker"

describe("checkForName", () => {
    beforeEach(() => {
        global.alert = jest.fn();
    })

    test('alerts if name is a known captain', () => {
        checkForName("Picard");
        expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");
    });

    test('does not alert if name is not a known captain', () => {
        checkForName("NonExistentName");
        expect(global.alert).not.toHaveBeenCalled();
    });

    test('alert with correct name if name is case sensitive', () => {
        checkForName("picard");
        expect(global.alert).not.toHaveBeenCalled();
    });
});
