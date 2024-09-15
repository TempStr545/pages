export default {
  async fetch(request, env) {
    // 从环境变量中获取 password
    const { password } = env;
    const url = new URL(request.url);

    // 检查请求路径是否匹配 password
    if (url.pathname === `/${password}`) {
      const content = `
mixed-port: 8878
allow-lan: false
bind-address: '*'
mode: rule
log-level: info
ipv6: true
unified-delay: true
profile:
  store-selected: true
  store-fake-ip: true
tun:
  enable: true
  stack: system
  auto-route: true
  auto-detect-interface: true
external-controller: '127.0.0.1:9090'
dns:
    enable: true
    ipv6: true
    prefer-h3: true
    listen: 0.0.0.0:53
    default-nameserver: [223.5.5.5, 8.8.8.8]
    enhanced-mode: fake-ip
    fake-ip-range: 198.18.0.1/16
    use-hosts: true
    nameserver: ['https://dns.alidns.com/dns-query']
    fallback: ['https://dns.alidns.com/dns-query', 'https://dns.cloudflare.com/dns-query', 'tls://8.8.4.4:853']
    fallback-filter: { geoip: true, ipcidr: [240.0.0.0/4, 0.0.0.0/32] }
proxy-providers: 
    no1:
        type: http
        url: 'https://cfno1.eu.org/clash'
        interval: 3600
        health-check:
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300
    cm:
        type: http
        url: 'https://VLESS.fxxk.dedyn.io/sub?host=v.nani1.v6.rocks&uuid=7b1c191b-a5a1-4997-95bb-25f2995d6d4b&path=/?ed=2560'
        interval: 3600
        health-check:
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300
    3k: 
        type: http 
        url: 'https://3k.fxxk.dedyn.io/sub?host=v.nani1.v6.rocks&uuid=7b1c191b-a5a1-4997-95bb-25f2995d6d4b&path=/?ed=2560'
        interval: 3600
        health-check: 
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300 
    mo: 
        type: http
        url: 'https://moistr.freenods.sbs/sub?host=v.nani1.v6.rocks&uuid=7b1c191b-a5a1-4997-95bb-25f2995d6d4b&path=/?ed=2560'
        interval: 3600
        health-check: 
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300 
    tian: 
        type: http
        url: 'https://alvless.comorg.us.kg/sub?host=v.nani1.v6.rocks&uuid=7b1c191b-a5a1-4997-95bb-25f2995d6d4b&path=/?ed=2560'
        interval: 3600
        health-check:
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300
    kauto: 
        type: http
        url: 'https://sub.kaiche.tk/?token=auto'
        interval: 3600
        health-check:
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300  
    king:
        type: http
        url: 'https://king361.fxxk.dedyn.io/sub?host=v.nani1.v6.rocks&uuid=7b1c191b-a5a1-4997-95bb-25f2995d6d4b&path=/?ed=2560'
        interval: 3600
        health-check:
            enable: true
            url: 'https://www.gstatic.com/generate_204'
            interval: 300
proxy-groups:
    - { name: PROXY, type: select, proxies: [♻️ 自动选择0, ♻️ 自动选择1, ♻️ 自动选择2, ♻️ 自动选择3, ♻️ 自动选择4, ♻️ 自动选择5, ♻️ 自动选择6], use: [tian]}
    - name: ♻️ 自动选择0
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - no1
    - name: ♻️ 自动选择1
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - cm
    - name: ♻️ 自动选择2
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - 3k
    - name: ♻️ 自动选择3
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - tian
    - name: ♻️ 自动选择4
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - mo
    - name: ♻️ 自动选择5
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - king
    - name: ♻️ 自动选择6
      type: url-test
      url: http://www.gstatic.com/generate_204
      interval: 300
      tolerance: 50
      use:
        - kauto
rule-providers:
    reject: { type: http, behavior: domain, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/reject.txt', path: ./ruleset/reject.yaml, interval: 86400 }
    icloud: { type: http, behavior: domain, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/icloud.txt', path: ./ruleset/icloud.yaml, interval: 86400 }
    apple: { type: http, behavior: domain, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/apple.txt', path: ./ruleset/apple.yaml, interval: 86400 }
    proxy: { type: http, behavior: domain, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt', path: ./ruleset/proxy.yaml, interval: 86400 }
    direct: { type: http, behavior: domain, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/direct.txt', path: ./ruleset/direct.yaml, interval: 86400 }
    private: { type: http, behavior: domain, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/private.txt', path: ./ruleset/private.yaml, interval: 86400 }
    telegramcidr: { type: http, behavior: ipcidr, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/telegramcidr.txt', path: ./ruleset/telegramcidr.yaml, interval: 86400 }
    cncidr: { type: http, behavior: ipcidr, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/cncidr.txt', path: ./ruleset/cncidr.yaml, interval: 86400 }
    lancidr: { type: http, behavior: ipcidr, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/lancidr.txt', path: ./ruleset/lancidr.yaml, interval: 86400 }
    applications: { type: http, behavior: classical, url: 'https://mirror.ghproxy.com/https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/applications.txt', path: ./ruleset/applications.yaml, interval: 86400 }
rules:
    - 'RULE-SET,applications,DIRECT'
    - 'RULE-SET,private,DIRECT'
    - 'RULE-SET,reject,REJECT'
    - 'RULE-SET,icloud,DIRECT'
    - 'RULE-SET,apple,DIRECT'
    - 'RULE-SET,proxy,PROXY'
    - 'RULE-SET,direct,DIRECT'
    - 'RULE-SET,lancidr,DIRECT'
    - 'RULE-SET,cncidr,DIRECT'
    - 'RULE-SET,telegramcidr,PROXY'
    - 'GEOIP,LAN,DIRECT'
    - 'GEOIP,CN,DIRECT,no-resolve'
    - 'MATCH,PROXY'


      `;

      return new Response(content, {
        headers: { 'content-type': 'text/plain;charset=UTF-8' },
      });
    }

    // 如果路径不匹配，返回 404
    return new Response('Not Found', { status: 404 });
  },
};
