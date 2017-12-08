import { DiablotinsPage } from './app.po';

describe('diablotins App', function() {
  let page: DiablotinsPage;

  beforeEach(() => {
    page = new DiablotinsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
