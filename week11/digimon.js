console.log("hhiii");

let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
  const digiResponse = await fetch(
    `https://digimon-api.vercel.app/api/digimon`
  );

  const digiData = await digiResponse.json();

  //   console.log("digiData", digiData);
  return digiData;
}

async function updateSection() {
  const digimonPageRef = document.getElementById("digimonPage");

  const allDigimon = await getDigimon();

  totalPages = Math.ceil(allDigimon.length / 10);

  digimonPageRef.innerHTML += `<h3>page ${
    currentPage + 1
  } of ${totalPages}</h3> `;

  //   console.log("totalPages", totalPages);

  digimonPageRef.innerHTML += `

  <table>
  	<thead>
  		<tr>
  			<th> id</th>
			<th>name</th>
			<th>image</th>
			<th>level</th>
		</tr>
  	</thead>
	<tbody id="digimonList" ></tbody>
  </table>
  
 
  `;

  digimonPageRef.innerHTML += `

  <div>
  	<button onclick="goToPage(-1)">Previous Page</button>
  	<button onclick="goToPage(1)" >Next Page</button>
  </div>
  
 
  `;
}

function goToPage(pageDirection) {
  if (pageDirection > 0) {
    if (currentPage === totalPages - 1) {
      alert("there are no additonal pages");
    } else {
      currentPage++;
    }
  } else {
    if (currentPage === 0) {
      alert("this is the first page");
    } else {
      currentPage--;
    }
  }

  updatePage();
}

async function updatePage() {
  const h3Ref = document.querySelector("h3");
  const digimonListRef = document.querySelector("#digimonList");

  h3Ref.innerHTML = `page ${currentPage + 1} of ${totalPages}`;
}

// getDigimon();

updateSection();


function displayDigimon(){

	const variableName = digimonListRef;


	if(){

	}else{

	}


	variableName.innerHTML += `

	<tr>
		<td>id</td>
		<td>name</td>
		<td>image</td>
		<td>level</td>
	</tr>

	`;

}