<template>
  <main class="css-2s7cv9">
    <div class="css-1e6tmwa">
      <div class="css-ctfldp">
        <div class="css-18ukoy4">
          <div class="css-73i06">
            <div class="css-8f6za">
              <div class="css-5frbec">
                <div class="css-2oeu9x">
                  <h2 data-bn-type="text" class="css-1tuweav">USDT</h2>
                </div>
                <div class="css-1oaslv6">
                  <h2 data-bn-type="text" class="css-1v7pqln">BTC</h2>
                </div>
                <div class="css-1oaslv6">
                  <h2 data-bn-type="text" class="css-1v7pqln">ETH</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="css-1vvonr4">
        <div class="css-j6j9pm">
          <div class="css-n901vs">
            <div class="css-vurnku">
              <div data-bn-type="text" class="css-wc0fcl">金额</div>
              <div class="css-10nf7hq">
                <div class="css-ybbx55">
                  <div class="css-1uzbgu3">
                    <input
                      data-bn-type="input"
                      id="C2Csearchamount_searchbox_amount"
                      value=""
                      placeholder="输入金额"
                      autocomplete="off"
                      name="transAmount"
                      class="css-16fg16t"
                    />
                    <div class="bn-input-suffix css-vurnku">
                      <div class="css-10nf7hq">
                        <div data-bn-type="text" class="css-1tria08">CNY</div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="
                      position: fixed;
                      inset: 0px auto auto 0px;
                      transform: translate(352px, 188px);
                    "
                    class="css-gv1gi9"
                    data-popper-reference-hidden="false"
                    data-popper-escaped="false"
                    data-popper-placement="bottom-start"
                  >
                    <div class="css-11lind1">
                      <div data-bn-type="text" class="css-aff4ws">100</div>
                      <div data-bn-type="text" class="css-aff4ws">1000</div>
                      <div data-bn-type="text" class="css-aff4ws">5000</div>
                      <div data-bn-type="text" class="css-aff4ws">1万</div>
                      <div data-bn-type="text" class="css-aff4ws">10万</div>
                      <div data-bn-type="text" class="css-aff4ws">20万</div>
                    </div>
                  </div>
                </div>
                <button
                  data-bn-type="button"
                  id="C2Csearchamount_btn_search"
                  class="css-pd3j1f"
                >
                  <div data-bn-type="text" class="css-1cjl26j">搜索</div>
                </button>
              </div>
            </div>
            <div class="css-psscs0">
              <div data-bn-type="text" class="css-wc0fcl">法币</div>
              <div id="C2Cfiatfilter_searhbox_fiat" class="css-up63jh">
                <div class="bn-input-md css-1yjx7aq">
                  <input
                    data-bn-type="input"
                    value="CNY"
                    class="bn-sdd-input css-1jpgac0"
                  />
                  <div class="bn-input-suffix css-vurnku">
                    <div class="css-13c2b5p">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-qqq3wz"
                      >
                        <path
                          d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="bn-sdd-value css-xzk51t">
                  <div class="css-10nf7hq">
                    <img
                      src="https://res.pxpstatic.com/image/c2c/icons/fiat/CNY.png"
                      class="css-irs0fm"
                    />
                    <div data-bn-type="text" class="css-vurnku">CNY</div>
                  </div>
                </div>
                <div class="bn-sdd-dropdown closing css-1tsr9u1">
                  <div class="bn-sdd-innerInputContainer css-16vu25q">
                    <div class="bn-input-md css-1n2xeev">
                      <div class="bn-input-prefix css-vurnku">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="bn-sdd-icon css-lw2sj1"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <input
                        data-bn-type="input"
                        placeholder=""
                        class="css-jl5e70"
                        value=""
                      />
                      <div class="bn-input-suffix css-vurnku">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="bn-sdd-icon css-vo3j7u"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul role="listbox" class="bn-sdd-list css-2rl2kr">
                    <li
                      role="option"
                      id="AUD"
                      title="AUD"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/AUD.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              AUD
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="CNY"
                      title="CNY"
                      class="bnb-active-option bn-sdd-option-item css-xb0zh1"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/CNY.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              CNY
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="EUR"
                      title="EUR"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/EUR.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              EUR
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="GBP"
                      title="GBP"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/GBP.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              GBP
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="HKD"
                      title="HKD"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/HKD.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              HKD
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="MYR"
                      title="MYR"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/MYR.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              MYR
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="SGD"
                      title="SGD"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/SGD.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              SGD
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="TWD"
                      title="TWD"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/TWD.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              TWD
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="USD"
                      title="USD"
                      class="bn-sdd-option-item css-1x9f32u"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1pysja1">
                          <div class="css-10nf7hq">
                            <img
                              src="https://res.pxpstatic.com/image/c2c/icons/fiat/USD.png"
                              class="css-irs0fm"
                            />
                            <div data-bn-type="text" class="css-vurnku">
                              USD
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="css-psscs0">
              <div data-bn-type="text" class="css-wc0fcl">支付方式</div>
              <div id="C2Cpaymentfilter_searchbox_payment" class="css-4nj3y">
                <div class="bn-input-md css-1yjx7aq">
                  <input
                    data-bn-type="input"
                    value="所有支付方式"
                    class="bn-sdd-input css-1jpgac0"
                  />
                  <div class="bn-input-suffix css-vurnku">
                    <div class="css-13c2b5p">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-qqq3wz"
                      >
                        <path
                          d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="bn-sdd-value css-xzk51t">
                  <div class="css-10nf7hq">
                    <div data-bn-type="text" class="css-vurnku">
                      所有支付方式
                    </div>
                  </div>
                </div>
                <div class="bn-sdd-dropdown closing css-1tsr9u1">
                  <div class="bn-sdd-innerInputContainer css-16vu25q">
                    <div class="bn-input-md css-1n2xeev">
                      <div class="bn-input-prefix css-vurnku">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="bn-sdd-icon css-lw2sj1"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <input data-bn-type="input" class="css-jl5e70" value="" />
                      <div class="bn-input-suffix css-vurnku">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="bn-sdd-icon css-vo3j7u"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul role="listbox" class="bn-sdd-list css-2rl2kr">
                    <li
                      role="option"
                      id="所有支付方式"
                      title="所有支付方式"
                      class="bnb-active-option bn-sdd-option-item css-f4fbx5"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1ii0qmr">
                          <div class="css-fc6aad"></div>
                        </div>
                        <div class="css-1pysja1">所有支付方式</div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="银行卡"
                      title="银行卡"
                      class="bn-sdd-option-item css-yoe7tc"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1ii0qmr">
                          <div class="css-fc6aad"></div>
                        </div>
                        <div class="css-1pysja1">银行卡</div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="支付宝"
                      title="支付宝"
                      class="bn-sdd-option-item css-yoe7tc"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1ii0qmr">
                          <div class="css-11kmi3m"></div>
                        </div>
                        <div class="css-1pysja1">支付宝</div>
                      </div>
                    </li>
                    <li
                      role="option"
                      id="微信"
                      title="微信"
                      class="bn-sdd-option-item css-yoe7tc"
                    >
                      <div class="bn-sdd-option css-4cffwv">
                        <div class="css-1ii0qmr">
                          <div class="css-1z0z3q9"></div>
                        </div>
                        <div class="css-1pysja1">微信</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="css-1g678at">
            <div class="css-ybbx55">
              <div class="css-10nf7hq">
                <button
                  data-bn-type="button"
                  id="C2CofferList_btn_refresh"
                  class="css-1wmmfja"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="css-1osipyl"
                  >
                    <path
                      d="M20.7 11.925c0 2.1-.8 4.1-2.3 5.6-1.6 1.5-3.6 2.3-5.6 2.3-2 0-4-.8-5.6-2.3l-1.3-1.3 1.4-1.4 1.3 1.3c2.3 2.3 6 2.3 8.3 0 1.1-1.1 1.7-2.6 1.7-4.2s-.6-3.1-1.7-4.2c-2.3-2.3-6-2.3-8.3 0l-1.1 1.2h3.3v2H4v-6.8h2v3.4l1.2-1.2c3.1-3.1 8.1-3.1 11.2 0 1.5 1.5 2.3 3.5 2.3 5.6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div class="css-1c1ahuy">刷新设置</div>
                </button>
              </div>
              <div
                style="
                  position: fixed;
                  inset: 0px auto auto 0px;
                  transform: translate(1428px, 196px);
                "
                class="css-gv1gi9"
                data-popper-reference-hidden="false"
                data-popper-escaped="false"
                data-popper-placement="bottom-start"
              >
                <div class="css-w6h28z">
                  <div class="css-11735e1">暂不处理</div>
                  <div class="css-11735e1">5秒自动刷新</div>
                  <div class="css-11735e1">10秒自动刷新</div>
                  <div class="css-11735e1">20秒自动刷新</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="css-1g7pa1f">
        <div class="css-1jsnjtq">
          <div class="css-1engtlv">
            <div class="css-1ee59nr">广告主</div>
            <div class="css-yvjfec">价格</div>
            <div class="css-8i4gf0">限额/可用资产</div>
            <div class="css-az0ant">支付方式</div>
            <div class="css-1dbfbyw">
              <div data-bn-type="text" class="css-vurnku">交易</div>
              <div class="css-1u8clgq">0手续费</div>
            </div>
          </div>
          <div class="css-vurnku">
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">衫</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=sf638ac1e5f653fa098e6849fa3bb64ab"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          衫奢国际
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        244 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        99.19% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.33</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          262.32 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          100.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          1,660.48
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">毛</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=s38900a19340d33b9a1abd769ddbacec0"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          毛爷爷
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        15 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        93.75% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.33</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          2,850.35 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          1,000.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          1,480.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">小</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=se9621fb5a84932a09ac40b2e7b180e68"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          小四妹
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        110 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        94.02% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.35</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          967.12 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          1,000.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          3,000.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">面</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=s4bc0c1486f7c3c75a8b81d085ea43b64"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          面壁者小小福
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        75 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        96.15% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.35</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          804.26 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          100.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          5,107.05
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">志</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=sc27290e3b1e2351aacc650eef080666a"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          志勇双全
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        338 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        100.00% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.35</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          100.00 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          600.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          635.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">澄</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=s3aa4960237de341f8dbdd974c7b3d366"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          澄澄澄
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        56 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        96.55% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.40</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          485.34 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          100.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          499.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">四</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=sf3839766d86c369f81c9c375eebeddaf"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          四海商行
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="bottom"
                          style="
                            position: absolute;
                            left: -31px;
                            top: 26px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, 6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        98 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        77.78% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.41</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          22,000.01 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          30,000.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          141,020.06
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="bottom"
                      style="
                        position: absolute;
                        left: -6px;
                        top: 32px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, 6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">祝</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=s6f2bde7f46753db7a56a5c1cfda9b176"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          祝您暴富（安全诚信）
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="false"
                          data-popper-escaped="false"
                          data-popper-placement="top"
                          style="
                            position: absolute;
                            left: -31px;
                            top: -40px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, -6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        318 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        100.00% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.51</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          378.75 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          2,000.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          2,465.66
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="false"
                      data-popper-escaped="false"
                      data-popper-placement="top"
                      style="
                        position: absolute;
                        left: -6px;
                        top: -40px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, -6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">银行卡</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">银行卡</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-ys39k9">银行卡</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">三</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=sd99855c854723f6095f0472c141f8a24"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          三盛安全快捷
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="true"
                          data-popper-escaped="true"
                          data-popper-placement="top"
                          style="
                            position: absolute;
                            left: -31px;
                            top: -40px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, -6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        43 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        93.48% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.52</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          2,191.79 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          10,000.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          14,290.47
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="true"
                      data-popper-escaped="true"
                      data-popper-placement="top"
                      style="
                        position: absolute;
                        left: -6px;
                        top: -40px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, -6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">支付宝</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-tynd6k">支付宝</div>
                    </div>
                  </div>
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="true"
                      data-popper-escaped="true"
                      data-popper-placement="top"
                      style="
                        position: absolute;
                        left: -6px;
                        top: -40px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, -6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">微信</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 21px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-1dkiexa">微信</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">支付宝</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-tynd6k">支付宝</div>
                  </div>
                </div>
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">微信</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-1dkiexa">微信</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="css-1f0y5pt">
              <div class="css-1q1sp11">
                <div class="css-1mjaumg">
                  <div class="css-22x53h">
                    <div class="css-1rhb69f">
                      <div class="css-fcyz22">资</div>
                      <a
                        id="C2Cofferlistsell_link_merchant"
                        class=""
                        href="/zh-CN/advertiserDetail?advertiserNo=s29541a7602ae339f81c9640661596123"
                        target="_self"
                        style="
                          margin-left: 8px;
                          margin-right: 0px;
                          text-decoration: none;
                          cursor: pointer;
                          color: rgb(26, 31, 52);
                        "
                        ><div data-bn-type="text" class="css-1xfitk7">
                          资金安全秒到
                        </div></a
                      >
                      <div class="css-1f9551p">
                        <div
                          class="bn-tooltip-box css-15400dx"
                          data-popper-reference-hidden="true"
                          data-popper-escaped="true"
                          data-popper-placement="top"
                          style="
                            position: absolute;
                            left: -31px;
                            top: -40px;
                            transition: opacity 120ms ease-in-out 0s,
                              transform 120ms ease-in-out 0s;
                            opacity: 0;
                            transform: translate3d(0px, -6px, 0px);
                            visibility: hidden;
                          "
                        >
                          认证广告方<i class="gap-fill"></i>
                        </div>
                        <img
                          src="https://res.pxpstatic.com/static/eaas-c2c/pexpay/static/images/trade/authentication-icon.svg"
                          class="css-ft2fn3"
                        />
                      </div>
                    </div>
                    <div class="css-2m7z0">
                      <div data-bn-type="text" class="css-hg6173">
                        48 成交量
                      </div>
                      <div class="css-1u7jnqh"></div>
                      <div data-bn-type="text" class="css-k4qtt">
                        97.96% 成交率
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-11db165">
                  <div class="css-4ptx7h">
                    <div class="css-1kj0ifu">
                      <div class="css-1m1f8hn">6.53</div>
                      <div class="css-dyl994">CNY</div>
                    </div>
                  </div>
                </div>
                <div class="css-lalzkr">
                  <div class="css-vurnku">
                    <div class="css-3v2ep2">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">
                          可用资产
                        </div>
                      </div>
                      <div class="css-vurnku">
                        <div data-bn-type="text" class="css-1q73lj8">
                          3,304.93 USDT
                        </div>
                      </div>
                    </div>
                    <div class="css-16w8hmr">
                      <div class="css-1xov8jg">
                        <div data-bn-type="text" class="css-1ez451f">限额</div>
                      </div>
                      <div
                        class="css-vurnku"
                        style="direction: ltr; display: flex; flex-wrap: wrap"
                      >
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          5,000.00
                        </div>
                        <div data-bn-type="text" class="css-1tr1euu">-</div>
                        <div class="css-prp3gn">
                          <div data-bn-type="text" class="css-vurnku">￥</div>
                          21,581.19
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-tlcbro">
                  <div class="css-1n3cl9k">
                    <div
                      class="bn-tooltip-box css-15400dx"
                      data-popper-reference-hidden="true"
                      data-popper-escaped="true"
                      data-popper-placement="top"
                      style="
                        position: absolute;
                        left: -6px;
                        top: -40px;
                        transition: opacity 120ms ease-in-out 0s,
                          transform 120ms ease-in-out 0s;
                        opacity: 0;
                        transform: translate3d(0px, -6px, 0px);
                        visibility: hidden;
                      "
                    >
                      <div data-bn-type="text" class="css-vurnku">支付宝</div>
                      <div
                        class="bn-tooltip-arrow css-1u9esp9"
                        data-popper-arrow="true"
                        style="position: absolute; left: 27px"
                      ></div>
                      <i class="gap-fill"></i>
                    </div>
                    <div class="css-306nk4">
                      <div data-bn-type="text" class="css-tynd6k">支付宝</div>
                    </div>
                  </div>
                </div>
                <div class="css-12cfnoy">
                  <div class="css-ha0br8">
                    <button
                      data-bn-type="button"
                      id="C2CofferBuy__btn_buyNow"
                      type="button"
                      class="css-1d0yk00"
                    >
                      <div data-bn-type="text" class="css-1c82c04">
                        购买USDT
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="css-hsq0kg">
                <div class="css-1n3cl9k">
                  <div
                    class="bn-tooltip-box css-15400dx"
                    data-popper-reference-hidden="true"
                    data-popper-escaped="true"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 8px;
                      transition: opacity 120ms ease-in-out 0s,
                        transform 120ms ease-in-out 0s;
                      opacity: 0;
                      transform: translate3d(0px, 6px, 0px);
                      visibility: hidden;
                    "
                  >
                    <div data-bn-type="text" class="css-vurnku">支付宝</div>
                    <div
                      class="bn-tooltip-arrow css-1u9esp9"
                      data-popper-arrow="true"
                      style="position: absolute; left: 0px"
                    ></div>
                    <i class="gap-fill"></i>
                  </div>
                  <div class="css-306nk4">
                    <div data-bn-type="text" class="css-tynd6k">支付宝</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="css-kwfbf">
            <div class="css-b0tuh4" style="direction: ltr">
              <button
                data-bn-type="button"
                class="mirror css-12is4d0"
                disabled=""
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-jsqz4v"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z"
                    fill="currentColor"
                  ></path>
                </svg></button
              ><button
                data-bn-type="button"
                aria-label="Page number 1"
                disabled=""
                class="css-1he63p4"
              >
                1</button
              ><button
                data-bn-type="button"
                aria-label="Page number 2"
                class="css-1jyxmnl"
              >
                2</button
              ><button
                data-bn-type="button"
                class="mirror css-td3ju8"
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="css-jsqz4v"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="css-1ejpgf8"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.css-2s7cv9{
  margin-top: 64px;
}
</style>
