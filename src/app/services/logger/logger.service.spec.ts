import { LoggerService } from './logger.service';

fdescribe('LoggerService', () => {
  let logger: LoggerService;

  beforeEach(() => {
    logger = new LoggerService();
  });

  it('should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('should log with loglever INFO', () => {
    spyOn(logger, 'log');
    logger.log('Just a MSG');

    expect(logger.log).toHaveBeenCalled();
  });

  it('should append & log ', () => {
    spyOn(logger, 'log');
    logger.appendText('TEXT');

    expect(logger.log).toHaveBeenCalledWith('LOG:TEXT');
  });

  it('should add two number', () => {
    const result = logger.sum(1, 2);
    expect(result).toBe(3);
  });

  it('should call a fake method', () => {
    spyOn(logger, 'sum').and.callFake(() => {
      return 10;
    });
    const result = logger.sum(1, 2);
    expect(result).toBe(10);
  });
});
