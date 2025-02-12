<template>

    <div class="i-main">
        <div class="i-flex-left">
            <h2 class="i-title thin">SYNOPSYS</h2>
            <p class="grotesk">A cinematic poem created from the travel diary of the multidisciplinary collective Acoustic Heritage
                Collective, following the pilgrimage through villages and monasteries of the poet Matsuo Basho in
                18th-century feudal Japan.<br><br>

                A sensory journey from memory to the heart of Japan, where some of the most representative haikus were
                created, often collectively.<br><br>

                The collective set out to revisit Matsuo Basho’s footsteps as described in his travel diary Narrow Road
                to the Deep North (Oku no Hosomichi) and to capture sounds, moving images, and poetic reflections on the
                places depicted in his masterpiece.

                While Oku no Hosomichi literally translates as “The Narrow Road to
                the Interior,” Octavio Paz interpreted it as The Narrow Roads to Oku, highlighting both the elusive
                nature of Japanese translation and the enigmatic quality of haikus from a Western perspective.<br>
                
                In deconstructing expectations and attempting to crystallize the memory of the unrepeatable, the artists
                create a collective poetic log, acting as a single heart.<br><br>

                This ephemeral space serves to reflect on the journey, geography as an extension of the mind, the
                impacts of globalization, and the eternal emotions that emerge when faced with breathtaking landscapes.<br><br>

                Narrow Backroads (L’estret camí dins teu) is the second part of a trilogy of poetic films, which began
                with Iceland: Journey to the Center of the Sound. In this first installment, the collective retraced the
                steps of the protagonist from Journey to the Center of the Earth, exploring travel as an initiatory
                encounter with the unexpected in the landscape and the geographical and mental boundaries represented by
                islands.<br><br>
                Produced by Acoustic Heritage Collective with the support of Barcelona Crea, The Goethe-Institut and
                Generalitat de Catalunya.</p>
        </div>
        <div class="i-flex-right">
            <img class="i-image" src="../../../public/assets/home2.webp" />
        </div>
    </div>

</template>

<script>

export default {
    name: 'IntroSection',
};
</script>
<style>
.i-main {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: row;
}

.i-flex-left {
    flex: 1;
    max-width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 1.5rem;
    margin-left: 5rem;
    letter-spacing: 2px;
}

.i-flex-left p {
    line-height: 2.4rem;
    font-weight: 300;
}

.i-title {
    margin-bottom: 2rem;
    color: gray;
    font-size: 3rem;
}

.i-flex-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
}

.i-image {
    object-fit: cover;
    width: 50vw;
    margin-top: 10rem;
}
</style>