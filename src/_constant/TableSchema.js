export const tableSchema = {
      firstName: {
        type: String,
        required: true,
        displayName: 'First Name'
    },
    userName: {
      type: String,
      required: true,
      displayName: 'username'
    },
    lastName: {
        type: String,
        required: true,
        displayName: 'Last Name'
    },
    age:{
      type:Number,
      displayName: 'Age'
    },
    sex: {
      type:Boolean,
      displayName: 'Sex'
    }
  }