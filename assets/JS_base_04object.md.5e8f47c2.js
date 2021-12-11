import{_ as n,c as s,o as a,d as e}from"./app.10b37c34.js";const k='{"title":"4.1 \u601D\u8003","description":"","frontmatter":{},"headers":[{"level":2,"title":"4.1 \u601D\u8003","slug":"_4-1-\u601D\u8003"},{"level":2,"title":"4.2 \u4EC0\u4E48\u662F\u5BF9\u8C61\uFF1F","slug":"_4-2-\u4EC0\u4E48\u662F\u5BF9\u8C61\uFF1F"},{"level":2,"title":"4.3  \u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61","slug":"_4-3-\u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61"},{"level":2,"title":"4.4 \u8BFE\u5802\u7EC3\u4E60","slug":"_4-4-\u8BFE\u5802\u7EC3\u4E60"},{"level":2,"title":"4.5 \u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61\uFF1A","slug":"_4-5-\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61\uFF1A"},{"level":2,"title":"4.6 \u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"_4-6-\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5"},{"level":2,"title":"4.7 \u5BF9\u8C61\u603B\u7ED3","slug":"_4-7-\u5BF9\u8C61\u603B\u7ED3"}],"relativePath":"JS/base/04object.md","lastUpdated":1639244732474}',p={},l=e(`<h2 id="_4-1-\u601D\u8003" tabindex="-1">4.1 \u601D\u8003 <a class="header-anchor" href="#_4-1-\u601D\u8003" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><pre><code>\uFF1A \u5982\u4F55\u901A\u8FC7js\u51FD\u6570\u5C06\u4EBA\u7684\u4FE1\u606F\u8F93\u51FA\uFF1F

\u4E00\u4E2A\u5177\u4F53\u7684\u4E8B\u52A1\u3010\u7C7B\u4E2D\u7684\u5177\u4F53\u7684\u67D0\u4E2A\u5B9E\u4F8B\u3011
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_4-2-\u4EC0\u4E48\u662F\u5BF9\u8C61\uFF1F" tabindex="-1">4.2 \u4EC0\u4E48\u662F\u5BF9\u8C61\uFF1F <a class="header-anchor" href="#_4-2-\u4EC0\u4E48\u662F\u5BF9\u8C61\uFF1F" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><pre><code>\u261E\u73B0\u5B9E\u4E16\u754C\uFF1A \u4E07\u4E8B\u4E07\u7269\u7686\u5BF9\u8C61\u3002

\u2714\u5BF9\u8C61\uFF1A \u7C7B\u4E2D\u7684\u5177\u4F53\u7684\u67D0\u4E2A\u5B9E\u4F8B\u3010\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u96C6\u5408\u4F53\u3011
		   \u5FC5\u987B\u662F\u4E00\u4E2A\u5177\u4F53\u7684\u4E8B\u7269\u3002 \uFF08\u624B\u673A\uFF0C\u6C7D\u8F66\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5C5E\u4E8E\u4E00\u7C7B\u5BF9\u8C61\uFF09
	      \u25C6 \u5BF9\u8C61\u662F\u7531 \u7279\u5F81\uFF08\u540D\u8BCD\uFF09\u3010\u5C5E\u6027\u3011 \u548C \u884C\u4E3A\uFF08\u52A8\u8BCD\uFF09\u3010\u65B9\u6CD5\u3011

\u261E\u7A0B\u5E8F\u4E2D\u7684\u5BF9\u8C61\uFF1A \u5BF9\u73B0\u5B9E\u5BF9\u8C61\u7684\u62BD\u8C61


\u261E \u603B\u7ED3\uFF1A
	  <span class="token number">1.</span> \u7A0B\u5E8F\u4E2D\u7684\u5BF9\u8C61\uFF1A
		\u2714 \u5BF9\u8C61\u5FC5\u987B\u6709\u5BF9\u5E94\u7684\u5C5E\u6027\u3010\u63CF\u8FF0\u5BF9\u8C61\u7684\u7279\u70B9\uFF0C\u5728\u7A0B\u5E8F\u4E2D\u4E00\u822C\u4F7F\u7528\u540D\u8BCD\u63CF\u8FF0\u3011

\u2714 \u5BF9\u8C61\u53EF\u4EE5\u6709\u884C\u4E3A\u52A8\u4F5C\u65B9\u6CD5 \u3010\u65B9\u6CD5\u7528\u6765\u63CF\u8FF0\u5177\u4F53\u5BF9\u8C61\u7684\u884C\u4E3A\u52A8\u4F5C\uFF0C\u4E00\u822C\u65B9\u6CD5\u4F7F\u7528\u52A8\u8BCD\u3011
\u5BF9\u8C61<span class="token punctuation">.</span>\u5C5E\u6027\u540D
\u5BF9\u8C61<span class="token punctuation">.</span><span class="token function">\u65B9\u6CD5\u540D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u3010document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u3011


\u5C5E\u6027\uFF1A\u8BBF\u95EE\uFF0C\u3010\u5BF9\u8C61<span class="token punctuation">.</span>\u5C5E\u6027\u540D\u3011\u3010\u5BF9\u8C61<span class="token punctuation">[</span><span class="token string">&#39;\u5C5E\u6027\u540D&#39;</span><span class="token punctuation">]</span>\u3011
\u65B9\u6CD5\uFF1A\u6267\u884C\uFF0C\u3010\u5BF9\u8C61<span class="token punctuation">.</span><span class="token function">\u65B9\u6CD5\u540D</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u3011

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_4-3-\u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61" tabindex="-1">4.3 \u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61 <a class="header-anchor" href="#_4-3-\u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\uFF1A\u80FD\u591F\u81EA\u5DF1\u521B\u5EFA\u5BF9\u8C61</p><div class="language-javascript line-numbers-mode"><pre><code>\u261E \u901A\u8FC7\u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61
	
	 <span class="token keyword">var</span>  \u53D8\u91CF\u540D  <span class="token operator">=</span>  <span class="token punctuation">{</span>  key<span class="token operator">:</span> value<span class="token punctuation">,</span> key<span class="token operator">:</span> value<span class="token punctuation">,</span>  key<span class="token operator">:</span> <span class="token function">functon</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token punctuation">}</span><span class="token punctuation">;</span>


\u5907\u6CE8\uFF1A
	<span class="token number">1.</span> \u521B\u5EFA\u5BF9\u8C61\uFF0C\u5FC5\u987B\u8981\u786E\u5B9A\u5177\u4F53\u7684\u4E8B\u7269
    <span class="token number">2.</span> \u521B\u5EFA\u5BF9\u8C61\uFF0C\u5FC5\u987B\u8981\u786E\u5B9A\u5BF9\u8C61\u6709\u54EA\u4E9B\u5C5E\u6027\u3010\u7279\u5F81\u3011\u6216\u8005\u65B9\u6CD5\u3010\u52A8\u4F5C\uFF0C\u884C\u4E3A\u3011
    <span class="token number">3.</span> \u5982\u679C\u4E00\u6B21\u60F3\u8981\u8F93\u51FA\u591A\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5C06\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u653E\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\u3002


\u261E \u8BBF\u95EE\u5BF9\u8C61\u5C5E\u6027    \uFF08\u5BF9\u8C61<span class="token punctuation">.</span>\u5C5E\u6027   <span class="token operator">|</span>  \u5BF9\u8C61<span class="token punctuation">[</span><span class="token string">&#39;\u5C5E\u6027\u540D&#39;</span><span class="token punctuation">]</span>\uFF09\u3010\u5BF9\u8C61<span class="token punctuation">.</span>\u5C5E\u6027\u540D\uFF0C\u5BF9\u8C61<span class="token punctuation">[</span><span class="token string">&#39;\u5C5E\u6027\u540D&#39;</span><span class="token punctuation">]</span>\u3011
\u261E \u8BBF\u95EE\u5BF9\u8C61\u65B9\u6CD5    \uFF08\u5BF9\u8C61<span class="token punctuation">.</span><span class="token function">\u65B9\u6CD5\u540D</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF09

\u6CE8\u610F\uFF1A
	 <span class="token number">1</span>\u3001 \u5982\u679C\u901A\u8FC7  \u5BF9\u8C61<span class="token punctuation">[</span><span class="token string">&#39;\u5C5E\u6027\u540D&#39;</span><span class="token punctuation">]</span>\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u65F6\u5019\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u4F7F\u7528\u5B57\u7B26\u4E32\u683C\u5F0F


\u261E \u51FD\u6570\uFF1A\u72EC\u7ACB\u5B58\u5728\u7684\u51FD\u6570

\u261E \u65B9\u6CD5\uFF1A \u5C5E\u4E8E\u5BF9\u8C61\u7684\u51FD\u6570\uFF08\u533F\u540D\u51FD\u6570\uFF09
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_4-4-\u8BFE\u5802\u7EC3\u4E60" tabindex="-1">4.4 \u8BFE\u5802\u7EC3\u4E60 <a class="header-anchor" href="#_4-4-\u8BFE\u5802\u7EC3\u4E60" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><pre><code><span class="token number">1.</span> \u521B\u5EFA\u4E00\u4E2A\u82F1\u96C4\u5BF9\u8C61\u3010\u59D3\u540D\uFF0C\u5E74\u9F84\uFF0C\u6027\u522B\uFF0C\u6B66\u5668\uFF0C\u9003\u8DD1\u6280\u80FD\uFF0C\u653B\u51FB\u522B\u4EBA\u3011
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_4-5-\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61\uFF1A" tabindex="-1">4.5 \u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61\uFF1A <a class="header-anchor" href="#_4-5-\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61\uFF1A" aria-hidden="true">#</a></h2><div class="language-"><pre><code>  var o = {
      name: &#39;zs&#39;,
      age: 18,
      sex: true,
      sayHi: function () {
          console.log(this.name);
      }
}; 
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_4-6-\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1">4.6 \u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5 <a class="header-anchor" href="#_4-6-\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><pre><code>\u261E \u6DFB\u52A0\u5C5E\u6027\uFF1A
	 \u5BF9\u8C61\u53D8\u91CF<span class="token punctuation">.</span>\u5C5E\u6027\u540D <span class="token operator">=</span> \u503C<span class="token punctuation">;</span>

\u261E \u6DFB\u52A0\u65B9\u6CD5\uFF1A
\u5BF9\u8C61\u53D8\u91CF<span class="token punctuation">.</span><span class="token function-variable function">\u65B9\u6CD5\u540D</span> <span class="token operator">=</span>  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_4-7-\u5BF9\u8C61\u603B\u7ED3" tabindex="-1">4.7 \u5BF9\u8C61\u603B\u7ED3 <a class="header-anchor" href="#_4-7-\u5BF9\u8C61\u603B\u7ED3" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><pre><code> <span class="token number">1.</span> \u7A0B\u5E8F\u4E2D\u7684\u5BF9\u8C61\uFF1A \u7C7B\u4E2D\u7684\u5177\u4F53\u7684\u67D0\u4E2A\u5B9E\u4F8B
 <span class="token number">2.</span> \u5BF9\u8C61\u7684\u57FA\u672C\u7684\u7EC4\u6210\uFF1A  \u5C5E\u6027\u3010\u63CF\u8FF0\u5BF9\u8C61\u7279\u5F81\u7279\u70B9\u3011  <span class="token operator">|</span>  \u65B9\u6CD5 \u3010\u63CF\u8FF0\u5BF9\u8C61\u884C\u4E3A\u52A8\u4F5C\u529F\u80FD\u3011
 <span class="token number">3.</span> \u521B\u5EFA\u5BF9\u8C61\u65B9\u5F0F\uFF1A
 		\u2714 \u5B57\u9762\u91CF\u65B9\u5F0F
        <span class="token keyword">var</span>  obj <span class="token operator">=</span> <span class="token punctuation">{</span>
            key \uFF1A \u503C<span class="token punctuation">,</span>
            key \uFF1A <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
       
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,15),t=[l];function c(r,i,u,o,b,m){return a(),s("div",null,t)}var v=n(p,[["render",c]]);export{k as __pageData,v as default};
