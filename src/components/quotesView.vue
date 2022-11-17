<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db";

async function getQuotes(db) {
  return (await getDocs(collection(db, "quotes"))).docs.map((doc) =>
    doc.data()
  );
}

let q = await getQuotes(db);
</script>

<template>
  <ul>
    <li v-for="item in q" :key="item.id">
      <h3>{{ item.quote }}</h3>
      <p>- {{ item.author }}</p>
    </li>
  </ul>
</template>
