# Program to add multiple command line arguments

import sys

nums = [int(n) for n in sys.argv[1:]]
print(sum(nums))
