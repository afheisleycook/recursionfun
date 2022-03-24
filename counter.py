"""
austin heisley cook 
programm recursive addition counter for pytho numbers
"""

def RecurisiveAdd(start,n):
    i = 0
    if start <= n:
        start = start + 1 
        i = RecurisiveAdd(start,n) + 1
        
    
        
    return i
def main():
    print(RecurisiveAdd(1,20))

main()