// Author: Casta-mere
async function umamiPlugin() {
  // 判断是否为开发环境
  const isDevelopment = "development" === process.env.NODE_ENV;

  return {
    name: "docusaurus-plugin-umami",

    injectHtmlTags() {
      if (isDevelopment) return;
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              // 换成你的域名
              href: "https://xxxx.com/",
            },
          },
          {
            tagName: "script",
            attributes: {
              defer: true,
              // 这里就是上一步复制的跟踪代码中的内容
              src: "https://xxxx.com/script.js",
              "data-website-id": "xxxx-xxxx-xxxx-xxxx",
            },
          },
        ],
      };
    },
  };
}

module.exports = umamiPlugin;