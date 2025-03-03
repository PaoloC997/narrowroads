<template>
    <div>
        <img :src="getAssetPath('d-image.webp')" class="d-image" />
    </div>
    <div class="d-container">
        <h2 class="d-title thin">THE PATH OF SOUND</h2>
        <div class="d-flex">
            <div class="d-flex-left">
                <p class="grotesk">
                    When I enter the room, the first image that greets me is Ginebra Raventós, Ɇ₥łⱠłØ ₥₳ⱤӾ, Joan
                    Lavandeira and Edgardo Gómez sitting cross-legged on a tatami around a table. Three screens surround
                    them, displaying black-and-white moving images. In front of them, an array of devices and cables, each
                    having its place and function.<br>
                    The ceremony of sound has begun.<br>
                    In Japan, they follow the concept of Do, derived from Tao: the path, the protocol, the instructions
                    to master a technique.<br>
                    Acoustic Heritage Collectives takes the path of sound and image, pressing the right keys with studied
                    precision in order to introduce us to the journey that led them to follow the steps of another path:
                    the one taken by Matsuo Basho to reconnect with the most beautiful haikus and the places where they
                    were originally written.<br>
                    The initial cultural shock, the contrast between expectations and what was found upon landing in the
                    city of Tokyo and its impact on the senses: the people, the signs, the advertisements, the jingles, will
                    be abruptly interrupted by the encounter with the lurking monster of the earthquake.<br>
                    For Japan, in its fragility as an island, is always at the mercy of natural disasters. Tsunami is a
                    Japanese word. Hiroshima and Nagasaki are two places that, despite their millennia-old etymology, evoke
                    danger. <br>And Godzilla is a Japanese monster, pop mythology at the dawn of the new gods of mass media.
                    But there is a journey within the journey: the impossibility of translation. Translating the haikus from
                    Japanese, a language where context is crucial, in which each kanji can visually describe multiple
                    concepts, involves the death and rebirth of the poem, transforming it into something similar, but almost.
                    Octavio Paz and others embarked on this adventure, deconstructing the haikus to reassemble them into
                    something that could say the same.<br>
                    The essence of the haiku is itself elusive: it only makes sense in its context. In the case of haikus,
                    the poet and their feelings disappear in favor of the surroundings. The poetic voice emerges from the
                    landscape upon which the poet lays their eyes, or from the relationship between elements and time (whether
                    atmospheric or sequential).
                </p>
            </div>
            <div class="d-flex-right">
                <h2 id="d-text-large" class="thin">Narrow Backroads dissolves authorship into the collective and leaves
                    the viewer to complete the journey with the sensations awakened.</h2>
                <p class="grotesk">Similarly, just as in haikus the poet's identity fades in favor of the landscape, being
                    collective compositions, it remains open for the reader to interpret and complete its meaning, Narrow
                    Backroads dissolves authorship into the collective and leaves the viewer to complete the journey with the
                    sensations awakened. Acoustic Heritage Collective impacts us visually in an immersive environment,
                    guiding us into silence and stillness, immersing us in the altered state of consciousness that comes with
                    traveling to an unknown land, attempting to tell us their memory of the journey, a memory composed of many
                    voices. With the same kamikaze intent as one who tries to translate something untranslatable, something that
                    can only be lived through experience. Memory, translation, the trap. When all signs point to the fact that
                    we cannot understand it all, the best thing is to surrender to feeling. In their attempt, let us be carried
                    away by the senses.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectDescription',
    data() {
        return {
            baseImagePath: process.env.VUE_APP_BASE_IMAGE_PATH
        };
    },
    methods: {
        getAssetPath(fileName) {
            return `${this.baseImagePath}/${fileName}`;
        }
    }
};
</script>

<style>
.d-image {
    height: 100vh;
    width: 100vw;
}

.d-container {
    margin: 5rem;
}

.d-title {
    margin-bottom: 2rem;
    color: gray;
    font-size: 2.5rem;
    border-bottom: 1px solid #818181;
    padding-bottom: 1rem;
}

.d-flex {
    display: flex;
    flex-direction: row;
    flex: 1;
    letter-spacing: 1px;
}

.d-flex-left {
    flex: 1;
    letter-spacing: 7%;
    padding-right: 2rem;
}

.d-flex-left p,
.d-flex-right p {
    line-height: 2rem;
    font-weight: 300;
    font-size: 1.2rem;
}

.d-flex-right {
    flex: 1;
    letter-spacing: 1px;
}

#d-text-large {
    font-size: 6rem !important;
    line-height: 6rem;
    font-weight: 500 !important;
    margin-top: 0;
    padding-top: 1.5rem;
    margin-bottom: 2rem;
}

@media (max-width: 1268px) {
    .d-flex {
        flex-direction: column;
    }

    .d-flex-left p,
    .d-flex-right p {
        line-height: 2rem;
        font-size: 1.2rem;
    }

    .d-container {
        margin-left: 2rem;
        margin-right: 3rem;
    }

    .d-image {
        height: auto;
        width: 100vw;
    }
}
</style>
