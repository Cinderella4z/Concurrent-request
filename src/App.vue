<template></template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import Request from "./request.js";
function getRequest1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}
function getRequest2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}
function getRequest3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
}
function getRequest4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 1000);
  });
}
const taskQuene = [getRequest1, getRequest2, getRequest3, getRequest4];

const requestIns = new Request({ max: 3, taskQuene: taskQuene });

console.log(requestIns.responses);
</script>
<style lang="less" scoped></style>
