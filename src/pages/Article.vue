<template>

    <div>

        <hero />

        <article>
            <h1 v-dummy="10"></h1>
            <p v-dummy="100">test</p>
            <center>
                <viz :uuid="generateUUID()" thumbnail="https://public.tableau.com/static/images/Op/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash/1_rss.png"
                    viz="https://public.tableau.com/views/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash?:embed=y&:display_count=yes"
                />
            </center>

            <p v-dummy="100">test</p>

            <p v-dummy="100">test</p>

            <p v-dummy="100">test</p>

            <center>
                <viz :uuid="generateUUID()" thumbnail="https://public.tableau.com/static/images/Op/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash/1_rss.png"
                    viz="https://public.tableau.com/views/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash?:embed=y&:display_count=yes"
                />
            </center>


            <h2 v-dummy="10"></h2>

            <p v-dummy="100">test</p>

            <p v-dummy="100">test</p>


        </article>


    </div>
</template>

<script>
    import Prism from "vue-prism-component";
    import Hero from "@/components/Article-hero";
    import Viz from "@/components/Viz"
    import { sample01, sample02 } from "@/code";
    const uuidv4 = require('uuid/v4');

    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }

    export default {
        name: "A0",
        mounted: function () {

        },
        methods: {
            generateUUID: function () {
                return "" + uuidv4();
            },
            generateElement: function (el, id) {
                return el + id;
            },
            displayViz: function (id, e) {

                var thumb = document.getElementById('vizThumb-' + id);
                thumb.remove();
                var divElement = document.getElementById('divElement-' + id);
                var vizElement = document.getElementById("vizElement-" + id);
                var url = "https://public.tableau.com/views/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash?:embed=y&:display_count=yes"
                let options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };

                if (divElement.offsetWidth > 800) {
                    vizElement.style.width = '1000px';
                    vizElement.style.height = '827px';
                } else if (divElement.offsetWidth > 500) { vizElement.style.width = '1000px'; vizElement.style.height = '827px'; }
                else { vizElement.style.width = '100%'; vizElement.style.height = '1294px'; }

                // Create a viz object and embed it in the container div.

                var viz = new tableau.Viz(vizElement, url, options);
            }
        },
        data() {
            return {
                title: "Version 1",
                sample01,
                sample02,
                vizDisplay: false,
                currentElement: ''
            };
        },
        metaInfo: {
            // title: 'My Awesome Webapp',
            // override the parent template and just use the above title only
            // titleTemplate: null
        },
        components: {
            Prism,
            Viz,
            Hero
        }
    };
</script>

<style scoped>
    :root {}

    pre {
        margin-top: 25px !important;
        margin-bottom: 25px !important;
    }

    p {
        line-height: 1.5em
    }

    .viz {
        margin-top: 50px;
        margin-bottom: 50px
    }

    article {
        display: grid;
        grid-template-columns: 100px 1fr 100px;
        grid-column-gap: 10px;
        font-family: "Libre Baskerville", serif;
        background: #fff;
    }



    .citation {
        background: #fff;
    }

    article>h1,
    article>h2 {
        margin-top: 35px;
        justify-self: start;
        font-family: "Rubik", sans-serif !important;
    }

    article>* {
        grid-column: 2;
        min-width: 0;
    }

    article>figure {
        grid-column: 1 / -1;
        margin: 20px 0;
    }

    article>.aside {
        grid-column: 3;
        color: #666;
        font-size: 0.8em;
    }

    article>blockquote {
        grid-column: 1 / -1;
    }

    article>p img.left {
        float: left !important;
        padding-right: 2em !important;
        padding-left: 1em;
    }

    article>p img.right {
        float: right !important;
        padding-left: 2em !important;
        padding-right: 1em;
    }

    article>p {
        margin-top: 20px;
    }

    article>p:first-of-type {
        margin-top: 25px;
    }

    .floated {
        float: left;
        width: 150px;
        background: red;
    }


    @media (max-width: 1050px) {
        article {
            grid-template-columns: auto;
            grid-column-gap: 10px;
        }

        article>figure {
            grid-column: -1;
            margin: 20px 0;
        }
    }
</style>