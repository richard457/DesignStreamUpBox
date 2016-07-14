import { DesignStreamUpBoxPage } from './app.po';

describe('design-stream-up-box App', function() {
  let page: DesignStreamUpBoxPage;

  beforeEach(() => {
    page = new DesignStreamUpBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
