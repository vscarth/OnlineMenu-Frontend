<template>
<!--Huge thanks to https://codepen.io/splitti/pen/jLZjgx for this animation-->
<div style="margin: 100px 0 0 0">
    <svg id="check" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" xml:space="preserve">
        <circle id="circle" cx="50" cy="50" r="42" fill="transparent" />
        <polyline id="tick" points="25,55 45,70 75,33" fill="transparent" />
    </svg>
</div>

</template>

<script>
export default {
    name: 'SpinnerCheckmark',
    props: ['transactionDone'],
    data() {
        return {
            done: this.transactionDone
        }
    },
    watch: {
        transactionDone() { this.done = this.transactionDone }
    },
    mounted() {
        this.animation()
    },
    methods: {
        async animation(){
            const spinner = document.getElementById('check');

            spinner.classList.add('progress')
            console.log("animation start")

            await new Promise(resolve => {
                console.log("spinner start")
                const interval = setInterval(() => {
                    if(this.done){
                        spinner.classList.toggle('progress')
                        spinner.classList.toggle('ready')
                        console.log("spinner done")
                        resolve();
                        clearInterval(interval);
                    }
                }, 3000)
            })
            .then(() => {
                setTimeout(() => { this.$emit('animation-done') }, 2000)
            })
        }
    }
}
</script>

<style scoped>
/* Huge thanks to https://codepen.io/splitti/pen/jLZjgx for this animation */
#tick {
  stroke: #42b983;
  stroke-width: 8;
  transition: all 1s;
}

#circle {
  stroke: #42b983;
  stroke-width: 8;
  transform-origin: 50px 50px 0;
  transition: all 1s;
}

.progress #tick {
  opacity: 0;
}

.ready #tick {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 8s ease-out forwards;
}

.progress #circle {
  stroke: #4c4c4c;
  stroke-dasharray: 314;
  stroke-dashoffset: 1000;
  animation: spin 3s linear infinite;
}

.ready #circle {
  stroke-dashoffset: 66;
  stroke: #42b983;
}

#circle {
  stroke-dasharray: 500;
}

@keyframes spin {
  0% { 
    transform: rotate(0deg);
    stroke-dashoffset: 66;
  } 
  50% {
    transform: rotate(540deg);
    stroke-dashoffset: 314;
  } 
  100% {
    transform: rotate(1080deg);
    stroke-dashoffset: 66;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

#check {
  width: 100px;
  height: 100px;
}
</style>