<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 1.75em;
  color: $primaryBody;
}

.modal-body {
  margin: 20px 0;
  line-height: 1.25em;
}

.modal-footer {
  text-align: center;
  margin-top: 3em;

  button {
    background-color: $accentTeal;
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 1em 2em;
    border-radius: 1em;
    transition: background-color 100ms ease-in;
    border-style: none;

    &:hover {
      background-color: $accentTeal;
    }

    &:focus {
      outline: none;
    }

    &:active {
      // border-style: none;
    }
  }
}

.modal-default-button {
  //   float: right;
  margin: 0 auto;
}
</style>
