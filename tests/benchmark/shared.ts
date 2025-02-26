import 'expect-puppeteer';
import { ElementHandle } from 'puppeteer';

export type Result =
  'create1000Rows'
  | 'replaceAllRows'
  | 'partialUpdate'
  | 'selectRow'
  | 'swapRows'
  | 'removeRow'
  | 'createManyRows'
  | 'appendRowsToLargeTable'
  | 'clearRows'

const create1000Rows = async () => {
  await page.click('#run');
};
const add1000Rows = async () => {
  await page.click('#add');
};
const create10000Rows = async () => {
  await page.click('#runlots');
};
const updateEvery10Rows = async () => {
  await page.click('#update');
};
const swapRows = async () => {
  await page.click('#swaprows');
};
const select = async (index: number) => {
  const tableBody = await getTableBody();
  const linkToClick = await tableBody[index].$('a');
  await linkToClick.click();
};
const deleteRow = async (index: number) => {
  const tableBody = await getTableBody();
  const linkToClick = await tableBody[index].$$<HTMLLinkElement>('a');
  await linkToClick[1].evaluate((e) => e.click());
};
const getTableBody = async () => {
  return await page.$$<HTMLElement>('tr');
};
const clear = async () => {
  await page.click('#clear');
};

const getRowId = async (element: ElementHandle<HTMLElement>) => {
  const td = await element.$('td');
  const textContentProperty = await td.getProperty('textContent');
  const textContent = await textContentProperty.jsonValue<string>();
  return Number(textContent);
};

export async function makePerformanceTests() {
  const results = new Map<Result, number>();
  const saveResult = async (key: Result, functionToMeasure: () => Promise<void>) => {
    const t0 = (await page.metrics()).Timestamp;
    await functionToMeasure();
    const t1 = (await page.metrics()).Timestamp;
    results.set(key, Number((Number(t1 - t0) * 1000).toFixed(2)));
  };
  it('creates 1000 rows when clicking run', async () => {
    await saveResult('create1000Rows', create1000Rows);
    expect((await getTableBody()).length).toEqual(1000);
  });
  it('replaces 1000 rows when clicking run', async () => {
    await create1000Rows();
    await saveResult('replaceAllRows', create1000Rows);
    const tableBody = await getTableBody();
    expect(tableBody.length).toEqual(1000);
    for (let i = 0; i < tableBody.length; i++) {
      const rowId = await getRowId(tableBody[i]);
      expect(rowId).toBeGreaterThan(1000);
    }
  });
  it('update every 10th row 1000 rows on a table with 1000 rows when clicking update', async () => {
    await create1000Rows();
    await saveResult('partialUpdate', updateEvery10Rows);
    const tableBody = await getTableBody();
    expect(tableBody.length).toEqual(1000);
    for (let i = 0; i < tableBody.length; i++) {
      const innerHTMLProperty = await tableBody[i].getProperty('innerHTML');
      const innerHTML = await innerHTMLProperty.jsonValue<string>();
      if (i % 10 === 0) {
        expect(innerHTML.includes('!!!')).toBeTruthy();
      } else {
        expect(innerHTML.includes('!!!')).toBeFalsy();
      }
    }
  });
  it('select a row (1000 rows)', async () => {
    await create1000Rows();
    await saveResult('selectRow', () => select(999));
    const tableBody = await getTableBody();
    const classNameProperty = await tableBody[999].getProperty('className');
    const className = await classNameProperty.jsonValue<string>();
    expect(className).toEqual('danger');
  });
  it('swap a row (1000 rows)', async () => {
    await create1000Rows();
    await saveResult('swapRows', swapRows);
    const tableBody = await getTableBody();
    const firstRowId = await getRowId(tableBody[1]);
    expect(firstRowId).toEqual(999);
    const secondRowId = await getRowId(tableBody[998]);
    expect(secondRowId).toEqual(2);
  });
  it('remove a row (1000 rows)', async () => {
    await create1000Rows();
    await saveResult('removeRow', () => deleteRow(999));
    expect((await getTableBody()).length).toEqual(999);
  });
  it('creates 10000 rows when clicking runlots', async () => {
    await saveResult('createManyRows', create10000Rows);
    expect((await getTableBody()).length).toEqual(10000);
  });
  it('append 1000 rows on a large table', async () => {
    await create10000Rows();
    await saveResult('appendRowsToLargeTable', add1000Rows);
    expect((await getTableBody()).length).toEqual(11000);
  });
  it('clear rows', async () => {
    await create1000Rows();
    await saveResult('clearRows', clear);
    expect((await getTableBody()).length).toEqual(0);
  });
  return results;
}