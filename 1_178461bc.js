webpackJsonp([1,8],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/apple/Desktop/wdm/node_modules/.0.6.2@vue-markdown-loader/_cache/webmd-1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = "<section><h2>hello webMarkdown</h2>\n<pre class=\"ks-hl\"><code>   ## hello webMarkdown\n   <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>禁用搜索框</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>input placeholder</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">输入关键词搜索</code></td>\n</tr>\n<tr>\n<td>fuzzydata</td>\n<td>搜索结果集</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>resultattr</td>\n<td>提交后台字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">key</code></td>\n</tr>\n<tr>\n<td>datalabel</td>\n<td>显示名称字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">label</code></td>\n</tr>\n<tr>\n<td>debounce</td>\n<td>重新调用接口间隔</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">500</code></td>\n</tr>\n<tr>\n<td>actionSearch</td>\n<td>查找结果集</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>actionSelect</td>\n<td>选择某个搜索结果</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-js\"><code>    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n\n    }\n</code></pre>\n</section>";

/***/ }

});