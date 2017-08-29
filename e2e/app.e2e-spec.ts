import { InternovamPage } from './app.po';

describe('internovam App', () => {
  let page: InternovamPage;

  beforeEach(() => {
    page = new InternovamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
