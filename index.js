

module.exports = {
  name: {
    desc: '项目名',
  },
  description: {
    desc: '项目描述',
  },
  author: {
    desc: '项目作者',
  },
  keys: {
    desc: 'cookie安全密钥',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
