import React, { useState } from "react";

function Option({addPost}) {

    
    const [ShowForm , SetShowForm]= useState(false);
    const [newPost , SetNewPost]=useState({title: "" , explain : "" , image : ""})
    
    const handlingPost= () =>{
        addPost(newPost);
        SetNewPost({title:"",explain:"",image:""});
        SetShowForm(false);
    }

    return(
        <div>
            <button onClick={() => SetShowForm(!ShowForm)}>New Poste</button>
            {ShowForm && (
            <div>
                <input 
                type="text" 
                placeholder="title"
                value={newPost.title}
                onChange={(e) => SetNewPost({...newPost , title : e.target.value}) } />
                
                <input 
                type="text" 
                placeholder="to explain"
                value={newPost.explain}
                onChange={(e) => SetNewPost({...newPost , explain : e.target.value}) } />
                
                <input 
                type="text" 
                placeholder="add src image"
                value={newPost.image}
                onChange={(e) => SetNewPost({...newPost , image : e.target.value}) } />

                <button onClick={handlingPost}>Add New Post</button>
            </div>
        )}
        </div>
    );
}

export default Option;

