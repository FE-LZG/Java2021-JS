import{_ as s,c as a,o as n,d as t}from"./app.966912a5.js";const h='{"title":"2 \u6761\u4EF6\u6E32\u67D3\u6307\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"2.1 v-if/v-else-if/v-else","slug":"_2-1-v-if-v-else-if-v-else"},{"level":2,"title":"2.2 v-show","slug":"_2-2-v-show"},{"level":2,"title":"2.3 v-if \u548C v-show \u7684\u533A\u522B","slug":"_2-3-v-if-\u548C-v-show-\u7684\u533A\u522B"}],"relativePath":"optionsAPI/directive/condition.md","lastUpdated":1638179052858}',e={},p=t(`<h1 id="_2-\u6761\u4EF6\u6E32\u67D3\u6307\u4EE4" tabindex="-1">2 \u6761\u4EF6\u6E32\u67D3\u6307\u4EE4 <a class="header-anchor" href="#_2-\u6761\u4EF6\u6E32\u67D3\u6307\u4EE4" aria-hidden="true">#</a></h1><h2 id="_2-1-v-if-v-else-if-v-else" tabindex="-1">2.1 <code>v-if/v-else-if/v-else</code> <a class="header-anchor" href="#_2-1-v-if-v-else-if-v-else" aria-hidden="true">#</a></h2><p>\u6761\u4EF6\u6E32\u67D3\u6307\u4EE4\u7528\u6765\u8F85\u52A9\u5F00\u53D1\u8005\u6309\u9700\u63A7\u5236 \u865A\u62DFDOM \u662F\u5426\u88AB\u7F16\u8BD1\u4E3A\u771F\u5B9EDOM\u3002</p><div class="language-vue line-numbers-mode"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === <span class="token punctuation">&#39;</span>A<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4F18\u79C0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === <span class="token punctuation">&#39;</span>B<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u826F\u597D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type === <span class="token punctuation">&#39;</span>C<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E00\u822C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>\u5DEE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-2-v-show" tabindex="-1">2.2 <code>v-show</code> <a class="header-anchor" href="#_2-2-v-show" aria-hidden="true">#</a></h2><p><code>v-show</code>\u6307\u4EE4\u7528\u6765\u8F85\u52A9\u5F00\u53D1\u8005\u6309\u9700\u63A7\u5236DOM\u7684\u6837\u5F0F<code>display:none</code>\u6216\u8005<code>display:block</code></p><div class="language-vue line-numbers-mode"><pre><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8FD9\u662F\u88AB v-show \u63A7\u5236\u7684\u5143\u7D20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-3-v-if-\u548C-v-show-\u7684\u533A\u522B" tabindex="-1">2.3 <code>v-if</code> \u548C <code>v-show</code> \u7684\u533A\u522B <a class="header-anchor" href="#_2-3-v-if-\u548C-v-show-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ol><li><strong>\u5171\u540C\u70B9</strong></li></ol><ul><li>v-if \u548C v-show \u90FD\u80FD\u5B9E\u73B0\u5143\u7D20\u7684\u663E\u793A\u9690\u85CF</li></ul><ol start="2"><li><strong>\u4E0D\u540C\u70B9</strong></li></ol><ul><li>v-show \u53EA\u662F\u7B80\u5355\u7684\u63A7\u5236\u5143\u7D20\u7684 display \u5C5E\u6027\uFF0C\u800C v-if \u624D\u662F\u6761\u4EF6\u6E32\u67D3\uFF08\u6761\u4EF6\u4E3A\u771F\uFF0C\u5143\u7D20\u5C06\u4F1A\u88AB\u6E32\u67D3\uFF0C\u6761\u4EF6 \u4E3A\u5047\uFF0C\u5143\u7D20\u4F1A\u88AB\u9500\u6BC1\uFF09\uFF1B</li><li>v-show \u6709\u66F4\u9AD8\u7684\u9996\u6B21\u6E32\u67D3\u5F00\u9500\uFF0C\u800C v-if \u7684\u9996\u6B21\u6E32\u67D3\u5F00\u9500\u8981\u5C0F\u7684\u591A\uFF1B</li><li>v-if \u6709\u66F4\u9AD8\u7684\u5207\u6362\u5F00\u9500\uFF0Cv-show \u5207\u6362\u5F00\u9500\u5C0F</li><li>v-if \u6709\u914D\u5957\u7684 v-else-if \u548C v-else\uFF0C\u800C v-show \u6CA1\u6709</li><li>v-if \u53EF\u4EE5\u642D\u914D template \u4F7F\u7528\uFF0C\u800C v-show \u4E0D\u884C</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>v-else \u6307\u4EE4\u5FC5\u987B\u914D\u5408 v-if \u6307\u4EE4\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u5B83\u5C06\u4E0D\u4F1A\u88AB\u8BC6\u522B</li><li>v-else-if \u6307\u4EE4\u5FC5\u987B\u914D\u5408 v-if \u6307\u4EE4\u4E00\u8D77\u4F7F\u7528\uFF0C\u5426\u5219\u5B83\u5C06\u4E0D\u4F1A\u88AB\u8BC6\u522B</li></ul></div>`,13),o=[p];function l(c,i,u,v,r,d){return n(),a("div",null,o)}var g=s(e,[["render",l]]);export{h as __pageData,g as default};
