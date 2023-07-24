<template>
  <div class="home">
        <div class="card">
        <div class="card-body">
              <NewForm :blocks="blocks" :formData="formData" :submitFn="submitFn"/>
        </div>
        </div>

  </div>
</template>

<script>
import NewForm from '@/components/NewForm.vue'

export default {
  // name: 'NewForm',
  components: {
    NewForm
  },
    data(){
    return {
   formData: {},
      blocks: [
      {
         "token": "PERSON_NAME",
         "type": "text",
         "props": {
            "title": "Name",
            "required": true,
            "placeholder": "Enter Name"
         }
      },
      {
         "token": "IS_PERSON_MINOR",
         "type": "checkbox",
         "props": {
            "title": "Is current person is minor",
            "default": false,
            "required": true,
         }
       },
      {
         "token": "PERSON_DOB",
         "type": "date",
         "props": {
            "title": "Enter Person DOB",
            "required": true,
            "placeholder": "Enter DOB"
         }
      },
      {
         "token": "PERSON_LOCATION",
         "type": "text",
         "props": {
            "title": "Enter Person Location",
            "is_select_list": true,
            "required": true,
            "placeholder": "Enter Location",
            "enum":["thane", "kalyan", "dombivali"]
         }
      },
      ]
      }
    },

  methods: {
    submitFn() {
       console.log(this.formData)
    }
  }
}
</script>
