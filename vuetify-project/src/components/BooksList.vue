<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md3>
        <v-container fluid>
          <v-layout row>
            <v-flex xs7 md8>
              <v-text-field label="Search" v-model="searchTerm"></v-text-field>
            </v-flex>
            <v-flex xs5 md4>
              <v-select label="Level" v-model="level" :items="levels" multiple></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm-1 offset-md-3>
        <Book :book="book"></Book>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Book from "./BooksListItem";
export default {
  components: {
    Book
  },
  data() {
    return {
      searchTerm: null,
      level: [],
      levels: ["Easy", "Medium", "Difficult", "N5", "N4", "N3", "N2", "N1" , "V-Pop", "US-UK", "J-Pop","C-Pop", "K-Pop"],
      page: 1,
    };
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    filteredBooks() {
      let books = this.books;
      if (this.searchTerm)
        books = books.filter(
          b =>
            b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            b.description
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) >= 0
        );

      if (this.level.length)
        books = books.filter(
          b => this.level.filter(val => b.level.indexOf(val) !== -1).length > 0
        );

      return books;
    }
  }
};
</script>