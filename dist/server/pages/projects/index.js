exports.ids = [5];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=template&id=94fdcc86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2 class=\"block text-gray-700 text-2xl font-bold mb-2\">Degenz Wallet verification</h2> "+((_vm.step === 0)?("<div class=\"block text-gray-700 text-sm mx-auto\"><img src=\"/loading.gif\" class=\"mx-auto\"></div>"):"<!---->")+" "+((_vm.step === 2)?("<div class=\"block text-gray-700 text-sm mx-auto\"><div class=\"block text-gray-700 text-sm mb-2\">\n      Error looking up projects. Try again later.\n    </div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=template&id=94fdcc86&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(62);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=script&lang=ts&


/* harmony default export */ var projectsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      step: 0,
      projects: null,
      headers: [{
        text: 'Project',
        align: 'left',
        sortable: false,
        value: 'project_friendly_name'
      }, {
        text: '',
        align: 'left',
        value: 'is_holder'
      }, {
        text: '',
        align: 'left',
        value: 'project_website'
      }, {
        text: '',
        align: 'left',
        value: 'twitter_username'
      }, {
        text: '',
        align: 'left',
        value: 'discord_url'
      }, {
        text: 'Verified',
        align: 'left',
        value: 'verifications'
      }, {
        text: 'Sales',
        align: 'left',
        value: 'sales'
      }]
    };
  },

  async mounted() {
    // determine if user is already logged in
    try {
      let res = await external_axios_default.a.get('/api/getProjects');

      if (res.data) {
        // update the data
        // Icons from https://materialdesignicons.com/
        // @ts-ignore
        res.data.projects.forEach(project => {
          if (project.project_twitter_name) {
            project.twitter_username = project.project_twitter_name.replaceAll("@", "");
          }
        }); // @ts-ignore

        this.projects = res.data.projects;
        this.step = 1;
      }
    } catch (e) {
      console.log("unable to load projects", e);
      this.step = 2;
      return;
    }
  }

}));
// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_projectsvue_type_script_lang_ts_ = (projectsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/projects/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a3c88b3"
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map