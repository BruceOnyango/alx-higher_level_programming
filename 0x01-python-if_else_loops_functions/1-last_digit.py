#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

greater = "and is greater than 5"
less6 = "and is less than 6 and not 0"

if number < 0:
    lastInt = number % -10
else:
    lastInt = number % 10

if lastInt > 5:
    print("Last digit of {} is {} {}".format(number, lastInt, greater))
elif lastInt == 0:
    print("Last digit of {} is {} and is 0".format(number, lastInt))
else:
    print("Last digit of {} is {} {}".format(number, lastInt, less6))
