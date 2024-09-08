import React from "react"
import Comment from "./Comment"

const comments=[
    {name:"김",comment:"하이 1"},
    {name:"홍",comment:"하이 2"},
    {name:"박",comment:"하이 3"},
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.commewnt}></Comment>
                )
            })}
        </div>
    )
}
export default  CommentList