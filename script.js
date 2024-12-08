let Questions=[];
queTag=document.getElementById("ques");

async function fetchQuestion(){
    try{ 
        const response=await fetch("https://opentdb.com/api.php?amount=10");
        if(!response.ok){
            throw new Error("Could not fetch question!");
        }
        const data= await response.json();
            Questions=data.results;

    }
    catch(error){
        console.error(error);
        ques.innerHTML='<h5 style=background-color:"red"">${err}</h5>';
    }
}
let currentQuestion = 0;
let score = 0;

if(Questions.length === 0){
   ques.innerHTML='<h5>Please Wait ! <br> Loading Question...</h5>';

}

function loadQues(){
    const opt = document.getElementById('opt');

    let currQuesText=Questions[currentQuestion].question;
    console.log(currQuesText);
    ques.innerText=currQuesText;

    opt.innerHTML=" ";
    const correctAnswer=Questions[currentQuestion].correct_answer;
    const incorrectAnswer=Questions[currentQuestion].incorrectAnswer;

    const options=[correctAnswer,...incorrectAnswer];

    options.sort((O1,O2)=>Math.random()<0.5);

    options.forEach((option,idx,)=>{
        const OptDiv=document.createElement('div');
        const optionTag=document.createElement('input');
        const labelTag=document.createElement('label');

        optionTag.type="radio";
        option.name='option${idx}';
        optionTag.name="answer";
        optionTag.value=option;

        labelTag.textContent=option;
        labelTag.htmlFor='option${idx}'

        OptDiv.appendChild(optionTag);
        OptDiv.appendChild(labelTag);
        opt.appendChild(OptDiv);


    });
}
setTimeout(()=>{
    loadQues();
})









