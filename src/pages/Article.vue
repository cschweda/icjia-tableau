<template>

    <section class="page-wrapper">



        <header>
            <div class="nav nav-float nav-float--unpinned">
                <ul>
                    <li class="home">
                        <a href="#">ICJIA Home</a>
                    </li>

                    <li class="about">
                        <a href="#">About</a>
                    </li>
                    <li class="news">
                        <a href="#">Newsletter</a>
                    </li>
                    <li class="contact">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </header>

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

                if (scrollObject.y > 730) {
                    document.getElementsByClassName("nav-float")[0].classList.add('nav-float--pinned')
                    document.getElementsByClassName("nav-float")[0].classList.remove('nav-float--unpinned')



                } else {
                    document.getElementsByClassName("nav-float")[0].classList.remove('nav-float--pinned')
                    document.getElementsByClassName("nav-float")[0].classList.add('nav-float--unpinned')

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



    /** New nav
     * 
     */

    .nav {
        position: fixed;
        /* Set the navbar to fixed position */
        top: 0;
        /* Position the navbar at the top of the page */
        width: 100%;
        /* Full width */
        z-index: 1000;
    }

    .nav ul {
        list-style: none;
        background-color: #555;
        text-align: center;
        padding: 0;
        margin: 0;
    }

    .nav li {
        font-family: 'Oswald', sans-serif;
        font-size: 1.2em;
        line-height: 40px;
        height: 40px;
        border-bottom: 1px solid #888;
    }

    .nav a {
        text-decoration: none;
        color: #fff;
        display: block;
        transition: .3s background-color;
    }

    .nav a:hover {
        background-color: orange;
    }

    .nav a.active {
        background-color: #fff;
        color: #444;
        cursor: default;
    }

    @media screen and (min-width: 600px) {
        .nav li {
            width: 120px;
            border-bottom: none;
            height: 50px;
            line-height: 50px;
            font-size: 1.4em;
        }

        /* Option 1 - Display Inline */
        .nav li {
            display: inline-block;
            margin-right: -4px;
        }

        /* Options 2 - Float
  .nav li {
    float: left;
  }
  .nav ul {
    overflow: auto;
    width: 600px;
    margin: 0 auto;
  }
  .nav {
    background-color: #444;
  }
  */
    }

    .nav-float {
        will-change: transform;
        transition: transform 500ms linear;
    }

    .nav-float--pinned {

        transform: translateY(0%);
    }

    .nav-float--unpinned {

        transform: translateY(-200%);
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