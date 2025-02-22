<template>
    <div class="fs-main">
        <div class="fs-text-container">
            <div class="fs-flex-left">
                <h2 class="fs-title light">PRESENTATION <br> FORMATS</h2>
            </div>
            <div class="fs-flex-right grotesk">
                <p>Narrow BackRoads featuring original 360° footage and 6th-order Ambisonics audio, is designed to adapt
                    to diverse immersive formats. From pre-rendered fixed presentations and live performances to
                    frameless artistics, the project provides audiences with unique poetic experiences.</p>

                <p>This flexible range of formats ensures that Narrow BackRoads can resonate with audiences in diverse
                    contexts, fostering engagement through innovative audiovisual storytelling.</p>
            </div>
        </div>

        <div class="fs-image-container">
            <div class="fs-image-element" v-for="format in formatData" :key="format.id">
                <div class="fs-image-pic">
                    <img :src="`/assets/${format.imageSrc}`" class="fs-image" />
                </div>
                <div class="fs-image-title gray thin">
                    <p>{{ format.formatTitle }}</p>
                </div>
                <div class="fs-image-texts">
                    <p class="fs-image-text thin" v-for="text in format.texts" :key="text.textTitle">
                        {{text.textTitle }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatData } from '@/data/textos';
export default {
    name: 'FormatsSection',
    data() {
        return {
            formatData: formatData
        };
    }
};
</script>
<style>
.fs-main {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    margin-right: 5rem;
    padding-top: 3rem;
    margin-bottom: 5rem;
    padding-bottom: 5rem;
}

.fs-image {
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.fs-image-pic {
    width: 100%;
    object-fit: cover;
}


.fs-image-element {
    width: 28.5vw;
    height: 100%;
}

.fs-text-container {
    display: flex;
    flex-direction: row;
    width: 100%;

}

.fs-image-title {
    font-size: 2.5rem;
    border-bottom: 1px solid #818181;
}

.fs-image-text {
    font-size: 2.5rem;
    line-height: 2.4rem;
    font-weight: 200;
    text-transform: uppercase;
}

.fs-image-container {
    display: flex;
    flex-direction: row;
    margin-top: 7rem;
    justify-content: space-between;
    margin-right: 10rem;

}

.fs-title {
    margin-bottom: 2rem;
    color: gray;
    font-size: 3.5rem;
    font-weight: 300;

}

.fs-flex {
    display: flex;
    flex-direction: row;
    flex: 1;
    letter-spacing: 2px;

}

.fs-flex-left {
    letter-spacing: 7%;
    padding-right: 2rem;
    width: 30%;
}

.fs-flex-left p,
.fs-flex-right p {
    line-height: 2.4rem;
    font-weight: 300;
    font-size: 1.5rem;
}

.fs-flex-right {
    letter-spacing: 2px;
    width: 60%;
}

#fs-text-large {
    font-size: 6.25rem !important;
    line-height: 6rem;
    font-weight: 500 !important;
    margin-top: 0;
    padding-top: 1.5rem;
    margin-bottom: 2rem;
}
</style>