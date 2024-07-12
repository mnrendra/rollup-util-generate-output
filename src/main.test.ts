import main from './main'

import mainDummy from '@tests/dummies/main'

describe('Test `main` feature:', () => {
  it('Should return `Hello, World!` when invoked!', () => {
    const received = main()
    const expected = mainDummy
    expect(received).toBe(expected)
  })
})
