var app1 = new Vue({
   el: '#app',
   data: {
      message: 'Helloween'
   }
})

var app2 = new Vue({
   el: '#app2',
   data : {
      newName: '',
      names: ['tino', 'daulat', 'rachmanto']
   },
   methods: {
      addName() {
         this.names.push(this.newName);
         this.newName = '';
      }
   }
})

var app3 = new Vue({
   el: '#app3',
   data: {
      isLoading :  false
   },
   methods: {
      toggleClass(){
         this.isLoading = true
      }
   }
})

var app4 = new Vue({
   el: '#app4',
   data: {
      tasks: [
         {description : 'skajfhsakdjlfhsadkjfh', completed: false},
         {description : 'asldkfjoiufdqer', completed: true},
         {description : 'xczvpioasdflkjaerf', completed: false},
         {description : 'qwepoisvdlncvuiuy', completed: true},
         {description : 'werjknbsvoisdlkjdfsaa', completed: false},
      ]
   },
   computed: {
      incompleteTasks(){
         return this.tasks.filter(task => !task.completed);
      },
      completedTasks(){
         return this.tasks.filter(task => task.completed)
      }
   }
})


var app5 = new Vue({
   el: '#app5',
})

var app6 = new Vue({
   el: '#app6',
   data: {
      showModal: false
   }
})

var app7 = new Vue({
   el: '#app7',

})

var app8 = new Vue({
   el: '#app8',
   data: {
      couponApplied: false
   },
   methods: {
      onCouponApplied() {
         this.couponApplied = true;
      }
   }
})


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
// var app8 = new Vue({
//    el: '#app8',
//    data: {
//       couponApplied: false
//    },
//    created() {
//       Event.listen('applied', () => alert('Handling it'));
//    }
// })

var app9 = new Vue({
   el: '#app9',
   data: {
      showModal: false
   }
})

var app10 = new Vue({
   el: '#app10',
})
