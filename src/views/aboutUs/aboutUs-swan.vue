<template>
  <div class="page-body w-100 pt-32 mb-32">
    <el-row :gutter="32" class="at-container">
      <el-col :xs="24" :md="12">
        <div class="background flex flex-wrap flex-jc-center plr-16"> 
          <img :src="swanImages" class="swan-img" />
          <div class="font-32 font-bold mt-16 mb-16 w-100 text-center">About Swan</div>
          <div class="font-16 w-100 desc">
            At Swan, our mission is to build a powerful and easy-to-use storage and computing infrastructure layer for the Web3. Our team members are in Canada, the US, and China.
            <br /><br />
            Swan works closely with organizations such as Chainlink and Filecoin Foundation. We are honored to be an active contributor to the community and serve as a leading member of the FVM early builder and RETMKT builders program. Swan is also the leading Filecoin North America Notary, and an Orbit Spaceship Ambassador.</div>
        </div>
      </el-col>
      <el-col :xs="24" :md="12">
        <el-row class="background">
          <el-col :xs="24" :md="14">
            <div class="flex flex-wrap flex-jc-center pr-32"> 
              <div class="font-32 font-bold mt-16 mb-16 w-100">Meet the Founder</div>
              <div class="font-16 w-100 desc">
                Charles Cao has over 15 years working experience in information technology and fintech industry. His extensive expertise contributes to the team growth in crypto mining technologies and public relationships. Charles Cao is the ambassador of Filecoin, mentor of Techstars accelerator, and Filecoin community champion. He is working closely with hardware providers, government, Web3 blockchain communities, analysts, and investors in the industry.
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :md="10" class="mt-16">
            <div class="image-style flex flex-wrap flex-jc-center">
              <img :src="bossImg" class="swan-img" />
              <div class="name font-22 font-bold text-center mt-16 w-100">
                Charles Cao
              </div>
              <div class="name font-16 text-center mt-4 mb-4 w-100">Co-Founder</div>
              <svg @click="openPage('https://www.linkedin.com/in/charles-cao-09a79526/')" class="icon pointer" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="32" height="32" rx="16" fill="#0A66C2"/>
                <path d="M24.0008 7.19995H8.99923C8.65466 7.19995 8.3242 7.33683 8.08055 7.58048C7.83689 7.82414 7.70001 8.1546 7.70001 8.49917V23.5007C7.70001 23.8453 7.83689 24.1758 8.08055 24.4194C8.3242 24.6631 8.65466 24.8 8.99923 24.8H24.0008C24.3454 24.8 24.6758 24.6631 24.9195 24.4194C25.1631 24.1758 25.3 23.8453 25.3 23.5007V8.49917C25.3 8.1546 25.1631 7.82414 24.9195 7.58048C24.6758 7.33683 24.3454 7.19995 24.0008 7.19995ZM12.9458 22.193H10.2997V13.7877H12.9458V22.193ZM11.6209 12.623C11.3207 12.6213 11.0278 12.5307 10.7791 12.3627C10.5304 12.1947 10.337 11.9567 10.2233 11.6789C10.1097 11.4011 10.0809 11.0959 10.1406 10.8017C10.2002 10.5075 10.3457 10.2376 10.5587 10.0261C10.7716 9.81449 11.0424 9.67075 11.337 9.61296C11.6315 9.55516 11.9366 9.58592 12.2136 9.70134C12.4907 9.81676 12.7274 10.0117 12.8938 10.2615C13.0602 10.5113 13.1489 10.8048 13.1487 11.105C13.1515 11.3059 13.1139 11.5054 13.038 11.6915C12.9621 11.8776 12.8495 12.0465 12.7069 12.1881C12.5643 12.3298 12.3947 12.4413 12.2081 12.516C12.0215 12.5907 11.8218 12.6271 11.6209 12.623ZM22.6991 22.2003H20.0542V17.6084C20.0542 16.2542 19.4786 15.8362 18.7355 15.8362C17.9508 15.8362 17.1808 16.4277 17.1808 17.6426V22.2003H14.5347V13.7938H17.0793V14.9586H17.1136C17.369 14.4416 18.2637 13.558 19.6289 13.558C21.1053 13.558 22.7003 14.4343 22.7003 17.001L22.6991 22.2003Z" fill="white"/>
              </svg>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
      
    <el-row :gutter="32" class="Notary-container mt-32">
      <el-col :xs="24" :md="14" class="mt-16">
        <img :src="postImages" class="w-100 border-8"/>
      </el-col>
      <el-col :xs="24" :md="10" class="mt-16">
        <div class="font-32 font-bold uppercase mb-16">PROUD PARTNER OF THE FILECOIN NETWORK</div>
        <div class="font-16 mb-16">At Swan, our mission is to build a powerful and easy-to-use storage and computing infrastructure layer for the Web3. Our team members are in Canada, the US, and China.</div>
        <div class="font-16">Swan works closely with organizations such as Chainlink and Filecoin Foundation. We are honored to be an active contributor to the community and serve as a leading member of the FVM early builder and RETMKT builders program. Swan is also the leading Filecoin North America Notary, and an Orbit Spaceship Ambassador.</div>
      </el-col>
    </el-row> 
  </div>
</template>

<script setup lang="ts">
import bossImg from '@/assets/img/aboutUs/Charles-Cao.jpg'
import swanImages from '@/assets/img/aboutUs/about-swan.png'
import postImages from '@/assets/img/aboutUs/Notary_Post.jpg'
import { openPage } from '@/hooks/router';

</script>

<style lang="less" scoped>
.desc{
  line-height: 1.5;
}
.at-container {
  .el-col{
    .background{
      height: 100%;
      padding: 0.32rem;
      background-image: linear-gradient(
        180deg, 
        var(--color-background-image-top), 
        var(--color-background-image-bottom)
      );
      border-radius: 0.16rem;
      .swan-img {
        display: block;
        width: 1.58rem;
        height: 1.58rem;
        border-radius: 2rem;
      }
      .image-style{
        img {
          width: 2.1rem;
          max-width: 100%;
          height: auto;
        }
        svg {
          width: 0.32rem;
          height: 0.32rem;
          @media screen and (max-width: 768px) {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
}

.Notary-container {
  padding: 0.16rem;
  background-image: linear-gradient(
    180deg, 
    var(--color-background-image-top), 
    var(--color-background-image-bottom)
  );
  border-radius: 0.16rem;
  img {
    display: block;
    &.border-8{
      border-radius: 0.08rem;
    }
  }
  .font-16 {
    line-height: 1.3;
  }
}
</style>
