import { ReversePipe } from './reverse.pipe';

fdescribe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeDefined();
  });
});
