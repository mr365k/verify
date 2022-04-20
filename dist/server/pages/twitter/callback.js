exports.ids = [6];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/twitter/callback.vue?vue&type=template&id=7ab5664a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2 class=\"block text-gray-700 text-2xl font-bold mb-2\">Connecting Twitter</h2> "+((_vm.step === 1)?("<div class=\"block text-gray-700 text-sm mx-auto\"><img src=\"/loading.gif\" class=\"mx-auto\"></div>"):"<!---->")+" "+((_vm.step === 2)?("<div class=\"block text-gray-700 text-sm mx-auto\">"+_vm._ssrEscape("\n        ✅ Successfully connected @"+_vm._s(_vm.userName)+"!\n        ")+"<br> <br> <a href=\"/manage\" class=\"hyperlink\">Back to project</a></div>"):"<!---->")+" "+((_vm.step === 3)?("<div class=\"block text-gray-700 text-sm mx-auto\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.error)+"\n    ")+"</div>"):"<!---->")+" "+((_vm.step === 4)?("<div class=\"block text-gray-700 text-sm\">\n        We're having trouble connecting to your wallet. The currently supported wallet configuration is <a href=\"https://phantom.app/\" class=\"hyperlink\">Phantom</a> with browser extension on a desktop or laptop device. Mobile support coming soon, and we are working to add support for additional wallet vendors!\n        <br> <br>\n        Please ensure Phantom is available on your device and try again.\n    </div>"):"<!---->")+" "+((_vm.step === 5)?("<div class=\"block text-gray-700 text-sm\">\n        Please sign the message to verify that you're the owner of your wallet. We will connect your Twitter account to the project associated with your wallet.\n        <br> <br>\n        Review the message before signing and make sure that nothing else is requested except signature.\n    </div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/twitter/callback.vue?vue&type=template&id=7ab5664a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(62);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/twitter/callback.vue?vue&type=script&lang=ts&


/* harmony default export */ var callbackvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      step: 1,
      user: {},
      userName: '',
      accessToken: '',
      tokenSecret: '',
      signature: '',
      publicKey: '',
      error: null
    };
  },

  async mounted() {
    // determine if user is already logged in
    try {
      let res = await external_axios_default.a.get('/api/getConnectedWallet');

      if (res.data) {
        if (res.data.publicKey && res.data.signature) {
          console.log(`wallet is connected ${res.data.publicKey}`);
          this.publicKey = res.data.publicKey;
          this.signature = res.data.signature;
        }
      }
    } catch (e) {
      console.log("user is not logged in", e);
      this.step = 4;
      return;
    }

    try {
      // retrieve the twitter user's access key after OAuth is completed
      let res = await external_axios_default.a.get('/api/twitter/callback', {
        params: this.$route.query
      });
      this.user = res.data.user; // @ts-ignore

      this.userName = this.user.username; // @ts-ignore

      this.accessToken = this.user.access_token; // @ts-ignore

      this.tokenSecret = this.user.token_secret;
      this.step = 2;
    } catch (e) {
      this.error = e;
      this.step = 3;
      return;
    }

    try {
      // save the access key
      let res2 = await external_axios_default.a.post('/api/updateProject', {
        // @ts-ignore I honestly didn't wanna bother with strong typing this.. Feel free if you'd like
        publicKey: this.publicKey,
        signature: this.signature,
        twitterUsername: this.userName,
        twitterAccessToken: this.accessToken,
        twitterTokenSecret: this.tokenSecret
      });
      console.log(`saved twitter connection status: ${res2.status} `);

      if (res2.status == 200) {
        this.step = 2;
      }
    } catch (e) {
      console.log(e);
      this.error = e;
      this.step = 3;
      return;
    }
  }

}));
// CONCATENATED MODULE: ./pages/twitter/callback.vue?vue&type=script&lang=ts&
 /* harmony default export */ var twitter_callbackvue_type_script_lang_ts_ = (callbackvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/twitter/callback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  twitter_callbackvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "028a00de"
  
)

/* harmony default export */ var callback = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=callback.js.map