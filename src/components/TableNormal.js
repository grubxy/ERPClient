import React from 'react'
import {
	Table,
	Menu,
	Icon
} from 'semantic-ui-react'

const TableNormal = ({
	emptyMsg,
	page,
	pageSize,
	headers,
	data,
	totalData,
	search,
	loading,
	onSearch,
	goToPage
}) => {

	//console.log("header:" + JSON.stringify(headers))

	/*
		Object.keys(headers).map((key, i) => {
			console.log("title: " + headers[key].title)
		})
	*/
	const header = () => {
		// return Object.keys(headers).map((key, i) => {
		// 	return <Table.HeaderCell>{headers[key].title}</Table.HeaderCell>
		// })
		return <Table.HeaderCell>xx</Table.HeaderCell>
	}

	let body = () => {
		return data.map((row, i) => {
			return (
				<Table.Row>
				{
					Object.keys(headers).map((_, j)=>{
					let key = Object.keys(headers)[j]
					let value = row[key]
					return <Table.Cell>value</Table.Cell>
					})
				}
				</Table.Row>
			)
		})
	}

	let footer = () => (
		<Table.HeaderCell colSpan={headers.length}>
			  <Menu floated='right' pagination>
			    <Menu.Item as='a' onClick={()=>goToPage(page, pageSize)} icon>
			    <Icon name='angle double left'/>
			    </Menu.Item>
			    <Menu.Item as='a' onClick={()=>goToPage(page, pageSize)} icon>
			    <Icon name='angle left'/>
			    </Menu.Item>
			    <Menu.Item as='a' onClick={()=>goToPage(page, pageSize)} icon>
			    <Icon name='angle right'/>
			    </Menu.Item>
			   <Menu.Item as='a' onClick={()=>goToPage(page, pageSize)} icon>
			    <Icon name='angle double right'/>
			    </Menu.Item>
			  </Menu>
			</Table.HeaderCell>
	)

	return (
		<Table celled>
	      <Table.Header>
	        <Table.Row>
	          {header}
	        </Table.Row>
	      </Table.Header>
		</Table>
	)
}

export default TableNormal