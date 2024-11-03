let url="http://universities.hipolabs.com/search?country=";

async function getColleges(country)
{
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(err)
    {
        console.log(err);
        return [];
    }
}



let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
  

 let country=document.querySelector("input").value;

let CollegeArray=await getColleges(country);

showElements(CollegeArray);
})

function showElements(Array)
{
    let list=document.querySelector("#list");
    list.innerText="";
for(col of Array)
{
    console.log(col.name);
    let li=document.createElement("li");
li.innerText=col.name;
list.appendChild(li);

}
}