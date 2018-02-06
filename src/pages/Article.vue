<template>

    <section class="page-wrapper">

        <div :class="{ ' open ': drawer}" class="overlay">
            <div class="outer-close toggle-overlay">
                <a class="close">
                    <span></span>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a @click.prevent>About Us</a>
                    </li>
                    <li>
                        <a @click.prevent>Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/ICJIA/icjia-tableau">GitHub Source</a>
                    </li>

                </ul>
            </nav>
        </div>


        <div class="burger">
            <button class="hamburger hamburger--collapse" :class="{ ' is-active ': drawer}" type="button" @click.stop="toggleDrawer">
                <span class="hamburger-box">
                    <span class="hamburger-inner hamburger-overlay"></span>
                </span>
            </button>
        </div>

        <hero />

        <article>
            <h1 v-dummy="10"></h1>
            <p v-dummy="100"></p>
            <center>
                <viz :uuid="generateUUID()" thumbnail="https://public.tableau.com/static/images/Op/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash/1_rss.png"
                    viz="https://public.tableau.com/views/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash?:embed=y&:display_count=yes"
                />
            </center>

            <p v-dummy="100"></p>

            <p v-dummy="100"></p>

            <p v-dummy="100"></p>

            <center>
                <viz :uuid="generateUUID()" thumbnail="https://public.tableau.com/static/images/Op/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash/1_rss.png"
                    viz="https://public.tableau.com/views/OpioidPrescriptionsandOverdoseDeathsinIllinois/FullDash?:embed=y&:display_count=yes"
                />
            </center>


            <h2 v-dummy="10"></h2>

            <p v-dummy="100"></p>

            <p v-dummy="100"></p>


        </article>


    </section>
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
            var scrollObject = {};
            window.onscroll = getScrollPosition;

            function getScrollPosition() {
                scrollObject = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }

                if (scrollObject.y > 740) {
                    document.getElementsByClassName("hamburger-inner")[0].classList.add('hamburger-dark')
                    document.getElementsByClassName("hamburger-inner")[0].classList.remove('hamburger-overlay')
                    document.getElementsByClassName("hamburger-inner")[0].classList.remove('hamburger-light')

                    //console.log(document.getElementsByClassName("burger")[0].classList)

                } else {
                    document.getElementsByClassName("hamburger-inner")[0].classList.add('hamburger-light')
                    document.getElementsByClassName("hamburger-inner")[0].classList.add('hamburger-overlay')
                    document.getElementsByClassName("hamburger-inner")[0].classList.remove('hamburger-dark')
                }
            }

        },
        methods: {
            generateUUID: function () {
                return "" + uuidv4();
            },
            toggleDrawer: function (e) {
                let el = document.getElementsByClassName("hamburger-inner")[0].classList
                if (!el.contains('hamburger-overlay')) {
                    document.getElementsByClassName("hamburger-inner")[0].classList.add('hamburger-overlay')
                }
                this.drawer = !this.drawer;
                this.drawer
                    ? document.body.classList.add("no-scroll") :
                    document.body.classList.remove("no-scroll")
                this.drawer
                    ? document.getElementsByClassName("hamburger-inner")[0].classList.add('hamburger-overlay') : document.getElementsByClassName("hamburger-inner")[0].classList.remove('hamburger-overlay')
                this.drawer
                    ? (document.getElementsByClassName("overlay")[0].style.height = "100%")
                    : (document.getElementsByClassName("overlay")[0].style.height = "0%");
                return;
            }


        },
        data() {
            return {
                title: "Version 1",
                drawer: false
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

    .no-scroll {
        overflow: hidden;
    }

    pre {
        margin-top: 25px !important;
        margin-bottom: 25px !important;
    }

    p {
        line-height: 1.5em
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

    .topnav {
        overflow: hidden;
        background-color: #fff;
        top: 0;
        z-index: 100;
        position: fixed;
        width: 100%;
        border-bottom: 1px solid #ccc;
        -webkit-box-shadow: 2px 5px 8px -2px rgba(156, 154, 156, 0.47);
        -moz-box-shadow: 2px 5px 8px -2px rgba(156, 154, 156, 0.47);
        box-shadow: 2px 5px 8px -2px rgba(156, 154, 156, 0.47);
        display: flex;
    }

    .burger {

        width: 50px;
        vertical-align: middle;
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 20;
    }



    .burger,
    .burger *,
    button {
        outline: none !important;
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        width: 30px;
        height: 4px;
        background-color: #555;
        border-radius: 4px;
        position: absolute;
    }

    .hamburger-inner.hamburger-light,
    .hamburger-inner.hamburger-light::before,
    .hamburger-inner.hamburger-light::after {

        background-color: #fff;

    }

    .hamburger-inner.hamburger-dark,
    .hamburger-inner.hamburger-dark::before,
    .hamburger-inner.hamburger-dark::after {

        background-color: #555;

    }

    .hamburger-inner.hamburger-overlay,
    .hamburger-inner.hamburger-overlay::before,
    .hamburger-inner.hamburger-overlay::after {

        background-color: #fff;

    }

    /* The Overlay (background) */

    .overlay {
        position: fixed;
        width: 100%;
        height: 0%;
        top: 0;
        left: 0;
        background: linear-gradient( 200deg,
        rgb(23, 23, 24),
        rgb(42, 42, 43),
        rgb(110, 109, 110));
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        z-index: 10;
    }

    .open {
        opacity: 0.98;
        visibility: visible;
    }

    nav {
        text-align: center;
        height: 100vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav ul li {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        line-height: 8vh;
    }

    nav ul li a {
        font-size: 2em;
        font-weight: 900;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        display: block;
        text-decoration: none;
        color: #fff;
        opacity: 1;
        display: inline-block;
        cursor: pointer;
    }

    nav ul li a:hover {
        color: rgb(245, 1, 1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
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