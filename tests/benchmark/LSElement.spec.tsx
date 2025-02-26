import 'expect-puppeteer';
import { makePerformanceTests, Result } from './shared';

describe('Performance tests - LS-Element', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto('http://localhost:3000', {
      waitUntil: 'domcontentloaded'
    });
  });
  afterEach(async () => {
    await page.reload({
      waitUntil: 'domcontentloaded'
    });
  });

  it('matches the snapshot on initial render', async () => {
    const body = await page.$('body');
    const innerHTMLProperty = await body.getProperty('innerHTML');
    const innerHTML = await innerHTMLProperty.jsonValue();
    expect(innerHTML).toMatchSnapshot();
  });

  const results = makePerformanceTests();
  afterAll(async () => {

    expect(
      new Map<string, Map<Result, number>>([
        [new Date().getTime().toString(), await results],
        [
          '2.0.0', new Map([
            ['create1000Rows', 251.1],
            ['replaceAllRows', 249.82],
            ['partialUpdate', 84.96],
            ['selectRow', 67.85],
            ['swapRows', 78.81],
            ['removeRow', 80.18],
            ['createManyRows', 1782.93],
            ['appendRowsToLargeTable', 412.64],
            ['clearRows', 114.61]
          ]),
        ],
        [
          '1.2.6', new Map([
            ['create1000Rows', 628.04],
            ['replaceAllRows', 1338.53],
            ['partialUpdate', 89.95],
            ['selectRow', 61.77],
            ['swapRows', 64.19],
            ['removeRow', 56.07],
            ['createManyRows', 7013.5],
            ['appendRowsToLargeTable', 1579.74],
            ['clearRows', 67.7]
          ])
        ]
      ])
    ).toMatchSnapshot('LS-Element Benchmarks');
  });
});