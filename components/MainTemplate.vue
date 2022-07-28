<template>
  <div class="container">
    <h2 class="main-page-phrase"> 
      Привет! Добро пожаловать на страницу дерьма! 
    </h2>
    <div class="enter-to-shit-container">
      <div class="enter-to-shit-element">
        <label class="enter-to-shit-label" for="GET-name">Имя в миру:</label>
        <input id="GET-name" ref="name" v-model="name" type="text" name="name">
      </div>
      <div class="enter-to-shit-element">
        <label class="enter-to-shit-label" for="GET-pass">Пароль плз еще:</label>
        <input id="GET-pass" ref="password" v-model="password" type="password" name="password">
      </div>
      <button class="enter-to-shit-button" type="button" @click="saveToStorage">
        <NuxtLink to="/account" tag="p">
          Спаси и сохрани
        </NuxtLink>
      </button>
    </div>
    <h3>Дядя, свой пароль не забывай</h3>
    <p> {{ accInfo.name }} </p>
    <p> {{ accInfo.password }} </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainTemplate',
  data() {
    return {
      name: '',
      password: '',
    }
  },
  computed: {
    ...mapState(['accInfo', 'infoFromInputs']),
  },
  methods: {
    saveToStorage() {
      localStorage.setItem('name', this.$refs.name.value);
      localStorage.setItem('password', this.$refs.password.value);
    }
  },
}
</script>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  width: 75%;
}

.enter-to-shit-container {
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
}

.enter-to-shit-label {
  display: inline-block;
  width: 120px;
}

.main-page-phrase {
  text-align: center;
}

.enter-to-shit-button {
  width: 100%;
  height: 160px;
  font-size: 36px;
}

</style>