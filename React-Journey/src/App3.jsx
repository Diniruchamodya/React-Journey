function StudentCard(props){
 return(
<div>
<p>{props.name}</p>
<p>{props.degree}</p>
<p>{props.level}</p>
</div>
);


}




function App(){


return(

<main>
<StudentCard
   name = "Diniru Chamodya"
   degree = "Industrail Information Technology"
   level = {1}
/>

<StudentCard
   name = "Rahul shehan"
   degree = "Industrail Information Technology"
   level = {2}
/>

<StudentCard
   name = "Linuka"
   degree = "Industrail Information Technology"
   level = {3}
/>

</main>

);



}


export default App;