<template>
  <div class="custom-dropdown">
    <h3 class="custom-dropdown__label">Filter 1</h3>
    <div
      id="dropdown-1"
      class="dropdown b-dropdown custom-dropdown__wrap btn-group">
        <button
          id="dropdown-1__BV_toggle_"
          aria-haspopup="menu"
          aria-expanded="false"
          type="button"
          class="btn dropdown-toggle btn-secondary"
        >
          Dropdown Button
        </button>
      <ul
        role="menu"
        tabindex="-1"
        aria-labelledby="dropdown-1__BV_toggle_"
        class="dropdown-menu">
          <li
            role="presentation"
          >
            <a
              role="menuitem"
              href="#"
              target="_self"
              class="dropdown-item"
            >
              First Action
            </a>
          </li>
        <li
          role="presentation">
          <a
            role="menuitem"
            href="#"
            target="_self"
            class="dropdown-item"
          >
            Second Action
          </a>
        </li>
        <li
          role="presentation">
          <a
            role="menuitem"
            href="#"
            target="_self"
            class="dropdown-item"
          >
            Third Action
          </a>
        </li>
        <li
          role="presentation">
          <a
            role="menuitem"
            href="#"
            target="_self"
            class="dropdown-item active"
          >
            Active action
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomDropdown',
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global/variables.scss";

.custom-dropdown {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__label {
    margin: 0;
    font-family: inherit;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;
  }

  .btn-secondary {
    color: red; // TODO  dev only
  }
}
</style>
