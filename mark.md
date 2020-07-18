## 说明文档

1.单元格
>#### cell props
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :------: | :------: | :------: |
| name | 左侧标题 | String | 文本 |
| value | 右侧内容 | String | 内容 |
| rightIcon | 右侧图标 | String | - |
| leftIcon | 左侧图标 | String | - |

```
<me-cell name="姓名" value="李世民"></me-cell>
<me-cell name="朝代" value="唐朝" leftIcon="user"></me-cell>
```


2.复选框
>#### checkbox props
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :------: | :------: | :------: |
| v-model (value) | 选择值 | Array | [] |
| options | 复选列表 | Array | [] |

```
<me-checkbox class="item" :options="checkboxList" v-model='checkboxValue'></me-checkbox>
```

3.城市选择
>#### cityChoose props
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :------: | :------: | :------: |
| cityData | 城市列表 | Array | [] |
| title | 标题 | String | - |
| selectIndex | 默认值 | Array | 全部第一个 |

```
<me-city-picker
	ref="cityPicker"
	:cityData="pickerData2"
	title="省市区选择"
	@pickerChange="citypickerChange"
	@confirm="cityconfirm"
	@cancel="citycancel">
</me-city-picker>
```
```
方法：confirm  cancel  pickerChange
```

4.日期选择
>#### timechoose props
| 参数 | 说明 | 类型 | 默认值 |
| :------: | :------: | :------: | :------: |
| defaultTime | 默认时间 | String | 当前时间(格式：2020-03-03) |
| startDate | 开始时间 | String | 十年前 |
| endDate | 结束时间 | String | 十年后 |
| title | 标题 | String | - |
| type | 时间精确值 | String | 可能值:date、hour、minute、second、time、time_minute |
```
<me-datepicker
	ref="datepicker"
	defaultTime="2020-01-19"
	title="时间选择"
	type="date"
	startDate="2009-01-01"
	endDate="2025-12-31"
	@confirm="dateConfirm"
	@cancel="dateCancel"
	@dateChange="dateChange">
</me-datepicker>
```
```
方法：confirm  cancel  dateChange
```
