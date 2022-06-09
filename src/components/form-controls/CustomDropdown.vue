<template>
  <div class="custom-dropdown is-open" ref="customDropdown">
    <h3 class="custom-dropdown__label">Filter 1</h3>
    <div
      id="dropdown-1"
      class="custom-dropdown__wrap">
        <button
          id=""
          aria-haspopup="menu"
          aria-expanded="false"
          type="button"
          class="custom-dropdown__btn"
          @click="openList"
        >
          <span class="custom-dropdown__btn-icon"><svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path d="m1 1 7 7 7-7" stroke="currentColor"/></svg></span>
          <span class="custom-dropdown__btn-title">Dropdown Button</span>
        </button>
      <ul
        role="menu"
        tabindex="-1"
        class="custom-dropdown__menu">
          <li
            class="custom-dropdown__item"
            role="presentation"
          >
            <a
              role="menuitem"
              href="#"
              target="_self"
              class="custom-dropdown__link"
            >
              First Action
            </a>
          </li> <li
            class="custom-dropdown__item"
            role="presentation"
          >
            <a
              role="menuitem"
              href="#"
              target="_self"
              class="custom-dropdown__link"
            >
              First Action
            </a>
          </li> <li
            class="custom-dropdown__item"
            role="presentation"
          >
            <a
              role="menuitem"
              href="#"
              target="_self"
              class="custom-dropdown__link"
            >
              First Action
            </a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomDropdown',

  methods: {
    openList() {
      const dropdown = this.$refs.customDropdown;
      dropdown.classList.toggle('is-open');
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global/variables.scss";

.custom-dropdown {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__label {
    margin: 0 0 20px 0;
    font-family: inherit;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;
  }

  &__wrap {
    position: relative;
  }

  &__btn {
    position: relative;
    width: 100%;
    padding: 20px;
    font-family: inherit;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;

    color: inherit;
    border: 1px solid transparent;
    background-color: $color-white-smoke;
    transition: border-color 0.15s ease-in-out;

    &:hover,
    &:focus,
    &:focus-visible {
      outline: none;
      border: 1px solid $color-black;
      box-shadow: none;
    }

    &:active svg {
      transform: rotate(-180deg);
    }
  }

  &__btn-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    transition: transform 0.15s ease-in-out;

    svg {
      transition: transform 0.15s ease-in-out;
    }
  }

  &__menu {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;

    display: none;
    flex-direction: column;

    width: 100%;

    margin: 0;
    padding: 0;
    list-style: none;
    background-color: $color-white;
    border: 1px solid rgba($color-black, 0.4);
  }

  &__item {
    border-bottom: 1px solid rgba($color-black, 0.4);
    transition: background-color 0.15s ease-in-out;

    &:last-child {
      border-bottom: none;
    }

    &:hover,
    &:focus,
    &:focus-visible {
      background-color: $color-white-smoke;

      .custom-dropdown__link {
        opacity: 1;
      }
    }
  }

  &__link {
    display: flex;
    padding: 10px 20px;
    font-family: inherit;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.15s ease-in-out;
  }


  &.is-open {
    .custom-dropdown__menu {
      display: flex;
    }

    .custom-dropdown__btn svg {
      transform: rotate(-180deg);
    }
  }
}
</style>
