var productName=document.getElementById("productName")
var productPrice=document.getElementById("productPrice")
var productCat=document.getElementById("productCat")
var productDesc=document.getElementById("productDesc")
var productList;
var mainbtn=document.getElementById("mainbtn")

if(localStorage.getItem("list") !=null){
    productList=JSON.parse(localStorage.getItem("list"))
    displayProduct(productList)
}else{
    productList=[]
}







function addproduct(){
    var product={
        Name:productName.value,
        Price:productPrice.value,
        category:productCat.value,
        description:productDesc.value,
    }

    productList.push(product)
   localStorage.setItem("list",JSON.stringify(productList))
    displayProduct(productList)
    clearForm()
}

function displayProduct(list){
    cartona=""
    for(var i=0; i<list.length;i++){
cartona +=`
<tr>
<td>${i+1}</td>
<td>${list[i].Name}</td>
<td>${list[i].Price}</td>
<td>${list[i].category}</td>
<td>${list[i].description}</td>
<td>
    <button class="btn btn-warning" onclick="getProductData(${i})">Update</button>
</td>
<td>
    <button class="btn btn-danger" onclick="DeleteProduct(${i})">Delete</button>
</td>
</tr>
`
    }
    document.getElementById("tabledata").innerHTML=cartona;
}
function clearForm(){
    productName.value=""
    productPrice.value=""
    productCat.value=""
    productDesc.value=""
}

function DeleteProduct(index){
    productList.splice(index,1)
    displayProduct(productList)
    localStorage.setItem("list",JSON.stringify(productList))
}
function getProductData(index){
productName.value=productList[index].Name
productPrice.value=productList[index].Price
productCat.value=productList[index].category
productDesc.value=productList[index].description
mainbtn.classList.add("d-none");
document.getElementById("updatebtn").classList.replace("d-none","d-block")
}



function search(){
searchKey=[]
for(var i=0;i<productList.length;i++){
if(productList[i].Name.toLowerCase().incl){

}
}
}

