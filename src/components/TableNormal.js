import React from 'react'
import {
	Table,
	Menu,
	Icon
} from 'semantic-ui-react'

const TableNormal = ({
	emptyMsg,
	table,
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
	 		{Object.keys(table.headers).map((key, i) => (
 				<Table.HeaderCell key={i}>{table.headers[key].title}</Table.HeaderCell>
		 ))}
	 	</Table.Row>
	 	</Table.Header>
	)


	let body = (
		<Table.Body>
		{
			table.content.map((row, i) => (
					<Table.Row key={i}>
					{
						Object.keys(table.headers).map((_, j)=>{
							let key = Object.keys(table.headers)[j]
							let value = row[key]
							return <Table.Cell key={key}>{value}</Table.Cell>
						})
					}
					</Table.Row>
				))
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
		<Table celled color='blue' size='small'>
	    	{header}
	    	{body}
	    	{footer}
		</Table>
	)
}

export default TableNormal