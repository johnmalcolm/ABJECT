# Matterns may use named constants, but these must be dotted names to prevent them from being interpreted as capture variables
from enum import Enum

class Color(Enum):
	RED = 'red'
	GREEN = 'green'
	BLUE = 'blue'

color = Color(input("Enter your choice of 'red', 'blue' or 'green': "))

match color:
	case Color.RED:
		print("I see red!")
	case Color.GREEN:
		print("Grass is green!")
	case Color.BLUE:
		print("You got me feeling the blues")

