function StudentCard(props){
 return(
<div>
<p>{props.name}</p>
<p>{props.degree}</p>
<p>{props.level}</p>
</div>
);

}

function StudentList(){
return(
<div>
<StudentCard
   name = "Diniru Chamodya"
   degree = "Industrial Information Technology"
   level = {1}
/>

<StudentCard
   name = "Rahul Shehan"
   degree = "Industrial Information Technology"
   level = {2}
/>

<StudentCard
   name = "Linuka"
   degree = "Industrial Information Technology"
   level = {3}
/>

</div>

);


}


function App(){
return(

<main>

<h1>StudentList</h1>
<StudentList/>

</main>

);


}

export default App;