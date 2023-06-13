import fetchMock from 'jest-fetch-mock';
import { handleSubmit } from '../src/client/js/formHandler';

fetchMock.enableMocks();

describe('Test handleSubmit', () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div>
        <input id="name" type="text" value="Test name">
        <div id="results"></div>
      </div>
    `;

        fetch.mockResponseOnce(JSON.stringify({ message: 'Test message' }));
    });

    afterEach(() => {
        fetchMock.resetMocks();
    });

    test('it should call fetch with the right arguments and update the DOM', async () => {
        const event = {
            preventDefault: jest.fn(),
        };

        await handleSubmit(event);

        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/test');
        expect(document.getElementById('results').innerHTML).toEqual('Test message');
    });

    test('it should call preventDefault on the event object', async () => {
        const event = {
            preventDefault: jest.fn(),
        };

        await handleSubmit(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });
});
