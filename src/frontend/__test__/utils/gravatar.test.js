import gravatar from '../../utils/gravatar';

test('Gravatar Function Test', () => {
  const email = 'ORJON.T@GMail.com';
  const gravatarUrl = '';
  expect(gravatarUrl).toEqual(gravatar(email));
});
