import math
a, b = map(int, input('').split())
count=0

for i in range(a,b+1):
    for k in range(2,i+1):
        if  i % k == 0:
            count +=1
            if count > 0:
                break
    if count == 0:
        print(i)
    
            
