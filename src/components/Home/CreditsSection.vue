<template>
    <div class="cr-main">
        <div class="cr-flex-left">
            <h2 class="cr-title thin">CREDITS</h2>
        </div>
        <div class="cr-flex-right thin">
            <div class="cr-text-container">
                <p class="cr-sub">Production</p>
                <p class="cr-text">The Acoustic Heritage Collective</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">Direction</p>
                <p class="cr-text">Ginebra Raventós, Emilio Marx, Joan Lavandeira, Edgardo Gómez</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">Narrative Direction</p>
                <p class="cr-text">Joan Lavandeira and Ginebra Raventós</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">Music</p>
                <p class="cr-text">Hoarfrost</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">Music and Sound Production</p>
                <p class="cr-text">Emilio Marx</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">Spatial Sound Design</p>
                <p class="cr-text">Edgardo Gómez</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">Technical Production, Visuals, Lights, 3D</p>
                <p class="cr-text">Joan Lavandeira</p>
            </div>
            <div class="cr-text-container">
                <p class="cr-sub">English and Japanese Voices</p>
                <p class="cr-text">Satoshi Suzuki and Reiko Yamada</p>
            </div>
        </div>
    </div>
    <div class="cr-flex-left-logos thin">
        <div class="cr-logo-container">
            <p class="cr-red">Special thanks to</p>

            <p class="cr-text-2">Haptos Soundlab, Antic Teatre, Influx Festival,
                Josep M. Jordana, Carolina Mora, Reiko Yamada, Satoshi Suzuki,
                Enol Balado (Disseny sonor adicional, Sculpted Audio),
                Belén Berlín, Juliana Rabello and Paolo Carretero</p>

            <p class="cr-red">The project has been supported by</p>
            <div class="cr-logos">
                <img src="../../../public/assets/ah.webp" class="cr-logo" />
                <img src="../../../public/assets/logo1.webp" class="cr-logo" />
                <img src="../../../public/assets/logo2.webp" class="cr-logo" />
                <img src="../../../public/assets/h-logo.webp" class="cr-logo" />
            </div>
        </div>
    </div>
    <div class="cr-text-container-2 thin">
            <p class="cr-text-2">Subvencions per a projectes culturals  que facin servir tecnologia immersiva </p>
    </div>
    <div class="cr-islands">
        <img src="../../../public/assets/logo4.webp" class="cr-islands-logo" />
    </div>
</template>

<script>
export default {
    name: 'CreditsSection',
};
</script>

<style>
.cr-main {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-left: 5rem;
    margin-right: 5rem;
}

.cr-flex-left {
    font-size: 1.5rem;
    letter-spacing: 2px;
    flex: 1;
}

.cr-text-container {
    max-width: 91vw;
    margin-bottom: 3rem;
}

.cr-text-container-2{
    margin-bottom: 3rem;
    font-size: 2.5rem;
    margin-left: 5rem;
    text-transform: uppercase;
}


.cr-flex-left p {
    line-height: 2.4rem;
    font-weight: 300;
    display: flex;
    align-items: start;
}

.cr-flex-left-logos {
    width: 50vw;
    font-size: 2.5rem;
    letter-spacing: 2px;
    flex: 1;
}


.cr-sub {
    color: gray;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}

.cr-title {
    margin-bottom: 1rem;
    color: gray;
    font-size: 3rem;

}

.cr-red {
    color: #B41C28;
}

.cr-flex-right {
    flex: 1;
}

.cr-text {
    margin-top: 0.5rem;
    padding-top: 0px;
}

.cr-text-2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
.cr-logo-container {
    margin-left: 5rem;
    text-transform: uppercase;
}

.cr-logos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.cr-logo{
    object-fit: contain;
    margin-right: 8rem;
    max-width: 25vw;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.cr-islands {
    width: 100vw;
    height:50vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.cr-islands-logo {
    width: 15vw;
}
</style>
