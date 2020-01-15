<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container>
      <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn small outlined color="green" v-on="on" @click="sortBy('title')" dark class="mr-2">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project</span>
            </v-btn>
          </template>
          <span>sort project</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn small outlined color="green" v-on="on" @click="sortBy('title')" dark class="mr-2">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By name</span>
            </v-btn>
          </template>
          <span>sort person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title" class="mb-1">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects:[
      {title:"Site web", person: 'Hung', due: "07/08/1996", status: 'complate'},
      {title:"Application Mobile", person: 'Chien', due: "07/02/1998", status: 'no'},
      {title:"Web Design", person: 'Luat', due: "23/03/1993", status: 'yes'},
      {title:"Sale", person: 'Hai', due: "12/02/1997", status: 'up'}
    ]
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1:1)
    }
  }
}
</script>

<style lang="scss">
.project {
  &.complete { border-left: 4px solid #3cd1c2}
  &.no { border-left: 4px solid orange}
  &.up { border-left: 4px solid red}
  &.yes { border-left: 4px solid yellow}
}
</style>