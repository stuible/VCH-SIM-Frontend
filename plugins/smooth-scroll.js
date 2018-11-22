import Vue from 'vue'

function scrollTo(link) {
    if (link) {
        console.log("smooth scrolling to: " + link);
        document.querySelector(link).scrollIntoView({
            behavior: 'smooth'
        });
    }
    else {
        console.log("smooth scrolling to top");
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// This is your plugin object. It can be exported to be used anywhere.
const SmoothScroll = {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, options) {
        // We call Vue.mixin() here to inject functionality into all components.
        Vue.mixin({
            // Anything added to a mixin will be injected into all components.
            // In this case, the mounted() method runs when the component is added to the DOM.
            mounted() {
                console.log('Mounted!');
                //Only inject into root compenent
                if (!this.$parent) {
                    var links = document.getElementsByTagName("A");
                    console.log(links)
                    for (var i = 0; i < links.length; i++) {
                        if (links[i].href.indexOf("#") != -1) {
                            console.log(links[i].hash)
                            let hash = links[i].hash

                            links[i].addEventListener("click", function (e) {

                                console.log("clicked: " + hash);
                                scrollTo(hash)
                                e.preventDefault();
                            }, false);
                        }
                    }
                }

            }
        });
    }
};

// export default SmoothScroll;

if (process.browser) {
    Vue.use(SmoothScroll)
}