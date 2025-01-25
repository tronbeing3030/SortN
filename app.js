let form = document.querySelector("form");
let graph = document.querySelector("section");
let select = document.querySelector("select");

const randarray = () => {
    let array = [];
    for(let i = 0; i < 10; i++){
        array[i] = Math.floor(Math.random() * 10);
    }
    return array;
}

const blockCreate = (array) => {
    numberOfBlocks = array.length;
    blockArray = array;
    graph.replaceChildren();
    for(let i = 0; i < numberOfBlocks; i++){
        block = document.createElement('div');
        block.style.height = ((blockArray[i] * 15) + 1) + 'px';
        graph.appendChild(block);
    }
    return array;
}

let ScrambledArray = blockCreate(randarray());
let choice = 1;
let elements = graph.children;

select.addEventListener('change', function () {
    choice = parseInt(this.value);
    ScrambledArray = blockCreate(randarray());
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    switch(choice){
        case 1: simpleSort(ScrambledArray); break;
        case 2: bubbleSort(ScrambledArray); break;
        case 3: insertionSort(ScrambledArray); break;
        case 4: selectionSort(ScrambledArray);; break;
    }
})

const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

const smallest = (array, start, end) => {
    let i = j = start;
    for(i = start; i < end; i++){
        if(array[i] < array[j]){ j = i; }
    }
    return j;
}

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const simpleSort = async(array) =>{
    len = array.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if(array[i] > array[j]){
                swap(array, i, j);
                blockCreate(array);                            
                elements.item(i).style.backgroundColor = "#fb8500";
                elements.item(j).style.backgroundColor = "#fb8500";
                await sleep(200);
            }
        }
    }    
    blockCreate(array);
}

const bubbleSort = async(array) =>{
    len = array.length;
    for(let i = 0; i < len; i++){
        for(let j = 1; j < len; j++){
            if(array[j] < array[j-1]){
                swap(array, j, j-1);
                blockCreate(array);                            
                elements.item(i).style.backgroundColor = "#fb8500";
                elements.item(j).style.backgroundColor = "#fb8500";
                await sleep(200);
            }
        }
    }
    blockCreate(array);
}

const insertionSort = async(array) =>{
    len = array.length;
    for(let i = 0; i < len; i++){
        let current = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > current){
            array[j + 1] = array[j];
            blockCreate(array);
            elements.item(j).style.backgroundColor = "#fb8500";
            elements.item(i).style.backgroundColor = "#fb8500"; 
            j -= 1;
            await sleep(200);
        } 
        array[j + 1] = current;                          
    }
    blockCreate(array);
}

const selectionSort = async(array) =>{
    len = array.length;
    i = 0;
    while(i < len){
        j = smallest(array, i, len);
        swap(array, i, j);
        i++;
        blockCreate(array);                            
        elements.item(i).style.backgroundColor = "#fb8500";
        elements.item(j).style.backgroundColor = "#fb8500";
        await sleep(200);
    }
    blockCreate(array);
}