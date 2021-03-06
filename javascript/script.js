const app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                image: './img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: './img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: './img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: './img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: './img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        current: 0,
        intervalId : null
    },
    methods: {
        prev() {
            this.current === 0 ? this.current = 4 : this.current--;
        },
        next() {
            this.current === 4 ? this.current = 0 : this.current++;
        },
        auto() {
            this.intervalId = setInterval(() => {
                this.next();
            }, 3000);
        },
        stop() {
            clearInterval(this.intervalId);
        }
    },
    mounted() {
        this.auto();
    }
})