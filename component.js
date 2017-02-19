// <message></message>
Vue.component('message',{
   props: ['title', 'body'],
   data(){
      return {
         isVisible : true,
      }
   },
   template: `
      <article class="message" v-show='isVisible'>
         <div class="message-header">
            {{title}}
            <button type="button" @click=" isVisible = false "> X </button>
         </div>

         <div class="message-body">
            {{body}}
         </div>

      </article>
   `
});

// <modal></modal>
Vue.component('modal', {
   template: `
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
               <p><slot></slot></p>
            </div>
        </div>
        <button class="modal-close" @click="$emit('close')"></button>
      </div>
   `
})


// <tabs></tabs>
Vue.component('tabs', {
   template: `
      <div>
         <div class="tabs">
            <ul>
               <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }} </a>
               </li>
            </ul>
         </div>

         <div class="tabs-details">
            <slot></slot>
         </div>

      </div>
   `,

   data(){
      return {
         tabs: []
      }
   },

   created() {
      // get children element inside <tabs>
      this.tabs = this.$children;
   },

   methods: {
      // select children element inside <tabs>
      selectTab(selectedTab) {
         this.tabs.forEach(tab =>{
            tab.isActive = (tab.name == selectedTab.name);
         });
      }
   }
});

// <tab></tab>
Vue.component('tab', {
   template: `
      <div v-show="isActive"><slot></slot></div>
   `,
   props: {
      name: {required: true},
      selected: { default: false }
   },
   data() {
      // dynamic active class inside <tab>
      return {isActive: false}
   },
   computed: {
      // add spesific #id to url/link based on id in html-file
      href() {
         return '#' + this.name.toLowerCase().replace(/ /g, '-');
      }
   },
   mounted() {
      // "active" class will be active if we selected it
      this.isActive = this.selected;
   }
})


Vue.component('coupon', {
   template: `
      <input placeholder="Enter your coupon" @keyup.enter="onCouponApplied">
   `,
   methods: {
      onCouponApplied(){
         this.$emit('applied');
      }
   }
})


//
// window.Event = new class {
//    constructor() {
//       this.vue = new Vue()
//    }
//
//    fire(event, data= null) {
//       this.vue.$emit(event, data);
//    }
//
//    listen(event, callback){
//       this.vue.$on(event, callback);
//    }
// }
//
// Vue.component('coupon', {
//    template: `
//       <input placeholder="Enter your coupon" @keyup.enter="onCouponApplied">
//    `,
//    methods: {
//       onCouponApplied(){
//          Event.fire('applied');
//       }
//    }
// })


Vue.component('modal-card', {
   template: `
   <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">

         <header class="modal-card-head">
            <p class="modal-card-title">
               <slot name="header"></slot>
            </p>
            <button class="delete" @click="$emit('close')"></button>
         </header>

         <section class="modal-card-body">
            <slot></slot>
         </section>

         <footer class="modal-card-foot">
            <slot name="footer">
               <a class="button is-success">Default Button</a>
            </slot>
         </footer>
      </div>
   </div>
   `,
})


Vue.component('inline-templating', {
   data() {
      return {plus : 10};
   }
})
