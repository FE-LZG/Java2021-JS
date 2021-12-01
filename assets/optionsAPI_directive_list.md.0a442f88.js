import{_ as n,c as s,o as a,d as t}from"./app.966912a5.js";const m='{"title":"3 \u5217\u8868\u6E32\u67D3\u6307\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1 \u7528 v-for \u6E32\u67D3\u4E00\u7EC4\u5143\u7D20","slug":"_3-1-\u7528-v-for-\u6E32\u67D3\u4E00\u7EC4\u5143\u7D20"},{"level":2,"title":"3.2 \u7528 v-for \u5C55\u793A\u7D22\u5F15\u53CA\u5143\u7D20","slug":"_3-2-\u7528-v-for-\u5C55\u793A\u7D22\u5F15\u53CA\u5143\u7D20"},{"level":2,"title":"3.3 \u7ED9 v-for \u6DFB\u52A0 key","slug":"_3-3-\u7ED9-v-for-\u6DFB\u52A0-key"},{"level":2,"title":"3.4 v-for \u4E0E v-if \u4E00\u540C\u4F7F\u7528","slug":"_3-4-v-for-\u4E0E-v-if-\u4E00\u540C\u4F7F\u7528"}],"relativePath":"optionsAPI/directive/list.md","lastUpdated":1638169650111}',e={},p=t(`<h1 id="_3-\u5217\u8868\u6E32\u67D3\u6307\u4EE4" tabindex="-1">3 \u5217\u8868\u6E32\u67D3\u6307\u4EE4 <a class="header-anchor" href="#_3-\u5217\u8868\u6E32\u67D3\u6307\u4EE4" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u53EF\u4EE5\u7528 <code>v-for</code> \u6307\u4EE4\u57FA\u4E8E\u4E00\u4E2A\u6570\u7EC4\u6765\u6E32\u67D3\u4E00\u4E2A\u5217\u8868\u3002 <code>v-for</code> \u6307\u4EE4\u9700\u8981\u4F7F\u7528 <code>item in items</code> \u5F62\u5F0F\u7684\u7279\u6B8A\u8BED\u6CD5\uFF0C\u5176\u4E2D <code>items</code> \u662F\u6E90\u6570\u636E\u6570\u7EC4\uFF0C\u800C <code>item</code> \u5219\u662F\u88AB\u8FED\u4EE3\u7684\u6570\u7EC4\u5143\u7D20\u7684\u522B\u540D</p><h2 id="_3-1-\u7528-v-for-\u6E32\u67D3\u4E00\u7EC4\u5143\u7D20" tabindex="-1">3.1 \u7528 <code>v-for</code> \u6E32\u67D3\u4E00\u7EC4\u5143\u7D20 <a class="header-anchor" href="#_3-1-\u7528-v-for-\u6E32\u67D3\u4E00\u7EC4\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u5047\u8BBE\u5728data\u4E2D\u5B9A\u4E49\u8FD9\u6837\u7684\u6570\u636E:
 data() {
    return {
      items: [
        { message: &#39;Foo&#39; }, 
        { message: &#39;Bar&#39; }
      ]
    }
  }
 --&gt;</span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ item.message }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_3-2-\u7528-v-for-\u5C55\u793A\u7D22\u5F15\u53CA\u5143\u7D20" tabindex="-1">3.2 \u7528 <code>v-for</code> \u5C55\u793A\u7D22\u5F15\u53CA\u5143\u7D20 <a class="header-anchor" href="#_3-2-\u7528-v-for-\u5C55\u793A\u7D22\u5F15\u53CA\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u5047\u8BBE\u5728data\u4E2D\u5B9A\u4E49\u8FD9\u6837\u7684\u6570\u636E:
  data() {
    return {
      items: [{ message: &#39;Foo&#39; }, { message: &#39;Bar&#39; }]
    }
  }
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     {{ index }} - {{ item.message }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>v-for \u6307\u4EE4\u4E2D\u7684 <code>item</code> \u9879\u548C <code>index</code> \u7D22\u5F15\u90FD<strong>\u662F\u5F62\u53C2</strong>\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u91CD\u547D\u540D\u3002\u4F8B\u5982 (user, i) in list</p></div><h2 id="_3-3-\u7ED9-v-for-\u6DFB\u52A0-key" tabindex="-1">3.3 \u7ED9 <code>v-for</code> \u6DFB\u52A0 <code>key</code> <a class="header-anchor" href="#_3-3-\u7ED9-v-for-\u6DFB\u52A0-key" aria-hidden="true">#</a></h2><p>\u5F53 <code>Vue</code> \u6B63\u5728\u66F4\u65B0\u4F7F\u7528 <code>v-for</code> \u6E32\u67D3\u7684\u5143\u7D20\u5217\u8868\u65F6\uFF0C\u5B83\u9ED8\u8BA4\u4F7F\u7528\u201C\u5C31\u5730\u66F4\u65B0\u201D\u7684\u7B56\u7565\u3002 \u4F46\u8FD9\u79CD\u9ED8\u8BA4\u7684\u6027\u80FD\u4F18\u5316\u7B56\u7565\uFF0C\u4F1A\u5BFC\u81F4\u6709\u72B6\u6001\u7684\u5217\u8868\u65E0\u6CD5\u88AB\u6B63\u786E\u66F4\u65B0\u3002 \u4E3A\u4E86\u7ED9 <code>Vue</code> \u4E00\u4E2A\u63D0\u793A\uFF0C\u4EE5\u4FBF\u5B83\u80FD\u8DDF\u8E2A\u6BCF\u4E2A\u8282\u70B9\u7684\u8EAB\u4EFD\uFF0C\u4ECE\u800C\u5728\u4FDD\u8BC1\u6709\u72B6\u6001\u7684\u5217\u8868\u88AB\u6B63\u786E\u66F4\u65B0\u7684\u524D\u63D0\u4E0B\uFF0C \u63D0\u5347\u6E32\u67D3\u7684\u6027\u80FD\u3002\u6B64\u65F6\uFF0C\u9700\u8981\u4E3A\u6BCF\u9879\u63D0\u4F9B\u4E00\u4E2A\u552F\u4E00\u7684 <code>key</code> \u5C5E\u6027</p><div class="language-vue line-numbers-mode"><pre><code><span class="token comment">&lt;!-- \u5047\u8BBE\u5728data\u4E2D\u5B9A\u4E49\u8FD9\u6837\u7684\u6570\u636E:
  data() {
    return {
     todos: [
        {
          id: 1,
          title: &#39;Do the dishes&#39;
        },
        {
          id: 2,
          title: &#39;Take out the trash&#39;
        },
        {
          id: 3,
          title: &#39;Mow the lawn&#39;
        }
      ],
    }
  }
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     {{ index }} - {{ item.title }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>key \u7684\u503C\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\u6216\u6570\u5B57\u7C7B\u578B</li><li>key \u7684\u503C\u5FC5\u987B\u5177\u6709\u552F\u4E00\u6027\uFF08\u5373\uFF1Akey \u7684\u503C\u4E0D\u80FD\u91CD\u590D\uFF09</li><li>\u5EFA\u8BAE\u628A\u6570\u636E\u9879 id \u5C5E\u6027\u7684\u503C\u4F5C\u4E3A key \u7684\u503C\uFF08\u56E0\u4E3A id \u5C5E\u6027\u7684\u503C\u5177\u6709\u552F\u4E00\u6027\uFF09</li><li>\u4F7F\u7528 index \u7684\u503C\u5F53\u4F5C key \u7684\u503C\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\uFF08\u56E0\u4E3A index \u7684\u503C\u4E0D\u5177\u6709\u552F\u4E00\u6027\uFF09</li><li>\u5EFA\u8BAE\u4F7F\u7528 v-for \u6307\u4EE4\u65F6\u4E00\u5B9A\u8981\u6307\u5B9A key \u7684\u503C\uFF08\u65E2\u63D0\u5347\u6027\u80FD\u3001\u53C8\u9632\u6B62\u5217\u8868\u72B6\u6001\u7D0A\u4E71\uFF09</li></ul></div><h2 id="_3-4-v-for-\u4E0E-v-if-\u4E00\u540C\u4F7F\u7528" tabindex="-1">3.4 <code>v-for</code> \u4E0E <code>v-if</code> \u4E00\u540C\u4F7F\u7528 <a class="header-anchor" href="#_3-4-v-for-\u4E0E-v-if-\u4E00\u540C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5F53\u5B83\u4EEC\u5904\u4E8E\u540C\u4E00\u8282\u70B9\uFF0C<code>v-if</code> \u7684\u4F18\u5148\u7EA7\u6BD4 <code>v-for</code> \u66F4\u9AD8\uFF0C\u8FD9\u610F\u5473\u7740 <code>v-if</code> \u5C06\u6CA1\u6709\u6743\u9650\u8BBF\u95EE <code>v-for</code> \u91CC\u7684\u53D8\u91CF\uFF1A</p><div class="language-vue line-numbers-mode"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ todo.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u4EE5\u628A <code>v-for</code> \u79FB\u52A8\u5230 <code>&lt;template&gt;</code> \u6807\u7B7E\u4E2D\u6765\u4FEE\u6B63\uFF1A</p><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ todo.name }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,16),l=[p];function o(c,u,i,r,d,k){return a(),s("div",null,l)}var v=n(e,[["render",o]]);export{m as __pageData,v as default};
