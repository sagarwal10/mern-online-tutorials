import React, { useState} from "react";
import { Table, NacLink } from "react-bootstrap";
import ModalOverview from "ModalOverview"; 

const MovieTable = props => {
 const [modalShow, setModalShow] = useState(false);
 let keys = ["popularity", "title", "release_date", "overview"];
 const { movies } = props;

 return (
   <div style={{ width: "90%", margin: "0 auto"}}>
     <h2 style={{textAlign: "center", margin: "20px auto auto"}}>
       <Table variant="default"
         style={{width: "100%", margin: "20px auto"}}
	 striped bordered responsive>
	<thead>
	  <tr>
	   {keys.map(heading => {
	      return <td key={heading}>{heading}</td>;
	   })}
	  </tr>
        </thead>
	<tbody>
	  {movies.map(movie => {
	    return (
	      <tr key={movie.id}>
	        <td>{movie.popularity}</td>
		<td>{movie.title}</td>
		<td>{movie.release_date}</td>
		<td>
		  <NavLink value={movie.id} onClick={() => {
		    setModalShow(movie.id)}>
		    Details
		  </NavLink>
		  <ModalOverview movie={movie}
				 show={modalShow === movie.id}
				 onHide={()=>setModalShow(false)} />
		/td>
	      </tr>
	    );
	  })}
	</tbody>
      </Table>
    </div>);
};

export default MovieTable; 


 
