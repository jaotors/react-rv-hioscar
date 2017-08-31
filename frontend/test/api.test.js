import { getMessage } from '../src/redux/modules/api'

it(`request a number that's not in [1,2,3,4] response an "object that has array"`, async () => {
  expect.assertions(1)
  const data = await getMessage(0)
  console.log(data)
  expect(data).toEqual({message:['Please try hi oscar :)']});
});