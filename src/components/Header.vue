<template>
  <section id="container-header" :class="{'bg-color-none': scrollTopVal > 400}">
    <div class="header lang-max flex-row space-between nowrap font-14">
      <img :src="nebulaLogo" class="logo-img" alt='Nebula Block' @click="goMain" />
      <div class="el-menu-right flex-row menu-width-mit">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :teleported="true" @select="handleSelect">
          <el-menu-item index="Orchestrator">
            <span class="mit font-14">Orchestrator</span>
          </el-menu-item>
          <el-sub-menu index="eco">
            <template #title>
              <span class="mit font-14">{{$t('menu.Ecosystem')}}</span>
            </template>
            <el-menu-item index="Lagrange">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.5" cy="13.5" r="13.5" fill="#447DFF" />
                    <path d="M12.8275 12.8014C12.655 12.9862 12.5593 13.234 12.5611 13.4915C12.563 13.7489 12.6623 13.9952 12.8375 14.1773C13.0127 14.3593 13.2499 14.4624 13.4977 14.4644C13.7455 14.4663 13.9841 14.3669 14.1619 14.1876C14.2496 14.0966 14.3191 13.9886 14.3665 13.8697C14.414 13.7507 14.4384 13.6233 14.4384 13.4945C14.4384 13.3658 14.414 13.2383 14.3665 13.1194C14.3191 13.0005 14.2496 12.8924 14.1619 12.8014C14.0743 12.7104 13.9703 12.6382 13.8558 12.5889C13.7414 12.5396 13.6187 12.5143 13.4947 12.5143C13.3708 12.5143 13.2481 12.5396 13.1336 12.5889C13.0192 12.6382 12.9151 12.7104 12.8275 12.8014ZM5.09748 9.25C4.84696 9.69897 4.63681 10.171 4.4697 10.66C4.45704 10.6968 4.44423 10.7336 4.43342 10.7713C4.16978 11.5808 4.02548 12.4271 4.00541 13.2814C4.0037 13.3543 4 13.4267 4 13.5C4 13.5733 4.0037 13.6457 4.00541 13.7188C4.11497 15.9642 5.90242 17.75 8.09127 17.75H12.1824V14.7369C12.1824 14.4089 12.0569 14.0943 11.8336 13.8623C11.6103 13.6304 11.3075 13.5 10.9917 13.5H8.09127C8.09127 11.9271 8.91427 10.5549 10.1367 9.81998C10.7582 9.44583 11.464 9.24919 12.1824 9.25V5C9.15432 5 6.51242 6.71008 5.09748 9.25ZM22.9947 13.2814C22.8852 11.0358 21.0977 9.25 18.9089 9.25H14.8177V12.2629C14.8177 12.4254 14.8485 12.5862 14.9083 12.7363C14.9682 12.8864 15.0559 13.0228 15.1664 13.1377C15.277 13.2525 15.4083 13.3437 15.5527 13.4058C15.6972 13.468 15.8521 13.5 16.0084 13.5H18.9089C18.9089 15.0728 18.0857 16.4451 16.8633 17.18C16.2418 17.5542 15.5361 17.7508 14.8177 17.75V22C17.8458 22 20.4876 20.2899 21.9027 17.75C22.1532 17.3008 22.3633 16.8287 22.5306 16.3395C22.5431 16.3027 22.5559 16.2664 22.5666 16.2288C22.8302 15.4193 22.9746 14.5731 22.9947 13.7188C22.9964 13.6457 23 13.5733 23 13.5C23 13.4265 22.9964 13.3543 22.9947 13.2814Z"
                      fill="white" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Lagrange</p>
                  <p class="font-14 span desc">Host and deploy decentralized code securely</p>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="Multi-Chain">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.5" cy="13.5" r="13.5" fill="#447DFF" />
                    <path d="M14.7965 9.67148C14.6714 9.66714 14.577 9.70969 14.4874 9.80346C13.3781 10.9699 12.2657 12.1329 11.1541 13.2967C11.1328 13.3189 11.1094 13.3392 11.0918 13.3641C11.0266 13.4544 11.0171 13.5536 11.081 13.6441C11.1351 13.7205 11.2056 13.7842 11.2597 13.8436L15.2526 9.66931C15.0883 9.67066 14.9421 9.67663 14.7965 9.67148ZM7.26375 17.314C7.26638 17.3148 7.2761 17.32 7.28583 17.32C8.63719 17.3097 9.98855 17.2988 11.3399 17.2864C11.3725 17.2851 11.4037 17.2721 11.428 17.2495C11.7857 16.8777 12.1416 16.5037 12.4883 16.1405L10.406 14.0268L7.26375 17.314ZM11.4109 9.78232C11.3859 9.75428 11.3553 9.73226 11.3211 9.71783C11.2869 9.7034 11.2501 9.69692 11.2132 9.69885C9.91495 9.71267 8.61642 9.72297 7.31816 9.73408L7.19199 9.73517L10.4002 12.9834L12.4476 10.8404C12.43 10.8214 12.4076 10.7957 12.3837 10.7716C12.0591 10.442 11.7331 10.1141 11.4109 9.78232ZM18.6316 9.64248C17.7542 9.64871 16.8768 9.65657 15.9994 9.66009C15.9625 9.65889 15.9259 9.66603 15.892 9.68101C15.8581 9.696 15.8278 9.71846 15.8033 9.74682C14.4246 11.1919 13.044 12.6354 11.6643 14.0788C11.6364 14.1081 11.6099 14.139 11.5841 14.1677C11.5962 14.1832 11.6001 14.1897 11.6054 14.1951C12.6082 15.2098 13.6102 16.2248 14.6157 17.2362C14.6527 17.2736 14.7208 17.2953 14.7744 17.295C15.6406 17.2913 16.5067 17.2828 17.3731 17.275C17.4091 17.2747 17.4451 17.2709 17.51 17.2669L14.458 14.1753L14.7881 13.8306C14.812 13.8688 14.8304 13.9146 14.8622 13.9466C15.8784 14.98 16.8997 16.0085 17.9098 17.0484C18.0691 17.2124 18.2237 17.3043 18.4497 17.2696C18.5646 17.252 18.6837 17.2647 18.8009 17.2639L18.8151 17.2257L15.1054 13.4663L18.756 9.6479C18.7044 9.64546 18.6682 9.64221 18.6316 9.64248ZM20.8297 8.59525C18.2274 7.074 15.6248 5.5533 13.0238 4.02962C12.9452 3.98327 12.8924 3.9952 12.8206 4.03856C10.4409 5.48311 8.05995 6.92549 5.67923 8.36813C5.50548 8.47356 5.33225 8.58007 5.14983 8.69119L5.53282 9.36441C5.58854 9.33162 5.63691 9.3037 5.68449 9.2747C8.07178 7.82799 10.4591 6.38127 12.8453 4.93293C12.9063 4.8958 12.9505 4.8874 13.017 4.92616C15.3764 6.30783 17.7371 7.68706 20.0987 9.06439C20.1804 9.11236 20.2109 9.16494 20.2114 9.26413C20.218 10.6041 20.2298 11.9437 20.2401 13.2834L20.2414 13.4406L21 13.4343L20.9635 8.68062C20.919 8.65216 20.8751 8.62181 20.8297 8.59525ZM20.3492 17.7043C17.9548 19.1556 15.5604 20.6067 13.167 22.0596C13.0998 22.1008 13.0501 22.1138 12.9757 22.0702C10.6236 20.6914 8.2702 19.315 5.91554 17.9409C5.82669 17.8894 5.79094 17.8344 5.79042 17.726C5.78464 16.3863 5.77307 15.0466 5.76308 13.707C5.76282 13.672 5.7686 13.6352 5.75966 13.6029C5.75309 13.5796 5.72602 13.5452 5.70841 13.5455C5.4721 13.5487 5.23605 13.5571 5 13.5644L5.03654 18.3415C5.07334 18.3577 5.11224 18.3707 5.1472 18.3911C7.7595 19.9172 10.3715 21.4436 12.9825 22.9721C13.0517 23.0125 13.1005 23.0074 13.1668 22.9673C15.5601 21.5143 17.9545 20.0633 20.3489 18.6119C20.5129 18.5125 20.6762 18.4119 20.8481 18.3065L20.4664 17.6373C20.4207 17.6634 20.3844 17.6829 20.3492 17.7043Z"
                      fill="white" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Multi-Chain Storage</p>
                  <p class="font-14 span desc">Store any data across multiple blockchains</p>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="MetaArk">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.5" cy="13.5" r="13.5" fill="#447DFF" />
                    <path d="M8.65348 13.3002H4L4.22899 13.6206L7.67943 14.4613L9.24158 16.123L9.73056 15.4748C9.36509 14.8977 9.13263 14.2458 9.05018 13.5669L8.65348 13.3002ZM7.67943 11.5385L4.22899 12.3794L4 12.6996H8.65348L9.05018 12.4328C9.13259 11.754 9.36505 11.1022 9.73056 10.5252L9.24158 9.87701L7.67943 11.5385ZM13.0987 11.2242C12.1139 11.2242 11.313 12.0288 11.313 13.0175C11.313 14.0063 12.1139 14.8109 13.0987 14.8109C14.0833 14.8109 14.8845 14.0063 14.8845 13.0175C14.8845 12.0288 14.0833 11.2242 13.0987 11.2242ZM13.0987 15.2919C11.85 15.2919 10.834 14.2715 10.834 13.0175C10.834 11.7635 11.85 10.7432 13.0987 10.7432C14.3474 10.7432 15.3632 11.7635 15.3632 13.0175C15.3632 14.2715 14.3474 15.2919 13.0987 15.2919ZM16.0275 13.0175C16.0275 11.3958 14.7136 10.0763 13.0987 10.0763C11.4839 10.0763 10.1697 11.3958 10.1697 13.0175C10.1697 14.6395 11.4839 15.959 13.0987 15.959C14.7136 15.959 16.0275 14.6395 16.0275 13.0175ZM13.9847 18.1917L13.7896 18.4856L15.5881 20.3336H16.2155L15.4208 18.8636L13.9847 18.1917ZM17.4146 17.1134L17.275 15.7133L16.889 15.3757C15.9602 16.163 14.8384 16.6861 13.6402 16.8908L13.441 16.9874L13.1761 17.4356L15.7277 18.6116L17.5401 22L18 20.7538L17.1287 17.4216L17.4146 17.1134ZM13.6402 9.10917C14.8385 9.31368 15.9603 9.83685 16.889 10.6243L17.275 10.2867L17.4146 8.88656L17.1287 8.57839L18 5.24616L17.5401 4L15.7277 7.38838L13.1761 8.56442L13.441 9.01257L13.6402 9.10917ZM15.4208 7.13635L16.2155 5.66612H15.5881L13.7896 7.51439L13.9847 7.80834L15.4208 7.13635Z"
                      fill="white" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Meta Ark</p>
                  <p class="font-14 span desc">Scalable decentralized backup solution</p>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="Chainnode">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.5" cy="13.5" r="13.5" fill="#447DFF" />
                    <path d="M14.719 14.5508C14.1244 15.4778 12.8731 15.7587 11.9234 15.1782C10.9742 14.5979 10.6864 13.3759 11.2808 12.4492C11.8754 11.5222 13.1269 11.2413 14.0764 11.8218C15.0258 12.4021 15.3136 13.6239 14.719 14.5508ZM15.8528 9.91368L15.8864 9L15.059 9.42846C14.5652 9.68318 14.0037 9.78545 13.449 9.72174C12.0016 9.55755 10.5197 10.1935 9.69476 11.4794C8.86983 12.7654 8.93127 14.3447 9.71438 15.5442C10.0154 16.0035 10.1664 16.5413 10.1472 17.0863L10.1136 18L10.941 17.5715C11.4348 17.3167 11.9963 17.2144 12.551 17.2783C13.9982 17.4423 15.4803 16.8065 16.3051 15.5206C17.13 14.2345 17.0687 12.6553 16.2856 11.4556C15.9845 10.9964 15.8335 10.4586 15.8528 9.91368ZM4 9.69291V11.5219C5.08371 11.5622 5.94991 12.4322 5.94991 13.5C5.94991 14.5678 5.08371 15.4378 4 15.4781V17.3073C6.15367 17.3073 7.89964 15.6027 7.89964 13.5C7.89964 11.3973 6.15367 9.69291 4 9.69291ZM22 11.5199V9.69291C19.8463 9.69291 18.1004 11.3973 18.1004 13.5C18.1004 15.6027 19.8463 17.3073 22 17.3073V15.4801C20.8798 15.4801 19.9718 14.5936 19.9718 13.5C19.9718 12.4064 20.8798 11.5199 22 11.5199Z"
                      fill="white" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Chainnode</p>
                  <p class="font-14 span desc">Fast archive snapshot downloads for nodes</p>
                </div>
              </div>
            </el-menu-item>
            <!-- <el-menu-item index="Ecosystem-dapps">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.5" cy="13.5" r="13.5" fill="#447DFF" />
                    <path d="M10.0875 7.8261C10.9958 7.3007 12.0503 7 13.175 7C16.5854 7 19.35 9.76464 19.35 13.175C19.35 16.5854 16.5854 19.35 13.175 19.35C9.76464 19.35 7 16.5854 7 13.175C7 12.0503 7.3007 10.9958 7.8261 10.0875" stroke="white" stroke-width="1.5"
                      stroke-linecap="round" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Explore dApps</p>
                  <p class="font-14 span desc">Explore dApps on the Swan Chain ecosystem</p>
                </div>
              </div>
            </el-menu-item> -->
          </el-sub-menu>
          <el-menu-item index="Bridge">
            <span class="mit font-14">{{$t('menu.Bridge')}}</span>
          </el-menu-item>
          <el-sub-menu index="Developers">
            <template #title>
              <span class="mit font-14">{{$t('menu.Developers')}}</span>
            </template>
            <el-menu-item index="Developers">
              <div class="mit flex-row space-between menu-header developers">
                <div class="head-left">
                  <p class="font-16 weight-6">Developers</p>
                  <p class="font-14 span desc">Start building on Swan Chain</p>
                  <a class="font-14" @click="system.$commonFun.goLink('https://docs.swanchain.io/')">Start building</a>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="BlockExplorer">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg class="none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25235 14.7476C1.56064 10.0559 -0.341066 4.35079 2.00479 2.00493C3.89609 0.113624 7.9709 0.983255 11.9378 3.85M14.7475 6.2525C19.4392 10.9442 21.3409 16.6493 18.995 18.9952C17.1058 20.8845 13.0378 20.0188 9.075 17.1595M18.9952 2.0048C21.3411 4.35066 19.4394 10.0558 14.7476 14.7475C10.0559 19.4392 4.35084 21.3409 2.00498 18.9951C0.113691 17.1038 0.983301 13.029 3.85 9.06214C4.53901 8.10871 5.34339 7.16151 6.25254 6.25236C10.9443 1.56063 16.6493 -0.341072 18.9952 2.0048Z"
                      stroke-width="1.3" stroke-linecap="round" />
                    <path d="M13 10.5C13 11.8807 11.8807 13 10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5Z" stroke-width="1.3" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Block Explorer</p>
                  <p class="font-14 span desc">Explore blockchain transactions with ease</p>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="Faucet">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8878 15.3277C21.8878 15.5691 21.6453 15.8105 21.4029 15.8105H15.5841C15.3419 15.8105 15.0995 15.5691 15.0995 15.3277V15.2673C15.0995 15.0257 15.3419 14.7846 15.5841 14.7846H21.4029C21.6453 14.7846 21.8878 15.0257 21.8878 15.2673V15.3277ZM13.0387 11.5862V7.78443H17.0994C18.8572 7.78443 20.2512 9.17239 20.2512 10.9224V13.5777H16.5541V12.6121C16.5541 12.069 16.0692 11.5862 15.5235 11.5862H13.0387ZM11.8264 11.1638C11.8264 12.1897 11.0385 12.9742 10.0081 12.9742H8.00786C6.97769 12.9742 6.1895 12.1897 6.1895 11.1638V8.50881C6.1895 7.4827 6.97769 6.6982 8.00786 6.6982H10.0081C11.0385 6.6982 11.8264 7.4827 11.8264 8.50881V11.1638ZM6.37134 2.17247C6.12912 2.17247 5.94729 1.99143 5.94729 1.75005V1.62936C5.94729 1.38797 6.12912 1.20694 6.37134 1.20694H11.4021C11.6446 1.20694 11.8264 1.38797 11.8264 1.62936V1.75005C11.8264 1.99143 11.6446 2.17247 11.4021 2.17247H6.37134ZM4.97727 11.5259H1.45469C1.33346 11.5259 1.21224 11.4052 1.21224 11.2845V8.02582C1.21224 7.90513 1.33346 7.78443 1.45469 7.78443H4.97727V11.5259ZM21.4637 13.5806V10.9224C21.4661 10.3512 21.3548 9.7851 21.1364 9.25687C20.9179 8.72864 20.5965 8.24872 20.1907 7.8448C19.785 7.44088 19.3029 7.12095 18.7724 6.90348C18.2418 6.68601 17.6732 6.5753 17.0994 6.57774H12.4325C12.3875 6.57774 12.3461 6.58138 12.3074 6.5889C11.7555 5.95151 10.9371 5.55163 10.0081 5.55163H9.45729C9.45912 5.53159 9.46255 5.51246 9.46255 5.49151V3.37939H11.4021C11.6173 3.3803 11.8305 3.33877 12.0295 3.25721C12.2284 3.17565 12.4092 3.05567 12.5613 2.90419C12.7135 2.75271 12.834 2.57273 12.9159 2.37464C12.9978 2.17655 13.0396 1.96427 13.0387 1.75005V1.62936C13.0396 1.41514 12.9978 1.20286 12.9159 1.00477C12.834 0.806679 12.7135 0.626703 12.5613 0.475224C12.4092 0.323746 12.2284 0.203762 12.0295 0.1222C11.8305 0.040638 11.6173 -0.000888824 11.4021 1.33514e-05H6.37134C6.15619 -0.000860214 5.94298 0.0406895 5.74403 0.122263C5.54509 0.203836 5.36433 0.323818 5.21219 0.47529C5.06005 0.626762 4.93954 0.806728 4.85761 1.0048C4.77567 1.20288 4.73394 1.41515 4.73482 1.62936V1.75005C4.73394 1.96426 4.77567 2.17653 4.85761 2.37461C4.93954 2.57268 5.06005 2.75265 5.21219 2.90412C5.36433 3.05559 5.54509 3.17558 5.74403 3.25715C5.94298 3.33872 6.15619 3.38027 6.37134 3.37939H8.25031V5.49151C8.25031 5.51246 8.25397 5.53159 8.25534 5.55163H8.00786C7.08427 5.55163 6.2707 5.94695 5.71879 6.57774H1.45469C0.666731 6.57774 0 7.24132 0 8.02582V11.2845C0 12.069 0.666731 12.7328 1.45469 12.7328H5.37479C5.89216 13.6396 6.86676 14.2415 8.00786 14.2415H10.0081C11.1121 14.2415 12.0593 13.6524 12.5888 12.7932H15.3419V13.5986C14.5398 13.7225 13.8872 14.4439 13.8872 15.2673V15.3277C13.8872 16.2329 14.6752 17.0174 15.5841 17.0174H21.4029C22.312 17.0174 23.1 16.2329 23.1 15.3277V15.2673C23.1 14.3234 22.3466 13.6123 21.4637 13.5806ZM20.6149 17.6208C20.2512 17.6208 20.0088 17.862 20.0088 18.2241V19.0088C20.0088 19.3707 20.2512 19.612 20.6149 19.612C20.9786 19.612 21.221 19.3707 21.221 19.0088V18.2241C21.221 17.862 20.9786 17.6208 20.6149 17.6208ZM16.736 17.8019C16.3723 17.8019 16.1299 18.043 16.1299 18.4051V19.4312C16.1299 19.7931 16.3723 20.0345 16.736 20.0345C17.0388 20.0345 17.3419 19.7931 17.3419 19.4312V18.4051C17.3419 18.043 17.0994 17.8019 16.736 17.8019ZM18.6147 17.862C18.2513 17.862 18.0088 18.1034 18.0088 18.4655V20.3965C18.0088 20.7588 18.2513 21 18.6147 21C18.9784 21 19.2208 20.7588 19.2208 20.3965V18.4655C19.2208 18.1034 18.9784 17.862 18.6147 17.862Z"
                    />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Faucet</p>
                  <p class="font-14 span desc">Access test tokens on Swan Chain</p>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="Documentation">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg class="none" width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3.00195C16.175 3.01406 17.3529 3.11051 18.1213 3.87889C19 4.75757 19 6.17179 19 9.00022V15.0002C19 17.8286 19 19.2429 18.1213 20.1215C17.2426 21.0002 15.8284 21.0002 13 21.0002H7C4.17157 21.0002 2.75736 21.0002 1.87868 20.1215C1 19.2429 1 17.8286 1 15.0002V9.00021C1 6.17179 1 4.75757 1.87868 3.87889C2.64706 3.11051 3.82497 3.01406 6 3.00195"
                      stroke-width="1.5" />
                    <path d="M8.5 13L15 13" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 13H5.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 9.5H5.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 16.5H5.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8.5 9.5H15" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8.5 16.5H15" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M6 2.5C6 1.67157 6.67157 1 7.5 1H12.5C13.3284 1 14 1.67157 14 2.5V3.5C14 4.32843 13.3284 5 12.5 5H7.5C6.67157 5 6 4.32843 6 3.5V2.5Z" stroke-width="1.5" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Documentation</p>
                  <p class="font-14 span desc">Discover guides and essential resources</p>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="GitHub">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C5.14625 0 0 5.14625 0 11.5C0 16.5888 3.29187 20.8869 7.86312 22.4106C8.43812 22.5112 8.65375 22.1663 8.65375 21.8644C8.65375 21.5913 8.63938 20.6856 8.63938 19.7225C5.75 20.2544 5.0025 19.0181 4.7725 18.3713C4.64313 18.0406 4.0825 17.02 3.59375 16.7469C3.19125 16.5312 2.61625 15.9994 3.57938 15.985C4.485 15.9706 5.13188 16.8188 5.3475 17.1637C6.3825 18.9031 8.03563 18.4144 8.69688 18.1125C8.7975 17.365 9.09937 16.8619 9.43 16.5744C6.87125 16.2869 4.1975 15.295 4.1975 10.8962C4.1975 9.64563 4.64313 8.61062 5.37625 7.80562C5.26125 7.51813 4.85875 6.33937 5.49125 4.75812C5.49125 4.75812 6.45437 4.45625 8.65375 5.93688C9.57375 5.67812 10.5513 5.54875 11.5288 5.54875C12.5063 5.54875 13.4838 5.67812 14.4038 5.93688C16.6031 4.44188 17.5662 4.75812 17.5662 4.75812C18.1987 6.33937 17.7962 7.51813 17.6812 7.80562C18.4144 8.61062 18.86 9.63125 18.86 10.8962C18.86 15.3094 16.1719 16.2869 13.6131 16.5744C14.03 16.9338 14.3894 17.6238 14.3894 18.7019C14.3894 20.24 14.375 21.4762 14.375 21.8644C14.375 22.1663 14.5906 22.5256 15.1656 22.4106C19.7081 20.8869 23 16.5744 23 11.5C23 5.14625 17.8538 0 11.5 0Z"
                      fill="#447DFF" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">GitHub</p>
                  <p class="font-14 span desc">Explore Swan Chain tech repositories</p>
                </div>
              </div>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="Community">
            <template #title>
              <span class="mit font-14">{{$t('menu.Community')}}</span>
            </template>
            <el-menu-item index="">
              <div class="mit flex-row space-between menu-header community">
                <div class="head-left">
                  <p class="font-16 weight-6">Community</p>
                  <p class="font-14 span desc">Join Swan Chain's Community </p>
                  <a class="font-14" @click="system.$commonFun.goLink('https://linktr.ee/swan_chain')">Join Now</a>
                </div>
              </div>
            </el-menu-item>
            <!-- <el-menu-item index="Event">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg width="22" height="22" viewBox="0 0 22 22" class="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 21H9C5.22876 21 3.34315 21 2.17157 19.8284C1 18.6569 1 16.7712 1 13V11C1 7.22876 1 5.34315 2.17157 4.17157C3.34315 3 5.22876 3 9 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C19.1752 20.4816 18.3001 20.7706 17 20.8985"
                      stroke-width="1.5" stroke-linecap="round" />
                    <path d="M6 3V1.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M16 3V1.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M20.5 8H15.625H9.75M1 8H4.875" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#447DFF" />
                    <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="#447DFF" />
                    <path d="M12 16C12 16.5523 11.5523 17 11 17C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15C11.5523 15 12 15.4477 12 16Z" fill="#447DFF" />
                    <path d="M12 12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11C11.5523 11 12 11.4477 12 12Z" fill="#447DFF" />
                    <path d="M7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16Z" fill="#447DFF" />
                    <path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" fill="#447DFF" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Events</p>
                  <p class="font-14 span desc">Join Swan Chain's Latest Community Events</p>
                </div>
              </div>
            </el-menu-item> -->
            <!-- <el-menu-item index="HelpCenter">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg width="22" height="22" viewBox="0 0 22 22" class="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.86932 20.5102L10.5147 20.8922L9.86932 20.5102ZM10.1288 20.0719L9.48334 19.6899L10.1288 20.0719ZM7.87121 20.0719L8.51663 19.6899L8.51662 19.6899L7.87121 20.0719ZM8.13064 20.5102L7.48523 20.8922L8.13064 20.5102ZM0.25 11.8C0.25 12.2142 0.585786 12.55 1 12.55C1.41421 12.55 1.75 12.2142 1.75 11.8H0.25ZM1.99739 15.8438C1.83888 15.4611 1.40015 15.2794 1.01747 15.4379C0.634787 15.5964 0.45306 16.0351 0.611572 16.4178L1.99739 15.8438ZM5.28931 18.585L5.31328 17.8354L5.28931 18.585ZM3.46927 18.2956L3.18225 18.9885H3.18225L3.46927 18.2956ZM16.6955 16.1308L17.3884 16.4178L17.3884 16.4178L16.6955 16.1308ZM12.7107 18.585L12.6867 17.8354L12.7107 18.585ZM14.5307 18.2956L14.8177 18.9885L14.5307 18.2956ZM2.91001 5.58944L2.51813 4.94996V4.94996L2.91001 5.58944ZM1.58944 6.91001L0.949959 6.51814H0.949959L1.58944 6.91001ZM6.91637 18.8223L6.53453 19.4679H6.53453L6.91637 18.8223ZM13.8484 5.91393C14.2541 5.99765 14.6508 5.73665 14.7345 5.33099C14.8182 4.92532 14.5572 4.5286 14.1516 4.44489L13.8484 5.91393ZM17.5551 7.84842C17.4714 7.44275 17.0747 7.18176 16.669 7.26548C16.2633 7.34919 16.0024 7.74591 16.0861 8.15158L17.5551 7.84842ZM10.5147 20.8922L10.7742 20.4539L9.48334 19.6899L9.22391 20.1282L10.5147 20.8922ZM7.22579 20.4539L7.48523 20.8922L8.77606 20.1282L8.51663 19.6899L7.22579 20.4539ZM9.22391 20.1282C9.1785 20.2049 9.09922 20.25 8.99998 20.25C8.90074 20.25 8.82147 20.2049 8.77606 20.1282L7.48523 20.8922C8.16217 22.0359 9.8378 22.0359 10.5147 20.8922L9.22391 20.1282ZM7.8 5.75H10.2V4.25H7.8V5.75ZM16.25 11.8V12.6H17.75V11.8H16.25ZM5.31328 17.8354C4.52102 17.81 4.09046 17.7411 3.75628 17.6027L3.18225 18.9885C3.77912 19.2357 4.43744 19.3081 5.26533 19.3346L5.31328 17.8354ZM0.611572 16.4178C1.09367 17.5817 2.01837 18.5064 3.18225 18.9885L3.75628 17.6027C2.95994 17.2728 2.32725 16.6401 1.99739 15.8438L0.611572 16.4178ZM16.25 12.6C16.25 13.5422 16.2496 14.2112 16.2137 14.7376C16.1782 15.2573 16.1107 15.5828 16.0026 15.8438L17.3884 16.4178C17.5848 15.9436 17.6695 15.4357 17.7102 14.8397C17.7504 14.2504 17.75 13.5217 17.75 12.6H16.25ZM12.7346 19.3346C13.5625 19.3081 14.2209 19.2357 14.8177 18.9885L14.2437 17.6027C13.9095 17.7411 13.479 17.81 12.6867 17.8354L12.7346 19.3346ZM16.0026 15.8438C15.6728 16.6401 15.0401 17.2728 14.2437 17.6027L14.8177 18.9885C15.9816 18.5064 16.9063 17.5817 17.3884 16.4178L16.0026 15.8438ZM7.8 4.25C6.50515 4.25 5.48135 4.24921 4.66269 4.32705C3.83287 4.40595 3.13672 4.57089 2.51813 4.94996L3.30188 6.22892C3.64517 6.01855 4.08465 5.88877 4.80467 5.82031C5.53585 5.75079 6.47611 5.75 7.8 5.75V4.25ZM1.75 11.8C1.75 10.4761 1.75079 9.53587 1.82031 8.80468C1.88877 8.08466 2.01855 7.64518 2.22892 7.30189L0.949959 6.51814C0.570889 7.13673 0.405947 7.83288 0.327047 8.6627C0.249209 9.48136 0.25 10.5052 0.25 11.8H1.75ZM2.51813 4.94996C1.87899 5.34163 1.34162 5.879 0.949959 6.51814L2.22892 7.30189C2.4969 6.86458 2.86458 6.4969 3.30188 6.22892L2.51813 4.94996ZM8.51662 19.6899C8.31582 19.3506 8.13969 19.0516 7.96888 18.8164C7.78917 18.569 7.58327 18.3454 7.29822 18.1768L6.53453 19.4679C6.58064 19.4951 6.64427 19.5451 6.75524 19.6979C6.87511 19.863 7.01082 20.0907 7.2258 20.4539L8.51662 19.6899ZM5.26533 19.3346C5.71078 19.3489 5.99552 19.3587 6.21182 19.3851C6.41631 19.41 6.49305 19.4433 6.53453 19.4679L7.29822 18.1768C7.00853 18.0055 6.70371 17.9339 6.39344 17.8961C6.09498 17.8597 5.73177 17.8488 5.31328 17.8354L5.26533 19.3346ZM10.7742 20.4539C10.9891 20.0907 11.1249 19.863 11.2447 19.6979C11.3557 19.5451 11.4193 19.4951 11.4654 19.4679L10.7018 18.1768C10.4167 18.3454 10.2108 18.569 10.0311 18.8164C9.86027 19.0516 9.68415 19.3506 9.48334 19.6899L10.7742 20.4539ZM12.6867 17.8354C12.2682 17.8488 11.905 17.8597 11.6065 17.8961C11.2963 17.9339 10.9914 18.0055 10.7018 18.1768L11.4654 19.4679C11.5069 19.4433 11.5837 19.41 11.7881 19.3851C12.0044 19.3587 12.2892 19.3489 12.7346 19.3346L12.6867 17.8354ZM10.2 5.75C11.9978 5.75 13.0727 5.75386 13.8484 5.91393L14.1516 4.44489C13.1885 4.24614 11.9253 4.25 10.2 4.25V5.75ZM17.75 11.8C17.75 10.0747 17.7539 8.81149 17.5551 7.84842L16.0861 8.15158C16.2461 8.92727 16.25 10.0022 16.25 11.8H17.75Z"
                      fill="#447DFF" />
                    <path d="M6.0332 5C6.08481 4.00787 6.2165 3.33902 6.55255 2.79064C6.86176 2.28605 7.28599 1.86181 7.79058 1.5526C8.69234 1 9.91987 1 12.3749 1H14.6249C16.153 1 17.2056 1 18 1.13325M17 13.7352C17.7477 13.7104 18.2527 13.6437 18.685 13.4646C19.6039 13.084 20.3339 12.354 20.7145 11.4351C20.9999 10.746 20.9999 9.87232 20.9999 8.12503V7.37503C20.9999 5.84695 20.9999 4.79442 20.8667 4"
                      stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5.50928 12H5.51828M9 12H9.009M12.491 12H12.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Help Center</p>
                  <p class="font-14 span desc">Receive Support And Guidance</p>
                </div>
              </div>
            </el-menu-item> -->
            <el-menu-item index="SocialMedia">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg width="20" height="22" viewBox="0 0 20 22" class="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7V12C16 15.3137 13.3137 18 10 18C6.68629 18 4 15.3137 4 12V7C4 3.68629 6.68629 1 10 1C11.777 1 13.3736 1.7725 14.4722 3" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8 5.5C8 5.5 8.47273 5 10 5C11.5273 5 12 5.5 12 5.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8 8.5C8 8.5 8.47273 8 10 8C11.5273 8 12 8.5 12 8.5" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19 10V12C19 15.5337 16.9634 18.5918 14 20.0645M1 10V12C1 16.9706 5.02944 21 10 21" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">Social Media</p>
                  <p class="font-14 span desc">Connect And Engage With Swan Chain Online</p>
                </div>
              </div>
            </el-menu-item>
            <!-- <el-menu-item index="Blog">
              <div class="mit menu-default flex-row nowrap m">
                <div class="head-left svg-color">
                  <svg width="20" height="20" viewBox="0 0 20 20" class="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1011 5.52007L14.0643 4.77097L14.1011 5.52007ZM12.43 5.74425L12.2296 5.0215L12.43 5.74425ZM10.4697 6.64391L10.0941 5.99474V5.99474L10.4697 6.64391ZM5.93843 5.55536L5.88366 6.30335L5.93843 5.55536ZM7.29998 5.74425L7.12196 6.47281L7.29998 5.74425ZM9.51811 6.6644L9.16954 7.32847L9.51811 6.6644ZM10.4567 14.2506L10.8063 14.9141L10.4567 14.2506ZM12.7 13.3172L12.522 12.5886H12.522L12.7 13.3172ZM14.0411 13.1298L14.0968 13.8777L14.0411 13.1298ZM9.54328 14.2506L9.19367 14.9141L9.54328 14.2506ZM7.29998 13.3172L7.47799 12.5886L7.29998 13.3172ZM5.95889 13.1298L5.90312 13.8777H5.90312L5.95889 13.1298ZM5.34998 11.7203V6.84738H3.84998V11.7203H5.34998ZM16.15 11.7203V6.80692H14.65V11.7203H16.15ZM14.0643 4.77097C13.4963 4.79886 12.7986 4.86378 12.2296 5.0215L12.6303 6.46699C13.0341 6.35507 13.5966 6.29575 14.1378 6.26916L14.0643 4.77097ZM12.2296 5.0215C11.4706 5.23191 10.5943 5.70535 10.0941 5.99474L10.8453 7.29308C11.3411 7.00621 12.0727 6.62157 12.6303 6.46699L12.2296 5.0215ZM5.88366 6.30335C6.33191 6.33618 6.78336 6.39008 7.12196 6.47281L7.47799 5.01568C7.01724 4.9031 6.46745 4.84208 5.9932 4.80736L5.88366 6.30335ZM7.12196 6.47281C7.76563 6.63008 8.61836 7.03916 9.16954 7.32847L9.86668 6.00032C9.31337 5.70989 8.31735 5.22076 7.47799 5.01568L7.12196 6.47281ZM10.8063 14.9141C11.3548 14.6251 12.2238 14.2056 12.878 14.0458L12.522 12.5886C11.6703 12.7967 10.6565 13.2975 10.1071 13.5871L10.8063 14.9141ZM12.878 14.0458C13.2114 13.9643 13.6545 13.9107 14.0968 13.8777L13.9853 12.3819C13.5165 12.4169 12.9761 12.4777 12.522 12.5886L12.878 14.0458ZM9.89288 13.5871C9.34341 13.2975 8.32964 12.7967 7.47799 12.5886L7.12196 14.0458C7.77611 14.2056 8.64517 14.6251 9.19367 14.9141L9.89288 13.5871ZM7.47799 12.5886C7.02381 12.4777 6.48345 12.4169 6.01466 12.3819L5.90312 13.8777C6.34544 13.9107 6.7886 13.9643 7.12196 14.0458L7.47799 12.5886ZM14.65 11.7203C14.65 12.0419 14.3776 12.3526 13.9853 12.3819L14.0968 13.8777C15.1995 13.7955 16.15 12.8978 16.15 11.7203H14.65ZM16.15 6.80692C16.15 5.69294 15.2561 4.71243 14.0643 4.77097L14.1378 6.26916C14.3952 6.25652 14.65 6.46991 14.65 6.80692H16.15ZM3.84998 11.7203C3.84998 12.8978 4.80041 13.7955 5.90312 13.8777L6.01466 12.3819C5.62235 12.3526 5.34998 12.0419 5.34998 11.7203H3.84998ZM10.1071 13.5871C10.0407 13.622 9.95925 13.622 9.89288 13.5871L9.19367 14.9141C9.69766 15.1797 10.3023 15.1797 10.8063 14.9141L10.1071 13.5871ZM10.0941 5.99474C10.0237 6.0355 9.93599 6.0367 9.86668 6.00032L9.16954 7.32847C9.6975 7.6056 10.3319 7.59014 10.8453 7.29308L10.0941 5.99474ZM5.34998 6.84738C5.34998 6.50303 5.61621 6.28377 5.88366 6.30335L5.9932 4.80736C4.78144 4.71863 3.84998 5.70856 3.84998 6.84738H5.34998Z"
                      fill="#447DFF" />
                    <path d="M10 6.92773V14.5007" stroke-width="1.5" />
                    <path d="M1 8.2C1 4.80589 1 3.10883 2.05442 2.05442C3.10883 1 4.80589 1 8.2 1H11.8C15.1941 1 16.8912 1 17.9456 2.05442C19 3.10883 19 4.80589 19 8.2V11.8C19 15.1941 19 16.8912 17.9456 17.9456C16.8912 19 15.1941 19 11.8 19H8.2C4.80589 19 3.10883 19 2.05442 17.9456C1 16.8912 1 15.1941 1 11.8V8.2Z"
                      stroke-width="1.5" />
                  </svg>
                </div>
                <div class="head-right">
                  <p class="font-16">{{$t('menu.Blog')}}</p>
                  <p class="font-14 span desc">Follow Swan Chain's Blog For Latest Updates</p>
                </div>
              </div>
            </el-menu-item> -->
          </el-sub-menu>

          <el-menu-item index="Governance">
            <span class="mit font-14">Governance</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onBeforeUnmount, nextTick, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  ArrowDown, CaretBottom
} from '@element-plus/icons-vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from "element-plus"
export default defineComponent({
  components: {
    ArrowDown, CaretBottom,
    ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const emailAddress = computed(() => (store.state.emailAddress))
    const contactShow = computed(() => (String(store.state.contactShow) === 'true'))
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require("@/assets/images/SWAN_logo_01.png")
    const scrollTopVal = ref(0)
    const activeIndex = ref('1')
    const dataShow = ref(false)

    const scrollTop = () => {
      nextTick(() => {
        let elVal = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        scrollTopVal.value = elVal
      })
    }
    function goMain () {
      router.push({ name: 'dashboard' })
      activeIndex.value = '1'
    }
    async function handleSelect (key, keyPath) {
      if (key === 'About') router.push({ name: 'aboutUs' })
      if (key === 'Faucet') system.$commonFun.goLink('https://discord.com/invite/Jd2BFSVCKw')
      if (key === 'BlockExplorer') system.$commonFun.goLink('https://saturn-explorer.swanchain.io/')
      if (key === 'Event') router.push({ name: 'event' })
      if (key === 'HelpCenter') router.push({ name: 'helpCenter' })
      // if (key === 'Bridge') router.push({ name: 'bridge' })
      if (key === 'Blog') router.push({ name: 'blog' })
      else if (key === 'Ecosystem' || key === 'Ecosystem-dapps') router.push({ name: 'ecosystem' })
      else if (key === 'Lagrange') system.$commonFun.goLink('https://lagrangedao.org/')
      else if (key === 'Multi-Chain') system.$commonFun.goLink('https://multichain.storage/')
      else if (key === 'MetaArk') system.$commonFun.goLink('https://www.fogmetalabs.com/metaark')
      else if (key === 'Chainnode') system.$commonFun.goLink('https://chainnode.io/')
      else if (key === 'Documentation') system.$commonFun.goLink('https://docs.swanchain.io/')
      else if (key === 'GitHub') system.$commonFun.goLink('https://github.com/filswan')
      else if (key === 'SocialMedia') system.$commonFun.goLink('https://linktr.ee/swan_chain')
      else if (key === 'Governance') system.$commonFun.goLink('https://docs.swanchain.io/getting-started/protocol-stack/governance')
      else if (key === 'Orchestrator') system.$commonFun.goLink('https://docs.swanchain.io/orchestrator/overview')
    }
    // what-we-do
    async function activeMenu (row) {
      const nameMenu = row || route.name
      if (nameMenu.indexOf('dashboard') > -1) activeIndex.value = '1'
      else if (nameMenu.indexOf('aboutUs') > -1) activeIndex.value = 'About'
      else if (nameMenu.indexOf('faucet') > -1) activeIndex.value = 'Faucet'
      else if (nameMenu.indexOf('blockExplorer') > -1) activeIndex.value = 'BlockExplorer'
      else if (nameMenu.indexOf('event') > -1) activeIndex.value = 'Event'
      else if (nameMenu.indexOf('helpCenter') > -1) activeIndex.value = 'HelpCenter'
      // else if (nameMenu.indexOf('bridge') > -1) activeIndex.value = 'Bridge'
      else if (nameMenu.indexOf('blog') > -1) activeIndex.value = 'Blog'
      else if (nameMenu.indexOf('ecosystem') > -1) activeIndex.value = 'Ecosystem'
      else if (nameMenu.indexOf('Governance') > -1) activeIndex.value = 'Governance'
      else if (nameMenu.indexOf('Orchestrator') > -1) activeIndex.value = 'Orchestrator'
      else activeIndex.value = '1'
    }
    function handleLogin (dia) {
      dataShow.value = dia
      contactShow.value = dia
    }
    onMounted(() => {
      activeMenu()
      window.addEventListener('scroll', scrollTop, true)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollTop, true);
    })
    watch(route, (to, from) => {
      activeMenu()
      window.scrollTo(0, 0)
    })
    return {
      t,
      system,
      language,
      emailAddress,
      nebulaLogo,
      scrollTopVal,
      activeIndex,
      dataShow,
      contactShow,
      handleSelect, goMain, handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
#container-header {
  // transition: all 0.2s;
  &.bg-color {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
  .header {
    margin: auto;
    padding: 12px 0;
    @media screen and (min-width: 2160px) {
      padding: 6px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 24px 0;
    }
    .logo-img {
      height: 37px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        height: 55px;
      }
      @media screen and (max-width: 767px) {
        height: 74px;
      }
      @media screen and (max-width: 540px) {
        height: 111px;
      }
    }
    .el-menu-right {
      justify-content: flex-end;
      flex-wrap: nowrap;
      :deep(.el-menu) {
        width: calc(100% - 170px);
        height: auto;
        background-color: transparent;
        border: 0;
        justify-content: flex-end;
        .el-menu-item,
        .el-sub-menu,
        .el-sub-menu__title {
          height: auto;
          padding: 0;
          margin-left: 50px;
          background-color: transparent !important;
          border-bottom: 1.6px solid transparent;
          color: @white-color;
          line-height: 1.5;
          text-transform: uppercase;
          @media screen and (min-width: 2160px) {
            line-height: 35px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:hover,
          &.is-active {
            border-bottom: 1.6px solid transparent;
            color: @theme-color;
            .el-sub-menu__title {
              color: inherit;
            }
            .mit {
              border-bottom: 2px solid @theme-color;
            }
          }
          .el-icon {
            width: 40px;
            height: 40px;
            @media screen and (max-width: 992px) {
              width: 50px;
              height: 50px;
            }
            @media screen and (max-width: 599px) {
              width: 90px;
              height: 90px;
            }
            svg {
              width: 100%;
              height: 100%;
            }
          }
          .el-sub-menu__icon-arrow {
            position: static;
            width: 10px;
            height: 10px;
            right: 10px;
            margin-left: 3px;
            margin-top: -3px;
            // background: url(../assets/images/dashboard/menu.png) no-repeat
            //   center;
            // background-size: 100%;
            // @media screen and (max-width: 992px) {
            //   width: 20px;
            //   height: 20px;
            // }
            // svg {
            //   display: none;
            // }
          }
          .mit {
          }
        }
        .el-sub-menu__title {
          height: 100%;
          padding-left: 0;
          border: 0 !important;
        }
      }
    }
    .right {
      white-space: nowrap;
      color: @black-color;
      // @media screen and (max-width: 600px) {
      //   display: none;
      // }
      .login {
        background-color: @theme-color;
        padding: 6px 16px;
        margin: 0 45px;
        border: 1px solid @theme-color;
        border-radius: 6px;
        color: @white-color;
        cursor: pointer;
        transition: all 0.2s;
        @media screen and (max-width: 768px) {
          padding: 9px 24px;
          margin: 0 0 0 45px;
          border-radius: 12px;
        }
        @media screen and (max-width: 600px) {
          padding: 12px 32px;
          border-radius: 18px;
        }
        @media screen and (max-width: 540px) {
          padding: 15px 40px;
        }
        &:hover {
          background-color: transparent;
          color: @theme-color;
        }
      }
      i.mit-icon {
        width: 25px;
        height: 25px;
        background: url(../assets/images/i18n.png) no-repeat left 1px;
        background-size: 90%;
        @media screen and (max-width: 768px) {
          width: 20px;
          height: 20px;
        }
      }
      span.mit {
        margin: 0 6px;
        color: @black-color;
        line-height: 25px;
        @media screen and (max-width: 768px) {
          margin: 0 5px;
        }
      }
      .el-dropdown {
        @media screen and (max-width: 768px) {
          display: none;
        }
        * {
          outline: none !important;
          cursor: pointer;
        }
        // cursor: pointer;
        outline: none;
        border: 0;
        i {
          margin: 0;
          color: @black-color;
          &.el-icon--right {
            margin: -3px 0 0;
          }
        }
      }
      .sign {
        .el-dropdown {
          @media screen and (max-width: 768px) {
            display: block;
          }
        }
      }
      .language {
        .tit {
          span {
            color: @black-color;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.i18n-popper {
  display: none;
  * {
    outline: none !important;
  }
  .el-dropdown-link:focus-visible {
    outline: none !important;
  }
  .language-menu {
    min-width: 110px;
    padding: 4px 0;
    white-space: nowrap;
    color: @black-color;
    // @media screen and (max-width: 600px) {
    //   display: none;
    // }
    &.is-disabled {
      opacity: 0.4;
      &:hover {
        span.mit {
          text-decoration: none;
        }
      }
    }
    &:hover {
      span.mit {
        text-decoration: underline;
      }
    }
    i.mit-icon {
      width: 18px;
      height: 18px;
      margin: 0 10px 0 0;
      background: url(../assets/images/i18n-en.png) no-repeat left center;
      background-size: 100%;
      @media screen and (max-width: 768px) {
        margin: 0 5px 0 0;
      }
      &.cn {
        background: url(../assets/images/i18n-cn.png) no-repeat left center;
        background-size: 100%;
      }
    }
    span.mit {
      padding-top: 4px;
      color: @black-color;
      line-height: 1;
    }
  }
}

.menu-popper {
  background-color: transparent;
  border: 0 !important;
  border-radius: 0;
  // .el-popper__arrow {
  //   display: none;
  // }
  .el-dropdown-menu {
    padding: 6px 0;
    border-radius: 4px;
    box-shadow: 0 0 10px @black-color;
    li {
      padding: 6px 16px;
      background-color: @white-color;
      color: @black-color !important;
      &:hover {
        background-color: rgba(233, 233, 233, 0.8);
      }
      span {
        min-width: 120px;
        line-height: 1.7;
        text-align: center;
      }
    }
  }
}
</style>

