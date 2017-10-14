//index.js
Page({
  data: {//刚进入默认数据
    text: '我是默认数据',
    array: [{text: '我是默认数据'}],
    obj: {
      text: '我是默认数据'
    }
    
  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: '我是改变后的数据'
    })
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    var changedData = {}
    var index = 0
    changedData['array[' + index + '].text'] = '我是数组改变后的数据'
    this.setData(changedData)
  },
  changeItemInObject: function(){
    this.setData({
      'obj.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': '我是新创建的数据'
    })
  }
})