<template>
    
        <!-- 评价 -->
      <section id="ratingContainer" class="rating_container">
        <section style="transition-timing-function: cubic-beizer(0.165,0.84,0.44,1); transition-duration:0ms;transform:translate(0px,0px) translateZ(0px);">
          <section>
            <header class="rating_header">
              <section class="rating_header_left">
                <p>{{Number(shopScore.overall_score).toFixed(1)}}</p>
                <p>综合评价</p>
                <p>高于周边商家{{(Number(shopScore.compare_rating*100)).toFixed(1)}}%</p>
              </section>
              <section class="rating_header_right">
                  <p>
                      <span>服务态度</span>
                      <section class="rating_container">
                          <section class="star_container">
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                          </section>
                          <div class="star_overflow" :style="{width: (Number(shopScore.service_score).toFixed(1))*2/5+unit}">
                            <section class="star_container">
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                            </section>
                          </div>
                      </section>
                      <span class="rating_num">{{Number(shopScore.service_score).toFixed(1)}}</span>  
                  </p>

                  <p>
                    <span>菜品评价</span>
                    <section class="rating_container">
                          <section class="star_container">
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                          </section>
                          <div class="star_overflow" :style="{width: (Number(shopScore.food_score).toFixed(1))*2/5+unit}">
                            <section class="star_container">
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                            </section>
                          </div>
                      </section>
                      <span class="rating_num">{{Number(shopScore.food_score).toFixed(1)}}</span>
                  
                  </p>

                  <p>
                    <span>送达时间</span>
                    <span class="delivery_time">{{shopScore.delivery_time}}分钟</span>
                  </p>
                  
              </section>
            </header>

            <ul class="tag_list_ul">
              <li @click.prevent="changeTag(index)" v-for="(shopTag,index) in shopRatingsTags" :key="index"  :class="[shopTag.unsatisfied ? 'unsatisfied' : '',foodIndex == index ? 'tagActivity' : '']">{{shopTag.name}}({{shopTag.count}})</li>
            </ul>

            <ul class="rating_list_ul">
              <li v-for="(shopRating,index) in shopRatings" :key="index" class="rating_list_li">
                <img :src="shopRating.avatar == '' ? '//elm.cangdu.org/img/default.jpg' : 'https://fuss10.elemecdn.com/'+shopRating.avatar+'.jpeg'" class="user_avatar">
                <!-- <img src="//elm.cangdu.org/img/default.jpg" class="user_avatar"> -->
                <section class="rating_list_details">
                  <header>
                    <section class="username_star">
                      <p class="username">{{shopRating.usename}}</p>
                      <p class="star_desc">
                        <section class="rating_container">
                          <section class="star_container">
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="grey_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                          </section>
                          <div class="star_overflow" :style="{width: (Number(shopRating.rating_star).toFixed(1))*2/5+unit}">
                            <section class="star_container">
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                              <svg data-v-5df6cab1="" class="orange_fill">
                                  <use data-v-5df6cab1="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                                    <svg id="star" viewBox="0 0 32 32">
                                    <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z" class="path1">
                                    </path>
                                    </svg>
                              </use>
                              </svg>
                            </section>
                          </div>
                      </section>
                      <span class="time_spent_desc">按时送达</span>
                      </p>
                    </section>
                    <time class="rated_at">{{shopRating.rated_at}}</time>
                  </header>

                  <ul class="food_img_ul">
                    <li v-for="(food,index) in shopRating.item_ratings" :key="index">
                      <img v-if="food.image_hash" :src="'https://fuss10.elemecdn.com/' + food.image_hash + '.jpeg'" >
                    </li>
                  </ul>

                  <ul class="food_name_ul">
                    <li v-for="(food,index) in shopRating.item_ratings" :key="index" class="ellipsis">
                      {{food.food_name}}
                    </li>
                  </ul>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </section>
    
</template>

<script>
    export default {
        props:{
          shopRatings:Array,
          shopScore:Object,
          shopRatingsTags:Array
        },
        data(){
          return{
            unit:"rem",
            foodIndex:0
          }
        },
        methods:{
          changeTag(index){
            this.foodIndex = index;
          }
        }
    }
</script>

<style scoped>
.rating_container{
  flex: 1;
  /* overflow-y: hidden; */
  flex-direction: column;
  background-color: #f5f5f5;
}
.rating_container li, .rating_container p, .rating_container span, .rating_container time{
    font-family: Helvetica Neue,Tahoma,Arial;
}
.rating_container .rating_header{
  display: flex;
  background-color: #fff;
  padding: .8rem .5rem;
  margin-bottom: .5rem;
}
.rating_container .rating_header .rating_header_left{
  flex: 3;
  text-align: center;
}
.rating_container .rating_header .rating_header_left p:first-of-type{
  font-size: 1.2rem;
  color: #f60;
}
.rating_container .rating_header .rating_header_left p:nth-of-type(2){
  font-size: .65rem;
  color: #666;
  margin-bottom: .1rem;
}
.rating_container .rating_header .rating_header_left p:nth-of-type(3){
  font-size: .4rem;
  color: #999;
}
.rating_container .rating_header .rating_header_right{
  flex: 4;
}
.rating_container .rating_header .rating_header_right p{
  font-size: .65rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.rating_container .rating_header .rating_header_right p span:first-of-type{
  color: #666;
  margin-right: .5rem;
}
.rating_container{
  position: relative;
  top: .2rem;
  /* width: 2rem; */
  height: .4rem;
}
.rating_container .star_container{
  position: absolute;
  display: flex;
  width: 2rem;
  height: .4rem;
  top: -.02rem;
  left: -.02rem
}
.rating_container .star_container .grey_fill{
  fill: #d1d1d1;
}
.rating_container .star_overflow{
  overflow: hidden;
  position: relative;
  height: 100%;
}
.rating_container .star_container .orange_fill{
  fill: #ff9a0d;
}
.rating_container .rating_header .rating_header_right p .rating_num{
  width: 3rem;
  font-size: .55rem;
  color: #f60;
}
.rating_container .tag_list_ul{
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: .5rem;
}
.rating_container .tag_list_ul .tagActivity{
  background-color: #3190e8;
  color: #fff;
}
.rating_container .tag_list_ul li{
  font-size: .6rem;
  padding: .3rem;
  border-radius: .2rem;
  border: 1px;
  margin: 0 .4rem .2rem 0;
}
.rating_container .tag_list_ul .unsatisfied{
  background-color: #f5f5f5;
  color: #aaa;
}
.rating_container .rating_list_ul{
  background-color: #fff;
  padding: 0 .5rem;
}
.rating_container .rating_list_ul .rating_list_li{
  border-top: 1px solid #f1f1f1;
  display: flex;
  padding: .6rem 0;
}
.rating_container .rating_list_ul .rating_list_li .user_avatar{
  width: 1.5rem;
  height: 1.5rem;
  border: .025rem;
  border-radius: 50%;
  margin-right: .8rem;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details{
  flex: 1;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details header{
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: .3rem;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details header .username_star{
  font-size: .55rem;
  color: #666;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details header .username_star .username{
  color: #666;
  margin-bottom: .2rem;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details header .username_star .star_desc{
  display: flex;
  align-items: center;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details header .username_star .star_desc .time_spent_desc{
  font-size: .55rem;
  color: #666;
  margin-left: .15rem;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details header .rated_at{
  font-size: .4rem;
  color: #999;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details .food_img_ul{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .4rem;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details .food_img_ul li img{
  width: 3rem;
  height: 3rem;
  margin-right: .4rem;
  display: block;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details .food_name_ul{
  display: flex;
  flex-wrap: wrap;
}
.rating_container .rating_list_ul .rating_list_li .rating_list_details .food_name_ul li{
  font-size: .55rem;
  color: #999;
  width: 2.2rem;
  padding: .2rem;
  border: .025rem solid #ebebeb;
  border-radius: .15rem;
  margin-right: .3rem;
  margin-bottom: 4px;
}
ul{
  list-style-type: none;
}
</style>