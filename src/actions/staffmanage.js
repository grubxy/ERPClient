// 员工管理

// 初始化
export const initStaffManage = (size, sizeSchedule) => ({
	type: 'STAFF_MANAGE_INIT',
	size,
	sizeSchedule
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

// 分页
export const activeSchedulePage = (activePage, table) => ({
	type: 'SCHEDULE_ACTIVEPAGE',
	activePage,
	table
})