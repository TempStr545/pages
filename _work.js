export default {
  async fetch(request, env) {
    // 从环境变量中获取 password
    const { password } = env;
    const url = new URL(request.url);

    // 检查请求路径是否匹配 password
    if (url.pathname === `/${password}`) {
      const content = `
      这里是你要展示的内容，
      无论你放什么在这里，都将会以无格式的方式呈现。
      可以是文本、HTML等。
      `;

      return new Response(content, {
        headers: { 'content-type': 'text/plain;charset=UTF-8' },
      });
    }

    // 如果路径不匹配，返回 404
    return new Response('Not Found', { status: 404 });
  },
};
