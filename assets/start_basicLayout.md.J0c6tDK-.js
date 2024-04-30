import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.yAut5pZI.js";const e="/android-guide/assets/row_arrangement_visualization.BsG5isvb.gif",t="/android-guide/assets/column_arrangement_visualization.gFypvwR_.gif",p="/android-guide/assets/1.Daq86_9L.png",l="/android-guide/assets/2.uo1dX2DV.png",h="/android-guide/assets/3.CMU68B9X.png",k="/android-guide/assets/4.QU8U2gRD.jpg",x=JSON.parse('{"title":"基础布局（basic layout）","description":"","frontmatter":{},"headers":[],"relativePath":"start/basicLayout.md","filePath":"start/basicLayout.md"}'),r={name:"start/basicLayout.md"},o=n(`<h1 id="基础布局-basic-layout" tabindex="-1">基础布局（basic layout） <a class="header-anchor" href="#基础布局-basic-layout" aria-label="Permalink to &quot;基础布局（basic layout）&quot;">​</a></h1><h2 id="jetpack-compose" tabindex="-1">Jetpack Compose <a class="header-anchor" href="#jetpack-compose" aria-label="Permalink to &quot;Jetpack Compose&quot;">​</a></h2><p>一个构件安卓UI的工具包</p><p>Composable 函数特点</p><ul><li><p>描述UI的一部分</p></li><li><p>没有返回值</p></li><li><p>接受输入和生成屏幕显示的内容</p></li></ul><h2 id="添加text-元素" tabindex="-1">添加Text 元素 <a class="header-anchor" href="#添加text-元素" aria-label="Permalink to &quot;添加Text 元素&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Composable</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fun </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GreetingText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String, modifier</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="改变字体大小" tabindex="-1">改变字体大小 <a class="header-anchor" href="#改变字体大小" aria-label="Permalink to &quot;改变字体大小&quot;">​</a></h2><p>默认情况下SP单位和DP单位是同样的。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Composable</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fun </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GreetingText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String, modifier</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fontSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100.sp,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        lineHeight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 116.sp,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GreetingText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stringResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.string.happy_birthday_text),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    from </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stringResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.string.signature_text)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="三个基础布局元素column-row和box" tabindex="-1">三个基础布局元素<code>Column</code>, <code>Row</code>和<code>Box</code> <a class="header-anchor" href="#三个基础布局元素column-row和box" aria-label="Permalink to &quot;三个基础布局元素\`Column\`, \`Row\`和\`Box\`&quot;">​</a></h2><ol><li>Row元素的水平排列</li></ol><p><img src="`+e+'" alt="vitepress init screenshot" style="border-radius:8px;"></p><ol start="2"><li>Column元素的垂直排列</li></ol><p><img src="'+t+`" alt="vitepress init screenshot" style="border-radius:8px;"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Composable</span></span>
<span class="line"><span>fun GreetingText(message: String, from: String, modifier: Modifier = Modifier) {</span></span>
<span class="line"><span>    Row {</span></span>
<span class="line"><span>        Text(</span></span>
<span class="line"><span>            text = message,</span></span>
<span class="line"><span>            fontSize = 100.sp,</span></span>
<span class="line"><span>            lineHeight = 116.sp,</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        Text(</span></span>
<span class="line"><span>            text = from,</span></span>
<span class="line"><span>            fontSize = 36.sp</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GreetingText(</span></span>
<span class="line"><span>    message = stringResource(R.string.happy_birthday_text),</span></span>
<span class="line"><span>    from = stringResource(R.string.signature_text)</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="image显示图片" tabindex="-1">Image显示图片 <a class="header-anchor" href="#image显示图片" aria-label="Permalink to &quot;Image显示图片&quot;">​</a></h3><ol><li>在<code>View</code> &gt; <code>Tool Windows</code> &gt; <code>Resource Manager</code> 或者<code>Resource Manager</code> tab ，点击<code>Import Drawables.</code></li></ol><p><img src="`+p+'" alt="vitepress init screenshot" style="border-radius:8px;"><img src="'+l+'" alt="vitepress init screenshot" style="border-radius:8px;"><img src="'+h+'" alt="vitepress init screenshot" style="border-radius:8px;"></p><ol start="2"><li>选择图片</li></ol><p><img src="'+k+`" alt="vitepress init screenshot" style="border-radius:8px;"></p><ol start="3"><li><p>QUALTIFER TYPE选择<code>Density</code> ,VALUE选择<code>No Density</code>，点击<code>Next</code></p></li><li><p>点击<code>Improt</code></p></li></ol><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> painterResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.drawable.androidparty)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    painter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> image,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    contentDescription </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    contentScale </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ContentScale.Crop,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alpha </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5F</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="trailing-lambda-syntax" tabindex="-1">Trailing lambda syntax <a class="header-anchor" href="#trailing-lambda-syntax" aria-label="Permalink to &quot;Trailing lambda syntax&quot;">​</a></h3><p>Kotlin提供一个特别语法：当最后一个参数是函数，把函数作为参数传给函数</p><p>当你通过函数作为参数，你可以用<code>Trailing lambda</code>语法，而不是用圆括号，可以用花括号替代</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some more text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Last text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 一样</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Row {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Some more text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Last text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>基础课程：<a href="https://developer.android.com/courses/android-basics-compose/course" target="_blank" rel="noreferrer">https://developer.android.com/courses/android-basics-compose/course</a></p>`,28),d=[o];function E(c,g,y,u,m,F){return a(),i("div",null,d)}const _=s(r,[["render",E]]);export{x as __pageData,_ as default};