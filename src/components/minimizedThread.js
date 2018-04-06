import React from 'react';
import postData from '../data/threadItems';
import { Link } from 'react-router-dom';

import jsbinPIC from '../assets/images/jsbin.png';
import UpVote from './upvote'

const blockStyle={
    display:'block'
}
const inlineBlock={
    display:'inline-block'
}
const aTag={
    display:'inline-block',
    float: 'right'
}

const iframeStyle={
    width: '100%',
    height: '200px'
}

const jsbinStyle={
    width:'50px',
    display:'inline-block',
    cursor: 'pointer',
}


function Jsbin(index){
    
    return(
        <iframe style={iframeStyle} src={postData[index].jsbin} frameborder="0"></iframe>
    )

}

export default (props) => {

    let postDesc = props.data.description.slice(0,200)
    if(props.data.description.length > 200){
        postDesc+= '...'
    }
    const jsbin_URL = props.data.jsbin;

    const commentArray = [];
    const allComments = props.data.comments.map( (item, index) => {
        commentArray.push(
            <div key={index} >
                <span><i className="fas fa-user-circle mr-2"></i>{props.data.comments[index].name}</span>
                <p><small>{props.data.comments[index].comment}</small></p>
            </div>
        )
    } )
    const fewComments=[];
    for (var i =0; i<2; i++){
        fewComments.push(commentArray[i]);
    }
    const Comments = fewComments.map( (item, index) => {
        return (
            fewComments[index]
        )
    } )

    return (
        <div className="row">
            <div className="col-1 ">
                <UpVote />
            </div>
            <div className="col-m-12 col-sm-11 justify-content-start ">
                {/* <UpVote className="col-m-1 col-sm-1 justify-content-start mt-5"/> */}
                <h4>{props.data.title}</h4>
                <p><small className="text-muted" > {props.data.author} - post ID: {props.data.id} </small></p>
                <p>{postDesc}</p>
                
                <a style={aTag} target="_blank" href={props.data.jsbin}><img style={jsbinStyle} src={jsbinPIC} alt="jsbinPicture"/></a>

                <Link style={inlineBlock} to={`/thread/${props.data.id}`}> <p> View More </p> </Link>
                <small style={blockStyle} className="text-muted">Comments ({props.data.comments.length})</small>
                {Comments}
                <div className="dropdown-divider mb-5"></div>
            </div>

            
        </div>
    )
}

//     return (
//         <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
//             {threads}
            
//         </div>
//     )
// }