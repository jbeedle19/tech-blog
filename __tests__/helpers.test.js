const { format_date } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-02-01 14:19:03');

    expect(format_date(date)).toBe('2/1/2021');
});