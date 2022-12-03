import { updateImg } from './previewSlice';

describe('Test the functionality of the previewSlice', () => {
  test('Test the functionality of the updateImg', () => {
    const pokemon = [
      {
        id: '1',
        name: 'bulbasaur',
        img: '',
      },
      {
        id: '2',
        name: 'ivysaur',
        img: '',
      },
      {
        id: '3',
        name: 'venusaur',
        img: '',
      }];
    const action = updateImg(pokemon);
    expect(action.type).toBe('preview/updateImg');
  });
});
