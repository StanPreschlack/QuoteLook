<script setup lang="ts">
import { addDoc, collection } from "firebase/firestore";
import { db } from "../db";
async function addFormValues(formEvent: any) {
  const quote = formEvent.target.elements.quote.value;
  const author = formEvent.target.elements.author.value;
  console.log(quote, author);
  if (quote.length > 0 && author.length > 0) {
    try {
      const docRef = await addDoc(collection(db, "quotes"), {
        quote: quote,
        author: author,
      });
      if (docRef) {
        console.log("sucess!!");
      }
    } catch (err) {
      console.log(err);
    }
    location.reload();
  }
}
</script>

<template>
  <form @submit.prevent="addFormValues">
    <input type="text" name="quote" placeholder="quote" /><br />
    <input type="text" name="author" placeholder="author" /><br />
    <input type="submit" />
    <p>*please be responsible and appropriate</p>
  </form>
</template>
