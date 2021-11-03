<template>
  <main v-if="about" id="content" class="content" >
    <div class="blog-single-cover scheme-light"  style="background-color: #666871;">
      <figure class="blog-single-media"  data-parallax="true" data-parallax-options='{ "parallaxBG": true, "triggerHook": "onLeave" }' data-parallax-from='{ "translateY": "0%" }' data-parallax-to='{ "translateY": "60%" }'>
        <img src="/front/amirimages/profile/villa/1.jpg" alt="Blog single">
      </figure>
      <div class="blog-single-details">
        <div class="text-center">
          <h1 class="blog-single-title entry-title h2 strong6" data-split-text="true" data-split-options='{ "type": "lines" }'>
            {{about.title}}</h1>
        </div><!-- /.row -->
      </div><!-- /.blog-single-details -->
    </div><!-- /.blog-single-cover -->
    <article class="blog-single bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="blog-single-content entry-content pull-up expanded" v-html="about.content">
            </div><!-- /.blog-single-content entry-content -->
          </div><!-- /.col-md-8 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </article><!-- /.blog-single -->
  </main>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "about_list",

  created() {
    if (!this.page) {
      let id = this.$route.params.id;
      this.$store.dispatch('fetchAboutDetail', id);
    }

  },
  computed:{
    ...mapGetters([ 'getAboutDetail']),

    about() {
      let id = this.$route.params.id;
      return this.getAboutDetail.find(p => p.id == id);
    }
  },


  watch: {
    about: function(newVal) {
      if (newVal == undefined) {
        let id = this.$route.params.id;
        this.$store.dispatch('fetchAboutDetail', id);
      }
    }
  }

}
</script>

<style scoped>

</style>