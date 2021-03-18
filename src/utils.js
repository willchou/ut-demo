export function initConfig() {
  // 初始化配置
}

export function sum (x, y) {
  return x + y;
}

export function login(userName, pwd) {
  return new Promise((resolve) => {
    if (userName === 'test' && pwd === 'test') {
      return resolve(true);
    }
    return resolve(false);
  })
}

export function resetPassword(username, currPwd, newPwd) {
  return new Promise((resolve) => {
    if (username === 'test' && currPwd === 'test' && newPwd === 'test1') {
      return resolve(true);
    }
    resolve(false);
  })
}

export function getChildrenAssetsByAssetId(assetId) {
  return new Promise((resolve) => {
    if (assetId === '1') {
      resolve([{
        assetId: '11',
        assetName: '11',
      }])
    }
  })
}

export function addAsset(assetName, parentId, opts) {
  return new Promise((resolve) => {
    if (opts?.responseRaw) {
      return resolve({
        data: {
          success: true,
          code: 200,
          msg: '',
          result: true,
        },
        status: 200,
        statusText: 'OK',
      })
    }
    resolve(true);
  })
}
