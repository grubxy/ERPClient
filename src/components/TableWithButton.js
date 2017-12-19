import React from 'react'
import {
	Table,
	Menu,
	Icon,
	Button
} from 'semantic-ui-react'

const TableWithButton = ({
	emptyMsg,
	match,
	table,
	search,
	loading,
	onOpen,
	onModify,
	onInBound,
	onComplete
}) => {

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
			table.constructs.map((row, i) => {
				console.log('row:' + JSON.stringify(row))
				console.log('tcode:' + row.technics.tcode)
				return (row.technics.tcode === match &&
					<Table.Row key={i}>
					{
						Object.keys(table.headers).map((_, j)=>{
							let key = Object.keys(table.headers)[j]
							let value = row[key]
							if (key === 'button_group') {
								return (
									<Table.Cell key={key}>
										<Button size='tiny' color='gray'>修改</Button>
										<Button size='tiny' color='green'>入库</Button>
										<Button size='tiny' color='black'>完工</Button>
									</Table.Cell>
								)
							} else {
								return <Table.Cell key={key}>{value}</Table.Cell>
							}
						})
					}
					</Table.Row>
					)
				})
		}
		</Table.Body>
	)

	let footer = (
		<Table.Footer>
		  <Table.HeaderCell colSpan={Object.keys(table.headers).length}>
		      <Button floated='right' icon labelPosition='left' primary size='small' onClick={()=>onOpen()}>
		        <Icon name='configure' /> 新增施工单
		      </Button>
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

export default TableWithButton