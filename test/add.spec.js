import add from '../src/add';

describe('加法函数的测试', function() {
  test('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).toBe(2);
  });

  test('任何数加0应该等于自身', function() {
    expect(add(1, 0)).toBe(1);
  });
});