import React from 'react'
import {
	Table,
	Menu,
	Icon,
	Progress
} from 'semantic-ui-react'

const TableWithAction = ({
	emptyMsg,
	table,
	search,
	loading,
	onSearch,
	goToPage,
	onAction,
	onSelect
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
	 		{Object.keys(table.headers).map((key, i) => (
 				<Table.HeaderCell key={i}>{table.headers[key].title}</Table.HeaderCell>
		 ))}
	 	</Table.Row>
	 	</Table.Header>
	)


	let body = (
		<Table.Body>
		{
			table.content.map((row, i) => {
				if (table.selectable===true) {
					return (
							<Table.Row key={i} onClick={()=>onSelect(row)}>
							{
								Object.keys(table.headers).map((_, j)=>{
									let key = Object.keys(table.headers)[j]
									let value = row[key]
									if (key === 'action') {
										return <Table.Cell key={key}><a onClick={()=>onAction(row, table.size)}>删除</a></Table.Cell>
									} else if (key==='state') {
										return <Table.Cell key={key}> <Progress size='tiny'percent={value} indicating /></Table.Cell>
									} 
									else {
										return <Table.Cell key={key}>{value}</Table.Cell>
									}
								})
							}
							</Table.Row>
						)
				} else {
					return (
						<Table.Row key={i}>
						{
							Object.keys(table.headers).map((_, j)=>{
								let key = Object.keys(table.headers)[j]
								let value = row[key]
								if (key === 'action') {
									return <Table.Cell key={key}><a onClick={()=>onAction(row, table.size)}>删除</a></Table.Cell>
								} else if (key==='state') {
									return <Table.Cell key={key}> <Progress size='tiny'percent={value} indicating /></Table.Cell>
								} 
								else {
									return <Table.Cell key={key}>{value}</Table.Cell>
								}
							})
						}
						</Table.Row>
						)
				}
				})
		}
		</Table.Body>
	)

	let footer = (
		<Table.Footer>
		  <Table.HeaderCell colSpan={Object.keys(table.headers).length}>
			  <Menu floated='right' pagination>
			    <Menu.Item as='a' onClick={()=>goToPage(table,'goFirst')} icon>
			    <Icon name='angle double left'/>
			    </Menu.Item>
			    <Menu.Item as='a' onClick={()=>goToPage(table,'goPrev')} icon>
			    <Icon name='angle left'/>
			    </Menu.Item>
			    <Menu.Item as='a' onClick={()=>goToPage(table,'goNext')} icon>
			    <Icon name='angle right'/>
			    </Menu.Item>
			   <Menu.Item as='a' onClick={()=>goToPage(table, 'goLast')} icon>
			    <Icon name='angle double right'/>
			    </Menu.Item>
			  </Menu>
			</Table.HeaderCell>
	  </Table.Footer>
	)

	return (
		<Table celled color='blue' size='small' selectable={table.selectable}>
	    	{header}
	    	{body}
	    	{footer}
		</Table>
	)
}

export default TableWithAction