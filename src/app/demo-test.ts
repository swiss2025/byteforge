import { Selector } from 'testcafe';

fixture`Selector Demo`
    .page`http://localhost:4200/`;

test('Verify that the 3rd entry is blue', async t => {
    const thirdEntry = Selector('div[test-data]').nth(2); // Selects the 3rd div

    // Check if the 3rd entry exists
    await t.expect(thirdEntry.exists).ok();

    await t.debug();

    // Verify the color is blue
    const color = await thirdEntry.getStyleProperty('color');
    await t.expect(color).eql('rgb(0, 0, 255)'); // Blue in RGB

    await t.wait(3000);
});
