import { BasicprojectPage } from './app.po';

describe('basicproject App', () => {
  let page: BasicprojectPage;

  beforeEach(() => {
    page = new BasicprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
