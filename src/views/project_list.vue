<template>
  <main id="content" class="content" >
    <section class="bg-fixed lqd-css-sticky bg-cover mb-0" style="background-image: url(/front/amirimages/slide-3.jpg);">
      <div class="liquid-row-overlay bg-fade-dark-05"></div>
      <div class="container MainContainer pt-100 pb-100">
        <div class="row">
          <div class="lqd-column col-md-12 text-center pt-100 ">
            <div class="ld-fancy-heading"  data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"2500", "delay":"350", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":60, "translateZ":160, "rotateX":-84, "opacity":0}, "animations":{"translateY":0, "translateZ":0, "rotateX":0, "opacity":1} }'>
              <ol class="breadcrumb reset-ul inline-nav comma-sep-li text-white" data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"2500", "delay":"350", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":-60, "translateZ":-160, "rotateX":-84, "opacity":0}, "animations":{"translateY":0, "translateZ":0, "rotateX":0, "opacity":1} }'>
                <li class="breadcrumb-item">
                  <router-link to="/">
                    <span>  الرئيسية</span>
                  </router-link>
                </li>
                <li class="breadcrumb-item active"><span>المشاريع</span></li>
              </ol>
            </div><!-- /.ld-fancy-heading -->
          </div>
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
    <section class="bg-white pt-70 pb-70 z-9" id="Projects">
      <div class="container">
        <header class="fancy-title text-center mb-30" >
          <h2 class="mb-4 font-size-32 color-primary strong6">مشاريع شركة الأمير للاستشارات الهندسية </h2>
        </header>
        <div class="liquid-portfolio-list text-center">
          <ul class="filter-list filter-list-inline size-md " id="Amir-portdolio" >
            <li class="active" data-filter="*"><a>جميع المشاريع</a></li>
            <li v-for="item in getCategoryList" :key="item.id" class="list-group-item" >
              {{item.category_title}}
            </li>
          </ul>
          <div class="row liquid-portfolio-list-row mt-30" data-liquid-masonry="true" data-masonry-options='{ "filtersID": "#Amir-portdolio" }'>

            <div v-for="item in getProjectList" :key="item.id" class="lqd-column col-lg-3 col-xs-6 masonry-item interior">
              <div class="ld-pf-item ld-pf-light pf-details-inside pf-details-boxed pf-details-circle pf-details-pull-down pf-details-pull-left title-size-18 pf-details-h-str pf-details-v-end pf-contents-mid pf-hover-masktext">
                <div class="ld-pf-inner">
                  <div class="ld-pf-image">
                    <figure :style="'background-image:url('+(item.image ? item.image : '/front/amirimages/profile/villa/2.jpg')+')'">
                      <img :src="item.image" alt="Portfolio Image">
                    </figure>
                  </div>
                  <div class="ld-pf-details">
                    <div class="ld-pf-bg bg-secondary" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "this", "duration": 850, "initValues": { "scale": 0, "transformOrigin": "0 80% 0" }, "animations": { "scale": 1, "transformOrigin": "0 80% 0" } }'></div><!-- /.ld-pf-bg -->
                    <div class="ld-pf-details-inner justify-content-center" data-custom-animations="true" data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": ".split-inner", "startDelay": 200, "duration": 650, "delay": 150, "initValues": { "translateY": "100%" }, "animations": { "translateY": "0", "rotateX": 0 } }'>
                      <h5 class="ld-pf-title mb-0"  data-split-options='{ "type": "lines" }'>{{item.title}}</h5>
                      <div class="ld-pf-category size-md"  data-split-options='{ "type": "lines" }'>
                        <span class="d-block strong6">{{item.location}}</span>
                        <span class="d-block strong6">{{item.area}}</span>
                      </div>
                    </div>
                  </div>
<!--                  {{&#45;&#45;                                <a href="{{asset('amirimages')}}/profile/villa/1.jpg" class="liquid-overlay-link fresco" data-fresco-group="profile" data-fresco-caption="المساحة: ٢٣٣ م - الموقع - النوع"></a>&#45;&#45;}}-->
                </div>
              </div><!-- /.ld-pf-item -->
            </div>

          </div><!-- /.row liquid-portfolio-list-row -->
        </div><!-- /.liquid-portfolio-list -->
      </div><!-- /.container -->
    </section>
  </main>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "project_list",

  mounted(){
    this.$store.dispatch('fetchProjectList' );
    this.$store.dispatch('fetchCategoryList' );
  },

  computed: {
    ...mapGetters(['getProjectList','getCategoryList']),
  },}
</script>

<style scoped>

</style>