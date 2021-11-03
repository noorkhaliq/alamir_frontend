<template>
  <main v-if="blogs" id="content" class="content" >
    <div v-if="blogs.image" class="blog-single-cover scheme-light"  style="background-color: #666871;">
      <figure v-if="blogs.image" class="blog-single-media" >
        <img v-show="blogs.image" :src="blogs.image" alt="Blog single">
      </figure>
      <div class="blog-single-details">
        <div class="text-center">
          <ol class="breadcrumb reset-ul inline-nav comma-sep-li text-white"
              data-custom-animations="true" data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"2500", "delay":"350", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":-60, "translateZ":-160, "rotateX":-84, "opacity":0}, "animations":{"translateY":0, "translateZ":0, "rotateX":0, "opacity":1} }'>
            <li class="breadcrumb-item active"><a href="#"><span>جديد الشركة</span></a></li>
            <li class="blog-single-title text-white entry-title h2 strong6" data-split-options='{ "type": "lines" }'>{{blogs.title }} </li>
          </ol>
        </div><!-- /.row -->
      </div><!-- /.blog-single-details -->
    </div><!-- /.blog-single-cover -->
    <article class="blog-single bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2" v-html="blogs.description">
            <!-- /.blog-single-content entry-content -->


          </div><!-- /.col-md-8 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </article><!-- /.blog-single -->

<!--    <div class="blog-single-content entry-content pull-up expanded">-->
<!--      <footer class="text-center">-->
<!--        <div class="page-nav">-->
<!--          <nav aria-label="Page navigation">-->
<!--            <ul class="pagination">-->
<!--            </ul>-->
<!--          </nav>-->
<!--        </div>-->
<!--      </footer>-->
<!--      &lt;!&ndash; /.blog-single-footer entry-footer &ndash;&gt;-->
<!--    </div>-->
  </main>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "blogs_detail",


  computed: {
    ...mapGetters(['getBlogDetail']),

    blogs() {
      let id = this.$route.params.id;
      return this.getBlogDetail.find(p => p.id == id);
    }
  },

  async mounted() {
    if (!this.page) {
      let id = this.$route.params.id;
      this.$store.dispatch('fetchBlogDetail', id);
    }

  },

  watch: {
    page: function(newVal) {
      if (newVal == undefined) {
        let id = this.$route.params.id;
        this.$store.dispatch('fetchBlogDetail', id);
      }
    }
  }

}
</script>

<style scoped>

</style>