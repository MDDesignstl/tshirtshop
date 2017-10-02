import { TshirtshopAppPage } from './app.po';

describe('tshirtshop-app App', () => {
  let page: TshirtshopAppPage;

  beforeEach(() => {
    page = new TshirtshopAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
