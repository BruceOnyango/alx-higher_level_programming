#!/usr/bin/python3

"""Find states that contain N"""

from sys import argv
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(
            host="localhost", user=argv[1], passwd=argv[2], db=argv[3]
            )
    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id")
    for rows in cur.fetchall():
        if rows[1][0] == 'N':
            print(rows)
