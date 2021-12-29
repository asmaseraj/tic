import React from 'react';
import {Button} from "@mui/material";

function Square(props){
		return (


			<Button  style={{width:'100px',height:'100px',background:"white"}} variant={'outlined'} className="square"  onClick={() => props.onClick()}>
				<p style={{fontSize:'50px'}}>{props.value}</p>
			</Button>
		)
}
export default Square;
