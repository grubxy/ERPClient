// 员工管理

// 初始化
export const initStaffManage = (size, sizeSchedule, sizeSalary) => ({
	type: 'STAFF_MANAGE_INIT',
	size,
	sizeSchedule,
	sizeSalary
})

// 添加员工信息
export const addStaff = (data, table) => ({
	type: 'STAFF_ADD',
	data,
	table
})

// 处理模态框
export const operateStaffModal = (data) => ({
	type: 'STAFF_MODAL_OPERATE',
	data
})

// 按钮处理
export const actionStaff = (row, method, table) => ({
	type: 'STAFF_ACTION',
	row,
	method,
	table
})

// 搜索
export const searchStaff = (target, table) => ({
	type: 'STAFF_SEARCH',
	name: target.name,
	value: target.value,
	table
})

// 分页
export const activeStaffPage = (activePage, table) => ({
	type: 'STAFF_ACTIVEPAGE',
	activePage,
	table
})

// 处理输入变化
export const changeInputStaff = (target) => ({
	type: 'STAFF_MODAL_CHANGE',
	name: target.name,
	value: target.value
})

// 搜索
export const searchSchedule = (target, table) => ({
	type: 'SCHEDULE_SEARCH',
	name: target.name,
	value: target.value,
	table
})

// 排厂分页
export const activeSchedulePage = (activePage, table) => ({
	type: 'SCHEDULE_ACTIVEPAGE',
	activePage,
	table
})

// 工资日历搜索
export const searchTimeSalary = (moment, data) => ({
	type: 'STAFF_SALARY_SEARCH_TIME',
	moment,
	data
})

// 工资分页
export const activePageSalary = (activePage, table) => ({
	type: 'STAFF_SALARY_ACTIVEPAGE',
	activePage,
	table
})

// 工资搜索
export const searchStaffSalary = (target, table) => ({
	type: 'STAFF_SALARY_SEARCH',
	name: target.name,
	value: target.value,
	table
})