#!/usr/bin/python3

"""Display all values of argument"""

from sys import argv
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(
            host="localhost", user=argv[1], passwd=argv[2], db=argv[3]
            )
    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name = '{}'ORDER \
            BY id ASC".format(argv[4]))
    for states in cur.fetchall():
        print(states)
