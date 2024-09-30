import{_ as s,c as i,o as a,R as e}from"./chunks/framework.DkhUyr1-.js";const F=JSON.parse('{"title":"组件库扩展","description":"","frontmatter":{},"headers":[],"relativePath":"guide/customize/exts-lib.md","filePath":"guide/customize/exts-lib.md","lastUpdated":null}'),t={name:"guide/customize/exts-lib.md"},l=e(`<h1 id="组件库扩展" tabindex="-1">组件库扩展 <a class="header-anchor" href="#组件库扩展" aria-label="Permalink to &quot;组件库扩展&quot;">​</a></h1><p>ZUI3 组件库内置了大量组件，并支持集中开发、调试和打包，其中打包还支持只选择指定的组件进行个性化定制，同步输出组件库文档。但当需求扩展到组件库之外时，就需要用到扩展组件库了。ZUI3 支持扩展组件库模式，可以从其他位置引入一个或多个组件库目录，享受集中开发、调试和打包。下面介绍扩展组件库的使用方法。</p><h2 id="定义扩展库" tabindex="-1">定义扩展库 <a class="header-anchor" href="#定义扩展库" aria-label="Permalink to &quot;定义扩展库&quot;">​</a></h2><p>扩展组件库可以来自本地系统的任意位置，只需要提供一个路径，例如：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/Users/TaiJi/Projects/zui3_exts/lib/</span></span></code></pre></div><p>扩展组件库的目录结构与 ZUI3 <code>/lib/</code> 下的目录结构一致，下面的每个子目录为一个独立的组件，详细定义参考 <a href="/zui/3/guide/customize/dev.html">开发文档</a>。</p><h2 id="添加扩展库" tabindex="-1">添加扩展库 <a class="header-anchor" href="#添加扩展库" aria-label="Permalink to &quot;添加扩展库&quot;">​</a></h2><p>在 <code>zui3</code> 项目根目录执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extend-lib</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ext_lib_pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lib_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>其中参数 <code>ext_lib_path</code> 为扩展组件库路径，<code>&lt;lib_name&gt;</code> 为扩展组件库名称。例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extend-lib</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/TaiJi/Projects/zui3_exts/lib/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zentao</span></span></code></pre></div><p>执行上述命令之后，会将组件库目录文件拷贝到 <code>zui3/lib_name</code> 目录下，同时会在 <code>zui3/exts/libs.json</code> 文件中记录此扩展库的名称和路径。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;zentao&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/TaiJi/Projects/zui3_exts/lib/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>实际上，你也可以通过自己编辑这个文件来添加扩展库。</p><h2 id="启动开发服务" tabindex="-1">启动开发服务 <a class="header-anchor" href="#启动开发服务" aria-label="Permalink to &quot;启动开发服务&quot;">​</a></h2><p>要在开发模式中包含对扩展组件库的开发调试，只需要执行如下命令代替 <code>pnpm dev</code> 命令即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:exts</span></span></code></pre></div><p>当添加了多个扩展库时，上述命令会包含所有扩展库，有时只需要包含特定的扩展库，只需要自定义 <code>--lib</code> 参数即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev:exts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --lib=zui,zentao</span></span></code></pre></div><h2 id="启动文档服务器" tabindex="-1">启动文档服务器 <a class="header-anchor" href="#启动文档服务器" aria-label="Permalink to &quot;启动文档服务器&quot;">​</a></h2><p>要在文档网站服务模式中包含对扩展组件库的文档支持，只需要如下命令代替 <code>pnpm docs:dev</code> 命令即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev:exts</span></span></code></pre></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h2><p>打包时如果需要将扩展库中的组件也进行打包，则需要添加 <code>--exts</code> 参数，然后就可以在需要打包的组件清单中指定扩展库中的组件名称：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> label</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @zentao/status-label</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --exts</span></span></code></pre></div><p>如果不指定名称，则默认打包仍然只打包内置组件库的组件，例如下面的命令仍然相当于 <code>pnpm build</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --exts</span></span></code></pre></div><p>如果需要将所有内置组件库和扩展库中的所有组件一并打包，可以使用如下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zui+exts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --exts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name=zentao</span></span></code></pre></div><p>当添加了多个扩展库时，上述命令会包含所有扩展库，有时只需要包含特定的扩展库，只需要自定义 <code>--exts</code> 参数即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zui+exts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --exts=zui,zentao</span></span></code></pre></div>`,31),h=[l];function p(n,d,k,o,c,r){return a(),i("div",null,h)}const u=s(t,[["render",p]]);export{F as __pageData,u as default};
