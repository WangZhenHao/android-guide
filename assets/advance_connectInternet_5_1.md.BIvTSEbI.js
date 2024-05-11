import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.yAut5pZI.js";const _=JSON.parse('{"title":"连接网络","description":"","frontmatter":{},"headers":[],"relativePath":"advance/connectInternet_5_1.md","filePath":"advance/connectInternet_5_1.md"}'),t={name:"advance/connectInternet_5_1.md"},e=i(`<h1 id="连接网络" tabindex="-1">连接网络 <a class="header-anchor" href="#连接网络" aria-label="Permalink to &quot;连接网络&quot;">​</a></h1><h2 id="kotlin-协程入门实验" tabindex="-1">Kotlin 协程入门实验 <a class="header-anchor" href="#kotlin-协程入门实验" aria-label="Permalink to &quot;Kotlin 协程入门实验&quot;">​</a></h2><ol><li>延期执行</li></ol><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kotlinx.coroutines.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fun main() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   runBlocking {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        println(&quot;Weather forecast&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        delay(</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        println(&quot;Sunny&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">一秒之后同时输出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">Weather forecast</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">Sunny</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div>`,4),l=[e];function p(h,c,k,r,o,d){return n(),a("div",null,l)}const g=s(t,[["render",p]]);export{_ as __pageData,g as default};
