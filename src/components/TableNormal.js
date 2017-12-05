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
	let header = (
		<Table.Header>
		<Table.Row>
	 		{Object.keys(headers).map((key, i) => (
 				<Table.HeaderCell key={i}>{headers[key].title}</Table.HeaderCell>
		 ))}
	 	</Table.Row>
	 	</Table.Header>
	)


	let body = (
		<Table.Body>
		{
			data.map((row, i) => (
					<Table.Row>
					{
						Object.keys(headers).map((_, j)=>{
							let key = Object.keys(headers)[j]
							let value = row[key]
							return <Table.Cell>{value}</Table.Cell>
						})
					}
					</Table.Row>
				))
		}
		</Table.Body>
	)

	let footer = (
		<Table.Footer>
		  <Table.HeaderCell colSpan={Object.keys(headers).length}>
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
	  </Table.Footer>
	)

	return (
		<Table celled>
	    	{header}
	    	{body}
	    	{footer}
		</Table>
	)
}

export default TableNormal