<template>
    <div class="parent">
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
                <img class="h-logo-sm2" src="../../../public/assets/ah2.webp" />
                <img id="logo-small" class="h-logo-sm" src="../../../public/assets/generalitat.webp" />
                <img class="h-logo-sm" src="../../../public/assets/logo2.webp" />
                <img id="logo-small2" class="h-logo-sm2" src="../../../public/assets/logo5.webp" />
            </div>
            <div class="h-flex-right">
                <p class="h-sub light">
                    <span class="red">A cinematic poem by: </span>
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


video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    z-index: 100;
    top: 0;
    position: absolute;
    filter: brightness(90%) hue-rotate(340deg);
}

.logo-big {
    position: absolute;
    top: 30%;
    bottom: 50%;
    z-index: 101;
    transform: scale(1.1);
    justify-self: center;
    align-self: center;
}

.islands {
    position: absolute;
    top: 3%;
    margin: auto;
    left: 15%;
    right: 15%;
    z-index: 101;
    width: 7vw;
}

.h-text-container {
    position: absolute;
    top: 65%;
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
    font-size: 1.3rem;
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
    bottom: 2%;
    z-index: 105;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-left: 5rem;
}

.h-flex-left {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 50vw;
    padding-left: 3rem;
}

.h-flex-right {
    display: flex;
    flex: 1;
    justify-content: center;
    padding-right: 3rem;

}

.h-logo-sm {
    width: 9vw;
    transform: scale(1.6);
    margin-left: 7rem;
}

.h-logo-sm2 {
    width: 3vw;
    transform: scale(1.6);
}

.h-logo-sm3 {
    width: 9vw;

}

.logo {
    position: absolute;
    top: 5%;
    left: 2rem;
    z-index: 101;
    width: 7vw;
}

.red {
    color: #FF3A00;
}

.white {
    color: white;
}

#logo-small {
    transform: scale(1.6);
}

#logo-small2 {
    margin-left: 7rem;
    width: 3rem;
}


@media (min-width: 1280px) and (max-width: 1440px) {

    .h-text-container {
        top: 65%;
    }

    .logo-big {
        transform: scale(0.9);
        max-width: 90%;
    }

    .h-sub {
        font-size: 1rem;
        text-transform: uppercase;
    }

    #logo-small {
        transform: scale(1.4);
    }

    #logo-small2 {
        margin-left: 7rem;
        width: 2rem;
    }

}

@media (max-width: 900px) {
    .logo-big {
        transform: scale(0.9);
        max-width: 90%;
    }

    .logos-container {
        width: 100vw;
        flex-direction: column;
        bottom: 8%;

    }

    .h-sub {
        margin-top: 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    .islands {
        position: absolute;
        top: 5%;
        margin: auto;
        left: 15%;
        right: 15%;
        z-index: 101;
        width: 20vw;
    }

    .h-text-container {
        top: 53%;
        margin: auto;
        width: 50vw;
    }


    .h-logo-sm {
        width: 11vw;
        transform: scale(2.5);
        margin-left: 3rem;
    }

    .h-logo-sm2 {
        width: 10vw;
        transform: scale(1.5);
    }

    .h-flex-left {
        padding-left: 1rem;
    }


}



@media (min-width: 1900px) {

    .h-text-container {
        top: 80%;

    }

    .logo-big {
        transform: scale(1.2);
        max-width: 90%;
    }

}


@media (min-width: 1000px) and (max-width: 1500px) {

    .logos-container {
        width: 100vw;
        gap: 5rem
    }



    #logo-small2 {
        margin-left: 4rem;
        width: 2rem;
    }

}


</style>