def solution(lottos, win_nums):
    rules = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6}
    correct_nums = 0
    zero_nums = 0
    
    for num in lottos:
        if(num in win_nums):
            correct_nums += 1
        else:
            if(num == 0):
                zero_nums += 1

    max_nums = correct_nums
    if(correct_nums < 6):
        max_nums += zero_nums
    
    answer = [rules[max_nums], rules[correct_nums]]
    return answer
