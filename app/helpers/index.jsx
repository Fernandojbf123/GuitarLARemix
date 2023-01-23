
export const generateID = () => {
    const random = Math.random().toString(36).substr(2);
    const date   = Date.now().toString(36)
    return random + date;
}

export const formatDate = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return newDate.toLocaleDateString('en-US', options)
}

export const formatMoney = (number) =>{
    return number.toLocaleString('en-US',{
        style: 'currency', 
        currency:'USD'
    })
  }

export function findIndexAndValues (array,condition,valueOfCondition) {
    //array =[2,5,9,11,12,22,56];
    //condition "==" "===" "<=" ">=" "<" ">" 
    //valueOfCondition=12
    //Example x "===" 12 // result: [4,12]
    //Example x "<=" 12 // result: [[0,1,2,3,4],[2,5,9,12]]
    let values =[];
    let index = [];

    for (i=0; i<array.length; i++){
        if (eval(`${array[i]}${condition}${valueOfCondition}`)) {
            index.push(i)
            values.push(array[i]);
        }
    }
    return [index,values]   
}