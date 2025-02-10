<template>
    <div class="parent">
        <div class="bg"></div>
        <img src="../assets/logo4.webp" class="islands" />
        <video src="../assets/Portada_01.mp4" autoplay playsinline muted></video>
        <div class="text-container">
            <p>"Do not seek to follow in the footsteps of the wise;
                seek what they sought."- Matsuo Basho
            </p>
        </div>
     
        <img src="../assets/logobig.webp" class="logo-big" />
    </div>
</template>

<script>
export default {
    name: 'VideoComponent'
};
</script>

<style>
.parent {
    position: relative;
    height: 100vh;
    width: 100vw;
}

.bg {
    background-color: lightblue;
    height: 100vh;
    z-index: 0;
}

video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    z-index: 100;
    top: 0;
    position: absolute;
    opacity: 0.8;
}

.logo-big {
    position: absolute;
    top: 30%;
    bottom: 50%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
    transform: scale(0.9);
}

.islands{
    position: absolute;
    top: 5%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
}

.text-container{
    position: absolute;
    top: 5%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
    width:30vw;
    color:white;
    
}


</style>