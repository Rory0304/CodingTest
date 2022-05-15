def solution(id_list, report, k):
    
    report_number = {id: 0 for id in id_list}
    answer = {id: 0 for id in id_list}
    
    for case in set(report): 
        reporter, accused = case.split()
        report_number[accused] += 1
                    
    for case in set(report): 
        reporter, accused = case.split()
        if report_number[accused] >= k:
            answer[reporter] += 1
                    
    return list(answer.values())
