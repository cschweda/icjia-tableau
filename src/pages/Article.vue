<template>

    <section class="page-wrapper">
        <nav class="nav headroom headroom--unpinned">
            <a class="nav-link">
                <div class="logo">
                    <img src="/static/logos/icjia-02.png" />
                </div>
            </a>
            <router-link to="/" class="nav-link">
                <div class="title " v-dummy="12"></div>
            </router-link>

            <div class="social" style="width: 100px">
                <div class="icon">
                    <i class="social fab fa-twitter-square fa-lg"></i>
                </div>

                <div class="icon">
                    <i class="social fab fa-facebook-square fa-lg"></i>
                </div>

                <div class="icon">
                    <i class="social fab fa-github-square fa-lg"></i>
                </div>

            </div>
        </nav>

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

    import Hero from "@/components/Article-hero";
    import Viz from "@/components/Viz"
    import { sample01, sample02 } from "@/code";
    const uuidv4 = require('uuid/v4');
    import _ from 'lodash';

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
            window.onscroll = _.debounce(getScrollPosition);

            function getScrollPosition() {
                scrollObject = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }

                if (scrollObject.y > 200) {
                    document.getElementsByClassName("nav")[0].classList.add('headroom--pinned')
                    document.getElementsByClassName("nav")[0].classList.remove('headroom--unpinned')

                } else {
                    document.getElementsByClassName("nav")[0].classList.remove('headroom--pinned')
                    document.getElementsByClassName("nav")[0].classList.add('headroom--unpinned')

                }
            }

        },
        methods: {
            generateUUID: function () {
                return "" + uuidv4();
            },


        },
        data() {
            return {
                title: "Version 1",
                drawer: false
            };
        },
        metaInfo: {

        },
        components: {

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
        grid-template-columns: 1fr 3fr 1fr;
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



    /** New nav
     * 
     */

    nav {
        position: fixed;
        top: 0;

        width: 100%;
        z-index: 1000;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 30px;

        padding-left: 2em;
        padding-right: 2em;
        border: 1px solid #333;
        background-color: #555;
        -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);



    }

    nav .title,
    nav .logo,
    nav .social {
        font-family: 'Oswald', sans-serif;
        color: #eee;
        font-weight: 900;
    }

    nav .logo {
        padding-top: .3em;
        padding-bottom: .3em;
    }

    nav .logo img {
        height: 45px;
    }

    nav .title {
        padding-top: .9em;

    }

    .icon {
        display: inline-block;
        padding-right: 8px;
    }

    .social * {
        margin-top: 8px;


    }

    .nav-link {
        color: #fff;
        text-decoration: none;
    }

    .nav-link *:hover {
        color: orange;
    }



    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }

    .headroom--pinned {
        transform: translateY(0%);
    }

    .headroom--unpinned {
        transform: translateY(-100%);
    }

    .logo:hover {
        cursor: pointer !important;
    }

    .logo img:hover {
        box-shadow: 0px 0px 30px #333;
        cursor: pointer !important;


    }

    @media (max-width: 800px) {
        article {
            grid-template-columns: 50px 1fr 50px
        }

    }

    @media (max-width: 600px) {
        .page-wrapper {
            margin-top: -5px;
        }

        /* nav {
            display: none
        } */
        article {

            grid-template-columns: 20px 1fr 20px;

        }

        .logo {
            margin-top: 10px
        }

        .logo img {
            height: 60px;
        }
        .nav {
            flex-direction: column;
            justify-content: center;
            padding-bottom: 20px;
            margin-top: -5px;
        }


        nav .logo,
            {
            align-self: center;

        }

        nav .title {
            text-align: center;
            font-size: 12px;
            align-self: center;
            margin-top: -10px;
        }

        nav .social {
            display: none;
        }
    }
</style>