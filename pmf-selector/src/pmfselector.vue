<template>
  <div >
    <select v-if="customList" >
      <option v-for="item in customJson">
        {{item.name}}
        </option>
    </select>
    <select v-else>
      <option v-for="item in pmfItems">
        {{item.name}}
        </option>
    </select>
    </br>
    <span v-html="customList"></span>
    </br>
    <span>{{customJson}}</span>
  </div>
</template>

<script>


export default {
  name:'pmfselector',
  data(){
    return{
      pmfItems:[
        {name:'Spock', ID:1},
        {name: 'Kirk', ID:2},
        {name:'Bones', ID:3}
      ],
      customList:false
    }
  },
  props:['customList', 'customJson'],
  methods: {
  }
}
</script>

<style>

</style>
