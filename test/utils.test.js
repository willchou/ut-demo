import {initConfig, login, resetPassword, getChildrenAssetsByAssetId, addAsset} from '../src/utils';

// 此module所有测试用例运行前执行
beforeAll(() => {
  initConfig();
})

describe('account test', function () {
  describe('#login()', function() {
    test('should return true', function () {
      return login('test', 'test').then((res) => {
        expect(res).toBeTruthy();
      });
    })
  })

  // describe可以嵌套
  describe('#resetPassword()', function () {
    test('should return true', function() {
      return resetPassword('test', 'test', 'test1').then((res) => {
        expect(res).toBeTruthy();
      })
    });

    // describe中可以包含多个test case
    test('should return assets array', function () {
      return getChildrenAssetsByAssetId('1').then((res) => {
        return expect(res).toEqual([{
          assetId: '11',
          assetName: '11',
        }]);
      })
    })
  })
})

// test case可以脱离describe运行
test('should return true', function () {
  return login('test', 'test').then((res) => {
    expect(res).toBeTruthy();
  });
})

test('should return full resp', function() {
  return addAsset('1', '1', {
    responseRaw: true,
  }).then((res) => {
    return expect(res).toMatchObject({
      data: {
        success: true,
        code: 200,
        msg: '',
        result: true,
      },
      status: 200,
      statusText: 'OK',
    })
  })
})