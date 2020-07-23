function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = [];
    let total_weight = 0;
    let current_truck = 0;
    
    for(let i=0;i<bridge_length;i++){
        bridge[i] = 0;
    }
    
    current_truck = truck_weights.shift();
    bridge.unshift(current_truck);
    bridge.pop();
    total_weight+=current_truck;
    time++;
    
    while(total_weight > 0){
        
        total_weight-=bridge.pop();
        current_truck = truck_weights.shift();
        
        if(current_truck + total_weight <= weight){
            bridge.unshift(current_truck);
            total_weight += current_truck;
        }
        else{
            bridge.unshift(0);
            truck_weights.unshift(current_truck);
        }
        time++;
    }
    
    return time;
}
