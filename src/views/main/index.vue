<template>
  <section id="container-main">
    <div class="bg-point">
      <svg width="1823" height="1823" viewBox="0 0 1823 1823" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:screen" opacity="0.5" filter="url(#filter0_f_694_53)">
          <circle cx="911.5" cy="911.5" r="411.5" fill="#447DFF" />
        </g>
        <defs>
          <filter id="filter0_f_694_53" x="0" y="0" width="1823" height="1823" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_694_53" />
          </filter>
        </defs>
      </svg>
    </div>

    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text font-16">
          <h1 class="font-79 font-black text-center uppercase">{{$t('main.banner.title')}}</h1>
          <p class="font-20 text-center" v-html="$t('main.banner.describe')"></p>
          <div class="flex-row center">
            <div class="learn-more font-18 uppercase" @click="system.$commonFun.contactUsMethod()">Build on Swan Chain</div>
            <div class="learn-more font-18 uppercase">EXPLORE DEVELOPER DOCS</div>
          </div>
        </div>
      </div>
    </div>

    <div class="blockchain ethereum-style lang-max">
      <el-row class="block-cont row-bg" justify="center">
        <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4" v-for="e in ethereumData" :key="e">
          <img :src="e.img" />
        </el-col>
      </el-row>
    </div>

    <div class="unlock-area">
      <div class="lang-max">
        <div class="tit font-26 font-bold weight-6 text-center uppercase">Unlock The Next Level of Ethereum with<br /> Swan Orchestrator</div>
        <div class="font-20 text-center">The most advanced blockchain scaling & computing technology</div>
        <el-row class="unlock-cont row-bg" justify="center">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="(u, uIndex) in unlockData" :key="uIndex" @mouseover="getShow('unlock', uIndex, 'over')" @mouseleave="getShow('unlock', uIndex, 'leave')">
            <div class="content" :class="{'show': !u.onShow}">
              <div class="image">
                <svg v-if="u.id === 0" :class="u.class" width="85" height="90" viewBox="0 0 85 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="36.421" cy="20.2105" rx="16.2105" ry="16.2105" stroke="#447DFF" stroke-width="8" />
                  <path opacity="0.5" d="M68.8421 66.815C68.8421 76.8869 68.8421 85.0518 36.4211 85.0518C4 85.0518 4 76.8869 4 66.815C4 56.743 18.5154 48.5781 36.4211 48.5781C54.3267 48.5781 68.8421 56.743 68.8421 66.815Z" stroke="#447DFF" stroke-width="8" />
                  <path d="M72.8947 4C72.8947 4 80.9999 8.86316 80.9999 20.2105C80.9999 31.5579 72.8947 36.4211 72.8947 36.4211" stroke="#447DFF" stroke-width="8" stroke-linecap="round" />
                  <path d="M64.7896 12.1055C64.7896 12.1055 68.8422 14.537 68.8422 20.2107C68.8422 25.8844 64.7896 28.316 64.7896 28.316" stroke="#447DFF" stroke-width="8" stroke-linecap="round" />
                </svg>
                <svg v-else-if="u.id === 1" :class="u.class" width="83" height="92" viewBox="0 0 83 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.1804 36.7098C65.7648 34.1254 65.7648 29.966 65.7648 21.6471C65.7648 13.3282 65.7648 9.1687 63.1804 6.58435M63.1804 36.7098C60.5961 39.2941 56.4366 39.2941 48.1177 39.2941H30.4707C22.1518 39.2941 17.9923 39.2941 15.408 36.7098M63.1804 36.7098C63.1804 36.7098 63.1804 36.7098 63.1804 36.7098ZM63.1804 6.58435C60.5961 4 56.4366 4 48.1177 4L30.4707 4C22.1518 4 17.9923 4 15.408 6.58435M63.1804 6.58435C63.1804 6.58435 63.1804 6.58435 63.1804 6.58435ZM15.408 6.58435C12.8236 9.16871 12.8236 13.3282 12.8236 21.6471C12.8236 29.966 12.8236 34.1254 15.408 36.7098M15.408 6.58435C15.408 6.58435 15.408 6.58435 15.408 6.58435ZM15.408 36.7098C15.408 36.7098 15.408 36.7098 15.408 36.7098Z"
                    stroke="#447DFF" stroke-width="8" />
                  <path opacity="0.5" d="M43.7059 21.6461C43.7059 24.0827 41.7306 26.0579 39.2941 26.0579C36.8575 26.0579 34.8823 24.0827 34.8823 21.6461C34.8823 19.2096 36.8575 17.2344 39.2941 17.2344C41.7306 17.2344 43.7059 19.2096 43.7059 21.6461Z" stroke="#447DFF"
                    stroke-width="5" />
                  <path opacity="0.5" d="M65.7646 17.2353C58.4549 17.2353 52.5293 11.3097 52.5293 4" stroke="#447DFF" stroke-width="5" stroke-linecap="round" />
                  <path opacity="0.5" d="M65.7646 26.0586C58.4549 26.0586 52.5293 31.9842 52.5293 39.2939" stroke="#447DFF" stroke-width="5" stroke-linecap="round" />
                  <path opacity="0.5" d="M12.8236 17.2353C20.1333 17.2353 26.0589 11.3097 26.0589 4" stroke="#447DFF" stroke-width="5" stroke-linecap="round" />
                  <path opacity="0.5" d="M12.8236 26.0586C20.1333 26.0586 26.0589 31.9842 26.0589 39.2939" stroke="#447DFF" stroke-width="5" stroke-linecap="round" />
                  <path opacity="0.5" d="M4 85.1255H13.9703C18.43 85.1255 22.9376 85.5901 27.2779 86.4843C34.9554 88.066 43.039 88.2576 50.7954 87.0021C54.6197 86.383 58.3796 85.4365 61.783 83.7937C64.8554 82.3108 68.6188 80.2206 71.1468 77.8793C73.671 75.5413 76.2999 71.715 78.1659 68.7241C79.7659 66.1594 78.992 63.0128 76.4612 61.1019C73.6499 58.9792 69.4782 58.9796 66.6674 61.1028L58.6945 67.1257C55.6046 69.4598 52.2293 71.6085 48.2084 72.2498C47.725 72.3269 47.2184 72.3972 46.6898 72.4584M46.6898 72.4584C46.5307 72.4769 46.3696 72.4945 46.2065 72.5112M46.6898 72.4584C47.333 72.3206 47.9718 71.924 48.571 71.401C51.4086 68.9242 51.5881 64.7502 49.126 61.9846C48.5547 61.3429 47.8862 60.8078 47.1429 60.3645C34.8017 53.0037 15.6004 58.6099 4 66.8366M46.6898 72.4584C46.5288 72.493 46.3675 72.5112 46.2065 72.5112M46.2065 72.5112C43.8976 72.7483 41.1963 72.8096 38.199 72.5265"
                    stroke="#447DFF" stroke-width="8" stroke-linecap="round" />
                </svg>
                <svg width="83" v-else-if="u.id === 2" :class="u.class" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M41.5 4C62.2107 4 79 20.7893 79 41.5C79 62.2107 62.2107 79 41.5 79C20.7893 79 4 62.2107 4 41.5C4 31.0098 8.30739 21.5256 15.25 14.7196" stroke="#447DFF" stroke-width="8" stroke-linecap="round" />
                  <path opacity="0.7" d="M15.1701 41.4997C15.1701 56.0412 26.9584 67.8295 41.4999 67.8295C56.0414 67.8295 67.8297 56.0412 67.8297 41.4997C67.8297 26.9582 56.0414 15.1699 41.4999 15.1699" stroke="#447DFF" stroke-width="8" stroke-linecap="round"
                  />
                  <path d="M41.5 56.66C49.8724 56.66 56.6596 49.8728 56.6596 41.5004C56.6596 33.128 49.8724 26.3408 41.5 26.3408" stroke="#447DFF" stroke-width="8" stroke-linecap="round" />
                </svg>
                <svg v-else :class="u.class" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 47.0813C4 33.5421 4 26.7725 8.20609 22.5664C12.4122 18.3604 19.1818 18.3604 32.721 18.3604H47.0815C60.6206 18.3604 67.3902 18.3604 71.5963 22.5664C75.8024 26.7725 75.8024 33.5421 75.8024 47.0813C75.8024 60.6205 75.8024 67.3901 71.5963 71.5962C67.3902 75.8023 60.6206 75.8023 47.0815 75.8023H32.721C19.1818 75.8023 12.4122 75.8023 8.20609 71.5962C4 67.3901 4 60.6205 4 47.0813Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path opacity="0.5" d="M54.2617 18.3605C54.2617 11.5909 54.2617 8.20609 52.1587 6.10304C50.0557 4 46.6709 4 39.9013 4C33.1317 4 29.7469 4 27.6438 6.10304C25.5408 8.20609 25.5408 11.5909 25.5408 18.3605" stroke="#447DFF" stroke-width="7" />
                  <path opacity="0.5" d="M39.9013 59.0483C43.8668 59.0483 47.0816 56.3693 47.0816 53.0647C47.0816 49.7601 43.8668 47.0812 39.9013 47.0812C35.9358 47.0812 32.7211 44.4023 32.7211 41.0977C32.7211 37.793 35.9358 35.1141 39.9013 35.1141M39.9013 59.0483C35.9358 59.0483 32.7211 56.3693 32.7211 53.0647M39.9013 59.0483V61.4417M39.9013 32.7207V35.1141M39.9013 35.1141C43.8669 35.1141 47.0816 37.793 47.0816 41.0977"
                    stroke="#447DFF" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <p class="tit-position font-18 weight-6 flex-row">{{u.title}}</p>
              <p class="desc font-16 weight-4">{{u.desc}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="unlock-area swiper">
      <div class="lang-max">
        <div class="swiper-margin">
          <div class="tit short font-26 font-bold weight-6 uppercase">See The Differences You Can Make<br /> With Swan Chain</div>
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in carouselData" :key="item">
                <div class="content flex-row space-between nowrap">
                  <div class="left">
                    <h3 class="font-22 font-bold" justify="center">{{ item.title }}</h3>
                    <p class="font-20">{{ item.desc }}</p>
                  </div>
                  <div class="right flex-row center">
                    <img :src="item.img" />
                  </div>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="thriving">
      <div class="lang-max">
        <div class="thriving-cont">
          <h1 class="uppercase font-26 font-bold uppercase">let the numbers say <br />how swan chain is thriving</h1>
          <el-row :gutter="28" justify="space-between">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="th in thrivingData" :key="th">
              <div class="content">
                <h1 class="font-45 font-bold">{{th.title}}</h1>
                <p class="font-20 weight-4">{{th.desc}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="unlock-area">
      <div class="lang-max">
        <div class="tit font-26 font-bold weight-6 text-center uppercase">See What's Possible with Swan Chain</div>
        <el-row class="unlock-cont row-bg" justify="center">
          <el-col class="n" :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="(p, pIndex) in possibleData" :key="pIndex" @mouseover="getShow('possible', pIndex, 'over')" @mouseleave="getShow('possible', pIndex, 'leave')">
            <div class="content" :class="{'show': !p.onShow}">
              <div class="image possible flex-row center">
                <svg v-if="p.id === 0" :class="p.class" width="76" height="69" viewBox="0 0 76 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 55.2058C4 52.0541 4 50.4782 4.51489 49.2352C5.20141 47.5778 6.51821 46.261 8.17562 45.5745C9.41868 45.0596 10.9945 45.0596 14.1462 45.0596H61.4953C64.647 45.0596 66.2228 45.0596 67.4659 45.5745C69.1233 46.261 70.4401 47.5778 71.1266 49.2352C71.6415 50.4782 71.6415 52.0541 71.6415 55.2058C71.6415 58.3575 71.6415 59.9333 71.1266 61.1764C70.4401 62.8338 69.1233 64.1506 67.4659 64.8371C66.2228 65.352 64.647 65.352 61.4953 65.352H14.1462C10.9945 65.352 9.41868 65.352 8.17562 64.8371C6.51821 64.1506 5.20141 62.8338 4.51489 61.1764C4 59.9333 4 58.3575 4 55.2058Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path d="M4 34.9128C4 31.7611 4 30.1853 4.51489 28.9422C5.20141 27.2848 6.51821 25.968 8.17562 25.2815C9.41868 24.7666 10.9945 24.7666 14.1462 24.7666H61.4953C64.647 24.7666 66.2228 24.7666 67.4659 25.2815C69.1233 25.968 70.4401 27.2848 71.1266 28.9422C71.6415 30.1853 71.6415 31.7611 71.6415 34.9128C71.6415 38.0645 71.6415 39.6404 71.1266 40.8834C70.4401 42.5408 69.1233 43.8576 67.4659 44.5442C66.2228 45.059 64.647 45.059 61.4953 45.059H14.1462C10.9945 45.059 9.41868 45.059 8.17562 44.5442C6.51821 43.8576 5.20141 42.5408 4.51489 40.8834C4 39.6404 4 38.0645 4 34.9128Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path d="M4 14.6208C4 11.4691 4 9.89329 4.51489 8.65023C5.20141 6.99282 6.51821 5.67602 8.17562 4.9895C9.41868 4.47461 10.9945 4.47461 14.1462 4.47461H61.4953C64.647 4.47461 66.2228 4.47461 67.4659 4.9895C69.1233 5.67602 70.4401 6.99282 71.1266 8.65023C71.6415 9.89329 71.6415 11.4691 71.6415 14.6208C71.6415 17.7725 71.6415 19.3484 71.1266 20.5914C70.4401 22.2488 69.1233 23.5656 67.4659 24.2522C66.2228 24.7671 64.647 24.7671 61.4953 24.7671H14.1462C10.9945 24.7671 9.41868 24.7671 8.17562 24.2522C6.51821 23.5656 5.20141 22.2488 4.51489 20.5914C4 19.3484 4 17.7725 4 14.6208Z"
                    stroke="#447DFF" stroke-width="7" />
                  <circle opacity="0.5" cx="14.1462" cy="34.9133" r="3.38207" fill="#447DFF" />
                  <circle opacity="0.5" cx="14.1462" cy="14.6213" r="3.38207" fill="#447DFF" />
                  <circle opacity="0.5" cx="14.1462" cy="55.2063" r="3.38207" fill="#447DFF" />
                </svg>
                <svg v-else-if="p.id === 1" :class="p.class" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 30.3967C4 17.9532 4 11.7314 7.8657 7.8657C11.7314 4 17.9532 4 30.3967 4H43.595C56.0385 4 62.2603 4 66.126 7.8657C69.9917 11.7314 69.9917 17.9532 69.9917 30.3967V33.6963C69.9917 43.0289 69.9917 47.6952 67.0924 50.5945C64.1931 53.4938 59.5268 53.4938 50.1942 53.4938H23.7975C14.4649 53.4938 9.79856 53.4938 6.89928 50.5945C4 47.6952 4 43.0289 4 33.6963V30.3967Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path opacity="0.5" d="M50.1942 69.9921H23.7975M36.9958 53.4941V69.9921" stroke="#447DFF" stroke-width="7" stroke-linecap="round" />
                  <path opacity="0.5" d="M69.9917 40.2959H4" stroke="#447DFF" stroke-width="7" stroke-linecap="round" />
                </svg>
                <svg v-else-if="p.id === 2" :class="p.class" width="83" height="69" viewBox="0 0 83 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M79.0656 30.8197C79.0313 19.0988 78.6619 12.885 74.6716 8.88393C70.2742 4.47461 63.1966 4.47461 49.0414 4.47461H34.0276C19.8725 4.47461 12.7949 4.47461 8.39744 8.88393C4 13.2932 4 20.3899 4 34.5833C4 48.7767 4 55.8734 8.39744 60.2827C12.7949 64.692 19.8725 64.692 34.0276 64.692H39.6578"
                    stroke="#447DFF" stroke-width="7" stroke-linecap="round" />
                  <path opacity="0.5" d="M71.6415 64.6921V42.4199M71.6415 42.4199L79.0655 49.844M71.6415 42.4199L64.2174 49.844" stroke="#447DFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M54.7311 42.4199V64.6921M54.7311 64.6921L62.5676 57.2681M54.7311 64.6921L46.8946 57.2681" stroke="#447DFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.5" d="M33.6963 49.8438H18.8481" stroke="#447DFF" stroke-width="7" stroke-linecap="round" />
                  <path opacity="0.4" d="M4 26.7471L79.0656 26.7471" stroke="#447DFF" stroke-width="7" stroke-linecap="round" />
                </svg>
                <svg v-else :class="p.class" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M4 18.0854C4 10.5684 10.2784 4.47461 18.0232 4.47461C25.7681 4.47461 32.0465 10.5684 32.0465 18.0854V27.1593C32.0465 28.2141 32.0465 28.7415 31.927 29.1742C31.6028 30.3484 30.6579 31.2656 29.448 31.5802C29.0022 31.6962 28.4588 31.6962 27.3721 31.6962H18.0232C10.2784 31.6962 4 25.6024 4 18.0854Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path opacity="0.5" d="M42.7701 46.9569C42.7701 45.902 42.7701 45.3746 42.8861 44.9419C43.2007 43.7677 44.1179 42.8505 45.2922 42.5359C45.7249 42.4199 46.2523 42.4199 47.3071 42.4199H56.3809C63.898 42.4199 69.9917 48.5137 69.9917 56.0307C69.9917 63.5477 63.898 69.6415 56.3809 69.6415C48.8639 69.6415 42.7701 63.5477 42.7701 56.0307V46.9569Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path d="M4 56.0307C4 48.5137 10.2784 42.4199 18.0232 42.4199H26.4372C28.4006 42.4199 29.3823 42.4199 30.1323 42.7908C30.7919 43.117 31.3282 43.6376 31.6644 44.2778C32.0465 45.0057 32.0465 45.9585 32.0465 47.8642V56.0307C32.0465 63.5477 25.7681 69.6415 18.0232 69.6415C10.2784 69.6415 4 63.5477 4 56.0307Z"
                    stroke="#447DFF" stroke-width="7" />
                  <path d="M42.7701 18.0854C42.7701 10.5684 48.8639 4.47461 56.3809 4.47461C63.898 4.47461 69.9917 10.5684 69.9917 18.0854C69.9917 25.6024 63.898 31.6962 56.3809 31.6962H46.6589C46.2075 31.6962 45.9817 31.6962 45.7919 31.6748C44.2143 31.497 42.9693 30.252 42.7915 28.6745C42.7701 28.4846 42.7701 28.2589 42.7701 27.8074V18.0854Z"
                    stroke="#447DFF" stroke-width="7" />
                </svg>
              </div>
              <p class="tit-position font-18 weight-6 text-center flex-row center">{{p.title}}</p>
              <p class="desc font-16 weight-4">{{p.desc}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="unlock-area">
      <div class="lang-max">
        <div class="tit font-26 font-bold weight-6 text-center uppercase">Explore The Swan Chain Ecosystem</div>
        <div class="el flex-row">
          <a class="font-22 weight-6">Explore dApps</a>
        </div>
        <el-row class="unlock-cont row-bg dApps" justify="center">
          <el-col class="n" :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="e in exploreData" :key="e">
            <div class="content">
              <div class="image flex-row center">
                <img :src="e.img" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="dapps-area">
      <div class="lang-max">
        <el-row justify="center">
          <el-col :xs="18" :sm="16" :md="16" :lg="16" :xl="16">
            <div class="font-16 content">
              <h1 class="font-26 font-bold flex-row uppercase">
                <span>Empower Your dApps with Swan Chain</span>
              </h1>
              <h3 class="font-20 weight-4 d">Dream, code and launch dApps on Swan Chain, the layer 2 AI computing blockchain for effortlessly building and scaling your dApps to infinity. Ditch development roadblocks, crush fees, and unleash your app's true potential.</h3>
              <div class="el flex-row">
                <a class="font-16 font-bold">Start Building</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="blockchain lang-max">
      <div class="funded-style">
        <div class="subtit uppercase font-26 font-bold text-center">{{$t('dashboard.person_title')}}</div>
        <el-row class="block-list row-bg" justify="center">
          <el-col v-for="b in fundData" :key="b">
            <img :src="b.img" />
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="any-updates">
      <div class="lang-max">
        <div class="any-banner">
          <div class="bg">
            <img :src="anyImage" alt="">
          </div>
          <el-row justify="space-between">
            <el-col :xs="20" :sm="18" :md="18" :lg="18" :xl="18">
              <div class="font-16">
                <h1 class="font-45 font-bold">Don't Miss Any Updates</h1>
                <h3 class="font-20 weight-4 d">Sign up for our newsletter to get alpha, key insights, and killer resources.</h3>
                <!-- <el-input v-model="searchInput" class="w-50 m-2" placeholder="Enter your email address" /> -->
                <div class="el flex-row">
                  <a href="https://mailchi.mp/swanchain/swan-chain" class="font-16 font-bold" target="_blank">Subscribe Now</a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElDropdown, ElInput } from 'element-plus'
import Swiper from '@/assets/js/swiper.min.js'
export default defineComponent({
  components: {
    ElRow, ElCol, ElButton, ElDropdown, ElInput
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const fundData = ref([
      {
        img: require(`@/assets/images/about/funded/funded-01.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-02.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-03.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-04.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-05.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-06.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-07.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-08.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-09.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-10.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-11.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-12.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-13.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-14.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-15.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-16.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-17.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-18.png`)
      },
    ])
    const ethereumData = ref([
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-01.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-02.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-03.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-04.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-05.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-06.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-11.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-07.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-08.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-09.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-10.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-12.png`)
      },
    ])
    const unlockData = ref([
      {
        id: 0,
        title: 'AI Container',
        desc: 'Build, deploy, and scale AI models effortlessly on the blockchain.',
        class: 'big',
        onShow: true
      },
      {
        id: 1,
        title: 'Auction Engine',
        desc: 'Secure the computing resources you need at the best price-guaranteed.',
        class: 'big',
        onShow: true
      },
      {
        id: 2,
        title: 'Edge Data Center',
        desc: 'Process data at the edge for real-time responsiveness and global reach.',
        class: '',
        onShow: true
      },
      {
        id: 3,
        title: 'Smart Contract Payment',
        desc: 'Streamline payments and automate tasks with secure, trustless contracts.',
        class: '',
        onShow: true
      }
    ])
    const possibleData = ref([
      {
        id: 0,
        title: 'Decentralized Computing',
        desc: "Tap into Swan's vast decentralized computing network with 150+ computing providers in 17+ cities.",
        class: '',
        onShow: true
      },
      {
        id: 1,
        title: 'Decentralized Storage',
        desc: "Protect your digital assets with Swan's storage solutions, combining Filecoin, IPFS, and cutting-edge technologies.",
        class: 'big',
        onShow: true
      },
      {
        id: 2,
        title: 'Decentralized Payments',
        desc: 'Send and receive money in any currency, to anyone, anywhere, with instant transactions and minimal fees.',
        class: '',
        onShow: true
      },
      {
        id: 3,
        title: 'Decentralized Applications',
        desc: "Bring your vision to life with Swan's dApp success kit, offering design, development, and deployment support.",
        class: 'big',
        onShow: true
      }
    ])
    const searchInput = ref('')
    const anyImage = require('@/assets/images/dashboard/background-image03.png')
    const thrivingData = ref([
      {
        title: '5M+',
        desc: 'Transactions'
      },
      {
        title: '50K+',
        desc: 'dApp Contracts'
      },
      {
        title: '500K+',
        desc: 'Unique Addresses'
      }
    ])
    const exploreData = ref([
      { img: require('@/assets/images/dashboard/logo-01.png') },
      { img: require('@/assets/images/dashboard/logo-02.png') },
      { img: require('@/assets/images/dashboard/logo-03.png') },
      { img: require('@/assets/images/dashboard/logo-04.png') }
    ])
    const carouselData = ref([
      {
        img: require('@/assets/images/dashboard/background-image01.png'),
        title: 'Power AI Revolution with Decentralized Computing',
        desc: "Supercharge your dApps with Swan Chain's unmatched decentralized computing network. Handle even the most demanding applications with ease."
      },
      {
        img: require('@/assets/images/dashboard/background-image10.png'),
        title: 'Build Lightning-Fast dApps Without Limits',
        desc: "Save 90% on gas fees compared to Ethereum and deploy your dream dApps in record time. Forget the development delays and focus on building killer user experiences."
      },
      {
        img: require('@/assets/images/dashboard/background-image09.png'),
        title: "Transform Vision to Reality with Swan's Ultimate Toolkit",
        desc: "Swan Chain's toolkit equips you for every stage of your dApp journey. Effortless data storage with Multi-Chain Storage, advanced code management with Lagrange, and powerful RPC services."
      }
    ])

    function getShow (content, index, type) {
      if (content === 'unlock') unlockData.value[index].onShow = type === 'leave' ? true : false
      else possibleData.value[index].onShow = type === 'leave' ? true : false
    }
    onMounted(() => {
      var swiper = new Swiper('.swiper-container', {
        // direction: 'vertical',
        autoplay: {
          delay: 10000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="font-32 font-bold ' + className + '">0' + (index + 1) + '</span>';
          },
        },
      })
    })
    return {
      system,
      bodyWidth,
      fundData,
      ethereumData,
      unlockData,
      searchInput,
      anyImage,
      thrivingData,
      possibleData,
      exploreData,
      carouselData,
      getShow
    }
  }
})
</script>

<style lang="less" scoped>
@import "../../assets/css/swiper.min.css";
#container-main {
  position: relative;
  padding: 0 0 103px;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  border-bottom: 1px solid @border-color;
  .bg-point {
    position: absolute;
    width: 43%;
    left: -347px;
    top: 53%;
    svg {
      width: 100%;
      height: auto;
    }
  }
  .el {
    margin: 45px auto 0;
    .el-button,
    a {
      padding: 14px 32px;
      margin: auto;
      background: @theme-color;
      border: 2px solid @theme-color;
      border-radius: 1rem;
      outline: none;
      color: @white-color;
      letter-spacing: 0;
      box-shadow: 0 12px 32px -12px rgba(12, 22, 44, 0.32);
      transition: background-color 0.3s, border-color 0.3s, color 0.3s;
      text-decoration: none;
      &::before {
        display: none;
      }
      &:hover {
        background-color: transparent;
        color: @theme-color;
        border-color: @theme-color;
      }
    }
    .tips {
      color: @theme-color;
      line-height: 1.2;
      word-break: break-word;
    }
  }
  .banner {
    position: relative;
    padding: 145px 0 195px;
    background: url(../../assets/images/bg-main.png) center no-repeat;
    background-size: auto 100%;
    @media screen and (min-width: 2160px) {
      padding: 145px 0 195px;
    }
    @media screen and (max-width: 1440px) {
      padding: 210px 0 260px;
    }
    @media screen and (max-width: 768px) {
      padding: 310px 0 360px;
    }
    .content {
      .text {
        margin: auto;
        @media screen and (max-width: 1260px) {
          max-width: 1140px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        p {
          max-width: 740px;
          margin: 25px auto 35px;
          line-height: 1.4;
          @media screen and (max-width: 992px) {
            max-width: none;
          }
          @media screen and (max-width: 600px) {
            margin: 50px auto 70px;
          }
        }
        .learn-more {
          display: inline-block;
          padding: 18px 40px;
          margin: 20px 15px;
          background-color: @theme-color;
          font-size: inherit;
          border: 1px solid @theme-color;
          border-radius: 100px;
          cursor: pointer;
          color: @white-color;
          line-height: 1;
          transition: all 0.2s;
          @media screen and (max-width: 600px) {
            padding: 32px 80px;
            border-radius: 16px;
          }
          &:hover {
            background-color: @white-color;
            color: @theme-color;
          }
        }
        .explore {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .width-icon {
          svg {
            margin: 0 0 0 10px;
            fill: @white-color;
          }
        }
      }
    }
  }
  :deep(.blockchain) {
    margin: 90px auto;
    &.ethereum-style {
      margin-top: -110px;
      .block-cont {
        width: 85%;
        .el-col {
          margin: 0;
          img {
            width: 90%;
          }
        }
      }
    }
    .funded-style {
      margin: 0 70px;
      @media screen and (max-width: 600px) {
        margin: 0 16px;
      }
    }
    .subtit {
      margin: 50px auto 0;
    }
    .block-cont {
      margin: 40px auto 0;
      .el-col {
        margin: 10px 0;
        @media screen and (max-width: 767px) {
          margin: 20px 0;
        }
        img {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
    .block-list {
      margin: 40px auto 0;
      .el-col {
        margin: 10px 0;
        max-width: 11.11%;
        flex: 0 0 11.11%;
        @media screen and (max-width: 1024px) {
          max-width: 12.5%;
          flex: 0 0 12.5%;
        }
        @media screen and (max-width: 992px) {
          max-width: 16.66%;
          flex: 0 0 16.66%;
        }
        @media screen and (max-width: 768px) {
          max-width: 20%;
          flex: 0 0 20%;
          margin: 20px 0;
        }
        @media screen and (max-width: 600px) {
          max-width: 25%;
          flex: 0 0 25%;
        }
        @media screen and (max-width: 540px) {
          max-width: 33.33%;
          flex: 0 0 33.33%;
        }
        img {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }
  :deep(.unlock-area) {
    position: relative;
    padding: 75px 0 90px;
    &.swiper,
    &.swiper .lang-max {
      &::before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        bottom: 7px;
        height: 2px;
        background-color: #254388;
        @media screen and (max-width: 1600px) {
          bottom: 6px;
        }
      }
      &::after {
        position: absolute;
        content: "";
        left: 50%;
        bottom: 0;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        background-color: @theme-color;
        @media screen and (max-width: 1600px) {
          width: 14px;
          height: 14px;
          margin-left: -7px;
        }
      }
    }
    &.swiper {
      padding: 30px 0 80px;
      margin: 90px auto 0;
      &::before {
        top: 7px;
        bottom: auto;
        @media screen and (max-width: 1600px) {
          top: 6px;
        }
      }
      &::after {
        top: 0;
        bottom: auto;
      }
    }
    .tit {
      width: 70%;
      margin: 0 auto 25px;
      @media screen and (max-width: 768px) {
        width: 80%;
      }
      @media screen and (max-width: 600px) {
        width: 95%;
      }
      &.short {
        width: 50%;
        padding: 110px 0 0;
        margin: 0 0 10px;
        @media screen and (max-width: 768px) {
          width: 80%;
        }
        @media screen and (max-width: 600px) {
          width: 95%;
        }
      }
    }
    .el {
      margin: 30px auto 0;
      a {
        &:hover {
          background-color: @theme-color;
          color: @white-color;
          border-color: @theme-color;
          cursor: text;
        }
      }
    }
    .unlock-cont {
      margin: 80px 120px 0;
      @media screen and (max-width: 600px) {
        margin: 80px 32px 0;
      }
      &.dApps {
        margin: 90px 120px 0;
        @media screen and (max-width: 600px) {
          margin: 90px 32px 0;
        }
        .el-col {
          .content {
            height: calc(100% - 82px);
            padding: 38px 34px;
            @media screen and (max-width: 768px) {
              height: calc(100% - 128px);
              margin: 24px;
            }
            .image {
              height: 170px;
              @media screen and (max-width: 768px) {
                height: 255px;
              }
              @media screen and (max-width: 600px) {
                height: 340px;
              }
              img {
                height: 72px;
                @media screen and (max-width: 768px) {
                  height: 98px;
                }
                @media screen and (max-width: 600px) {
                  height: 144px;
                }
              }
            }
          }
        }
      }
      .el-col {
        margin: 29px 0;
        &.n {
          margin: 0;
        }
        .content {
          position: relative;
          height: calc(100% - 66px);
          padding: 30px 34px;
          margin: 0 18px;
          background-color: #1e2026;
          border: 1px solid @theme-color;
          border-radius: 15px;
          color: @white-color;
          line-height: 1.2;
          transition: all 0.2s;
          @media screen and (max-width: 768px) {
            height: calc(100% - 152px);
            margin: 24px;
          }
          &:hover {
            // &::before {
            // transform: rotatey(180deg);
            // -webkit-transform: rotatey(180deg);
            // -o-transform: rotatey(180deg);
            // -moz-transform: rotatey(180deg);
            // -ms-transform: rotatey(180deg);
            // }
          }
          // &::before {
          //   position: absolute;
          //   content: "";
          //   left: 0;
          //   right: 0;
          //   top: 0;
          //   bottom: 0;
          //   background-color: @theme-color;
          //   border: 1px solid @theme-color;
          //   border-radius: 15px;
          //   transition: all 0.6s;
          //   z-index: 0;
          // }
          &.show {
            .tit-position {
              opacity: 0;
            }
            .desc {
              opacity: 1;
            }
          }
          .image {
            height: 130px;
            @media screen and (max-width: 768px) {
              height: 195px;
            }
            @media screen and (max-width: 600px) {
              height: 260px;
            }
            &.possible {
              align-items: flex-start;
              height: 116px;
              @media screen and (max-width: 768px) {
                height: 174px;
              }
              @media screen and (max-width: 600px) {
                height: 232px;
              }
              svg {
                height: 62px;
                @media screen and (max-width: 768px) {
                  height: 92px;
                }
                @media screen and (max-width: 600px) {
                  height: 124px;
                }
                &.big {
                  height: 66px;
                  @media screen and (max-width: 768px) {
                    height: 99px;
                  }
                  @media screen and (max-width: 600px) {
                    height: 132px;
                  }
                }
              }
            }
            svg {
              width: auto;
              height: 62px;
              @media screen and (max-width: 768px) {
                height: 93px;
              }
              @media screen and (max-width: 600px) {
                height: 124px;
              }
              &.big {
                height: 70px;
                @media screen and (max-width: 768px) {
                  height: 105px;
                }
                @media screen and (max-width: 600px) {
                  height: 140px;
                }
              }
            }
          }
          .tit-position {
            position: absolute;
            left: 45px;
            right: 45px;
            bottom: 50px;
            min-height: 52px;
            transition: all 0.2s;
            line-height: 1.3;
            @media screen and (min-width: 2160px) {
              min-height: 26px;
            }
            @media screen and (min-width: 2366px) {
              min-height: 39px;
            }
            @media screen and (max-width: 768px) {
              min-height: 78px;
            }
            @media screen and (max-width: 600px) {
              min-height: 117px;
            }
            @media screen and (max-width: 540px) {
              min-height: 156px;
            }
          }
          .desc {
            transition: all 0.2s;
            opacity: 0;
          }
        }
      }
    }
    .swiper-margin {
      margin: 0 138px;
      @media screen and (max-width: 600px) {
        margin: 0 32px;
      }
    }
    .swiper-container {
      padding: 20px 0 20px 200px;
      line-height: 1.38;
      @media screen and (min-width: 1920px) {
        padding: 40px 0 40px 170px;
      }
      @media screen and (min-width: 2160px) {
        padding: 50px 0 50px 150px;
      }
      @media screen and (max-width: 600px) {
        padding: 190px 0 80px;
      }
      .swiper-wrapper {
        .swiper-slide {
          .content {
            .left {
              margin: 0 90px 0 0;
              h3 {
                width: 60%;
                margin: 0 0 20px 0;
                color: @theme-color;
                line-height: 1.1;
                @media screen and (max-width: 1200px) {
                  width: 90%;
                }
              }
            }
            .right {
              img {
                height: 290px;
              }
            }
          }
        }
      }
      .swiper-pagination {
        display: flex;
        justify-content: center;
        flex-direction: column;
        right: auto;
        left: 0;
        top: 0;
        width: 200px;
        background-color: @bg-color;
        @media screen and (min-width: 1920px) {
          width: 170px;
        }
        @media screen and (min-width: 2160px) {
          width: 150px;
        }
        @media screen and (max-width: 600px) {
          flex-direction: initial;
          width: 100%;
          top: 40px;
          bottom: auto;
        }
        .swiper-pagination-bullet {
          width: auto;
          max-width: 90px;
          height: auto;
          // padding: 4px 24px;
          margin: 6px 0;
          background: @white-color;
          border: 1px solid @theme-color;
          border-radius: 35px;
          line-height: 1.2;
          color: @theme-color;
          opacity: 1;
          transition: all 0.2s;
          white-space: nowrap;
          &.swiper-pagination-bullet-active,
          &:hover {
            background-color: @theme-color;
            color: @white-color;
          }
          @media screen and (max-width: 600px) {
            max-width: 180px;
            padding: 0 50px;
            margin: 6px 24px;
            border-radius: 135px;
          }
        }
      }
    }
  }
  :deep(.dapps-area) {
    padding: 80px 0 110px;
    margin: 90px 0 0;
    background: url(../../assets/images/about/background-image05.png),
      url(../../assets/images/about/background-image04.png),
      url(../../assets/images/dashboard/background-image04.png);
    background-size: 100%, 100%, auto 90%;
    background-position: left top, left bottom, right center;
    background-repeat: no-repeat, no-repeat, no-repeat;
    .el-row {
      background: url(../../assets/images/dashboard/background-image05.png) 1%
        center no-repeat;
      background-size: 90px;
      @media screen and (max-width: 1200px) {
        background-position-x: 3%;
        background-size: 130px;
      }
      @media screen and (max-width: 600px) {
        background-position-x: 0;
        background-size: 160px;
      }
      .content {
        padding: 0 50px;
        h1 {
          padding: 10px 0;
          span {
            width: 50%;
            margin: 0 0 30px;
            @media screen and (max-width: 1200px) {
              width: 70%;
            }
            @media screen and (max-width: 992px) {
              width: 80%;
            }
            @media screen and (max-width: 768px) {
              width: 90%;
            }
          }
        }
        h3 {
          color: @text-w-color;
          line-height: 1.45;
        }
        .el {
          a {
            margin: 0;
          }
        }
      }
    }
  }
  :deep(.thriving) {
    margin: 181px 0 60px;
    background: url(../../assets/images/dashboard/background-image08.png),
      url(../../assets/images/dashboard/background-image07.png);
    background-size: 192px, 716px;
    background-position: 54px 145px, right center;
    background-repeat: no-repeat, no-repeat;
    background-color: @theme-color;
    .thriving-cont {
      padding: 120px 0 90px;
      margin: 0 230px 0 138px;
      @media screen and (min-width: 2160px) {
        margin: 0 180px 0 80px;
      }
      @media screen and (max-width: 600px) {
        margin: 0 32px;
      }
      .el-row {
        .el-col {
          margin: 60px 0 0;
          .content {
            padding: 40px 64px;
            background-color: @white-color;
            border-radius: 15px;
            color: @theme-color;
            box-shadow: 0 0 16px rgba(212, 212, 212, 0.4);
            h1 {
              margin: 10px 0;
            }
            p {
              color: #696e75;
            }
          }
        }
      }
    }
  }
  :deep(.any-updates) {
    position: relative;
    padding: 45px 0 80px;
    .any-banner {
      position: relative;
      margin: 0 50px;
      background: @theme-color;
      border-radius: 30px;
      overflow: hidden;
      @media screen and (max-width: 600px) {
        margin: 0;
      }
      .bg {
        position: absolute;
        left: -234px;
        top: -90px;
        bottom: -90px;
        z-index: 1;
        img {
          height: 100%;
        }
      }
      .el-row {
        padding: 70px 0 80px;
        margin: 0 155px;
        background: url(../../assets/images/dashboard/background-image02.png)
          right center no-repeat;
        background-size: 245px;
        z-index: 9;
        @media screen and (max-width: 600px) {
          margin: 0 55px;
        }
        .d {
          padding: 20px 0 30px;
        }
        .el {
          margin: 25px 0 0;
          .el-button,
          a {
            margin: 0;
            background-color: transparent;
            border-color: @white-color;
            box-shadow: none;
            &:hover {
              background-color: @white-color;
              color: @theme-color;
            }
          }
        }
        .el-input {
          width: 45%;
          min-width: 300px;
          font-size: inherit;
          .el-input__wrapper {
            height: auto;
            background-color: @white-color;
            font-size: inherit;
            box-shadow: none;
            border: 1px solid @white-color;
            border-radius: 100px;
            .el-input__inner {
              height: auto;
              padding: 4px 55px 4px 6px;
              background: url(../../assets/images/dashboard/icon-right.png)
                calc(100% - 30px) center no-repeat;
              background-size: 15px;
              font-size: inherit;
              color: #b0b0b0;
            }
          }
        }
      }
    }
  }
}
</style>
