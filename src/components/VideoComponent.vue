<template>
    <div class="parent">
        <div class="bg"></div>
        <img src="../assets/logo4.webp" class="islands" />
        <video src="../assets/Portada_01.mp4" autoplay playsinline muted loop></video>
        <div class="text-container grotesk">
            <p class="text">"Do not seek to follow in the footsteps of the wise;
                seek what they sought." <br><span class="italic"> <em>- Matsuo Basho</em></span>
            </p>
        </div>
        <img src="../assets/logobig.webp" class="logo-big" />
        <div class="logos-container">
            <div class="flex-left">
                <img class="logo-sm" src="../assets/ah2.webp"/>
                <img class="logo-sm2"  src="../assets/generalitat.webp"/>
                <img class="logo-sm"  src="../assets/logo2.webp"/>
                <img class="logo-sm3"  src="../assets/logo5.webp"/>
            </div>
            <div class="flex-right">
                texty text
            </div>

        </div>

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
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index:1;
}

.bg {
    background-color: blue;
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
    filter: opacity(0.9);
}

.logo-big {
    position: absolute;
    top: 30%;
    bottom: 50%;
    z-index: 101;
    
    justify-self: center;
    align-self: center;
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
    top: 60%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
    width:45vw;
    color:white;
    text-align: center;
    line-height: 23px;
    letter-spacing: 1.5px;
    font-weight:300;
}

.text{
    font-size: 1.7rem;
}

.italic{
    font-size: 1.2rem;
}

.logos-container{
    width:100vw;
    height:10vh;
    display:flex;
    flex-direction: row;
    position:absolute;
    bottom:2%;
    z-index: 105;
    margin-left: 2rem;
    margin-right: 2rem;
}

.flex-left{
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}

.flex-right{
    display: flex;
  
    flex:1;
    flex-direction: row;
}

.logo-sm{
    height:5vh;
}

.logo-sm2{
    height:5vh;
}

.logo-sm3{
    height:8vh;
    margin-bottom: 1.5rem;
}

</style>