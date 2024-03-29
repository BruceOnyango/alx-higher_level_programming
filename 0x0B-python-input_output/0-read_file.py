#!/usr/bin/python3
"""File-reading function"""


def read_file(filename=""):
    """Prints the contents of a UTF8 text file"""
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
