<template>
  <div class="home bg-dark">
    <img alt="Vue logo" src="../assets/Frame.png" />
    <div class="header bg-dark">
      <h1>Welcome in Alien-Room</h1>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="input-group input-search input-group mb-3 d-flex justify-content-center"
        style="
          width: 50%;
          height: 45px;
          background: #ffffff;
          border: 2px solid #f1f5ff;
          border-radius: 7px;
          border-right-color: default;
        "
      >
        <div class="input-group form-control ms-auto">
          <input
            style="border: none"
            type="text"
            class="form-control form-control-sm border-right-white border-right-white rounded-end ms-auto"
            placeholder="Cari..."
            v-model="search"
            @keyup="textSearch"
            v-on:keyup.enter="SearchData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getModule } from "vuex-module-decorators";
import NopolModule from "@/store/modules/NopolModule";
import { ref } from "vue";
const NopolState = getModule(NopolModule);

const clearable = ref<boolean>(false);
const search = ref<string>("");

const textSearch = () => {
  if (search.value) clearable.value = true;
  else clearable.value = false;
};

const getNopol = () => {
  NopolState.getListNopol({
    search: search.value,
  });
};

const SearchData = () => {
  getNopol();
};
</script>
