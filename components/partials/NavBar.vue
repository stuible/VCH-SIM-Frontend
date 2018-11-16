<template>
    <nav>
    <div class="container">
      <a class="logo" href="#">
        <img src="~/assets/image/logos/sim-light.svg" draggable="false" alt="Simulation Facilitation Pathways">
      </a>
      <input type="checkbox" id="menu" class="burger">
      <label for="menu" class="burger">☰</label>
      <ul class="menu">
        <li>
          <div class="sub-menu-link"><a href="#modules">Modules</a>
            <ul class="sub-menu">
              <li><a href="video.html">Video One</a></li>
              <li><a href="video.html">Video One</a></li>
              <li><a href="video.html">Video One</a></li>
              <li><a href="video.html">Video One</a></li>
              <li><a href="video.html">Video One</a></li>
              <li><a href="video.html">Video One</a></li>
            </ul>
          </div>
        </li>
        <li><a href="registration.html">Class Registration</a></li>
        <li>
            <div class="sub-menu-link">Support
            <ul class="sub-menu">
              <li>Course Objectives</li>
              <li>SIM Dictionary</li>
              <li>Contact</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="overlay"></div>
  </nav>
</template>

<style scoped lang="scss">
//Top navigation bar

nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: $navHeight;
  background-color: $navColour;
  z-index: 2;
  box-shadow: 0px 3px 2px -2px rgba(0, 0, 0, 0.26);
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
      cursor: pointer;
    }

    > li > a,
    > li > div {
      text-decoration: none;
      color: #404040;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: $navHeight;
      padding: 0 14px;
      display: block;
      height: $navHeight - 5px;

      &:hover {
        border-bottom: 5px solid $accentTeal;
      }
    }

    ul.sub-menu {
      position: absolute;
      display: none;
      background-color: #fff;
      padding: 15px 20px;
      color: #000;
      margin-left: -14px;
      border-radius: 0 0 0.5em 0.5em;
      box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.26);

      li {
        display: block;
        margin: 10px 0;
        line-height: normal;
      }
    }

    .sub-menu-link {
      &:hover ul.sub-menu {
        display: block;
      }

      a {
        text-decoration: none;
        color: black;
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
    min-width: 225px;
    right: -100vw;
    height: 100%;
    position: fixed;
    background-color: #fff;
    padding: 2em;
    transition: all 300ms linear;

    li > a,
    li > div,
    li > div > a {
      text-decoration: none;
      color: $primaryBody;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 14px;
      display: block;
    }
  }

  /* Toggle Effect */
  input:checked ~ label {
    // background-image: url(close.png);
  }

  input:checked ~ .menu {
    right: 0;
  }
}
</style>