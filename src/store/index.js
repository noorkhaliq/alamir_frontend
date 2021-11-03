import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog_list:{},
    index_blogs:[],
    index_projects:[],
    services:[],
    category:[],
    blog_detail:[],
    about_detail:[],

    project_list:[],
    category_list:[],

    phone:[],
    pobox:[],
    email:[],
    web:[],
    facebook_url:[],
    whatsapp_url:[],
    youtube_url:[],
    instagram_url:[],

    title_one:[],
    title_two:[],
    title_three:[],
  },

  mutations: {
    BLOG_LIST_DATA(state, data) {
      state.blog_list = data;
    },

    INDEX_BLOGS_DATA(state, data) {
      state.index_blogs = data;
    },

    INDEX_PROJECTS_DATA(state, data) {
      state.index_projects = data;
    },

    PROJECT_LIST_DATA(state, data) {
      state.project_list = data;
    },

    CATEGORY_LIST_DATA(state, data) {
      state.category_list = data;
    },


    SET_SERVICES(state, data) {
      state.services = data;
    },

    SET_CATEGORY(state, data) {
      state.category = data;
    },

    SET_BLOG_DETAIL(state, data) {
      state.blog_detail = [...state.blog_detail, data];
    },

    SET_ABOUT_DETAIL(state, data) {
      state.about_detail = [...state.about_detail, data];
    },

    SET_TITLE_ONE(state, data) {
      state.title_one =  data;
    },
    SET_TITLE_TWO(state, data) {
      state.title_two =  data;
    },
    SET_TITLE_THREE(state, data) {
      state.title_three =  data;
    },


    SET_PHONE_DATA(state, data) {
      state.phone = data;
    },
    SET_POBOX_DATA(state, data) {
      state.pobox = data;
    },
    SET_FACEBOOK_URL(state, data) {
      state.facebook_url = data;
    },
    SET_INSTAGRAM_URL(state, data) {
      state.instagram_url = data;
    },
    SET_WHATSAPP_URL(state, data) {
      state.whatsapp_url = data;
    },
    SET_YOUTUBE_URL(state, data) {
      state.youtube_url = data;
    },
    SET_EMAIL_DATA(state, data) {
      state.email = data;
    },

    SET_WEB_URL(state, data) {
      state.web = data;
    },

  },

  actions: {

    async fetchSetting({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/settings')  ;
      commit('SET_PHONE_DATA', data.phone)
      commit('SET_EMAIL_DATA', data.email)
      commit('SET_WEB_URL', data.web)
      commit('SET_POBOX_DATA', data.pobox)
      commit('SET_FACEBOOK_URL', data.facebook_url)
      commit('SET_INSTAGRAM_URL', data.instagram_url)
      commit('SET_WHATSAPP_URL', data.whatsapp_url)
      commit('SET_YOUTUBE_URL', data.youtube_url)
      commit('SET_TITLE_ONE', data.title_one)
      commit('SET_TITLE_TWO', data.title_two)
      commit('SET_TITLE_THREE', data.title_three)

    },

    async fetchIndexBlogs({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/index-blogs')  ;
      commit('INDEX_BLOGS_DATA', data.data)
    },

    async fetchIndexProjects({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/index-projects')  ;
      commit('INDEX_PROJECTS_DATA', data.data)
    },

    async fetchProjectList({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/project-list')  ;
      commit('PROJECT_LIST_DATA', data.data)
    },

    async fetchCategoryList({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/category-list')  ;
      commit('CATEGORY_LIST_DATA', data.data)
    },

    async fetchServices({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/services')  ;
      commit('SET_SERVICES', data.data)
    },

    async fetchCategory({commit}) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/category')  ;
      commit('SET_CATEGORY', data.data)
    },

    async fetchBlogList({commit},page =1) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/blog_list?page='+page)  ;
      commit('BLOG_LIST_DATA', data)
    },

    async fetchBlogDetail({commit}, id) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/blog_detail/'+id)  ;
      commit('SET_BLOG_DETAIL', data.data);
    },

    async fetchAboutDetail({commit}, id) {
      let {data} = await axios.get('http://localhost/data_panel/public/api/about/'+id)  ;
      commit('SET_ABOUT_DETAIL', data.data);
    },



  },



  getters: {
    getBlogList(state) {
      return state.blog_list;
    },

    getIndexBlogs(state) {
      return state.index_blogs;
    },

    getIndexProjects(state) {
      return state.index_projects;
    },


    getServices(state) {
      return state.services;
    },

    getCategory(state) {
      return state.category;
    },

    getBlogDetail(state) {
      return state.blog_detail;
    },

    getAboutDetail(state) {
      return state.about_detail;
    },

    getPhone(state) {
      return state.phone;
    },
    getPoBox(state) {
      return state.pobox;
    },
    getFacebook(state) {
      return state.facebook_url;
    },
    getWhatsapp(state) {
      return state.whatsapp_url;
    },
    getYoutube(state) {
      return state.youtube_url;
    },
    getInstagram(state) {
      return state.instagram_url;
    },
    getEmail(state) {
      return state.email;
    },
    getWeb(state) {
      return state.web;
    },

    getTitleOne(state) {
      return state.title_one;
    },

    getTitleTwo(state) {
      return state.title_two;
    },

    getTitleThree(state) {
      return state.title_three;
    },

    getProjectList(state) {
      return state.project_list;
    },

    getCategoryList(state) {
      return state.category_list;
    },



  },


})
