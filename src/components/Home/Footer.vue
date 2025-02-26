<template>
    <div class="f-main thin">
        <div class="f-flex-left">
            <p>ACOUSTIC HERITAGE COLLECTIVE</p>
        </div>
        <div class="f-flex-right">
            <div class="f-flex-sm">
                <p class="gray">CONTACT</p>
            </div>
            <div class="f-flex-sm ml-5">
                <p><a class="ft-link" href="mailto:acousticheritagecollective@gmail.com">EMAIL</a></p>
                <p><a class="ft-link" href="mailto:patrimoniacustic@gmail.com">PATRIMONI ACUSTIC</a></p>
                <p><a class="ft-link" href="https://twitter.com/acousticheritagecollective" target="_blank" rel="noopener noreferrer">TWITTER</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
};
</script>

<style>
.f-main {
    height: auto;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    font-size: 2.5rem;
    border-top: 1px solid #818181;
}

.f-flex-left {
    display: flex;
    flex: 1;
    margin-left: 5rem;
}

.f-flex-right {
    display: flex;
    flex: 1;
    margin-right: 5rem;
}

.flex-sm {
    display: flex;
    flex-direction: row;
}

.ft-link {
    text-decoration: none;
    color:black;
}

.ml-5 {
    margin-left: 7rem;
}
</style>
