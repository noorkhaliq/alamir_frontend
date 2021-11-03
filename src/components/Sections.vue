<template>
  <section
      class="MainSlider lqd-css-sticky bg-cover bg-center d-flex flex-wrap" style="height: 100vh" data-custom-animations="true" data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1500", "delay":"900", "easing":"easeOutQuint", "direction":"forward", "initValues":{ "opacity":0}, "animations":{ "opacity":1} }'
      data-row-bg="true" data-animate-onscroll="true" data-animate-from='{"opacity":1}' data-animate-to='{"opacity":0}' data-slideshow-bg="true"
      data-slideshow-options='{"effect":"fade","imageArray":["/front/amirimages/slide-1.jpg","/front/amirimages/slide-3.jpg","/front/amirimages/slide-2.jpg"]}'>
    <div class="slider-bg-curve"></div>

    <div class="container">
      <div class="MainMessage" data-custom-animations="true" data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1500", "delay":"600", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":-60, "opacity":0}, "animations":{"translateY":0, "opacity":1} }'>
        <div>
          <div class="strong6" data-fittext="true" data-fittext-options='{"compressor":0.675,"maxFontSize":"18","minFontSize":"14"}' data-split-text="true" data-split-options='{ "type": "lines" }' data-text-rotator="true">
							<span class="">
								<span class="txt-rotate-keywords">
									<span class="keyword active">هل تتطلَّع إلى بناء منزل أحلامك؟</span>
									<span class="keyword">هل تبحث عن تصميمٍ مميزٍ يلبِّي طموحاتك؟</span>
								</span>
							</span>
          </div>
        </div>
        <h1 class="h2 strong6 color-primary mt-2 mb-2">شركة الأمير للاستشارات الهندسية</h1>
        <h3 class="strong6 h4 text-secondary mt-0">نصممُ بابتكار.. بعيداً عن التكرار</h3>

        <p class="text-dark strong6">تقدم لكم شركة الأمير تصاميمَ معماريةً مميزة وديكورات داخلية فريدة
          بالإضافة للإشراف الهندسي الفعال على كافة أنواع المباني، بخبرة هندسية تتجاوز 25 سنة
        </p>

        <p class="mt-3 strong6">
          <span>للاستفسار يرجى الاتصال على الرقم: </span>
          <a href="tel:+971502794830" class="text-primary ltr">0502794830</a>
          <span>أو على</span>
          <a href="https://api.whatsapp.com/send?phone=971502794830" class="text-whatsapp">واتساب</a>
        </p>

        <div class=" d-flex align-items-center">
          <a href="#" class="btn btn-solid btn-sm btn-bordered-gradient-primary round strong6">
            <span><span class="btn-text">عن الشركة</span></span>
          </a>
          <a href="https://youtu.be/8VSOsh7BctQ" class="btn btn-solid btn-sm round bg-youtube strong6 fresco">
								<span>
									<span class="btn-icon"><i class="fa fa-youtube ml-2"></i></span>
									<span class="btn-text">فيديو تعريفي</span>
								</span>
          </a>


        </div><!-- /.header-module -->

      </div>
    </div>


    <span class="row-bg-loader"></span>

  </section>

</template>

<script>
export default {
  name: "Sections"
}
</script>

<style scoped>

</style>