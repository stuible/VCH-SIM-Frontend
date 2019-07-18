<template>
  <nav ref="menu">
    <div class="container">
      <nuxt-link class="logo" to="/">
        <img
          src="~/assets/image/logos/sim-light.svg"
          draggable="false"
          alt="Simulation Facilitation Pathways"
        />
      </nuxt-link>
      <input type="checkbox" id="menu" class="burger" v-model="open" />
      <label for="menu" class="burger">☰</label>
      <ul class="menu">
        <li>
          <div class="sub-menu-link" :class="{active: this.$route.path.startsWith('/video/')}">
            <nuxt-link to="/#modules">Videos</nuxt-link>
            <ul class="sub-menu">
              <li v-for="v in $store.state.videos" :key="v.id">
                <nuxt-link :to="'/video/' + v.slug">{{v.title}}</nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <nuxt-link to="/registration">Class Registration</nuxt-link>
        </li>
        <li>
          <div class="sub-menu-link">
            Support
            <ul class="sub-menu">
              <!-- <li><nuxt-link to="/contact">Contact</nuxt-link></li> -->
              <!-- <li><nuxt-link to="/objectives">Course Objectives</nuxt-link></li> -->
              <li>
                <a href="https://www.ssih.org/dictionary" target="_blank">SIM Dictionary</a>
              </li>
              <li>
                <a href="https://bcsimulation.ca" target="_blank">BCSN</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="overlay"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  mounted() {
    console.log(
      `path starts with '/video/': ${this.$route.path.startsWith("/video/")}`
    );
    document.addEventListener("click", evt => {
      const menuEl = this.$refs.menu;
      let clickedElement = evt.target; // clicked element
      let targetElement = evt.target;

      do {
        //    console.log(clickedElement.tagName.toLowerCase())
        if (targetElement == menuEl) {
          if (
            clickedElement.tagName.toLowerCase() === "a" &&
            clickedElement !== undefined
          ) {
            //   console.log('is a link')
            if (this.open) this.open = false;
          }
          // This is a click inside. Do nothing, just return.
          // console.log('you clicked inside the element')
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      if (this.open) this.open = false;
    });
  }
};
</script>

<style lang="scss" scoped>
//Top navigation bar

nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: $navHeight;
  background-color: $navColour;
  z-index: 2;
  box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.15);
}

.logo {
  all: unset;
  float: left;
  width: 12em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: $navHeight;
  cursor: pointer;
}

.menu.wrapper {
  float: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: $navHeight;

  a {
    color: black;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 5px #c0640e solid;
    text-decoration: none;
    margin-left: 10px;
  }
}

.menu {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  float: right;
}

//always hide hamburger checkbox
input.burger {
  display: none;
}

@include breakpoint(phablet) {
  label.burger {
    display: none;
  }

  .menu {
    li {
      display: inline-block;
      // cursor: pointer;
    }

    > li > a,
    > li > div,
    > li > .sub-menu-link {
      text-decoration: none;
      color: #404040;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: $navHeight;
      padding: 0 14px;
      display: block;
      height: $navHeight - 5px;

      &:hover,
      &.nuxt-link-active,
      &.active {
        border-bottom: 5px solid $accentTeal;
      }
    }

    ul.sub-menu {
      position: absolute;
      display: none;
      background-color: #fff;
      padding: 10px 20px;
      color: #000;
      margin-left: -14px;
      border-radius: 0 0 0.5em 0.5em;
      box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.15);

      li {
        display: block;
        margin: 10px 0;
        line-height: normal;
      }
    }

    .sub-menu-link {
      cursor: default;
      &:hover ul.sub-menu {
        display: block;

        li > a:hover {
          border-left: solid $accentTeal 3px;
          padding-left: 0.5em;
          margin-left: calc(-3px + -0.5em);
        }
      }

      a {
        text-decoration: none;
        color: #404040;
        display: block;
      }
    }
  }
}

//Hamburger menu styles that should only be applied when menu is collapsed
@media (max-width: map-get($breakpoints, phablet) - 1) {
  label.burger {
    cursor: pointer;
    color: $primaryBody;
    display: block;
    float: right;
    margin-top: 25px;
    font-size: 2em;
  }

  input.burger:checked + label {
    color: $accentRed;
  }

  .menu {
    top: $navHeight;
    max-width: 225px;
    width: 100%;
    opacity: 0;
    right: -100vw;
    height: 100%;
    position: fixed;
    background-color: #fff;
    padding: 2em;
    transition: all 300ms linear;
    box-shadow: -4px 0px 5px -3px rgba(0, 0, 0, 0.15);

    //Top Level Menu Items
    & > li > a,
    & > li > div {
      font-size: 1.5em;
      // text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 1em;
    }

    //Second Level Menu Items
    ul.sub-menu {
      margin-top: 0.5em;
      font-size: 0.75em;
      font-weight: 500;
      list-style-type: none;
      //  text
      a {
        margin-bottom: 0.5em;
      }
    }

    li > a,
    li > div,
    li > div > a {
      text-decoration: none;
      color: $primaryBody;
      letter-spacing: 0.02em;
      display: block;
    }
  }

  /* Toggle Effect */
  input:checked ~ label {
    // background-image: url(close.png);
  }

  input:checked ~ .menu {
    right: 0;
    opacity: 1;
  }
}
</style>
