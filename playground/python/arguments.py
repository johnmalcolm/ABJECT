def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
	print("-- This parrot wouldn't", action, end=' ')
	print("if you put", voltage, "volts through it.")
	print("-- Lovely plumage, the", type)
	print("-- It's", state, "!")

parrot(1000)
parrot(voltage=1000)
parrot(voltage=1000000, action='VOOOOM')
parrot(action='VOOOOM', voltage=1000000)
parrot('a million', 'bereft of life', 'jump')
parrot('a thousand', state='pushing up the daisies')

THE THINGS BELOW WILL NOT WORK 
# parrot() # required argument missing 
# parrot(voltage=5.0, 'dead') # non-keyword argument after a keyword argument 
# parrot(110, voltage=220) # duplicate value for the same argument 
# parrot(actor='John Cleese') # unknown keyword argument
