<template>
    <div class="parent">
        <img class="logo" src="../../../public/assets/ah2.webp" />
        <div class="bg"></div>
        <img src="../../../public/assets/logo4.webp" class="islands" />
        <video src="../../../public/assets/Portada_01.mp4" autoplay playsinline muted loop></video>
        <div class="h-text-container grotesk">
            <p class="h-text">"Do not seek to follow in the footsteps of the wise;
                seek what they sought." <br><span class="italic"> <em>- Matsuo Basho</em></span>
            </p>
        </div>
        <img src="../../../public/assets/logobig.webp" class="logo-big" />
        <div class="logos-container">
            <div class="h-flex-left">
                <img class="h-logo-sm" src="../../../public/assets/generalitat.webp" />
                <img class="h-logo-sm2" src="../../../public/assets/logo2.webp" />
                <img class="h-logo-sm" src="../../../public/assets/logo5.webp" />
            </div>
            <div class="h-flex-right">
                <p class="h-sub light">
                   <span class="red">A cinematic poem by :</span> 
                    <span class="white">Ginebra raventos, emilio maRx, Joan lavandeira, Edgardo Goméz</span>
                </p>
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
    z-index: 1;
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
    filter: brightness(85%);
}

.logo-big {
    position: absolute;
    top: 30%;
    bottom: 50%;
    z-index: 101;
    transform: scale(1.2);
    justify-self: center;
    align-self: center;
}

.islands {
    position: absolute;
    top: 5%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
    width: 7vw;
}

.h-text-container {
    position: absolute;
    top: 60%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
    width: 45vw;
    color: white;
    text-align: center;
    line-height: 23px;
    letter-spacing: 1.5px;
    font-weight: 300;
}

.h-text {
    font-size: 1.7rem;
}

.h-sub {
    font-size: 1.7rem;
    text-transform: uppercase;
}

.italic {
    font-size: 1.2rem;
}

.logos-container {
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 5%;
    z-index: 105;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-left: 5rem;
}

.h-flex-left {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.h-flex-right {
    display: flex;
    flex: 1;
    justify-content: center;
    
}

.h-logo-sm {
    width: 7vw;
}

.logo {
    position: absolute;
    top: 5%;
    left: 2rem;
    z-index: 101;
    width: 7vw;
}

.red {
    color: red;
}

.white {
    color: white;
}
</style>