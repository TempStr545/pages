const PASSWORD = 'your_password_here'; // 替换为你的密码环境变量值

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname.slice(1); // 获取路径部分，不包括前导的'/'

  if (path !== PASSWORD) {
    return new Response('Unauthorized', { status: 403 });
  }

  // 可以在这里设置你要展示的内容
  const content = '
mixed-port: 7890
allow-lan: false
bind-address: '*'
mode: rule
log-level: info
external-controller: '127.0.0.1:9090'
dns:
    enable: true
    ipv6: false
    default-nameserver: [223.5.5.5, 223.6.6.6]
    enhanced-mode: fake-ip
    fake-ip-range: 198.18.0.1/16
    use-hosts: true
    nameserver: ['https://dns.alidns.com/dns-query']
    fallback: ['https://dns.alidns.com/dns-query', 'https://dns.cloudflare.com/dns-query', 'tls://8.8.4.4:853']
    fallback-filter: { geoip: true, ipcidr: [240.0.0.0/4, 0.0.0.0/32] }
proxies:
    - {name: 🇭🇰HK-Google Cloud, type: vless, server: 34.150.80.74, port: 12062, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: edgetunnel-free.pages.dev}}, udp: true}
    - {name: 🇭🇰HK-45102-Alibaba, type: vless, server: 47.244.161.227, port: 10443, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: edgetunnel-free.pages.dev}}, udp: true}
    - {name: 🇹🇼TW-Chunghwa Telecom, type: vless, server: 210.61.97.241, port: 81, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: edgetunnel-free.pages.dev}}, udp: true}
    - {name: 🇯🇵JP-IT7 Networks Inc, type: vless, server: 23.106.141.25, port: 110, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: edgetunnel-free.pages.dev}}, udp: true}
    - {name: 🇺🇸US-DMIT, type: vless, server: 136.175.176.67, port: 443, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: edgetunnel-free.pages.dev}}, udp: true}

    # Domain
    - {name: "TG Channel: @cf_no1" , type: vless, server: vless.cfno1.eu.org, port: 443, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: vless.cfno1.eu.org}}, udp: false}
    - {name: Cloudflare-Anycast, type: vless, server: edgetunnel-free.pages.dev, port: 443, uuid: de44b044-8f90-4e18-b742-16591667ff96, alterId: 0, cipher: auto, tls: true, skip-cert-verify: false, network: ws, ws-opts: {path: '/?ed=2048', headers: {Host: edgetunnel-free.pages.dev}}, udp: false}
proxy-providers: 
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
    - { name: PROXY, type: select, proxies: ["TG Channel: @cf_no1", Cloudflare-Anycast, 🇭🇰HK-Google Cloud, 🇭🇰HK-45102-Alibaba, 🇹🇼TW-Chunghwa Telecom, 🇯🇵JP-IT7 Networks Inc, 🇺🇸US-DMIT], use: [cm, 3k, tian, mo, kauto, king]}
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
'; // 可以替换为你需要展示的内容

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
