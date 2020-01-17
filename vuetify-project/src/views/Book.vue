<template>
    <v-container grid-list-lg v-if="book">
        <v-layout row wrap>
            <v-flex xs12 xs10 offset-sm1>
                <book-details :book="book"></book-details>
            </v-flex>
            <v-flex v-for="part in book.parts" :key="part.id" xs12 xs10 offset-sm1>
                <BookPartListItem :part="part" :bookId="book.id"></BookPartListItem>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import BookDetails from '../components/BookDetails'
import BookPartListItem from '../components/BookPartListItem'
export default {
    components: {
        BookDetails,
        BookPartListItem
    },
    props:{
        'id': {
            type: String,
            required: true
        }
    },
    computed: {
        book(){
            return this.$store.getters.getBooks.find(b => b.id == this.id)
        }
    }
}
</script>