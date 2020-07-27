function solution(record) {
   
    let answer = [];
    let nameSet = {};
    let order = "";
    let name = "";
    
    record = record.map(str => str.split(" "));
    
    for(let i=0;i<record.length;i++){
        if(record[i].length === 3){
            nameSet[record[i][1]] = record[i][2];
        }
    }
    
    for(let i=0;i<record.length;i++){
        order = record[i][0];
        name = nameSet[record[i][1]];
        
        switch(order){
            case "Enter":
                answer.push(name + "님이 들어왔습니다.");
                break;
                
            case "Leave":
                answer.push(name + "님이 나갔습니다.");
                break;
        }
    }

    return answer;
}
