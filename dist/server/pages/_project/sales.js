exports.ids = [2];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_project/sales.vue?vue&type=template&id=c41034c2&class=main&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.step === 1)?("<div class=\"block text-gray-700 text-sm mx-auto\"><img src=\"/loading.gif\" class=\"mx-auto\"></div>"):"<!---->")+" "+((_vm.step === 2)?("<div class=\"block text-gray-700 text-sm\">\n      Project not found.\n    </div>"):"<!---->")+" "+((_vm.step === 3)?("<div class=\"block text-gray-700 text-sm\"><h2 class=\"block text-gray-700 text-2xl font-bold mb-5\">"+_vm._ssrEscape(_vm._s(_vm.projectName))+"</h2> <div class=\"flex flex-wrap -mx-4 -mb-8\">"+((this.sales.length == 0)?("<div class=\"px-4 mb-8\">Watching for sales, but have not detected any so far!</div>"):"<!---->")+" "+(_vm._ssrList((_vm.sales),function(sale){return ("<div class=\"md:w-1/3 px-4 mb-8\"><a"+(_vm._ssrAttr("href",sale.data.nftInfo.mintLink))+"><img"+(_vm._ssrAttr("src",sale.data.nftInfo.image))+" alt class=\"rounded shadow-md\"></a> <div class=\"mt-2 text-gray-700 text-xs\"><a"+(_vm._ssrAttr("href",sale.data.txLink))+">"+_vm._ssrEscape(_vm._s(sale.data.nftInfo.id)+" @ "+_vm._s(sale.data.saleAmount)+" SOL")+"</a></div> <div class=\"mt-0 text-gray-400 text-xs\">"+_vm._ssrEscape("\n            "+_vm._s(sale.data.relativeTime)+"\n          ")+"</div></div>")}))+"</div></div>"):"<!---->")+" "+((_vm.step > 2)?("<div class=\"block text-gray-700 text-sm mt-5\"><h2 class=\"block text-gray-700 text-lg font-bold mb-2\">What is Degenz Tools?</h2> <div class=\"block text-gray-700 text-sm mb-2\">\n      At <a href=\"http://www.nft4cause.app\" class=\"hyperlink\">Degenz Tools</a> we create socially relevant NFTs to generate funds for global profits. <b>Every NFT minted or traded on a secondary market</b> Everything else funds the development of tools like this to enhance the Solana community.\n      </div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_project/sales.vue?vue&type=template&id=c41034c2&class=main&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(62);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_project/sales.vue?vue&type=script&lang=ts&



var hdate = __webpack_require__(65);

/* harmony default export */ var salesvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      step: 1,
      projectName: '',
      sales: []
    };
  },

  async mounted() {
    // Retrieve the project config based on wildcard path
    var projectName = this.$route.path.replaceAll("/sales", "").replaceAll("/", ""); // retrieve project config

    try {
      var projectConfig = await external_axios_default.a.get('/api/getProject?project=' + projectName);
      this.projectName = projectConfig.data.project_friendly_name;
    } catch (e) {
      console.log(e);
    } // retrieve sales and add links


    var projectSales;

    try {
      projectSales = await external_axios_default.a.get('/api/getProjectSales?project=' + projectName);

      for (var i = 0; i < projectSales.data.sales.length; i++) {
        projectSales.data.sales[i].data.relativeTime = hdate.relativeTime(new Date(projectSales.data.sales[i].data.time * 1000));
        projectSales.data.sales[i].data.txLink = "https://solscan.io/tx/" + projectSales.data.sales[i].data.txSignature;
        projectSales.data.sales[i].data.nftInfo.mintLink = "https://solscan.io/token/" + projectSales.data.sales[i].data.nftInfo.mint;
      } // render the properties


      this.sales = projectSales.data.sales.reverse();
    } catch (e) {
      console.log(e);
    } // return not found if the project config is empty


    if (!projectSales) {
      this.step = 2;
      return;
    } // load the sales data


    this.step = 3;
  }

}));
// CONCATENATED MODULE: ./pages/_project/sales.vue?vue&type=script&lang=ts&
 /* harmony default export */ var _project_salesvue_type_script_lang_ts_ = (salesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/_project/sales.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _project_salesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44d39d4d"
  
)

/* harmony default export */ var sales = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sales.js.map