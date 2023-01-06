# 日期选择

## 用法

```html:example:
<p>ZUI3 组件展示：</p>
<div class="input-control suffix-sm form-datetime w-40 mb-2" id="datePicker1">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
<p>原生组件展示：</p>
<input type="datetime-local" class="form-control mt-2 w-40" placeholder="请选择日期"/>
```

```js
const datePicker1 = document.getElementById('datePicker1');
datePicker1.querySelector('.form-control').value = '2022-12-12';
new Datepicker('#datePicker1', {
    date: '2022-12-12',
    onChange: (newDate) => {
        datePicker1.querySelector('.form-control').value = newDate;
    },
});
``` 

## 禁用

```html:example:
<div class="input-control suffix-sm form-datetime w-40 disabled" id="datePicker2">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

## 是否展示其他月份

```html:example:
<div class="input-control suffix-sm form-datetime w-40" id="datePicker3">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

```js
const datePicker3 = document.getElementById('datePicker3');
new Datepicker('#datePicker3', {
    showOtherMonth: false,
    onChange: (newDate) => {
        datePicker3.querySelector('.form-control').value = newDate;
    },
});
``` 

## 限制日期选择范围

```html:example: -flex -gap-2
<div>
  <div>限制天数</div>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker4">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</div>
```

```js
const datePicker4 = document.getElementById('datePicker4');
new Datepicker('#datePicker4', {
    minDate: '2022-12-02',
    maxDate: '2022-12-30',
    onChange: (newDate) => {
        datePicker4.querySelector('.form-control').value = newDate;
    },
});

``` 

## 标记日期

```html:example:
<div class="input-control suffix-sm form-datetime w-40" id="datePicker6">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

```js
const datePicker6 = document.getElementById('datePicker6');
new Datepicker('#datePicker6', {
    tagDate: ['2022-12-24', '2022-12-25'],
    onChange: (newDate) => {
        datePicker6.querySelector('.form-control').value = newDate;
    },
});
``` 

## 弹出位置

```html:example:
<div id="btnGroupPlacement"></div>
<div class="input-control suffix-sm form-datetime w-40 mt-4" id="datePicker8">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

```js
const datePicker8 = document.getElementById('datePicker8');
new Datepicker('#datePicker8', {
    tagDate: ['2022-12-24', '2022-12-25'],
    onChange: (newDate) => {
        datePicker8.querySelector('.form-control').value = newDate;
    },
});
```

