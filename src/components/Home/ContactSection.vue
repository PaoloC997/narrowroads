<template>
    <div class="c-main">
        <div class="c-flex-left  grotesk">
            <h2 class="c-title light">CONTACT - BOOKING</h2>
            <p class="c-text">acousticheritagecollective@gmail.com</p>
            <p class="c-text"> acousticheritagecollective.org</p>
            <p class="c-text">filmfreeway.com/AcousticHeritageCollective</p>
        </div>
        <div class="c-flex-right">
            <img class="c-logo" src="../../../public/assets/c-logo2.webp" />
        </div>
    </div>
</template>
<script>

export default {
    name: 'ContactSection',
};
</script>
<style>
.c-main {
    height: 42vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: #B41C28;
    position: relative;
}

.c-flex-left {
    flex: 1;
    margin-left: 5rem;
    letter-spacing: 2px;
}

.c-flex-left p {
    line-height: 2.4rem;
    font-weight: 300;
}


.c-title {
    margin-bottom: 2rem;
    color: white;
    font-size: 4.1662rem !important;
    font-weight: 300;
}

.c-flex-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
}

.c-logo {
    width: 18vw;
    margin-right: 5rem;
}

.c-text {
    color: white;
    font-size: 1.8rem;
    font-weight: lighter !important;
}

@media (max-width: 768px) {

    .c-main {
        height: auto;
        flex-direction: column;
       
    }

    .c-flex-left {
    margin-left: 3rem;
}

}
</style>