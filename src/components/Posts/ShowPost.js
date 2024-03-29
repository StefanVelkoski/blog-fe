import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class ShowPost extends React.Component{


    constructor(props){
        super(props);

        this.state = {

            title: this.props.data.title,
            content: this.props.data.content,
            CategoryId: this.props.data.CategoryId,
            categoryName: this.props.data.Category.name
        }


    }

    render(){



        return (

            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
                <div className="card text-center"  style={{ margin: "3%", minWidth:"500px", minHeight:"200px", maxWidth: "500px"}}>
                    <div className="card-header">
                        <h4>{ this.state.title } </h4>
                    </div>
                    <div className="card-body">

                    <Link to={{ pathname: "/categories/show-category-posts",  params: { id: this.state.CategoryId }} }> <h5 className="card-title"> </h5> {this.state.categoryName} </Link>

                        {/* <Link to="/categories/show-category-post"> <h5 className="card-title">{this.state.categoryName}</h5></Link> */}

                        <p  style={{ margin: "5%" }} className="card-text">{this.state.content} </p>

                    </div>
                </div>
            </div>

        )

    }

}


export default ShowPost;