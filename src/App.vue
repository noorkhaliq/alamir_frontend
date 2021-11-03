<template>
  <div id="app">
    <body data-mobile-nav-trigger-alignment="right" data-mobile-nav-align="left" data-mobile-nav-style="minimal" data-mobile-nav-shceme="gray" data-mobile-nav-breakpoint="1199">

    <div id="wrap" >

      <header class="main-header main-header-overlay " data-sticky-header="true">
        <div class="mainbar-wrap">
          <div class="container mainbar-container">
            <div class="row mainbar-row align-items-lg-stretch px-4" data-custom-animations="true" data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1200", "delay":"350", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":-60, "opacity":0}, "animations":{"translateY":0, "opacity":1} }'>

              <div class="col">
                <div class="BrandCol">
                  <a class="MainBrand" href="#" rel="home">
                    <img src="/front/amirimages/main-logo.svg" alt="شركة الأمير للاستشارات الهندسية">
                  </a>
                </div>
              </div><!-- /.col -->

              <div class="col">
                <ul id="primary-nav" class="main-nav nav align-items-lg-stretch justify-content-lg-center"  data-localscroll="true">
                  <li  class="is-active">
                    <router-link to="/" >
                      <span>الرئيسة</span>
                    </router-link>
                  </li>
                    <li>
                      <router-link to="/blogs"><span>جديد الشركة</span></router-link>
                    </li>
                  <li class="menu-item-has-children">
                    <router-link to="/project_list">
									<span class="link-txt">
										<span class="txt"> مشاريعنا <span class="submenu-expander"> <i class="fa fa-angle-down"></i> </span> </span>
									</span>
                    </router-link>
                    <ul class="nav-item-children">
                      <li> <a href="#"> <span>فلل سكنية</span></a></li>
                      <li> <a href="#"> <span>التصميم الداخلي</span></a></li>
                      <li> <a href="#"> <span>مباني تجارية وسكنية</span></a></li>
                      <li> <a href="#"> <span>مباني صناعية</span></a></li>
                      <li> <a href="#"> <span>مساجد</span></a></li>
                    </ul>
                  </li>

                  <li>
                    <router-link v-for="item in getTitleOne" :key="item.id" :to="'/about_list/'+item.id">
                      <span>عن الشركة</span>
                    </router-link>

                  </li>
<!--                  <li><a href="#Projects"><span>مشاريعنا</span></a></li>-->
<!--                  <li><a href="#contact"><span>تواصل معنا</span></a></li>-->

                </ul>
              </div><!-- /.col -->

              <div class="col text-right">

                <div class=" d-flex align-items-center">
                  <ul class="social-icon branded-text round social-icon-sm font-size-20 mr-3 ml-3">
                    <li v-for="item in getFacebook" :key="item.id"><a :href="item.value" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li v-for="item in getInstagram" :key="item.id"><a :href="item.value" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li v-for="item in getYoutube" :key="item.id"><a :href="item.value" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                  </ul>
                  <a v-for="item in getWhatsapp" :key="item.id" :href="item.value" class="btn btn-solid btn-sm round bg-whatsapp font-weight-medium">
                    <span><span class="btn-icon"><i class="fa fa-whatsapp font-size-20"></i></span></span>
                  </a>
                </div><!-- /.header-module -->


              </div><!-- /.col -->

            </div><!-- /.mainbar-row -->
          </div><!-- /.mainbar-container -->
        </div><!-- /.mainbar-container -->
      </header><!-- /.main-header -->

      <header id="MobHeader" class="searchActive3">

        <div class="HeaderTop" >
          <div class="d-flex" data-custom-animations="true" data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1200", "delay":"350", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":-60, "opacity":0}, "animations":{"translateY":0, "opacity":1} }'>
            <div class="MobHeader-LSide d-flex">
              <div class="MobHeader-ico">
                <a class="MobHeader-link" data-toggle="modal" data-target="#MobMenu"><i class="fa fa-bars headerIcosizeFix"></i></a>
              </div>
            </div>

            <div class="MobHeader-title">

              <a href="index.html" class="MobHeader-link">
                <img src="/front/amirimages/main-logo.svg" class="logo-dark" height="50">
              </a>
            </div>
            <div class="MobHeader-RSide d-flex">
              <div class="MobHeader-ico">
                <a href="https://api.whatsapp.com/send?phone=971502794830" class="mainMenuTrigger toggle MobHeader-link dropdown-toggle">
                  <i class="fa fa-whatsapp headerIcosizeFix text-whatsapp"></i>
                </a>
              </div>
              <div class="MobHeader-ico">
                <a href="tel:+971502794830" class="mainMenuTrigger toggle MobHeader-link dropdown-toggle">
                  <i class="fa fa-phone headerIcosizeFix text-primary"></i>
                </a>
              </div>


            </div>
          </div>
        </div>


      </header>

<router-view/>
      <footer class="main-footer bg-white" data-sticky-footer="true">

        <section class="pt-50">

          <div class="container">
            <div class="row">

              <div class="lqd-column col-md-2 text-center">
                <div class="mb-15">
                  <img src="/front/amirimages/foot-logo.svg" width="150">
                </div>
              </div><!-- /.col-md-3 col-sm-6 -->

              <div class="lqd-column col-md-6">
                <ul class="main-nav foot-inline-nav" data-localscroll="true">
                  <li class="is-active"><a href="#content"> <span>الرئيسة</span></a></li>
                  <li><a href="#OurService"><span>خدماتنا</span></a></li>
                  <li><a href="#recent-news"><span>جديد الشركة</span></a></li>
                  <li><a href="#about"> <span>عن الشركة</span></a></li>
                  <li><a href="#Projects"><span>مشاريعنا</span></a></li>
                  <li><a href="#contact"><span>تواصل معنا</span></a></li>

                </ul>

                <h4 class="strong6 ">عن الموقع</h4>
                <p class="">تتخذ شركة الأمير للاستشارات الهندسية إمارة دبي مقراً لها بمكتبها في منطقة الممزر - مقابل الملا بلازا - بناية AB Plaza 8 - Office 604</p>
                <ul class="social-icon branded round social-icon-sm mb-30">
                  <li v-for="item in getFacebook" :key="item.id"><a :href="item.value" target="_blank"><i class="fa fa-facebook"></i></a></li>
                  <li v-for="item in getInstagram" :key="item.id"><a :href="item.value" target="_blank"><i class="fa fa-instagram"></i></a></li>
                  <li v-for="item in getYoutube" :key="item.id"><a :href="item.value" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                </ul>

              </div><!-- /.col-md-3 col-sm-6 -->

              <div class="lqd-column col-md-3 ">

                <h4 class="strong6">التواصل</h4>
                <p>
                  <span v-for="item in getPoBox" :key="item.id">{{item.value}}</span> <br>
                  Tel : <a v-for="item in getPhone" :key="item.id" href="tel:0097142205250" >{{item.value}}</a> <br>
                  Email : <a v-for="item in getEmail" :key="item.id" href="mailto:info@alamircon.com">{{item.value}}</a><br>
                  Web : <a v-for="item in getWeb" :key="item.id" :href="item.value">www.alamircon.com</a>
                </p>

              </div><!-- /.col-md-3 col-sm-6 -->

            </div><!-- /.row -->
          </div><!-- /.container -->

        </section>

        <section class="bg-primary pt-25 pb-25 mt-50">
          <div class="container text-center">
            <p class="mb-0 text-white mb-xs-15 d-block-xs">حقوق النشر © 2020 www.alamircon.com ، جميع الحقوق محفوظة

              <router-link  v-for="item in getTitleTwo" :key="item.id" :to="'/about_list/'+item.id" class="text-white">سياسة الخصوصية</router-link> |

              <router-link  v-for="item in getTitleThree" :key="item.id" :to="'/about_list/'+item.id" class="text-white">الأحكام والشروط</router-link>
            </p>

          </div><!-- /.container -->
        </section>

      </footer><!-- /.main-footer -->

    </div><!-- /#wrap -->

    <div class="modal fade MobMenu" id="MobMenu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <a class="AmirHeader-btn close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </a>
      <div class="modal-dialog" role="document">

        <div class="MainSec-mob">
          <div class="MainSec-mob-logo">
            <img src="/front/amirimages/main-logo.svg">
          </div>
          <ul class="main-nav nav " data-localscroll="true">
            <li class="is-active"><a href="#content"> <span>الرئيسة</span></a></li>
            <li><a href="#OurService"><span>خدماتنا</span></a></li>
            <li><a href="#recent-news"><span>جديد الشركة</span></a></li>
            <li><a href="#about"> <span>عن الشركة</span></a></li>
            <li><a href="#Projects"><span>مشاريعنا</span></a></li>
            <li><a href="#contact"><span>تواصل معنا</span></a></li>

          </ul>

          <ul class="social-icon branded round social-icon-sm mb-30 p-15">
            <li><a href="https://www.facebook.com/AlAmir.Engineering.Consultants" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/alamir_engineering_consultants" target="_blank"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCwrSVLGoWjbDMqr-Sw46dMQ" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
          </ul>

        </div>



      </div>
    </div>

    </body>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  created() {
    this.$store.dispatch('fetchSetting' );

  },
  computed: {
    ...mapGetters(['getPhone','getYoutube' ,'getWhatsapp' ,'getInstagram' ,'getFacebook','getPoBox',
      'getYoutube' , 'getEmail' ,'getWeb' ,'getTitleOne', 'getTitleTwo', 'getTitleThree']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
