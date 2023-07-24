<template>
  <div>
    <form @submit.prevent="submitFn">
    <div class="row">
      <div v-for="(form, cKey) in blocks" :key="cKey">
      <div class="form-group col-md-12 mt-4"  >
          <input v-if="['text', 'number'].includes(form.type) & !form.props.is_select_list" :type="form.type" class="form-control" :required="form.props.required" v-model="formData[form.token]" :placeholder="form.props.placeholder">
      </div>
        <div class="form-group col-md-12 mt-4" v-if="form.props.is_select_list">
          <label for="">{{form.props.title}}</label>
          <select v-model="formData[form.token]" :required="form.props.required" class="form-control select2bs4" style="width: 100%;">
            <option selected="selected" disabled>{{form.props.placeholder}}</option>
            <option v-for="(list, key) in form.props.enum" :value="list" :key="key">{{list}}</option>
        </select>
      </div>
        <div class="form-group col-md-12 mt-4" v-if="form.type === 'date'">
          <input   type="date"  :required="form.props.required" v-model="formData[form.token]" style="width:100%" class="mt-2" name="my-input" />
        </div>
        <div class="form-group col-md-12 mt-4" v-if="form.type === 'checkbox'">
          <label for="">{{form.props.title}}</label>
          <input type="checkbox" :required="form.props.required" v-model="formData[form.token]" style="width:100%" class="mt-2 ml-2" name="my-input" />
        </div>
      </div>
      <div class="form-group col-md-12 mt-4">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  props: {
     blocks: {
        type: Array,
        required: true
     },
     formData: {
        type: Object,
     },
     submitFn: {
       type: Function
     }
  }
}
</script>

<style>

</style>