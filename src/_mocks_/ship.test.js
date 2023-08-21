import Ship from '../factories/ship'

let destroyer = new Ship("destroyer", 5)

test('Test hit command of ships' , () => {
    expect(destroyer.isSunk()).toBe(false);
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(true);
})