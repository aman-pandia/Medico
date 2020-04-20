/* <div class="med" class="card">
<div class="head">
  <h2 class="name">Medicine Name</h2>
</div>
<div class="comp">
  <h3>Composition</h3>
  <p class="composition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolores.</p>
</div>
<div class="dosage">
  <h3>Dosage</h3>
  <p>Time : <span class="time">Breakfast, Lunch</span></p>
  <p>Before/After food : <span class="bef_aft">After food</span></p>
</div>
<div class="additional">
  <p>Additional Notes : <span class="addi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur expedita saepe! Atque minima illo eos delectus ea molestias nesciunt, ullam enim sapiente odio quo necessitatibus veritatis. Iusto, quam consectetur?</span></p>
</div>
</div> */

/*
1.x Take user input 
2.x Filter out required elements from the array 
3. Prepare the markup for each filtered element
4. Add it to the document

*/

let medList = [
    {
        name: 'Medicine1',
        comp: 'Lorem ipsum dolor sit amet consectetur adipisi',
        time: 'Breakfast, Lunch',
        BAF: 'After food',
        notes: 'Lorem ipsum dolor sit amet consectetur ',
        sym: ['headache','fever','stomachache']
    },
    {
        name: 'Medicine2',
        comp: 'Lorem ipsum dolor sit amet consectetur adipisi',
        time: 'Breakfast, Lunch',
        BAF: 'After food',
        notes: 'Lorem ipsum dolor sit amet consectetur ',
        sym: ['headache','fever','stomachahe']
    },
    {
        name: 'Medicine3',
        comp: 'Lorem ipsum dolor sit amet consectetur adipisi',
        time: 'Breakfast, Lunch',
        BAF: 'After food',
        notes: 'Lorem ipsum dolor sit amet consectetur ',
        sym: ['fever','stomachahe']
    }

]

let par = $('#myDIV');
let submitBtn = $('.sub');
let sym = $('#sym');

submitBtn.on('click',() => {
  let symptoms = sym.val();
  par.html('');

  let resp = medList.filter(med => {
      return med.sym.includes(symptoms);
  });

  if(resp != []) {
      resp.forEach(med => {
      let htmlContent = ` <div class="med" class="card">
      <div class="head">
        <h2 class="name">${med.name}</h2>
      </div>
      <div class="comp">
        <h3>Composition</h3>
        <p class="composition">${med.comp}</p>
      </div>
      <div class="dosage">
        <h3>Dosage</h3>
        <p>Time : <span class="time">${med.time}</span></p>
        <p>Before/After food : <span class="bef_aft">${med.BAF}</span></p>
      </div>
      <div class="additional">
        <p>Additional Notes : <span class="addi">${med.notes}</span></p>
      </div>
      </div>`

      par.append(htmlContent);
     });
  }

  console.log(resp);
});


























// medList.forEach(med => {
//     let htmlContent = ` <div class="med" class="card">
//     <div class="head">
//       <h2 class="name">${med.name}</h2>
//     </div>
//     <div class="comp">
//       <h3>Composition</h3>
//       <p class="composition">${med.comp}</p>
//     </div>
//     <div class="dosage">
//       <h3>Dosage</h3>
//       <p>Time : <span class="time">${med.time}</span></p>
//       <p>Before/After food : <span class="bef_aft">${med.BAF}</span></p>
//     </div>
//     <div class="additional">
//       <p>Additional Notes : <span class="addi">${med.notes}</span></p>
//     </div>
//     </div>`

//     par.append(htmlContent);
// });