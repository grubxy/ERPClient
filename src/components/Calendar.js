import React, {
	Component
} from 'react'
import Picker from 'rc-calendar/lib/Picker'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import zhCN from 'rc-calendar/lib/locale/zh_CN'
import TimePickerPanel from 'rc-time-picker/lib/Panel'
import 'rc-calendar/assets/index.css'
import 'rc-time-picker/assets/index.css'
import moment from 'moment'
import 'moment/locale/zh-cn'


moment.locale('zh-cn');


const now = moment();

now.utcOffset(8);


const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = (
	<TimePickerPanel
    defaultValue={[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]}
  />
);

function newArray(start, end) {
	const result = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}
	return result;
}

function disabledDate(current) {
	const date = moment();
	date.hour(0);
	date.minute(0);
	date.second(0);
	return current.isBefore(date); // can not select days before today
}

function disabledTime(time, type) {
	console.log('disabledTime', time, type);
	if (type === 'start') {
		return {
			disabledHours() {
				const hours = newArray(0, 60);
				hours.splice(20, 4);
				return hours;
			},
			disabledMinutes(h) {
				if (h === 20) {
					return newArray(0, 31);
				} else if (h === 23) {
					return newArray(30, 60);
				}
				return [];
			},
			disabledSeconds() {
				return [55, 56];
			},
		};
	}
	return {
		disabledHours() {
			const hours = newArray(0, 60);
			hours.splice(2, 6);
			return hours;
		},
		disabledMinutes(h) {
			if (h === 20) {
				return newArray(0, 31);
			} else if (h === 23) {
				return newArray(30, 60);
			}
			return [];
		},
		disabledSeconds() {
			return [55, 56];
		},
	};
}

const formatStr = 'YYYY-MM-DD';

function format(v) {
	return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
	return v && v[0] && v[1];
}

export class Calendar extends Component {

	render = () => {

		const {
			onChange,
			moment,
			data
		} = this.props

		const calendar = (
			<RangeCalendar
	        showWeekNumber={false}
	        dateInputPlaceholder={['开始日期', '结束日期']}
	        defaultValue={[now, now.clone().add(1, 'months')]}
	        locale={zhCN}
	        showClear
	        disabledTime={disabledTime}
	        timePicker={timePickerElement}
	      />
		)

		return (
			<Picker value={moment} calendar={calendar}  animation="slide-up" onChange={(value)=>onChange(value, data)}>
		    {
		    	({value})=>{
					return (
						<span>
						<input placeholder='选择时间' 
						style={{ width: 200 }}
						readOnly 
						className="ant-calendar-picker-input ant-input" 
						value={isValidRange(value) && `${format(value[0])} - ${format(value[1])}` || ''}
						/>
						</span>
					)
				}
			}
		    </Picker>
		)
	}
}