import { ArbiterPage } from './app.po';

describe('arbiter App', () => {
  let page: ArbiterPage;

  beforeEach(() => {
    page = new ArbiterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
